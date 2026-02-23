import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

export interface ProfileCardProps extends ComponentProps {
  name?: string;
  handle?: string;
  avatarUrl?: string;
  bio?: string;
  followerCount?: string;

  // CTA Variations
  ctaText?: string; // Primary button text (e.g., "Follow", "Add")
  ctaVariant?: "primary" | "secondary"; // Colors

  // Secondary Actions (Icons)
  showSecondaryAction?: boolean;
  secondaryActionIcon?: any;
  secondaryActionPosition?: "topLeft" | "topRight"; // e.g. a Delete icon vs a Settings icon
}

export class Profile_Card extends BaseComponent {
  async create(props: ProfileCardProps): Promise<SceneNode> {
    const structure: NodeDefinition = createFrame("Profile Card", {
      layoutMode: "VERTICAL",
      itemSpacing: 16,
      paddingTop: 24,
      paddingRight: 24,
      paddingBottom: 24,
      paddingLeft: 24,
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "FIXED",
      fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
      cornerRadius: 20,
      effects: [{
        type: "DROP_SHADOW",
        color: { r: 0, g: 0, b: 0, a: 0.08 },
        offset: { x: 0, y: 4 },
        radius: 20,
        showShadowBehindNode: false
      }],
      layoutProps: { width: 400, position: "relative" }
    }, [
      // Optional Top-Right / Top-Left absolute icon
      ...(props.showSecondaryAction && props.secondaryActionIcon ? [
        createFrame("Secondary Action", {
          // Absolute positioning simulation by relying on Figma layout behavior 
          // (or actually adding absolute position if supported, but here sticking to standard structure)
          // Since we are in a vertical auto-layout, appending an absolute node would require 
          // `position: "ABSOLUTE"` in our ComponentHelpers structure if supported.
          // For now, let's inject it into the header instead for cleaner layout without absolute hacking.
        }, [])
      ] : []),
      // Header
      createFrame("Header", {
        layoutMode: "HORIZONTAL",
        itemSpacing: 16,
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "FIXED",
        counterAxisAlignItems: "CENTER",
        layoutAlign: "STRETCH",
        layoutProps: { height: 56 }
      }, [
        createFrame("Avatar", {
          cornerRadius: 50,
          fills: props.avatarUrl
            ? [{ type: "IMAGE", assetRef: props.avatarUrl, scaleMode: "FILL" }]
            : [{ type: "SOLID", color: { r: 0.96, g: 0.96, b: 0.98 } }],
          strokes: [{ type: "SOLID", color: { r: 0, g: 0, b: 0, a: 0.05 } }],
          layoutProps: { width: 56, height: 56 }
        }),
        createFrame("User Info", {
          layoutMode: "VERTICAL",
          itemSpacing: 0,
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO",
          layoutGrow: 1
        }, [
          createText("John Doe", props.name || "John Doe", 18, "Bold", { r: 0.1, g: 0.1, b: 0.15 }, {
            layoutAlign: "STRETCH",
            textAutoResize: "HEIGHT"
          }),
          createText("@johndoe", props.handle || "@johndoe", 14, "Regular", { r: 0.4, g: 0.4, b: 0.5 }, {
            layoutAlign: "STRETCH",
            textAutoResize: "HEIGHT"
          })
        ]),
        ...(props.showSecondaryAction && props.secondaryActionIcon ? [
          props.secondaryActionIcon
        ] : [])
      ]),
      // Bio
      createText("Bio", props.bio || "Designing the future of UI with AI-powered tools.", 15, "Regular", { r: 0.2, g: 0.2, b: 0.25 }, {
        layoutAlign: "STRETCH",
        lineHeight: { unit: "PERCENT", value: 150 },
        textAutoResize: "HEIGHT"
      }),
      // Footer
      createFrame("Footer", {
        layoutMode: "HORIZONTAL",
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "AUTO",
        primaryAxisAlignItems: "SPACE_BETWEEN",
        counterAxisAlignItems: "CENTER",
        layoutProps: { layoutAlign: "STRETCH" }
      }, [
        createText("Followers", `${props.followerCount || "1,234"} followers`, 13, "Semi Bold", { r: 0.1, g: 0.1, b: 0.1 }, {
          font: { family: "Inter", style: "Semi Bold" },
          textAutoResize: "WIDTH_AND_HEIGHT"
        }),
        createFrame("Button", {
          layoutMode: "HORIZONTAL",
          paddingTop: 10,
          paddingRight: 20,
          paddingBottom: 10,
          paddingLeft: 20,
          fills: props.ctaVariant === "secondary"
            ? [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.92 } }]
            : [{ type: "SOLID", color: { r: 0, g: 0.4, b: 1 } }],
          cornerRadius: 10,
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO"
        }, [
          createText("Follow", props.ctaText || "Follow", 14, "Bold",
            props.ctaVariant === "secondary" ? { r: 0.1, g: 0.1, b: 0.1 } : { r: 1, g: 1, b: 1 },
            {
              textAutoResize: "WIDTH_AND_HEIGHT"
            }
          )
        ])
      ])
    ]);

    const root = await this.renderDefinition(structure);

    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}
