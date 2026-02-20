import { ComponentProps } from "../../components/BaseComponent";
import { sidebar } from "../../components/Alex_CookBook/sidebar/sidebar";
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

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
