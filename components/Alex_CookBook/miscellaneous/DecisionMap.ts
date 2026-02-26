import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Card } from "../Card/Card";

export class DecisionMap extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const container = figma.createFrame();
        container.name = "Decision Map";
        container.layoutMode = "VERTICAL";
        container.itemSpacing = 24;
        container.fills = [];
        container.primaryAxisAlignItems = "CENTER";
        container.counterAxisAlignItems = "CENTER";
        container.primaryAxisSizingMode = "AUTO";
        container.counterAxisSizingMode = "AUTO";

        const cardMaker = new Card();

        const createLabelRhombus = async (textStr: string, textColor: RGB) => {
            const frame = figma.createFrame();
            frame.name = `Label ${textStr}`;
            frame.resize(48, 48);
            frame.fills = [];

            const rhomb = figma.createVector();
            rhomb.vectorPaths = [{
                windingRule: "EVENODD",
                data: "M 24 0 L 48 24 L 24 48 L 0 24 Z"
            }];
            rhomb.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.96, b: 0.96 } }];
            rhomb.strokes = [{ type: "SOLID", color: textColor }];
            frame.appendChild(rhomb);

            const t = figma.createText();
            t.characters = textStr;
            t.fontSize = 12;
            t.fills = [{ type: "SOLID", color: textColor }];
            await figma.loadFontAsync({ family: "Inter", style: "Bold" });
            t.fontName = { family: "Inter", style: "Bold" };
            t.textAlignHorizontal = "CENTER";
            t.textAlignVertical = "CENTER";
            t.resize(48, 48);
            frame.appendChild(t);
            t.x = 0;
            t.y = 0;

            return frame;
        };

        // 1. Root Question (Rhombus)
        const rhombusWrapper = figma.createFrame();
        rhombusWrapper.name = "Decision Point";
        rhombusWrapper.resize(100, 100);
        rhombusWrapper.fills = [];

        const rhombus = figma.createVector();
        rhombus.vectorPaths = [{
            windingRule: "EVENODD",
            data: "M 50 0 L 100 50 L 50 100 L 0 50 Z"
        }];
        // Gray styling
        rhombus.fills = [{ type: "SOLID", color: { r: 0.35, g: 0.40, b: 0.45 } }];
        rhombus.strokes = [{ type: "SOLID", color: { r: 0.8, g: 0.8, b: 0.85 } }];
        rhombus.strokeWeight = 2;
        rhombusWrapper.appendChild(rhombus);

        const questionText = figma.createText();
        questionText.characters = "Logged in?";
        questionText.fontSize = 14;
        questionText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]; // White text
        questionText.textAlignHorizontal = "CENTER";
        questionText.textAlignVertical = "CENTER";
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        questionText.fontName = { family: "Inter", style: "Medium" };
        questionText.resize(80, 80);

        rhombusWrapper.appendChild(questionText);
        // Because rhombusWrapper has layoutMode = "NONE", we don't set layoutPositioning
        // it defaults to standard free positioning.
        questionText.x = 10;
        questionText.y = 10;

        container.appendChild(rhombusWrapper);

        // Group the connectors to remove auto-layout gaps
        const connectorGroup = figma.createFrame();
        connectorGroup.name = "Connectors";
        connectorGroup.layoutMode = "VERTICAL";
        connectorGroup.itemSpacing = 0; // exact touching
        connectorGroup.fills = [];
        connectorGroup.primaryAxisAlignItems = "CENTER";
        connectorGroup.counterAxisAlignItems = "CENTER";
        connectorGroup.primaryAxisSizingMode = "AUTO";
        connectorGroup.counterAxisSizingMode = "AUTO";

        // Connector trunk
        const trunk = figma.createFrame();
        trunk.resize(2, 24);
        trunk.fills = [{ type: "SOLID", color: { r: 0.7, g: 0.7, b: 0.7 } }];
        connectorGroup.appendChild(trunk);

        // Horizontal bar
        const hBar = figma.createFrame();
        // Width = Branch Yes width/2 + Branch No width/2 + Branch Spacing
        // = (200 / 2) + (200 / 2) + 24 = 100 + 100 + 24 = 224 + line width adjustments?
        // Wait, the center of both branches is at exactly 200 + 24 (total width 424, centers are at 100 and 324, distance is 224.)
        hBar.resize(224 + 2, 2); // +2 for line ends
        hBar.fills = [{ type: "SOLID", color: { r: 0.7, g: 0.7, b: 0.7 } }];
        connectorGroup.appendChild(hBar);

        // Stems down to branches
        const stemsDown = figma.createFrame();
        stemsDown.layoutMode = "HORIZONTAL";
        stemsDown.itemSpacing = 224; // distance between stems
        stemsDown.fills = [];
        stemsDown.primaryAxisSizingMode = "AUTO";
        stemsDown.counterAxisSizingMode = "AUTO";

        const stemLeft = figma.createFrame();
        stemLeft.resize(2, 24);
        stemLeft.fills = [{ type: "SOLID", color: { r: 0.7, g: 0.7, b: 0.7 } }];
        const stemRight = figma.createFrame();
        stemRight.resize(2, 24);
        stemRight.fills = [{ type: "SOLID", color: { r: 0.7, g: 0.7, b: 0.7 } }];

        stemsDown.appendChild(stemLeft);
        stemsDown.appendChild(stemRight);
        connectorGroup.appendChild(stemsDown);

        container.appendChild(connectorGroup);

        // 2. Branches container
        const branches = figma.createFrame();
        branches.name = "Branches";
        branches.layoutMode = "HORIZONTAL";
        branches.itemSpacing = 24;
        branches.fills = [];
        branches.primaryAxisSizingMode = "AUTO";
        branches.counterAxisSizingMode = "AUTO";

        // Branch 1: Yes
        const branchYes = figma.createFrame();
        branchYes.name = "Branch Yes";
        branchYes.layoutMode = "VERTICAL";
        branchYes.itemSpacing = 8;
        branchYes.fills = [];
        branchYes.primaryAxisAlignItems = "CENTER";
        branchYes.counterAxisAlignItems = "CENTER";
        branchYes.primaryAxisSizingMode = "AUTO";
        branchYes.counterAxisSizingMode = "AUTO";

        // Label Yes
        const labelYes = await createLabelRhombus("Yes", { r: 0.2, g: 0.7, b: 0.4 });
        branchYes.appendChild(labelYes);

        // Action Yes
        const actionYes = await cardMaker.create({
            variant: "outlined",
            padding: 16,
            cornerRadius: 8,
            body: [Card.text("Go to Dashboard", { size: 14, color: { r: 0.2, g: 0.2, b: 0.2 }, align: "center" })],
            width: 200
        });
        branchYes.appendChild(actionYes);

        // Branch 2: No
        const branchNo = figma.createFrame();
        branchNo.name = "Branch No";
        branchNo.layoutMode = "VERTICAL";
        branchNo.itemSpacing = 8;
        branchNo.fills = [];
        branchNo.primaryAxisAlignItems = "CENTER";
        branchNo.counterAxisAlignItems = "CENTER";
        branchNo.primaryAxisSizingMode = "AUTO";
        branchNo.counterAxisSizingMode = "AUTO";

        // Label No
        const labelNo = await createLabelRhombus("No", { r: 0.9, g: 0.3, b: 0.3 });
        branchNo.appendChild(labelNo);

        // Action No
        const actionNo = await cardMaker.create({
            variant: "outlined",
            padding: 16,
            cornerRadius: 8,
            body: [Card.text("Redirect to Login", { size: 14, color: { r: 0.2, g: 0.2, b: 0.2 }, align: "center" })],
            width: 200
        });
        branchNo.appendChild(actionNo);

        branches.appendChild(branchYes);
        branches.appendChild(branchNo);
        container.appendChild(branches);

        return container;
    }
}
