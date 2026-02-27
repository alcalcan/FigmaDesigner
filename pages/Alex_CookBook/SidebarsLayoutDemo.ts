import { ComponentProps } from "../../components/BaseComponent";
import { sidebar } from "../../components/Alex_CookBook/sidebar/sidebar";
import { Lucide_home } from "../../components/lucide_icons/Lucide_home/Lucide_home";
import { Lucide_folder } from "../../components/lucide_icons/Lucide_folder/Lucide_folder";
import { Lucide_users } from "../../components/lucide_icons/Lucide_users/Lucide_users";
import { Lucide_settings } from "../../components/lucide_icons/Lucide_settings/Lucide_settings";
import { BaseDemoPage } from "./BaseDemoPage";

export class SidebarsLayoutDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });

        const root = await this.initPage("Alex CookBook - Sidebars Demo", 1440);

        await this.addHeader(
            root,
            "Sidebars Navigation",
            "Vertical navigation patterns for dashboards."
        );

        const sb = new sidebar();
        let variantIndex = 1;

        // --- Standard Variants ---
        await this.addSection(root, "Standard Variants", "Standard expanded and collapsed vertical navigation.", async (container) => {
            const row = this.createRow(container, 32);
            row.appendChild(await this.wrapWithCaption(
                await sb.create({ variant: "default", height: 720 }),
                `${variantIndex++}. Default Expanded`
            ));
            row.appendChild(await this.wrapWithCaption(
                await sb.create({ variant: "collapsed", height: 720 }),
                `${variantIndex++}. Default Collapsed`
            ));
        });

        // --- Floating / Centered Menus ---
        await this.addSection(root, "Floating / Centered Menus", "A modern floating panel with middle-aligned navigation items.", async (container) => {
            const row = this.createRow(container, 32);
            // Let the demo page background color shine through
            row.fills = [];
            row.appendChild(await this.wrapWithCaption(
                await sb.create({ variant: "floating", height: 672 }),
                `${variantIndex++}. Floating Expanded`
            ));
            row.appendChild(await this.wrapWithCaption(
                await sb.create({ variant: "floating-collapsed", height: 672 }),
                `${variantIndex++}. Floating Collapsed`
            ));
        });

        // --- Submenus / Multi-level Navigation ---
        await this.addSection(root, "Submenus / Multi-level Navigation", "Support for nested sub-items and expandable sections.", async (container) => {
            const row = this.createRow(container, 32);
            row.fills = [];

            // Standard with expanded Projects
            row.appendChild(await this.wrapWithCaption(
                await sb.create({
                    variant: "default",
                    height: 720,
                    expandedItems: ["Projects"],
                    activeItem: "Projects"
                }),
                `${variantIndex++}. Default Projects Expanded`
            ));

            // Expanded Team
            row.appendChild(await this.wrapWithCaption(
                await sb.create({
                    variant: "default",
                    height: 720,
                    navItems: [
                        { label: "Dashboard", icon: Lucide_home },
                        { label: "Projects", icon: Lucide_folder },
                        { label: "Team", icon: Lucide_users, subItems: [{ label: "Active" }, { label: "Invitations" }] },
                        { label: "Settings", icon: Lucide_settings }
                    ],
                    expandedItems: ["Team"],
                    activeItem: "Active"
                }),
                `${variantIndex++}. Default Team Expanded`
            ));

            // Floating with expanded Projects
            row.appendChild(await this.wrapWithCaption(
                await sb.create({
                    variant: "floating",
                    height: 672,
                    expandedItems: ["Projects"],
                    activeItem: "Projects"
                }),
                `${variantIndex++}. Floating Projects Expanded`
            ));

            // Floating Expanded Team
            row.appendChild(await this.wrapWithCaption(
                await sb.create({
                    variant: "floating",
                    height: 672,
                    navItems: [
                        { label: "Dashboard", icon: Lucide_home },
                        { label: "Projects", icon: Lucide_folder },
                        { label: "Team", icon: Lucide_users, subItems: [{ label: "Active" }, { label: "Invitations" }] },
                        { label: "Settings", icon: Lucide_settings }
                    ],
                    expandedItems: ["Team"],
                    activeItem: "Active"
                }),
                `${variantIndex++}. Floating Team Expanded`
            ));
        });

        // --- Ecommerce Filter Sidebar Variant ---
        await this.addSection(root, "Ecommerce Filter Variant", "Replicates the product-category filter sidebar variant.", async (container) => {
            const row = this.createRow(container, 32);
            row.fills = [];
            row.appendChild(await this.wrapWithCaption(
                await sb.create({
                    variant: "ecommerce-filter",
                    filterCategories: [
                        {
                            name: "Category",
                            expanded: true,
                            items: [
                                {
                                    label: "Woman",
                                    expanded: true,
                                    items: [
                                        { label: "Tops", count: "37", selected: true },
                                        { label: "Jackets", count: "22" },
                                        { label: "Sweaters", count: "31" }
                                    ]
                                },
                                { label: "Men" },
                                { label: "Kids" },
                                { label: "Sporty" },
                                { label: "Casual" }
                            ]
                        },
                        { name: "Brands" },
                        { name: "Price" },
                        { name: "Size" }
                    ]
                }),
                `${variantIndex++}. Ecommerce Category Filter`
            ));
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
