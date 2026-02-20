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

        // --- Standard Variants ---
        await this.addSection(root, "Standard Variants", "Standard expanded and collapsed vertical navigation.", async (container) => {
            container.layoutMode = "HORIZONTAL";
            const row = this.createRow(container, 32);
            row.appendChild(await sb.create({ variant: "default", height: 720 }));
            row.appendChild(await sb.create({ variant: "collapsed", height: 720 }));
        });

        // --- Floating / Centered Menus ---
        await this.addSection(root, "Floating / Centered Menus", "A modern floating panel with middle-aligned navigation items.", async (container) => {
            container.layoutMode = "HORIZONTAL";
            const row = this.createRow(container, 32);
            // Let the demo page background color shine through
            row.fills = [];
            row.appendChild(await sb.create({ variant: "floating", height: 672 }));
            row.appendChild(await sb.create({ variant: "floating-collapsed", height: 672 }));
        });

        // --- Submenus / Multi-level Navigation ---
        await this.addSection(root, "Submenus / Multi-level Navigation", "Support for nested sub-items and expandable sections.", async (container) => {
            container.layoutMode = "HORIZONTAL";
            const row = this.createRow(container, 32);
            row.fills = [];

            // Standard with expanded Projects
            row.appendChild(await sb.create({
                variant: "default",
                height: 720,
                expandedItems: ["Projects"],
                activeItem: "Projects"
            }));

            // Expanded Team
            row.appendChild(await sb.create({
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
            }));
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
