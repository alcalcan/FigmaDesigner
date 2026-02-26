import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Card } from "../Card/Card";

export type SiteArchitectureAnchor = "auto" | "left" | "right" | "top" | "bottom";
export type SiteArchitectureLane = "auto" | "left" | "right" | "top" | "bottom";

export interface SiteArchitectureNode {
    id: string;
    label: string;
    level: number;
    column: number;
    width?: number;
    style?: "root" | "default";
    backgroundColor?: RGB;
    textColor?: RGB;
}

export interface SiteArchitectureConnector {
    id?: string;
    from: string;
    to: string;
    fromAnchor?: SiteArchitectureAnchor;
    toAnchor?: SiteArchitectureAnchor;
    lane?: SiteArchitectureLane;
    arrowAt?: "start" | "end" | "none";
    color?: RGB;
}

export interface SiteArchitectureModel {
    nodes: SiteArchitectureNode[];
    connectors: SiteArchitectureConnector[];
}

type ResolvedAnchor = Exclude<SiteArchitectureAnchor, "auto">;
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

export class SiteArchitecture extends BaseComponent {
    static node(id: string, label: string, options: Omit<SiteArchitectureNode, "id" | "label">): SiteArchitectureNode {
        return { id, label, ...options };
    }

    static connector(from: string, to: string, options: Omit<SiteArchitectureConnector, "from" | "to"> = {}): SiteArchitectureConnector {
        return { from, to, ...options };
    }

    async create(props: ComponentProps): Promise<FrameNode> {
        const model = (props.model as SiteArchitectureModel | undefined) ?? this.createDefaultModel();
        const levelGap = props.levelGap ?? 56;
        const columnGap = props.columnGap ?? 28;
        const defaultNodeWidth = props.nodeWidth ?? 150;
        const lineColor = (props.lineColor as RGB | undefined) ?? { r: 0, g: 0, b: 0 };
        const lineThickness = props.lineThickness ?? 2;

        const container = figma.createFrame();
        container.name = "Site Architecture";
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
        grid.name = "Site Architecture Grid";
        grid.layoutMode = "VERTICAL";
        grid.itemSpacing = levelGap;
        grid.fills = [];
        grid.primaryAxisSizingMode = "AUTO";
        grid.counterAxisSizingMode = "AUTO";
        grid.primaryAxisAlignItems = "MIN";
        grid.counterAxisAlignItems = "MIN";
        grid.clipsContent = false;
        container.appendChild(grid);

        const cardMaker = new Card();
        const registry = new Map<string, FrameNode>();
        const nodesByPos = new Map<string, string>();

        for (const node of model.nodes) {
            const isRoot = node.style === "root";
            const card = await cardMaker.create({
                variant: isRoot ? "filled" : "outlined",
                backgroundColor: isRoot ? (node.backgroundColor ?? { r: 0.9, g: 0.94, b: 0.98 }) : node.backgroundColor,
                padding: 16,
                cornerRadius: 8,
                body: [
                    Card.text(node.label, {
                        size: isRoot ? 16 : 14,
                        weight: isRoot ? "Medium" : "Regular",
                        color: node.textColor ?? (isRoot ? { r: 0.1, g: 0.2, b: 0.4 } : { r: 0.2, g: 0.2, b: 0.2 }),
                        align: "center"
                    })
                ],
                width: node.width ?? defaultNodeWidth
            }) as FrameNode;

            registry.set(node.id, card);
            nodesByPos.set(`${node.level}:${node.column}`, node.id);
        }

        const maxLevel = Math.max(...model.nodes.map((n) => n.level), 0);
        const maxCol = Math.max(...model.nodes.map((n) => n.column), 0);
        const levelHeights = new Array(maxLevel + 1).fill(1);
        const colWidths = new Array(maxCol + 1).fill(defaultNodeWidth);

        for (const node of model.nodes) {
            const card = registry.get(node.id);
            if (!card) continue;
            levelHeights[node.level] = Math.max(levelHeights[node.level], card.height);
            colWidths[node.column] = Math.max(colWidths[node.column], card.width);
        }

        for (let level = 0; level <= maxLevel; level += 1) {
            const row = figma.createFrame();
            row.name = `Level ${level}`;
            row.layoutMode = "HORIZONTAL";
            row.itemSpacing = columnGap;
            row.fills = [];
            row.primaryAxisSizingMode = "AUTO";
            row.counterAxisSizingMode = "AUTO";
            row.primaryAxisAlignItems = "MIN";
            row.counterAxisAlignItems = "MIN";
            row.clipsContent = false;

            for (let col = 0; col <= maxCol; col += 1) {
                const slot = figma.createFrame();
                slot.name = `Slot ${level}:${col}`;
                slot.layoutMode = "NONE";
                slot.fills = [];
                slot.clipsContent = false;
                slot.resize(colWidths[col], levelHeights[level]);
                row.appendChild(slot);

                const nodeId = nodesByPos.get(`${level}:${col}`);
                if (!nodeId) continue;
                const card = registry.get(nodeId);
                if (!card) continue;
                slot.appendChild(card);
                card.x = (slot.width - card.width) / 2;
                card.y = (slot.height - card.height) / 2;
            }

            grid.appendChild(row);
        }

        const overlay = figma.createFrame();
        overlay.name = "Site Connectors Overlay";
        container.appendChild(overlay);
        overlay.layoutPositioning = "ABSOLUTE";
        overlay.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        overlay.fills = [];
        overlay.clipsContent = true;
        overlay.resize(container.width, container.height);
        overlay.x = 0;
        overlay.y = 0;

        const connectors = model.connectors;
        const handled = new Set<number>();

        // Build cleaner one-to-many tree links with shared trunk + bar.
        for (let i = 0; i < connectors.length; i += 1) {
            if (handled.has(i)) continue;
            const conn = connectors[i];
            const fromAnchorRaw = conn.fromAnchor ?? "auto";
            const toAnchorRaw = conn.toAnchor ?? "auto";
            const laneRaw = conn.lane ?? "auto";
            const arrowRaw = conn.arrowAt ?? "none";
            if (fromAnchorRaw !== "bottom" || toAnchorRaw !== "top" || laneRaw !== "bottom" || arrowRaw !== "none") continue;

            const siblings: number[] = [i];
            for (let j = i + 1; j < connectors.length; j += 1) {
                if (handled.has(j)) continue;
                const other = connectors[j];
                if (other.from !== conn.from) continue;
                const otherFrom = other.fromAnchor ?? "auto";
                const otherTo = other.toAnchor ?? "auto";
                const otherLane = other.lane ?? "auto";
                const otherArrow = other.arrowAt ?? "none";
                if (otherFrom === "bottom" && otherTo === "top" && otherLane === "bottom" && otherArrow === "none") {
                    siblings.push(j);
                }
            }

            if (siblings.length < 2) continue;

            const fromNode = registry.get(conn.from);
            if (!fromNode) continue;
            const fromBox = this.getLocalBox(fromNode, container);
            const fromPoint = this.getAnchorPoint(fromBox, "bottom");

            const toPoints: Point[] = [];
            for (const idx of siblings) {
                const target = registry.get(connectors[idx].to);
                if (!target) continue;
                const toBox = this.getLocalBox(target, container);
                toPoints.push(this.getAnchorPoint(toBox, "top"));
            }
            if (toPoints.length < 2) continue;

            const minY = Math.min(...toPoints.map((p) => p.y));
            const splitY = Math.min(minY - 10, fromPoint.y + 24);
            const minX = Math.min(...toPoints.map((p) => p.x));
            const maxX = Math.max(...toPoints.map((p) => p.x));

            this.drawSegment(overlay, fromPoint, { x: fromPoint.x, y: splitY }, lineColor, lineThickness, `Split Trunk ${conn.from}`);
            this.drawSegment(overlay, { x: minX, y: splitY }, { x: maxX, y: splitY }, lineColor, lineThickness, `Split Bar ${conn.from}`);
            for (const toPoint of toPoints) {
                this.drawSegment(overlay, { x: toPoint.x, y: splitY }, toPoint, lineColor, lineThickness, `Split Stem ${conn.from}`);
            }

            for (const idx of siblings) handled.add(idx);
        }

        for (let i = 0; i < connectors.length; i += 1) {
            if (handled.has(i)) continue;
            const conn = connectors[i];
            const fromNode = registry.get(conn.from);
            const toNode = registry.get(conn.to);
            if (!fromNode || !toNode) continue;
            const fromBox = this.getLocalBox(fromNode, container);
            const toBox = this.getLocalBox(toNode, container);
            const fromAnchor = this.resolveAnchor(conn.fromAnchor ?? "auto", fromBox, toBox, true);
            const toAnchor = this.resolveAnchor(conn.toAnchor ?? "auto", fromBox, toBox, false);
            const from = this.getAnchorPoint(fromBox, fromAnchor);
            const to = this.getAnchorPoint(toBox, toAnchor);
            const path = this.buildOrthogonalPath(from, to, fromAnchor, toAnchor, conn.lane ?? "auto", container.width, container.height);
            const endDirection = this.drawPath(overlay, path, conn.color ?? lineColor, lineThickness, conn.id ?? `${conn.from}->${conn.to}`);
            const arrowAt = conn.arrowAt ?? "none";
            if (arrowAt === "end") {
                this.drawArrowHead(overlay, path[path.length - 1], endDirection, conn.color ?? lineColor, `${conn.id ?? conn.to} Arrow End`);
            } else if (arrowAt === "start" && path.length > 1) {
                this.drawArrowHead(overlay, path[0], this.getDirection(path[1], path[0]), conn.color ?? lineColor, `${conn.id ?? conn.from} Arrow Start`);
            }
        }

        return container;
    }

    private createDefaultModel(): SiteArchitectureModel {
        return {
            nodes: [
                SiteArchitecture.node("home", "Home (Index)", { style: "root", level: 0, column: 2, width: 170 }),
                SiteArchitecture.node("about", "About Us", { level: 1, column: 0, width: 140 }),
                SiteArchitecture.node("services", "Services", { level: 1, column: 2, width: 140 }),
                SiteArchitecture.node("contact", "Contact", { level: 1, column: 4, width: 140 }),
                SiteArchitecture.node("consulting", "Consulting", { level: 2, column: 1, width: 140 }),
                SiteArchitecture.node("integration", "Integration", { level: 2, column: 2, width: 140 }),
                SiteArchitecture.node("support", "Support", { level: 2, column: 3, width: 140 })
            ],
            connectors: [
                SiteArchitecture.connector("home", "about", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                SiteArchitecture.connector("home", "services", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                SiteArchitecture.connector("home", "contact", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                SiteArchitecture.connector("services", "consulting", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                SiteArchitecture.connector("services", "integration", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                SiteArchitecture.connector("contact", "support", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                SiteArchitecture.connector("support", "services", { fromAnchor: "left", toAnchor: "right", lane: "bottom", arrowAt: "end" })
            ]
        };
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

    private resolveAnchor(anchor: SiteArchitectureAnchor, fromBox: NodeBox, toBox: NodeBox, isSource: boolean): ResolvedAnchor {
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

    private buildOrthogonalPath(from: Point, to: Point, fromAnchor: ResolvedAnchor, toAnchor: ResolvedAnchor, lane: SiteArchitectureLane, width: number, height: number): Point[] {
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
