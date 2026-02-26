import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Card } from "../Card/Card";

export class DecisionMap extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const connectorVariant = props.connectorVariant ?? "default";
        const container = figma.createFrame();
        container.name = "Decision Map";
        container.layoutMode = "VERTICAL";
        container.itemSpacing = 24;
        container.fills = [];
        container.primaryAxisAlignItems = "CENTER";
        container.counterAxisAlignItems = "CENTER";
        container.primaryAxisSizingMode = "AUTO";
        container.counterAxisSizingMode = "AUTO";
        // Reserve an internal right lane so loop connectors can bend clearly
        // while still staying inside this component's bounds.
        container.paddingRight = 56;

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
        trunk.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        connectorGroup.appendChild(trunk);

        // Horizontal bar
        const hBar = figma.createFrame();
        // Width = Branch Yes width/2 + Branch No width/2 + Branch Spacing
        // = (200 / 2) + (200 / 2) + 24 = 100 + 100 + 24 = 224 + line width adjustments?
        // Wait, the center of both branches is at exactly 200 + 24 (total width 424, centers are at 100 and 324, distance is 224.)
        hBar.resize(224 + 2, 2); // +2 for line ends
        hBar.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
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
        stemLeft.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        const stemRight = figma.createFrame();
        stemRight.resize(2, 24);
        stemRight.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];

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

        // Stem to Action
        const yesStem = figma.createFrame();
        yesStem.resize(2, 24);
        yesStem.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        branchYes.appendChild(yesStem);

        // Action Yes 1
        const actionYes1 = await cardMaker.create({
            variant: "outlined",
            padding: 16,
            cornerRadius: 8,
            body: [Card.text("Go to Dashboard", { size: 14, color: { r: 0.2, g: 0.2, b: 0.2 }, align: "center" })],
            width: 200
        });
        branchYes.appendChild(actionYes1);

        // Stem to Action 2
        const yesStem2 = figma.createFrame();
        yesStem2.resize(2, 24);
        yesStem2.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        branchYes.appendChild(yesStem2);

        // Action Yes 2
        const actionYes2 = await cardMaker.create({
            variant: "outlined",
            padding: 16,
            cornerRadius: 8,
            body: [Card.text("View Profile", { size: 14, color: { r: 0.2, g: 0.2, b: 0.2 }, align: "center" })],
            width: 200
        });
        branchYes.appendChild(actionYes2);

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

        // Stem to Action
        const noStem = figma.createFrame();
        noStem.resize(2, 24);
        noStem.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        branchNo.appendChild(noStem);

        // Action No 1
        const actionNo1 = await cardMaker.create({
            variant: "outlined",
            padding: 16,
            cornerRadius: 8,
            body: [Card.text("Redirect to Login", { size: 14, color: { r: 0.2, g: 0.2, b: 0.2 }, align: "center" })],
            width: 200
        });
        branchNo.appendChild(actionNo1);

        // Stem to Action 2
        const noStem2 = figma.createFrame();
        noStem2.resize(2, 24);
        noStem2.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        branchNo.appendChild(noStem2);

        // Action No 2
        const actionNo2 = await cardMaker.create({
            variant: "outlined",
            padding: 16,
            cornerRadius: 8,
            body: [Card.text("Reset Password Flow", { size: 14, color: { r: 0.2, g: 0.2, b: 0.2 }, align: "center" })],
            width: 200
        });
        branchNo.appendChild(actionNo2);

        // Stem to Action 3
        const noStem3 = figma.createFrame();
        noStem3.resize(2, 24);
        noStem3.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        branchNo.appendChild(noStem3);

        // Action No 3
        const actionNo3 = await cardMaker.create({
            variant: "outlined",
            padding: 16,
            cornerRadius: 8,
            body: [Card.text("Verify Login Token", { size: 14, color: { r: 0.2, g: 0.2, b: 0.2 }, align: "center" })],
            width: 200
        });
        branchNo.appendChild(actionNo3);

        branches.appendChild(branchYes);
        branches.appendChild(branchNo);
        container.appendChild(branches);

        // --- Arrow Pipeline Loop ---
        const pipelineWrapper = figma.createFrame();
        pipelineWrapper.name = "Pipeline Loop";
        container.appendChild(pipelineWrapper);
        pipelineWrapper.layoutPositioning = "ABSOLUTE";
        pipelineWrapper.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        pipelineWrapper.fills = [];
        pipelineWrapper.clipsContent = true;
        // Keep overlays scoped to this map only.
        pipelineWrapper.resize(container.width, container.height);
        pipelineWrapper.x = 0;
        pipelineWrapper.y = 0;

        const lineColor: RGB = { r: 0, g: 0, b: 0 };
        const thickness = 2;
        const addLine = (name: string, x: number, y: number, width: number, height: number) => {
            const line = figma.createFrame();
            line.name = name;
            line.resize(width, height);
            line.fills = [{ type: "SOLID", color: lineColor }];
            line.x = x;
            line.y = y;
            pipelineWrapper.appendChild(line);
        };
        const addArrowHead = (x: number, y: number) => {
            const arrowHead = figma.createVector();
            arrowHead.vectorPaths = [{
                windingRule: "EVENODD",
                data: "M 10 0 L 10 10 L 0 5 Z"
            }];
            arrowHead.fills = [{ type: "SOLID", color: lineColor }];
            arrowHead.x = x;
            arrowHead.y = y;
            pipelineWrapper.appendChild(arrowHead);
        };
        const toLocal = (node: SceneNode) => {
            let x = node.x;
            let y = node.y;
            let current: BaseNode | null = node.parent;
            while (current && current !== container) {
                if ("x" in current && "y" in current) {
                    x += current.x;
                    y += current.y;
                }
                current = current.parent;
            }
            return { x, y, width: node.width, height: node.height };
        };
        const addH = (name: string, x1: number, x2: number, yMid: number) => {
            const left = Math.min(x1, x2);
            const width = Math.max(thickness, Math.abs(x2 - x1));
            addLine(name, left, yMid - thickness / 2, width, thickness);
        };
        const addV = (name: string, xMid: number, y1: number, y2: number) => {
            const top = Math.min(y1, y2);
            const height = Math.max(thickness, Math.abs(y2 - y1));
            addLine(name, xMid - thickness / 2, top, thickness, height);
        };

        const rootBox = toLocal(rhombusWrapper);
        const no1Box = toLocal(actionNo1);
        const no2Box = toLocal(actionNo2);
        const no3Box = toLocal(actionNo3);

        if (connectorVariant === "turn-up") {
            // Variant: connector loops from the last step back up to an earlier step.
            const sourceX = no3Box.x + no3Box.width;
            const sourceY = no3Box.y + no3Box.height / 2;
            const targetX = no1Box.x + no1Box.width;
            const targetY = no1Box.y + no1Box.height / 2;
            const elbowX = Math.max(8, Math.min(container.width - 12, Math.max(sourceX, targetX) + 28));

            addH("TurnUp Out Right", sourceX, elbowX, sourceY);
            addV("TurnUp Vertical", elbowX, sourceY, targetY);
            addH("TurnUp In Left", targetX, elbowX, targetY);
            addArrowHead(targetX, targetY - 5);
        } else {
            // Default: connector loops from the last "No" step back to the decision node.
            const sourceX = no3Box.x + no3Box.width;
            const sourceY = no3Box.y + no3Box.height / 2;
            const targetX = rootBox.x + rootBox.width;
            const targetY = rootBox.y + rootBox.height / 2;
            const elbowX = Math.max(8, Math.min(container.width - 12, Math.max(sourceX, targetX) + 28));

            addH("Out Right", sourceX, elbowX, sourceY);
            addV("Up Line", elbowX, sourceY, targetY);
            addH("In Left", targetX, elbowX, targetY);
            addArrowHead(targetX, targetY - 5);
        }

        return container;
    }
}
