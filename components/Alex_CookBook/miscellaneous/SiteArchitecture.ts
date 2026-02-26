import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Card } from "../Card/Card";

export class SiteArchitecture extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const container = figma.createFrame();
        container.name = "Site Architecture";
        container.layoutMode = "VERTICAL";
        container.itemSpacing = 0; // Removing root spacing to construct solid lines
        container.fills = [];
        container.primaryAxisAlignItems = "CENTER";
        container.counterAxisAlignItems = "CENTER";
        container.primaryAxisSizingMode = "AUTO";
        container.counterAxisSizingMode = "AUTO";

        const cardMaker = new Card();

        // Level 1: Home
        const level1 = await cardMaker.create({
            variant: "filled",
            backgroundColor: { r: 0.9, g: 0.94, b: 0.98 }, // Light Blue
            padding: 16,
            cornerRadius: 8,
            body: [
                Card.text("Home (Index)", { size: 16, weight: "Medium", color: { r: 0.1, g: 0.2, b: 0.4 }, align: "center" })
            ],
            width: 160
        });

        const rootWrapper = figma.createFrame();
        rootWrapper.name = "Root Node Wrapper";
        rootWrapper.layoutMode = "VERTICAL";
        rootWrapper.itemSpacing = 0;
        rootWrapper.fills = [];
        rootWrapper.primaryAxisAlignItems = "CENTER";
        rootWrapper.counterAxisAlignItems = "CENTER";
        rootWrapper.primaryAxisSizingMode = "AUTO";
        rootWrapper.counterAxisSizingMode = "AUTO";
        rootWrapper.appendChild(level1);

        // Small padding stem below root
        const rootStem = figma.createFrame();
        rootStem.resize(2, 24);
        rootStem.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        rootWrapper.appendChild(rootStem);
        container.appendChild(rootWrapper);

        // Connector trunk
        const connectorGroup = figma.createFrame();
        connectorGroup.name = "Connectors";
        connectorGroup.layoutMode = "VERTICAL";
        connectorGroup.itemSpacing = 0;
        connectorGroup.fills = [];
        connectorGroup.primaryAxisAlignItems = "CENTER";
        connectorGroup.counterAxisAlignItems = "CENTER";
        connectorGroup.primaryAxisSizingMode = "AUTO";
        connectorGroup.counterAxisSizingMode = "AUTO";

        // Horizontal bar connecting children
        // 3 children, 140 width, 32 spacing
        // Width from center of left to center of right = 140 + 32 = 172. 172 * 2 = 344
        const hBarWidth = 344 + 2; // +2 for line width endpoints
        const hBar = figma.createFrame();
        hBar.resize(hBarWidth, 2);
        hBar.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        connectorGroup.appendChild(hBar);

        // Connectors down
        const stemGroup = figma.createFrame();
        stemGroup.layoutMode = "HORIZONTAL";
        stemGroup.itemSpacing = 172 - 2; // spacing between center stems
        stemGroup.fills = [];
        stemGroup.primaryAxisSizingMode = "AUTO";
        stemGroup.counterAxisSizingMode = "AUTO";
        for (let i = 0; i < 3; i++) {
            const vLine = figma.createFrame();
            vLine.resize(2, 24);
            vLine.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
            stemGroup.appendChild(vLine);
        }
        connectorGroup.appendChild(stemGroup);
        container.appendChild(connectorGroup);

        // Level 2: Children
        const level2 = figma.createFrame();
        level2.name = "Level 2";
        level2.layoutMode = "HORIZONTAL";
        level2.itemSpacing = 32;
        level2.fills = [];
        level2.primaryAxisSizingMode = "AUTO";
        level2.counterAxisSizingMode = "AUTO";

        const sections = ["About Us", "Services", "Contact"];

        for (const section of sections) {
            const node = await cardMaker.create({
                variant: "outlined",
                padding: 16,
                cornerRadius: 8,
                body: [Card.text(section, { size: 14, color: { r: 0.2, g: 0.2, b: 0.2 }, align: "center" })],
                width: 140
            });
            level2.appendChild(node);
        }

        container.appendChild(level2);

        return container;
    }
}
