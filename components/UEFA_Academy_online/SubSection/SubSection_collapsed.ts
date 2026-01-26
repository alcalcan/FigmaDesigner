import { BaseComponent, ComponentProps } from "../../BaseComponent";

// SVG Assets - Chevrond Down
const SVG_assets_icon_Vector_chevron_down = `<svg width="12" height="7.4" viewBox="0 0 12 7.4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4 0L0 1.4L6 7.4L12 1.4L10.6 0L6 4.6L1.4 0Z" fill="black"/>
</svg>
`;



export class SubSection_collapsed extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
            await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
            await figma.loadFontAsync({ family: "Manrope", style: "Regular" });
            await figma.loadFontAsync({ family: "Manrope", style: "Bold" });
        } catch (e) {
            console.warn("Failed to load fonts", e);
        }

        const root = figma.createFrame();
        root.name = "SubSection (Collapsed)";
        root.layoutMode = "VERTICAL";
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "FIXED"; // Width is controlled by parent
        root.itemSpacing = 0;
        root.paddingTop = 24;
        root.paddingRight = 24;
        root.paddingBottom = 24;
        root.paddingLeft = 24;
        root.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 } }]);
        root.effects = [{ "type": "DROP_SHADOW", "visible": true, "radius": 6, "color": { "r": 0, "g": 0, "b": 0, "a": 0.12 }, "offset": { "x": 0, "y": 2 }, "spread": 0, "blendMode": "NORMAL", "showShadowBehindNode": true }];
        root.cornerRadius = 8;

        // Remove hardcoded resize, use layoutAlign = STRETCH from parent
        root.layoutAlign = "STRETCH";

        // Header
        const header = figma.createFrame();
        header.name = "Header";
        header.layoutMode = "HORIZONTAL";
        header.primaryAxisSizingMode = "FIXED"; // STRETCH content
        header.counterAxisSizingMode = "AUTO";
        header.primaryAxisAlignItems = "MIN";
        header.counterAxisAlignItems = "CENTER";
        header.itemSpacing = 24;
        header.fills = [];
        header.layoutAlign = "STRETCH";

        // Subject
        const subject = figma.createText();
        subject.name = "Subject";
        subject.characters = props.name || "Collapsed Section";
        subject.fontSize = 20;
        subject.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.1, "g": 0.19, "b": 0.23 } }]);
        await this.setFont(subject, { "family": "Open Sans", "style": "SemiBold" });
        subject.layoutGrow = 1;

        // Badge (Optional - simplified)
        const badge = figma.createFrame();
        badge.name = "Badge";
        badge.layoutMode = "HORIZONTAL";
        badge.paddingLeft = 16;
        badge.paddingRight = 16;
        badge.paddingTop = 4;
        badge.paddingBottom = 4;
        badge.cornerRadius = 100;
        badge.primaryAxisSizingMode = "AUTO";
        badge.counterAxisSizingMode = "AUTO";
        badge.strokes = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0, "g": 0.63, "b": 0.58 } }]);
        badge.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }]);

        const badgeText = figma.createText();
        badgeText.characters = "Locked";
        badgeText.fontSize = 14;
        badgeText.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.1, "g": 0.19, "b": 0.23 } }]);
        await this.setFont(badgeText, { "family": "Manrope", "style": "Regular" });
        badge.appendChild(badgeText);

        // Chevron
        const chevronContainer = figma.createFrame();
        chevronContainer.name = "Chevron Container";
        chevronContainer.resize(40, 40);
        chevronContainer.cornerRadius = 100;
        chevronContainer.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.94, "g": 0.95, "b": 0.97 } }]);

        const chevronSvg = figma.createNodeFromSvg(SVG_assets_icon_Vector_chevron_down);
        const chevron = figma.flatten([chevronSvg]);
        chevron.name = "chevron-down";
        chevronContainer.appendChild(chevron);
        chevron.x = (40 - 12) / 2;
        chevron.y = (40 - 7.4) / 2;

        header.appendChild(subject);
        header.appendChild(badge);
        header.appendChild(chevronContainer);
        root.appendChild(header);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
