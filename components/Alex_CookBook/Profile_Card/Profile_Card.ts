import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

export interface ProfileCardProps extends ComponentProps {
  name?: string;
  handle?: string;
  avatarUrl?: string;
  bio?: string;
  followerCount?: string;

  // CTA Variations
  ctaText?: string;
  ctaVariant?: "primary" | "secondary";

  // Secondary Actions (Icons)
  showSecondaryAction?: boolean;
  secondaryActionIcon?: SceneNode;

  // Layout Variations
  layoutVariant?: "standard" | "avatarRight" | "underAvatar" | "horizontal" | "article";
  bannerUrl?: string;
}

export class Profile_Card extends BaseComponent {
  async create(props: ProfileCardProps): Promise<SceneNode> {
    const layoutVariant = props.layoutVariant || "standard";
    const isHorizontal = layoutVariant === "horizontal";
    const isArticle = layoutVariant === "article";

    // Reusable Sub-Nodes
    const avatarNode = createFrame("Avatar", {
      cornerRadius: 50,
      fills: props.avatarUrl
        ? [{ type: "IMAGE", assetRef: props.avatarUrl, scaleMode: "CROP" }]
        : [{ type: "SOLID", color: { r: 0.92, g: 0.92, b: 0.95 } }],
      strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
      strokeWeight: isArticle ? 4 : 0,
      layoutProps: { width: isHorizontal ? 80 : 56, height: isHorizontal ? 80 : 56 }
    }, []);

    const userInfoNode = createFrame("User Info", {
      layoutMode: "VERTICAL",
      itemSpacing: 2,
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "AUTO",
      layoutGrow: isHorizontal || layoutVariant === "avatarRight" ? 1 : 0
    }, [
      createText("Name", props.name || "John Doe", 18, "Bold", { r: 0.1, g: 0.1, b: 0.15 }, {
        layoutAlign: "STRETCH", textAutoResize: "HEIGHT"
      }),
      createText("Handle", props.handle || "@johndoe", 14, "Regular", { r: 0.4, g: 0.4, b: 0.5 }, {
        layoutAlign: "STRETCH", textAutoResize: "HEIGHT"
      })
    ]);

    const bioNode = createFrame("Bio Container", {
      fills: [],
      layoutMode: "VERTICAL",
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "AUTO",
      layoutAlign: "STRETCH",
      clipsContent: false,
      paddingLeft: isArticle ? 24 : 0,
      paddingRight: isArticle ? 24 : 0
    }, [
      createText("Bio", props.bio || "Designing the future of UI with AI-powered tools.", 15, "Regular", { r: 0.2, g: 0.2, b: 0.25 }, {
        layoutAlign: "STRETCH",
        lineHeight: { unit: "PERCENT", value: 150 },
        textAutoResize: "HEIGHT"
      })
    ]);

    const footerNode = createFrame("Footer", {
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "AUTO",
      primaryAxisAlignItems: "SPACE_BETWEEN",
      counterAxisAlignItems: "CENTER",
      layoutProps: { layoutAlign: "STRETCH" },
      clipsContent: false,
      paddingLeft: isArticle ? 24 : 0,
      paddingRight: isArticle ? 24 : 0,
      paddingBottom: isArticle ? 24 : 0
    }, [
      createText("Followers", `${props.followerCount || "1,234"} followers`, 13, "Semi Bold", { r: 0.1, g: 0.1, b: 0.1 }, {
        font: { family: "Inter", style: "Semi Bold" },
        textAutoResize: "WIDTH_AND_HEIGHT"
      }),
      createFrame("Button", {
        layoutMode: "HORIZONTAL",
        paddingTop: 10, paddingRight: 20, paddingBottom: 10, paddingLeft: 20,
        fills: props.ctaVariant === "secondary"
          ? [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.92 } }]
          : [{ type: "SOLID", color: { r: 0, g: 0.4, b: 1 } }],
        cornerRadius: 10,
        primaryAxisSizingMode: "AUTO", counterAxisSizingMode: "AUTO"
      }, [
        createText("Follow", props.ctaText || "Follow", 14, "Bold",
          props.ctaVariant === "secondary" ? { r: 0.1, g: 0.1, b: 0.1 } : { r: 1, g: 1, b: 1 },
          { textAutoResize: "WIDTH_AND_HEIGHT" }
        )
      ])
    ]);

    let childrenNodes: NodeDefinition[] = [];

    if (isHorizontal) {
      // Horizontal split: Avatar Left, Everything Right
      childrenNodes = [
        avatarNode,
        createFrame("Right Content", {
          layoutMode: "VERTICAL",
          itemSpacing: 16,
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO",
          layoutGrow: 1
        }, [
          createFrame("Header Row", {
            layoutMode: "HORIZONTAL",
            primaryAxisSizingMode: "FIXED",
            counterAxisSizingMode: "AUTO",
            primaryAxisAlignItems: "SPACE_BETWEEN",
            layoutProps: { layoutAlign: "STRETCH" }
          }, [
            userInfoNode,
            ...(props.showSecondaryAction && props.secondaryActionIcon ? [createFrame("Secondary Action Container", {
              layoutMode: "HORIZONTAL",
              primaryAxisSizingMode: "AUTO",
              counterAxisSizingMode: "AUTO",
              primaryAxisAlignItems: "CENTER",
              counterAxisAlignItems: "CENTER",
              fills: []
            }, [])] : [])
          ]),
          bioNode,
          footerNode
        ])
      ];
    } else {
      // Vertical stacked layouts (standard, avatarRight, underAvatar, article)

      // 1. Banner for Article
      if (isArticle) {
        childrenNodes.push(createFrame("Banner Image", {
          layoutMode: "HORIZONTAL",
          layoutProps: { width: undefined, height: 140 },
          layoutAlign: "STRETCH",
          fills: props.bannerUrl
            ? [{ type: "IMAGE", assetRef: props.bannerUrl, scaleMode: "CROP" }]
            : [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }] // Grey fallback
        }, []));
      }

      // 2. Avatar/Header Row
      const headerRowChildren: NodeDefinition[] = [];
      if (layoutVariant === "standard" || layoutVariant === "article") {
        headerRowChildren.push(avatarNode);
        if (!userInfoNode.props) userInfoNode.props = {};
        userInfoNode.props.layoutGrow = 1; // standard info fills remaining space
        headerRowChildren.push(userInfoNode);
      } else if (layoutVariant === "avatarRight") {
        if (!userInfoNode.props) userInfoNode.props = {};
        userInfoNode.props.layoutGrow = 1;
        headerRowChildren.push(userInfoNode);
        headerRowChildren.push(avatarNode);
      } else if (layoutVariant === "underAvatar") {
        // Only Avatar in the header
        headerRowChildren.push(avatarNode);
      }

      // Append secondary action placeholder if requested
      if (props.showSecondaryAction && props.secondaryActionIcon) {
        headerRowChildren.push(createFrame("Secondary Action Container", {
          layoutMode: "HORIZONTAL",
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO",
          primaryAxisAlignItems: "CENTER",
          counterAxisAlignItems: "CENTER",
          fills: []
        }, []));
      }

      // Apply inner padding to header row if it's an article, since root padding is zero
      const headerPadding = isArticle ? { paddingTop: 16, paddingLeft: 24, paddingRight: 24 } : {};

      childrenNodes.push(createFrame("Header", {
        layoutMode: "HORIZONTAL",
        itemSpacing: 16,
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "AUTO",
        counterAxisAlignItems: "CENTER",
        layoutAlign: "STRETCH",
        ...headerPadding
      }, headerRowChildren));

      // 3. User Info (if underAvatar, it goes below header row)
      if (layoutVariant === "underAvatar") {
        const userInfoBlock = createFrame("User Info Block", {
          fills: [],
          layoutMode: "VERTICAL",
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO",
          layoutAlign: "STRETCH",
          paddingLeft: isArticle ? 24 : 0,
          paddingRight: isArticle ? 24 : 0
        }, [userInfoNode]);
        childrenNodes.push(userInfoBlock);
      }

      // 4. Bio
      childrenNodes.push(bioNode);

      // 5. Footer
      childrenNodes.push(footerNode);
    }

    const structure: NodeDefinition = createFrame("Profile Card", {
      layoutMode: isHorizontal ? "HORIZONTAL" : "VERTICAL",
      itemSpacing: 16,
      paddingTop: isArticle ? 0 : 24,
      paddingRight: isHorizontal ? 24 : (isArticle ? 0 : 24),
      paddingBottom: isArticle ? 0 : 24,
      paddingLeft: isHorizontal ? 24 : (isArticle ? 0 : 24),
      primaryAxisSizingMode: isHorizontal ? "FIXED" : "AUTO",
      counterAxisSizingMode: isHorizontal ? "AUTO" : "FIXED",
      clipsContent: false,
      fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
      cornerRadius: 16,
      effects: [{
        type: "DROP_SHADOW",
        color: { r: 0, g: 0, b: 0, a: 0.08 },
        offset: { x: 0, y: 4 },
        radius: 20,
        showShadowBehindNode: false
      }],
      layoutProps: { width: isHorizontal ? 500 : 400, position: "relative" }
    }, childrenNodes);

    const root = await this.renderDefinition(structure) as FrameNode;

    if (props.showSecondaryAction && props.secondaryActionIcon) {
      const actionContainer = root.findOne(n => n.name === "Secondary Action Container" && n.type === "FRAME") as FrameNode | null;
      if (actionContainer) {
        actionContainer.appendChild(props.secondaryActionIcon);
      }
    }

    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}
