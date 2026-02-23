import { BaseDemoPage } from "./BaseDemoPage";
import { ComponentProps } from "../../components/BaseComponent";

// Components
import { Profile_Card } from "../../components/Alex_CookBook/Profile_Card/Profile_Card";
import { Lucide_settings } from "../../components/index";

export class ProfileCardsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = await this.initPage("Profile Cards");
        await this.addHeader(root, "Profile Cards", "Showcasing structural variations of the Profile Card component.");

        // --- DEFAULT PROFILES ---
        await this.addSection(root, "Default Profiles", "Standard profile cards with top-left avatar and right-aligned text.", async (container) => {
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
                layoutVariant: "standard",
                avatarUrl: "",
                bio: "Product Designer & AI Engineer. Building the future of design tools.",
                followerCount: "12.4k"
            }));

            // More Options Action
            const settingsIcon2 = new Lucide_settings();
            const configIconNode2 = await settingsIcon2.create({ color: { r: 0.6, g: 0.6, b: 0.65 }, width: 24, height: 24 });
            row.appendChild(await profile.create({
                name: "Platform Engineer",
                handle: "@engineering",
                layoutVariant: "standard",
                bio: "Also works perfectly with secondary actions injected into the header.",
                followerCount: "42",
                showSecondaryAction: true,
                secondaryActionIcon: configIconNode2
            }));

            container.appendChild(row);
        });

        // --- AVATAR RIGHT LAYOUT ---
        await this.addSection(root, "Avatar Right", "Title and email on the left side, avatar on the extreme right.", async (container) => {
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
                name: "Jane Smith",
                handle: "@janesmith",
                layoutVariant: "avatarRight",
                bio: "Frontend Developer focusing on design systems and specialized UI blocks.",
                followerCount: "8,392"
            }));

            container.appendChild(row);
        });

        // --- HORIZONTAL / SPLIT LAYOUT ---
        await this.addSection(root, "Horizontal Split", "Split row: Avatar on the left, all content and CTA on the right.", async (container) => {
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
                layoutVariant: "horizontal",
                bio: "Digital Artist and content creator pushing horizontal boundaries.",
                followerCount: "45.2k",
                ctaText: "Add Friend",
                ctaVariant: "secondary"
            }));

            container.appendChild(row);
        });

        // --- WRAPPED UNDER AVATAR ---
        await this.addSection(root, "Wrapped Information", "Avatar sits above with text flowing underneath it.", async (container) => {
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
                layoutVariant: "underAvatar",
                bio: "This layout style breaks the horizontal stacking of the header to place the avatar image by itself at the top.",
                followerCount: "250k"
            }));

            container.appendChild(row);
        });

        // --- ARTICLE LAYOUTS ---
        await this.addSection(root, "Article Stylings", "Banner images spanning the full width of the card.", async (container) => {
            const row = figma.createFrame();
            row.name = "Row";
            row.layoutMode = "HORIZONTAL";
            row.itemSpacing = 24;
            row.layoutAlign = "STRETCH";
            row.primaryAxisSizingMode = "FIXED";
            row.counterAxisSizingMode = "AUTO";
            row.fills = [];

            const profile = new Profile_Card();

            // Test fallback gray rectangle if no image is passed
            row.appendChild(await profile.create({
                name: "Tech Review Central",
                handle: "@techreviews",
                layoutVariant: "article",
                bio: "Detailed teardowns and deep-dives into consumer hardware, utilizing the fallback gray banner.",
                followerCount: "850k",
                ctaVariant: "secondary"
            }));

            container.appendChild(row);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
