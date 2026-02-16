import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

export interface SocialProfileCardProps extends ComponentProps {
    name?: string;
    handle?: string;
    avatarUrl?: string;
    bio?: string;
    followerCount?: string;
}

export class social_profile_card extends BaseComponent {
    async create(props: SocialProfileCardProps): Promise<SceneNode> {
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
            cornerRadius: 14,
            effects: [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.12 },
                offset: { x: 0, y: 2 },
                radius: 6,
                showShadowBehindNode: true
            }],
            layoutProps: { width: 400 }
        }, [
            // Header
            createFrame("Header", {
                layoutMode: "HORIZONTAL",
                itemSpacing: 16,
                counterAxisAlignItems: "CENTER",
                layoutAlign: "STRETCH",
                primaryAxisSizingMode: "FIXED", // Change from AUTO to FIXED to support Fill container width
                counterAxisSizingMode: "AUTO"
            }, [
                createFrame("Avatar", {
                    cornerRadius: 50,
                    fills: props.avatarUrl
                        ? [{ type: "IMAGE", assetRef: props.avatarUrl, scaleMode: "FILL" }]
                        : [{ type: "SOLID", color: { r: 0.945, g: 0.953, b: 0.973 } }],
                    strokes: [{ type: "SOLID", color: { r: 0.816, g: 0.847, b: 0.859 } }],
                    layoutProps: { width: 56, height: 56 }
                }),
                createFrame("User Info", {
                    layoutMode: "VERTICAL",
                    itemSpacing: 0,
                    layoutGrow: 1,
                    primaryAxisSizingMode: "AUTO"
                }, [
                    createText("Name", props.name || "User Name", 18, "SemiBold", { r: 0.102, g: 0.192, b: 0.235 }, {
                        font: { family: "Open Sans", style: "SemiBold" },
                        layoutAlign: "STRETCH"
                    }),
                    createText("Handle", props.handle || "@handle", 14, "Regular", { r: 0.349, g: 0.439, b: 0.482 }, {
                        font: { family: "Open Sans", style: "Regular" },
                        layoutAlign: "STRETCH"
                    })
                ])
            ]),
            // Bio
            createText("Bio", props.bio || "No bio provided.", 15, "Regular", { r: 0.102, g: 0.192, b: 0.235 }, {
                font: { family: "Open Sans", style: "Regular" },
                lineHeight: { value: 150, unit: "PERCENT" },
                layoutAlign: "STRETCH",
                textAutoResize: "HEIGHT"
            }),
            // Footer
            createFrame("Footer", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "SPACE_BETWEEN",
                counterAxisAlignItems: "CENTER",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "AUTO",
                layoutProps: { layoutAlign: "STRETCH" }
            }, [
                createText("Followers", `${props.followerCount || "1,234"} followers`, 13, "SemiBold", { r: 0.349, g: 0.439, b: 0.482 }, {
                    font: { family: "Open Sans", style: "SemiBold" }
                }),
                createFrame("Button", {
                    layoutMode: "HORIZONTAL",
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    cornerRadius: 8,
                    fills: [{ type: "SOLID", color: { r: 0, g: 0.635, b: 0.588 } }],
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "AUTO"
                }, [
                    createText("Follow", "Follow", 14, "Bold", { r: 1, g: 1, b: 1 }, {
                        font: { family: "Open Sans", style: "Bold" }
                    })
                ])
            ])
        ]);

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}
