import { ComponentProps } from "../../components/BaseComponent";
import { sidebar } from "../../components/Alex_CookBook/sidebar/sidebar";
import { Lucide_home } from "../../components/lucide_icons/Lucide_home/Lucide_home";
import { Lucide_folder } from "../../components/lucide_icons/Lucide_folder/Lucide_folder";
import { Lucide_users } from "../../components/lucide_icons/Lucide_users/Lucide_users";
import { Lucide_settings } from "../../components/lucide_icons/Lucide_settings/Lucide_settings";
import { Lucide_chevron_down } from "../../components/lucide_icons/Lucide_chevron_down/Lucide_chevron_down";
import { Lucide_chevron_right } from "../../components/lucide_icons/Lucide_chevron_right/Lucide_chevron_right";
import { Lucide_check } from "../../components/lucide_icons/Lucide_check/Lucide_check";
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
                await this.createEcommerceFilterSidebarVariant(),
                `${variantIndex++}. Ecommerce Category Filter`
            ));
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private async createEcommerceFilterSidebarVariant(): Promise<FrameNode> {
        await Promise.all([
            figma.loadFontAsync({ family: "Inter", style: "Regular" }),
            figma.loadFontAsync({ family: "Inter", style: "Semi Bold" })
        ]);

        const iconDown = new Lucide_chevron_down();
        const iconRight = new Lucide_chevron_right();
        const iconCheck = new Lucide_check();

        const root = figma.createFrame();
        root.name = "Sidebar Variant - Ecommerce Filter";
        root.layoutMode = "VERTICAL";
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "FIXED";
        root.resize(420, 100);
        root.itemSpacing = 6;
        root.paddingTop = 20;
        root.paddingBottom = 20;
        root.paddingLeft = 20;
        root.paddingRight = 20;
        root.cornerRadius = 12;
        root.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        root.strokes = [{ type: "SOLID", color: { r: 0.902, g: 0.914, b: 0.929 } }];
        root.strokeWeight = 1;

        const createRowItem = async (
            label: string,
            {
                indent = 0,
                rightIcon = "right",
                selected = false,
                count
            }: { indent?: number; rightIcon?: "right" | "down" | "none"; selected?: boolean; count?: string }
        ) => {
            const row = figma.createFrame();
            row.name = `Row - ${label}`;
            row.layoutMode = "HORIZONTAL";
            row.primaryAxisSizingMode = "FIXED";
            row.counterAxisSizingMode = "FIXED";
            row.counterAxisAlignItems = "CENTER";
            row.primaryAxisAlignItems = "MIN";
            row.resize(380, 56);
            row.paddingLeft = 20 + indent;
            row.paddingRight = 20;
            row.fills = [];

            const left = figma.createFrame();
            left.name = "Left";
            left.layoutMode = "HORIZONTAL";
            left.primaryAxisSizingMode = "AUTO";
            left.counterAxisSizingMode = "AUTO";
            left.counterAxisAlignItems = "CENTER";
            left.itemSpacing = 14;
            left.fills = [];
            left.layoutGrow = 1;

            if (count !== undefined) {
                const checkboxWrap = figma.createFrame();
                checkboxWrap.name = "Checkbox";
                checkboxWrap.layoutMode = "HORIZONTAL";
                checkboxWrap.primaryAxisSizingMode = "FIXED";
                checkboxWrap.counterAxisSizingMode = "FIXED";
                checkboxWrap.primaryAxisAlignItems = "CENTER";
                checkboxWrap.counterAxisAlignItems = "CENTER";
                checkboxWrap.resize(24, 24);
                checkboxWrap.cornerRadius = 7;
                checkboxWrap.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
                checkboxWrap.strokes = [{ type: "SOLID", color: { r: 0.204, g: 0.235, b: 0.278 } }];
                checkboxWrap.strokeWeight = 2;

                if (selected) {
                    const check = await iconCheck.create({
                        width: 14,
                        height: 14,
                        strokeWeight: 2.4,
                        color: { r: 0.204, g: 0.235, b: 0.278 }
                    });
                    checkboxWrap.appendChild(check);
                }

                left.appendChild(checkboxWrap);
            }

            const text = figma.createText();
            text.name = "Label";
            text.fontName = { family: "Inter", style: "Regular" };
            text.fontSize = 42 / 3;
            text.lineHeight = { unit: "PIXELS", value: 24 };
            text.characters = label;
            text.fills = [{ type: "SOLID", color: { r: 0.251, g: 0.286, b: 0.337 } }];
            left.appendChild(text);
            row.appendChild(left);

            if (count !== undefined) {
                const countBadge = figma.createFrame();
                countBadge.name = "Count";
                countBadge.layoutMode = "HORIZONTAL";
                countBadge.primaryAxisSizingMode = "AUTO";
                countBadge.counterAxisSizingMode = "FIXED";
                countBadge.primaryAxisAlignItems = "CENTER";
                countBadge.counterAxisAlignItems = "CENTER";
                countBadge.paddingLeft = 10;
                countBadge.paddingRight = 10;
                countBadge.resize(42, 30);
                countBadge.cornerRadius = 999;
                countBadge.fills = [{ type: "SOLID", color: { r: 0.945, g: 0.953, b: 0.969 } }];

                const countText = figma.createText();
                countText.fontName = { family: "Inter", style: "Semi Bold" };
                countText.fontSize = 11;
                countText.characters = count;
                countText.fills = [{ type: "SOLID", color: { r: 0.294, g: 0.333, b: 0.38 } }];
                countBadge.appendChild(countText);
                row.appendChild(countBadge);
            } else if (rightIcon !== "none") {
                const right = await (rightIcon === "down"
                    ? iconDown.create({ width: 22, height: 22, strokeWeight: 2.3, color: { r: 0.345, g: 0.373, b: 0.416 } })
                    : iconRight.create({ width: 22, height: 22, strokeWeight: 2.3, color: { r: 0.345, g: 0.373, b: 0.416 } }));
                row.appendChild(right);
            }

            return row;
        };

        const categoryTop = figma.createFrame();
        categoryTop.name = "Top Category Header";
        categoryTop.layoutMode = "HORIZONTAL";
        categoryTop.primaryAxisSizingMode = "FIXED";
        categoryTop.counterAxisSizingMode = "FIXED";
        categoryTop.counterAxisAlignItems = "CENTER";
        categoryTop.primaryAxisAlignItems = "MIN";
        categoryTop.paddingLeft = 20;
        categoryTop.paddingRight = 20;
        categoryTop.resize(380, 58);
        categoryTop.cornerRadius = 12;
        categoryTop.fills = [{ type: "SOLID", color: { r: 0.945, g: 0.953, b: 0.969 } }];

        const categoryText = figma.createText();
        categoryText.fontName = { family: "Inter", style: "Regular" };
        categoryText.fontSize = 40 / 3;
        categoryText.lineHeight = { unit: "PIXELS", value: 24 };
        categoryText.characters = "Category";
        categoryText.layoutGrow = 1;
        categoryText.fills = [{ type: "SOLID", color: { r: 0.251, g: 0.286, b: 0.337 } }];
        categoryTop.appendChild(categoryText);
        categoryTop.appendChild(await iconDown.create({ width: 24, height: 24, strokeWeight: 2.3, color: { r: 0.345, g: 0.373, b: 0.416 } }));
        root.appendChild(categoryTop);

        root.appendChild(await createRowItem("Woman", { indent: 18, rightIcon: "down" }));
        root.appendChild(await createRowItem("Tops", { indent: 42, count: "37", selected: true }));
        root.appendChild(await createRowItem("Jackets", { indent: 42, count: "22" }));
        root.appendChild(await createRowItem("Sweaters", { indent: 42, count: "31" }));

        root.appendChild(await createRowItem("Men", { indent: 18 }));
        root.appendChild(await createRowItem("Kids", { indent: 18 }));
        root.appendChild(await createRowItem("Sporty", { indent: 18 }));
        root.appendChild(await createRowItem("Casual", { indent: 18 }));

        const divider1 = figma.createLine();
        divider1.strokes = [{ type: "SOLID", color: { r: 0.902, g: 0.914, b: 0.929 } }];
        divider1.strokeWeight = 1;
        divider1.resize(380, 0);
        root.appendChild(divider1);

        root.appendChild(await createRowItem("Brands", { indent: 0 }));
        const divider2 = figma.createLine();
        divider2.strokes = [{ type: "SOLID", color: { r: 0.902, g: 0.914, b: 0.929 } }];
        divider2.strokeWeight = 1;
        divider2.resize(380, 0);
        root.appendChild(divider2);

        root.appendChild(await createRowItem("Price", { indent: 0 }));
        const divider3 = figma.createLine();
        divider3.strokes = [{ type: "SOLID", color: { r: 0.902, g: 0.914, b: 0.929 } }];
        divider3.strokeWeight = 1;
        divider3.resize(380, 0);
        root.appendChild(divider3);

        root.appendChild(await createRowItem("Size", { indent: 0 }));

        return root;
    }
}
