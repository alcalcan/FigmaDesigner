import { BaseComponent, ComponentProps } from "../../BaseComponent";

// SVG Assets
const SVG_assets_icon_Vector_I3387_1517_5698_23_svg_12x7_400000095367432 = `<svg width="12" height="7.400000095367432" viewBox="0 0 12 7.400000095367432" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4 7.4L0 6L6 0L12 6L10.6 7.4L6 2.8L1.4 7.4Z" fill="black"/>
</svg>
`;



export class SubSection extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Manrope", style: "Regular" });
        await figma.loadFontAsync({ family: "Manrope", style: "Bold" });

        const root = figma.createFrame();
        root.name = "SubSection";
        root.layoutMode = "VERTICAL";
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "FIXED";
        root.itemSpacing = 24;
        root.paddingTop = 24;
        root.paddingRight = 24;
        root.paddingBottom = 24;
        root.paddingLeft = 24;
        root.layoutAlign = "STRETCH";
        root.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }]);
        root.effects = [{ "type": "DROP_SHADOW", "visible": true, "radius": 6, "color": { "r": 0, "g": 0, "b": 0, "a": 0.12 }, "offset": { "x": 0, "y": 2 }, "spread": 0, "blendMode": "NORMAL", "showShadowBehindNode": true }];
        root.cornerRadius = 8;
        root.clipsContent = true;

        // Header
        const header = figma.createFrame();
        header.name = "Header";
        header.layoutMode = "HORIZONTAL";
        header.primaryAxisSizingMode = "FIXED";
        header.counterAxisSizingMode = "AUTO";
        header.counterAxisAlignItems = "CENTER";
        header.itemSpacing = 24;
        header.layoutAlign = "STRETCH";
        header.fills = [];

        // Subject
        const subject = figma.createText();
        subject.name = "Subject";
        subject.characters = props.name || "Subject";
        subject.fontSize = 20;
        subject.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.1, "g": 0.19, "b": 0.23 } }]);
        await this.setFont(subject, { family: "Open Sans", style: "SemiBold" });
        subject.layoutGrow = 1; // FILL available space
        header.appendChild(subject);

        // Badge (Counts)
        const badge = figma.createFrame();
        badge.name = "Badge";
        badge.layoutMode = "HORIZONTAL";
        badge.primaryAxisSizingMode = "AUTO";
        badge.counterAxisSizingMode = "AUTO";
        badge.counterAxisAlignItems = "CENTER";
        badge.itemSpacing = 8;
        badge.paddingTop = 4;
        badge.paddingRight = 16;
        badge.paddingBottom = 4;
        badge.paddingLeft = 16;
        badge.cornerRadius = 100;
        badge.strokes = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0, "g": 0.63, "b": 0.58 } }]);
        badge.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }]);

        const badgeLabel = figma.createText();
        badgeLabel.characters = props.badgeLabel || "Subjects";
        badgeLabel.fontSize = 14;
        await this.setFont(badgeLabel, { family: "Manrope", style: "Regular" });
        badge.appendChild(badgeLabel);

        const badgeCount = figma.createText();
        const itemsList = props.items || [];
        badgeCount.characters = itemsList.length.toString();
        badgeCount.fontSize = 16;
        await this.setFont(badgeCount, { family: "Manrope", style: "Bold" });
        badge.appendChild(badgeCount);

        header.appendChild(badge);

        // Chevron
        const chevronOuter = figma.createFrame();
        chevronOuter.name = "Chevron Container";
        chevronOuter.resize(40, 40);
        chevronOuter.cornerRadius = 100;
        chevronOuter.clipsContent = true;
        chevronOuter.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.94, "g": 0.95, "b": 0.97 } }]);

        const chevronSvg = figma.createNodeFromSvg(SVG_assets_icon_Vector_I3387_1517_5698_23_svg_12x7_400000095367432);
        const chevron = figma.flatten([chevronSvg]);
        chevron.name = "chevron-up";
        chevronOuter.appendChild(chevron);
        chevron.x = (40 - 12) / 2;
        chevron.y = (40 - 7.4) / 2;

        header.appendChild(chevronOuter);

        root.appendChild(header);

        // Content Area
        const content = figma.createFrame();
        content.name = "Content Area";
        content.layoutMode = "HORIZONTAL";
        content.primaryAxisSizingMode = "FIXED";
        content.counterAxisSizingMode = "AUTO";
        content.itemSpacing = 32;
        content.layoutAlign = "STRETCH";
        if ("layoutWrap" in content) content.layoutWrap = "WRAP";
        content.fills = [];

        const items = itemsList.length > 0 ? itemsList : [
            "Anti-Doping, Medical and Health",
            "Club Licensing",
            "Coach Education",
            "Disciplinary and integrity",
            "Event Management and Operations",
            "Governance and Strategic Management",
            "Innovation",
            "Leadership",
            "Marketing Sponsorship"
        ];

        // Organize items into columns
        const itemsPerColumn = 4;
        for (let i = 0; i < items.length; i += itemsPerColumn) {
            const columnItems = items.slice(i, i + itemsPerColumn);
            const column = figma.createFrame();
            column.name = `Column ${Math.floor(i / itemsPerColumn) + 1}`;
            column.layoutMode = "VERTICAL";
            column.primaryAxisSizingMode = "AUTO";
            column.counterAxisSizingMode = "AUTO";
            column.itemSpacing = 16;
            column.layoutGrow = 1;
            column.fills = [];

            for (const itemLabel of columnItems) {
                column.appendChild(await this.renderCheckbox(itemLabel));
            }
            content.appendChild(column);
        }

        root.appendChild(content);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private async renderCheckbox(label: string): Promise<FrameNode> {
        const item = figma.createFrame();
        item.name = "Checkbox Item";
        item.layoutMode = "HORIZONTAL";
        item.primaryAxisSizingMode = "AUTO";
        item.counterAxisSizingMode = "AUTO";
        item.counterAxisAlignItems = "CENTER";
        item.itemSpacing = 12;
        item.fills = [];

        const box = figma.createFrame();
        box.name = "Checkbox";
        box.resize(20, 20);
        box.cornerRadius = 4;
        box.strokes = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.1, "g": 0.19, "b": 0.23 } }]);
        box.fills = await this.hydratePaints([{ "type": "SOLID", "visible": false, "color": { "r": 1, "g": 1, "b": 1 } }]);

        const text = figma.createText();
        text.characters = label;
        text.fontSize = 16;
        text.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.1, "g": 0.19, "b": 0.23 } }]);
        await this.setFont(text, { family: "Open Sans", style: "Regular" });

        item.appendChild(box);
        item.appendChild(text);
        return item;
    }
}
