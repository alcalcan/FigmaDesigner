import { BaseDemoPage } from "./BaseDemoPage";
import { ComponentProps } from "../../components/BaseComponent";

// Components
import { Profile_Card } from "../../components/Alex_CookBook/Profile_Card/Profile_Card";
import { Lucide_user_plus } from "../../components/index";
import { Lucide_more_horizontal } from "../../components/index";
import { Lucide_settings } from "../../components/index";
import { Action___remove } from "../../components/index";

export class ProfileCardsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = await this.initPage("Profile Cards");
        await this.addHeader(root, "Profile Cards", "Showcasing variations of the Profile Card component.");

        // --- DEFAULT PROFILES ---
        await this.addSection(root, "Default Profiles", "Standard profile cards.", async (container) => {
            const row = figma.createFrame();
            row.name = "Row";
            row.layoutMode = "HORIZONTAL";
            row.itemSpacing = 24;
            row.layoutAlign = "STRETCH";
            row.primaryAxisSizingMode = "FIXED";
            row.counterAxisSizingMode = "AUTO";
            row.fills = [];

            const profile = new Profile_Card();

            row.appendChild(await profile.create({
                name: "Alex Calcan",
                handle: "@alcalcan",
                avatarUrl: "",
                bio: "Product Designer & AI Engineer. Building the future of design tools.",
                followerCount: "12.4k"
            }));

            row.appendChild(await profile.create({
                name: "Jane Smith",
                handle: "@janesmith",
                avatarUrl: "",
                bio: "Frontend Developer focusing on design systems and specialized UI blocks.",
                followerCount: "8,392"
            }));

            container.appendChild(row);
        });

        // --- ACTION PROFILES ---
        await this.addSection(root, "Action Variations", "Different Call to Action configurations.", async (container) => {
            const row = figma.createFrame();
            row.name = "Row";
            row.layoutMode = "HORIZONTAL";
            row.itemSpacing = 24;
            row.layoutAlign = "STRETCH";
            row.primaryAxisSizingMode = "FIXED";
            row.counterAxisSizingMode = "AUTO";
            row.fills = [];

            const profile = new Profile_Card();

            row.appendChild(await profile.create({
                name: "Mark Davis",
                handle: "@markd",
                bio: "Digital Artist and content creator.",
                followerCount: "45.2k",
                ctaText: "Add Friend",
                ctaVariant: "secondary"
            }));

            row.appendChild(await profile.create({
                name: "Sarah Jenkins",
                handle: "@sjenkins",
                bio: "UI/UX Designer working on new concepts.",
                followerCount: "1.2M",
                ctaText: "Message",
                ctaVariant: "primary"
            }));

            container.appendChild(row);
        });

        // --- SECONDARY ACTION ICONS ---
        await this.addSection(root, "Secondary Actions", "Icons configured in different corners.", async (container) => {
            const row = figma.createFrame();
            row.name = "Row";
            row.layoutMode = "HORIZONTAL";
            row.itemSpacing = 24;
            row.layoutAlign = "STRETCH";
            row.primaryAxisSizingMode = "FIXED";
            row.counterAxisSizingMode = "AUTO";
            row.fills = [];

            const profile = new Profile_Card();

            // Right Action
            const settingsIcon = new Lucide_settings();
            const configIconNode = await settingsIcon.create({ color: { r: 0.6, g: 0.6, b: 0.65 }, width: 24, height: 24 });
            row.appendChild(await profile.create({
                name: "Admin User",
                handle: "@admin",
                bio: "System administrator account.",
                followerCount: "12",
                ctaText: "Edit",
                ctaVariant: "secondary",
                showSecondaryAction: true,
                secondaryActionIcon: configIconNode
            }));

            // More Options Action
            const moreIcon = new Lucide_more_horizontal();
            const moreIconNode = await moreIcon.create({ color: { r: 0.4, g: 0.4, b: 0.45 }, width: 24, height: 24 });
            row.appendChild(await profile.create({
                name: "Guest",
                handle: "@guest",
                bio: "Temporary visitor.",
                followerCount: "0",
                showSecondaryAction: true,
                secondaryActionIcon: moreIconNode
            }));

            container.appendChild(row);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
