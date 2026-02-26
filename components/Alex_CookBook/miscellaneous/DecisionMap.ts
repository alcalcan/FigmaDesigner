import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Card } from "../Card/Card";

export type DecisionMapAnchor = "auto" | "left" | "right" | "top" | "bottom";
export type DecisionMapLane = "auto" | "left" | "right" | "top" | "bottom";

export interface DecisionMapStep {
    id: string;
    text: string;
    width?: number;
}

export interface DecisionMapBranch {
    id: string;
    label: string;
    labelColor?: RGB;
    labelId?: string;
    stepWidth?: number;
    steps: DecisionMapStep[];
}

export interface DecisionMapConnector {
    id?: string;
    from: string;
    to: string;
    fromAnchor?: DecisionMapAnchor;
    toAnchor?: DecisionMapAnchor;
    lane?: DecisionMapLane;
    arrowAt?: "start" | "end" | "none";
    color?: RGB;
}

export interface DecisionMapModel {
    root: {
        id?: string;
        question: string;
    };
    branches: DecisionMapBranch[];
    connectors?: DecisionMapConnector[];
}

type ResolvedAnchor = Exclude<DecisionMapAnchor, "auto">;
type ArrowDirection = "left" | "right" | "up" | "down";

interface Point {
    x: number;
    y: number;
}

interface NodeBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

export class DecisionMap extends BaseComponent {
    static step(id: string, text: string, width?: number): DecisionMapStep {
        return { id, text, width };
    }

    static branch(id: string, label: string, steps: DecisionMapStep[], options: { labelColor?: RGB; stepWidth?: number; labelId?: string } = {}): DecisionMapBranch {
        return { id, label, steps, ...options };
    }

    static connector(from: string, to: string, options: Omit<DecisionMapConnector, "from" | "to"> = {}): DecisionMapConnector {
        return { from, to, ...options };
    }

    async create(props: ComponentProps): Promise<FrameNode> {
        const connectorVariant = props.connectorVariant ?? "default";
        const model = (props.model as DecisionMapModel | undefined) ?? this.createDefaultModel(connectorVariant);

        const branchSpacing = props.branchSpacing ?? 24;
        const nodeSpacing = props.nodeSpacing ?? 24;
        const sectionSpacing = props.sectionSpacing ?? 44;
        const lanePadding = props.lanePadding ?? 56;
        const lineColor = (props.lineColor as RGB | undefined) ?? { r: 0, g: 0, b: 0 };
        const lineThickness = props.lineThickness ?? 2;
        const stepWidth = props.stepWidth ?? 200;
        const rootId = model.root.id ?? "root";

        const container = figma.createFrame();
        container.name = "Decision Map";
        container.layoutMode = "VERTICAL";
        container.itemSpacing = sectionSpacing;
        container.fills = [];
        container.primaryAxisAlignItems = "CENTER";
        container.counterAxisAlignItems = "CENTER";
        container.primaryAxisSizingMode = "AUTO";
        container.counterAxisSizingMode = "AUTO";
        container.paddingRight = lanePadding;

        const rootNode = await this.createDecisionDiamond(model.root.question);
        container.appendChild(rootNode);

        const branchesRow = figma.createFrame();
        branchesRow.name = "Branches";
        branchesRow.layoutMode = "HORIZONTAL";
        branchesRow.itemSpacing = branchSpacing;
        branchesRow.fills = [];
        branchesRow.primaryAxisSizingMode = "AUTO";
        branchesRow.counterAxisSizingMode = "AUTO";
        branchesRow.primaryAxisAlignItems = "MIN";
        branchesRow.counterAxisAlignItems = "MIN";
        branchesRow.clipsContent = false;

        const registry = new Map<string, SceneNode>();
        registry.set(rootId, rootNode);
        const branchNodeIds = new Map<string, string[]>();

        const cardMaker = new Card();
        for (const branch of model.branches) {
            const column = figma.createFrame();
            column.name = `Branch ${branch.id}`;
            column.layoutMode = "VERTICAL";
            column.itemSpacing = nodeSpacing;
            column.fills = [];
            column.primaryAxisSizingMode = "AUTO";
            column.counterAxisSizingMode = "AUTO";
            column.primaryAxisAlignItems = "CENTER";
            column.counterAxisAlignItems = "CENTER";
            column.clipsContent = false;

            const labelId = branch.labelId ?? `${branch.id}:label`;
            const labelNode = await this.createLabelRhombus(branch.label, branch.labelColor ?? { r: 0.2, g: 0.2, b: 0.2 });
            column.appendChild(labelNode);
            registry.set(labelId, labelNode);

            const sequenceIds: string[] = [labelId];
            for (const step of branch.steps) {
                const stepNode = await cardMaker.create({
                    variant: "outlined",
                    padding: 16,
                    cornerRadius: 8,
                    body: [Card.text(step.text, { size: 14, color: { r: 0.2, g: 0.2, b: 0.2 }, align: "center" })],
                    width: step.width ?? branch.stepWidth ?? stepWidth
                });
                column.appendChild(stepNode);
                registry.set(step.id, stepNode);
                sequenceIds.push(step.id);
            }

            branchNodeIds.set(branch.id, sequenceIds);
            branchesRow.appendChild(column);
        }

        container.appendChild(branchesRow);

        const overlay = figma.createFrame();
        overlay.name = "Connectors Overlay";
        container.appendChild(overlay);
        // Must be parented to an auto-layout node before setting ABSOLUTE.
        overlay.layoutPositioning = "ABSOLUTE";
        overlay.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        overlay.fills = [];
        overlay.clipsContent = true;
        overlay.resize(container.width, container.height);
        overlay.x = 0;
        overlay.y = 0;

        const rootBox = this.getLocalBox(rootNode, container);
        const labelBoxes: NodeBox[] = [];
        for (const branch of model.branches) {
            const labelId = branch.labelId ?? `${branch.id}:label`;
            const labelNode = registry.get(labelId);
            if (!labelNode) continue;
            labelBoxes.push(this.getLocalBox(labelNode, container));
        }
        if (labelBoxes.length > 0) {
            this.drawRootSplitConnector(overlay, rootBox, labelBoxes, lineColor, lineThickness);
        }

        for (const [, nodeIds] of branchNodeIds.entries()) {
            for (let i = 0; i < nodeIds.length - 1; i += 1) {
                const fromNode = registry.get(nodeIds[i]);
                const toNode = registry.get(nodeIds[i + 1]);
                if (!fromNode || !toNode) continue;
                const fromBox = this.getLocalBox(fromNode, container);
                const toBox = this.getLocalBox(toNode, container);
                const from: Point = { x: fromBox.x + fromBox.width / 2, y: fromBox.y + fromBox.height };
                const to: Point = { x: toBox.x + toBox.width / 2, y: toBox.y };
                this.drawSegment(overlay, from, to, lineColor, lineThickness, `Branch Link ${nodeIds[i]}->${nodeIds[i + 1]}`);
            }
        }

        for (const connector of model.connectors ?? []) {
            const fromNode = registry.get(connector.from);
            const toNode = registry.get(connector.to);
            if (!fromNode || !toNode) continue;

            const fromBox = this.getLocalBox(fromNode, container);
            const toBox = this.getLocalBox(toNode, container);
            const fromAnchor = this.resolveAnchor(connector.fromAnchor ?? "auto", fromBox, toBox, true);
            const toAnchor = this.resolveAnchor(connector.toAnchor ?? "auto", fromBox, toBox, false);
            const fromPoint = this.getAnchorPoint(fromBox, fromAnchor);
            const toPoint = this.getAnchorPoint(toBox, toAnchor);

            const path = this.buildOrthogonalPath(
                fromPoint,
                toPoint,
                fromAnchor,
                toAnchor,
                connector.lane ?? "auto",
                container.width,
                container.height
            );
            const directionAtEnd = this.drawPath(overlay, path, connector.color ?? lineColor, lineThickness, connector.id ?? `${connector.from}->${connector.to}`);
            const arrowAt = connector.arrowAt ?? "end";
            if (arrowAt !== "none") {
                if (arrowAt === "start" && path.length > 1) {
                    const startDirection = this.getDirection(path[0], path[1]);
                    this.drawArrowHead(overlay, path[0], startDirection, connector.color ?? lineColor, `${connector.id ?? "Connector"} Arrow Start`);
                } else if (arrowAt === "end") {
                    this.drawArrowHead(overlay, path[path.length - 1], directionAtEnd, connector.color ?? lineColor, `${connector.id ?? "Connector"} Arrow End`);
                }
            }
        }

        return container;
    }

    private createDefaultModel(connectorVariant: string): DecisionMapModel {
        const base: DecisionMapModel = {
            root: { id: "root", question: "Logged in?" },
            branches: [
                DecisionMap.branch(
                    "yes",
                    "Yes",
                    [
                        DecisionMap.step("go-dashboard", "Go to Dashboard"),
                        DecisionMap.step("view-profile", "View Profile")
                    ],
                    { labelColor: { r: 0.2, g: 0.7, b: 0.4 } }
                ),
                DecisionMap.branch(
                    "no",
                    "No",
                    [
                        DecisionMap.step("redirect-login", "Redirect to Login"),
                        DecisionMap.step("reset-password", "Reset Password Flow"),
                        DecisionMap.step("verify-token", "Verify Login Token")
                    ],
                    { labelColor: { r: 0.9, g: 0.3, b: 0.3 } }
                )
            ],
            connectors: []
        };

        if (connectorVariant === "turn-up") {
            base.connectors?.push(
                DecisionMap.connector("verify-token", "redirect-login", {
                    id: "Turn-Up",
                    fromAnchor: "right",
                    toAnchor: "right",
                    lane: "right",
                    arrowAt: "end"
                })
            );
        } else {
            base.connectors?.push(
                DecisionMap.connector("verify-token", "root", {
                    id: "Loop-Back",
                    fromAnchor: "right",
                    toAnchor: "right",
                    lane: "right",
                    arrowAt: "end"
                })
            );
        }

        return base;
    }

    private async createDecisionDiamond(text: string): Promise<FrameNode> {
        const wrapper = figma.createFrame();
        wrapper.name = "Decision Point";
        wrapper.resize(100, 100);
        wrapper.fills = [];
        wrapper.clipsContent = false;

        const diamond = figma.createVector();
        diamond.vectorPaths = [{
            windingRule: "EVENODD",
            data: "M 50 0 L 100 50 L 50 100 L 0 50 Z"
        }];
        diamond.fills = [{ type: "SOLID", color: { r: 0.35, g: 0.4, b: 0.45 } }];
        diamond.strokes = [{ type: "SOLID", color: { r: 0.8, g: 0.8, b: 0.85 } }];
        diamond.strokeWeight = 2;
        wrapper.appendChild(diamond);

        const label = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        label.fontName = { family: "Inter", style: "Medium" };
        label.characters = text;
        label.fontSize = 14;
        label.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        label.textAlignHorizontal = "CENTER";
        label.textAlignVertical = "CENTER";
        label.resize(80, 80);
        label.x = 10;
        label.y = 10;
        wrapper.appendChild(label);

        return wrapper;
    }

    private async createLabelRhombus(text: string, strokeColor: RGB): Promise<FrameNode> {
        const frame = figma.createFrame();
        frame.name = `Label ${text}`;
        frame.resize(48, 48);
        frame.fills = [];
        frame.clipsContent = false;

        const rhomb = figma.createVector();
        rhomb.vectorPaths = [{
            windingRule: "EVENODD",
            data: "M 24 0 L 48 24 L 24 48 L 0 24 Z"
        }];
        rhomb.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.96, b: 0.96 } }];
        rhomb.strokes = [{ type: "SOLID", color: strokeColor }];
        frame.appendChild(rhomb);

        const label = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        label.fontName = { family: "Inter", style: "Bold" };
        label.characters = text;
        label.fontSize = 12;
        label.fills = [{ type: "SOLID", color: strokeColor }];
        label.textAlignHorizontal = "CENTER";
        label.textAlignVertical = "CENTER";
        label.resize(48, 48);
        label.x = 0;
        label.y = 0;
        frame.appendChild(label);

        return frame;
    }

    private getLocalBox(node: SceneNode, root: FrameNode): NodeBox {
        let x = node.x;
        let y = node.y;
        let current: BaseNode | null = node.parent;
        while (current && current !== root) {
            if ("x" in current && "y" in current) {
                x += current.x;
                y += current.y;
            }
            current = current.parent;
        }
        return { x, y, width: node.width, height: node.height };
    }

    private drawRootSplitConnector(overlay: FrameNode, rootBox: NodeBox, labels: NodeBox[], color: RGB, thickness: number) {
        const rootBottom: Point = { x: rootBox.x + rootBox.width / 2, y: rootBox.y + rootBox.height };
        const splitY = rootBottom.y + 24;
        this.drawSegment(overlay, rootBottom, { x: rootBottom.x, y: splitY }, color, thickness, "Root Trunk");

        if (labels.length === 1) {
            const target: Point = { x: labels[0].x + labels[0].width / 2, y: labels[0].y };
            this.drawSegment(overlay, { x: rootBottom.x, y: splitY }, target, color, thickness, "Single Branch Stem");
            return;
        }

        const centers = labels.map((box) => box.x + box.width / 2).sort((a, b) => a - b);
        this.drawSegment(
            overlay,
            { x: centers[0], y: splitY },
            { x: centers[centers.length - 1], y: splitY },
            color,
            thickness,
            "Split Bar"
        );
        for (const box of labels) {
            const topCenter: Point = { x: box.x + box.width / 2, y: box.y };
            this.drawSegment(overlay, { x: topCenter.x, y: splitY }, topCenter, color, thickness, `Branch Top ${topCenter.x}`);
        }
    }

    private resolveAnchor(anchor: DecisionMapAnchor, fromBox: NodeBox, toBox: NodeBox, isSource: boolean): ResolvedAnchor {
        if (anchor !== "auto") return anchor;
        const fromCenter = { x: fromBox.x + fromBox.width / 2, y: fromBox.y + fromBox.height / 2 };
        const toCenter = { x: toBox.x + toBox.width / 2, y: toBox.y + toBox.height / 2 };
        const dx = toCenter.x - fromCenter.x;
        const dy = toCenter.y - fromCenter.y;

        if (Math.abs(dx) >= Math.abs(dy)) {
            if (isSource) return dx >= 0 ? "right" : "left";
            return dx >= 0 ? "left" : "right";
        }
        if (isSource) return dy >= 0 ? "bottom" : "top";
        return dy >= 0 ? "top" : "bottom";
    }

    private getAnchorPoint(box: NodeBox, anchor: ResolvedAnchor): Point {
        switch (anchor) {
            case "left":
                return { x: box.x, y: box.y + box.height / 2 };
            case "right":
                return { x: box.x + box.width, y: box.y + box.height / 2 };
            case "top":
                return { x: box.x + box.width / 2, y: box.y };
            case "bottom":
                return { x: box.x + box.width / 2, y: box.y + box.height };
        }
    }

    private buildOrthogonalPath(
        from: Point,
        to: Point,
        fromAnchor: ResolvedAnchor,
        toAnchor: ResolvedAnchor,
        lane: DecisionMapLane,
        containerWidth: number,
        containerHeight: number
    ): Point[] {
        const laneGap = 24;
        const offset = (point: Point, anchor: ResolvedAnchor): Point => {
            switch (anchor) {
                case "left": return { x: point.x - laneGap, y: point.y };
                case "right": return { x: point.x + laneGap, y: point.y };
                case "top": return { x: point.x, y: point.y - laneGap };
                case "bottom": return { x: point.x, y: point.y + laneGap };
            }
        };
        const horizontallyAligned = Math.abs(from.y - to.y) < 0.5;
        const verticallyAligned = Math.abs(from.x - to.x) < 0.5;
        const oppositeHorizontal = (fromAnchor === "right" && toAnchor === "left") || (fromAnchor === "left" && toAnchor === "right");
        const oppositeVertical = (fromAnchor === "bottom" && toAnchor === "top") || (fromAnchor === "top" && toAnchor === "bottom");
        if ((horizontallyAligned && oppositeHorizontal) || (verticallyAligned && oppositeVertical)) {
            return this.dedupePoints([from, to]);
        }

        const fromOut = offset(from, fromAnchor);
        const toIn = offset(to, toAnchor);

        if (fromAnchor === "left" || fromAnchor === "right") {
            const needsBacktrack = fromAnchor === "right" ? toIn.x < fromOut.x : toIn.x > fromOut.x;
            let laneX = fromOut.x;
            if (needsBacktrack || lane === "left" || lane === "right") {
                const laneSide = lane === "left" || lane === "right" ? lane : fromAnchor;
                laneX = laneSide === "right"
                    ? Math.min(containerWidth - 8, Math.max(fromOut.x, toIn.x) + laneGap)
                    : Math.max(8, Math.min(fromOut.x, toIn.x) - laneGap);
            }

            return this.dedupePoints([
                from,
                fromOut,
                { x: laneX, y: fromOut.y },
                { x: laneX, y: toIn.y },
                toIn,
                to
            ]);
        }

        const needsBacktrack = fromAnchor === "bottom" ? toIn.y < fromOut.y : toIn.y > fromOut.y;
        let laneY = fromOut.y;
        if (needsBacktrack || lane === "top" || lane === "bottom") {
            const laneSide = lane === "top" || lane === "bottom" ? lane : fromAnchor;
            laneY = laneSide === "bottom"
                ? Math.min(containerHeight - 8, Math.max(fromOut.y, toIn.y) + laneGap)
                : Math.max(8, Math.min(fromOut.y, toIn.y) - laneGap);
        }

        return this.dedupePoints([
            from,
            fromOut,
            { x: fromOut.x, y: laneY },
            { x: toIn.x, y: laneY },
            toIn,
            to
        ]);
    }

    private dedupePoints(points: Point[]): Point[] {
        if (points.length === 0) return points;
        const out: Point[] = [points[0]];
        for (let i = 1; i < points.length; i += 1) {
            const prev = out[out.length - 1];
            const curr = points[i];
            if (prev.x !== curr.x || prev.y !== curr.y) out.push(curr);
        }
        return out;
    }

    private drawPath(overlay: FrameNode, points: Point[], color: RGB, thickness: number, name: string): ArrowDirection {
        if (points.length < 2) return "right";
        for (let i = 0; i < points.length - 1; i += 1) {
            const a = points[i];
            const b = points[i + 1];
            if (a.x !== b.x && a.y !== b.y) {
                const elbow = { x: b.x, y: a.y };
                this.drawSegment(overlay, a, elbow, color, thickness, `${name} ${i}a`);
                this.drawSegment(overlay, elbow, b, color, thickness, `${name} ${i}b`);
            } else {
                this.drawSegment(overlay, a, b, color, thickness, `${name} ${i}`);
            }
        }
        return this.getDirection(points[points.length - 2], points[points.length - 1]);
    }

    private drawSegment(overlay: FrameNode, start: Point, end: Point, color: RGB, thickness: number, name: string) {
        if (start.x === end.x && start.y === end.y) return;
        const line = figma.createFrame();
        line.name = name;
        line.fills = [{ type: "SOLID", color }];

        if (Math.abs(start.x - end.x) >= Math.abs(start.y - end.y)) {
            const x = Math.min(start.x, end.x);
            const width = Math.max(thickness, Math.abs(start.x - end.x));
            line.resize(width, thickness);
            line.x = x;
            line.y = start.y - thickness / 2;
        } else {
            const y = Math.min(start.y, end.y);
            const height = Math.max(thickness, Math.abs(start.y - end.y));
            line.resize(thickness, height);
            line.x = start.x - thickness / 2;
            line.y = y;
        }

        overlay.appendChild(line);
    }

    private getDirection(a: Point, b: Point): ArrowDirection {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        if (Math.abs(dx) >= Math.abs(dy)) {
            return dx >= 0 ? "right" : "left";
        }
        return dy >= 0 ? "down" : "up";
    }

    private drawArrowHead(overlay: FrameNode, tip: Point, direction: ArrowDirection, color: RGB, name: string) {
        const arrow = figma.createVector();
        let path = "";
        let x = tip.x;
        let y = tip.y;

        switch (direction) {
            case "left":
                path = "M 10 0 L 10 10 L 0 5 Z";
                x = tip.x;
                y = tip.y - 5;
                break;
            case "right":
                path = "M 0 0 L 10 5 L 0 10 Z";
                x = tip.x - 10;
                y = tip.y - 5;
                break;
            case "up":
                path = "M 0 10 L 5 0 L 10 10 Z";
                x = tip.x - 5;
                y = tip.y;
                break;
            case "down":
                path = "M 0 0 L 10 0 L 5 10 Z";
                x = tip.x - 5;
                y = tip.y - 10;
                break;
        }

        arrow.name = name;
        arrow.vectorPaths = [{ windingRule: "EVENODD", data: path }];
        arrow.fills = [{ type: "SOLID", color }];
        arrow.x = x;
        arrow.y = y;
        overlay.appendChild(arrow);
    }
}
