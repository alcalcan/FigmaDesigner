import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Card } from "../Card/Card";

export type FlowDiagramAnchor = "auto" | "left" | "right" | "top" | "bottom";
export type FlowDiagramLane = "auto" | "left" | "right" | "top" | "bottom";

export interface FlowDiagramNode {
    id: string;
    title: string;
    desc?: string;
    color?: RGB;
    row?: number;
    column: number;
    width?: number;
}

export interface FlowDiagramConnector {
    id?: string;
    from: string;
    to: string;
    fromAnchor?: FlowDiagramAnchor;
    toAnchor?: FlowDiagramAnchor;
    lane?: FlowDiagramLane;
    arrowAt?: "start" | "end" | "none";
    color?: RGB;
}

export interface FlowDiagramModel {
    nodes: FlowDiagramNode[];
    connectors?: FlowDiagramConnector[];
}

type ResolvedAnchor = Exclude<FlowDiagramAnchor, "auto">;
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

export class FlowDiagram extends BaseComponent {
    static node(id: string, title: string, options: Omit<FlowDiagramNode, "id" | "title">): FlowDiagramNode {
        return { id, title, ...options };
    }

    static connector(from: string, to: string, options: Omit<FlowDiagramConnector, "from" | "to"> = {}): FlowDiagramConnector {
        return { from, to, ...options };
    }

    async create(props: ComponentProps): Promise<FrameNode> {
        const model = (props.model as FlowDiagramModel | undefined) ?? this.createDefaultModel();
        const rowGap = props.rowGap ?? 56;
        const columnGap = props.columnGap ?? 24;
        const stepWidth = props.stepWidth ?? 180;
        const lineThickness = props.lineThickness ?? 2;
        const lineColor = (props.lineColor as RGB | undefined) ?? { r: 0, g: 0, b: 0 };

        const container = figma.createFrame();
        container.name = "Flow Diagram";
        container.layoutMode = "VERTICAL";
        container.itemSpacing = 0;
        container.fills = [];
        container.primaryAxisSizingMode = "AUTO";
        container.counterAxisSizingMode = "AUTO";
        container.primaryAxisAlignItems = "MIN";
        container.counterAxisAlignItems = "MIN";
        container.clipsContent = false;
        container.paddingRight = 40;

        const grid = figma.createFrame();
        grid.name = "Flow Grid";
        grid.layoutMode = "VERTICAL";
        grid.itemSpacing = rowGap;
        grid.fills = [];
        grid.primaryAxisSizingMode = "AUTO";
        grid.counterAxisSizingMode = "AUTO";
        grid.primaryAxisAlignItems = "MIN";
        grid.counterAxisAlignItems = "MIN";
        grid.clipsContent = false;
        container.appendChild(grid);

        const cardMaker = new Card();
        const nodeRegistry = new Map<string, FrameNode>();
        const nodesByPos = new Map<string, string>();

        for (const node of model.nodes) {
            const card = await cardMaker.create({
                variant: "outlined",
                padding: 16,
                cornerRadius: 8,
                body: [
                    Card.text(node.title, { size: 16, weight: "Semi Bold", color: node.color ?? { r: 0.1, g: 0.1, b: 0.1 } }),
                    Card.text(node.desc ?? "", { size: 13, color: { r: 0.4, g: 0.4, b: 0.4 } })
                ],
                width: node.width ?? stepWidth
            }) as FrameNode;

            const topIndicator = figma.createFrame();
            topIndicator.resize(card.width, 4);
            topIndicator.fills = [{ type: "SOLID", color: node.color ?? { r: 0.2, g: 0.2, b: 0.2 } }];
            topIndicator.cornerRadius = 2;
            card.appendChild(topIndicator);
            topIndicator.layoutPositioning = "ABSOLUTE";
            topIndicator.x = 0;
            topIndicator.y = 0;

            const row = node.row ?? 0;
            const col = node.column;
            nodeRegistry.set(node.id, card);
            nodesByPos.set(`${row}:${col}`, node.id);
        }

        const rows = model.nodes.map((n) => n.row ?? 0);
        const cols = model.nodes.map((n) => n.column);
        const maxRow = rows.length ? Math.max(...rows) : 0;
        const maxCol = cols.length ? Math.max(...cols) : 0;
        const rowHeights = new Array(maxRow + 1).fill(1);
        const colWidths = new Array(maxCol + 1).fill(stepWidth);

        for (const node of model.nodes) {
            const card = nodeRegistry.get(node.id);
            if (!card) continue;
            const row = node.row ?? 0;
            const col = node.column;
            rowHeights[row] = Math.max(rowHeights[row], card.height);
            colWidths[col] = Math.max(colWidths[col], card.width);
        }

        for (let r = 0; r <= maxRow; r += 1) {
            const rowFrame = figma.createFrame();
            rowFrame.name = `Row ${r}`;
            rowFrame.layoutMode = "HORIZONTAL";
            rowFrame.itemSpacing = columnGap;
            rowFrame.fills = [];
            rowFrame.primaryAxisSizingMode = "AUTO";
            rowFrame.counterAxisSizingMode = "AUTO";
            rowFrame.primaryAxisAlignItems = "MIN";
            rowFrame.counterAxisAlignItems = "MIN";
            rowFrame.clipsContent = false;

            for (let c = 0; c <= maxCol; c += 1) {
                const slot = figma.createFrame();
                slot.name = `Slot ${r}:${c}`;
                slot.layoutMode = "NONE";
                slot.fills = [];
                slot.clipsContent = false;
                slot.resize(colWidths[c], rowHeights[r]);
                rowFrame.appendChild(slot);

                const nodeId = nodesByPos.get(`${r}:${c}`);
                if (!nodeId) continue;
                const card = nodeRegistry.get(nodeId);
                if (!card) continue;
                slot.appendChild(card);
                card.x = (slot.width - card.width) / 2;
                card.y = (slot.height - card.height) / 2;
            }

            grid.appendChild(rowFrame);
        }

        const overlay = figma.createFrame();
        overlay.name = "Flow Connectors Overlay";
        container.appendChild(overlay);
        overlay.layoutPositioning = "ABSOLUTE";
        overlay.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        overlay.fills = [];
        overlay.clipsContent = true;
        overlay.resize(container.width, container.height);
        overlay.x = 0;
        overlay.y = 0;

        const connectors = model.connectors ?? this.buildDefaultConnectors(model);
        for (const conn of connectors) {
            const fromNode = nodeRegistry.get(conn.from);
            const toNode = nodeRegistry.get(conn.to);
            if (!fromNode || !toNode) continue;

            const fromBox = this.getLocalBox(fromNode, container);
            const toBox = this.getLocalBox(toNode, container);
            const fromAnchor = this.resolveAnchor(conn.fromAnchor ?? "auto", fromBox, toBox, true);
            const toAnchor = this.resolveAnchor(conn.toAnchor ?? "auto", fromBox, toBox, false);
            const from = this.getAnchorPoint(fromBox, fromAnchor);
            const to = this.getAnchorPoint(toBox, toAnchor);
            const path = this.buildOrthogonalPath(from, to, fromAnchor, toAnchor, conn.lane ?? "auto", container.width, container.height);
            const endDir = this.drawPath(overlay, path, conn.color ?? lineColor, lineThickness, conn.id ?? `${conn.from}->${conn.to}`);
            const arrowAt = conn.arrowAt ?? "end";
            if (arrowAt === "end") {
                this.drawArrowHead(overlay, path[path.length - 1], endDir, conn.color ?? lineColor, `Arrow ${conn.id ?? conn.to}`);
            } else if (arrowAt === "start" && path.length > 1) {
                this.drawArrowHead(overlay, path[0], this.getDirection(path[1], path[0]), conn.color ?? lineColor, `Arrow ${conn.id ?? conn.from}`);
            }
        }

        return container;
    }

    private createDefaultModel(): FlowDiagramModel {
        const nodes: FlowDiagramNode[] = [
            FlowDiagram.node("home", "Homepage", { desc: "User lands on main page", color: { r: 0.2, g: 0.6, b: 0.9 }, row: 0, column: 0 }),
            FlowDiagram.node("product", "Product Detail", { desc: "Views a specific item", color: { r: 0.6, g: 0.4, b: 0.8 }, row: 0, column: 1 }),
            FlowDiagram.node("cart", "Cart", { desc: "Adds item to cart", color: { r: 0.9, g: 0.5, b: 0.2 }, row: 0, column: 2 }),
            FlowDiagram.node("checkout", "Checkout", { desc: "Completes purchase", color: { r: 0.2, g: 0.7, b: 0.4 }, row: 0, column: 3 }),
            FlowDiagram.node("saved-cart", "Saved Cart", { desc: "Persist cart for later", color: { r: 0.95, g: 0.65, b: 0.25 }, row: 1, column: 2 }),
            FlowDiagram.node("support", "Assisted Checkout", { desc: "Escalates to support", color: { r: 0.85, g: 0.45, b: 0.45 }, row: 1, column: 3 })
        ];
        const connectors: FlowDiagramConnector[] = [
            FlowDiagram.connector("home", "product"),
            FlowDiagram.connector("product", "cart"),
            FlowDiagram.connector("cart", "checkout"),
            FlowDiagram.connector("cart", "saved-cart", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
            FlowDiagram.connector("saved-cart", "checkout", { fromAnchor: "right", toAnchor: "bottom", lane: "right" }),
            FlowDiagram.connector("checkout", "support", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" })
        ];
        return { nodes, connectors };
    }

    private buildDefaultConnectors(model: FlowDiagramModel): FlowDiagramConnector[] {
        const topRow = model.nodes.filter((n) => (n.row ?? 0) === 0).sort((a, b) => a.column - b.column);
        const out: FlowDiagramConnector[] = [];
        for (let i = 0; i < topRow.length - 1; i += 1) {
            out.push(FlowDiagram.connector(topRow[i].id, topRow[i + 1].id));
        }
        return out;
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

    private resolveAnchor(anchor: FlowDiagramAnchor, fromBox: NodeBox, toBox: NodeBox, isSource: boolean): ResolvedAnchor {
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
            case "left": return { x: box.x, y: box.y + box.height / 2 };
            case "right": return { x: box.x + box.width, y: box.y + box.height / 2 };
            case "top": return { x: box.x + box.width / 2, y: box.y };
            case "bottom": return { x: box.x + box.width / 2, y: box.y + box.height };
        }
    }

    private buildOrthogonalPath(from: Point, to: Point, fromAnchor: ResolvedAnchor, toAnchor: ResolvedAnchor, lane: FlowDiagramLane, width: number, height: number): Point[] {
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
            return this.dedupe([from, to]);
        }

        const fromOut = offset(from, fromAnchor);
        const toIn = offset(to, toAnchor);

        if (fromAnchor === "left" || fromAnchor === "right") {
            const needsBacktrack = fromAnchor === "right" ? toIn.x < fromOut.x : toIn.x > fromOut.x;
            let laneX = fromOut.x;
            if (needsBacktrack || lane === "left" || lane === "right") {
                const laneSide = lane === "left" || lane === "right" ? lane : fromAnchor;
                laneX = laneSide === "right"
                    ? Math.min(width - 8, Math.max(fromOut.x, toIn.x) + laneGap)
                    : Math.max(8, Math.min(fromOut.x, toIn.x) - laneGap);
            }
            return this.dedupe([from, fromOut, { x: laneX, y: fromOut.y }, { x: laneX, y: toIn.y }, toIn, to]);
        }

        const needsBacktrack = fromAnchor === "bottom" ? toIn.y < fromOut.y : toIn.y > fromOut.y;
        let laneY = fromOut.y;
        if (needsBacktrack || lane === "top" || lane === "bottom") {
            const laneSide = lane === "top" || lane === "bottom" ? lane : fromAnchor;
            laneY = laneSide === "bottom"
                ? Math.min(height - 8, Math.max(fromOut.y, toIn.y) + laneGap)
                : Math.max(8, Math.min(fromOut.y, toIn.y) - laneGap);
        }
        return this.dedupe([from, fromOut, { x: fromOut.x, y: laneY }, { x: toIn.x, y: laneY }, toIn, to]);
    }

    private dedupe(points: Point[]): Point[] {
        if (!points.length) return points;
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
            this.drawSegment(overlay, points[i], points[i + 1], color, thickness, `${name}:${i}`);
        }
        return this.getDirection(points[points.length - 2], points[points.length - 1]);
    }

    private drawSegment(overlay: FrameNode, start: Point, end: Point, color: RGB, thickness: number, name: string) {
        if (start.x === end.x && start.y === end.y) return;
        const line = figma.createFrame();
        line.name = name;
        line.fills = [{ type: "SOLID", color }];
        if (Math.abs(start.x - end.x) >= Math.abs(start.y - end.y)) {
            line.resize(Math.max(thickness, Math.abs(start.x - end.x)), thickness);
            line.x = Math.min(start.x, end.x);
            line.y = start.y - thickness / 2;
        } else {
            line.resize(thickness, Math.max(thickness, Math.abs(start.y - end.y)));
            line.x = start.x - thickness / 2;
            line.y = Math.min(start.y, end.y);
        }
        overlay.appendChild(line);
    }

    private getDirection(a: Point, b: Point): ArrowDirection {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        if (Math.abs(dx) >= Math.abs(dy)) return dx >= 0 ? "right" : "left";
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
