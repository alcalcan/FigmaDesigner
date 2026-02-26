import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Card } from "../Card/Card";

export interface AffinityNote {
    id: string;
    title: string;
    body: string;
    color?: RGB;
    width?: number;
}

export interface AffinityCluster {
    id: string;
    title: string;
    notes: AffinityNote[];
    noteColor?: RGB;
}

export interface AffinityRelation {
    id?: string;
    from: string;
    to: string;
    color?: RGB;
}

export interface AffinityMapModel {
    clusters: AffinityCluster[];
    relations?: AffinityRelation[];
}

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

export class AffinityMap extends BaseComponent {
    static note(id: string, title: string, body: string, options: Omit<AffinityNote, "id" | "title" | "body"> = {}): AffinityNote {
        return { id, title, body, ...options };
    }

    static cluster(id: string, title: string, notes: AffinityNote[], options: Omit<AffinityCluster, "id" | "title" | "notes"> = {}): AffinityCluster {
        return { id, title, notes, ...options };
    }

    static relation(from: string, to: string, options: Omit<AffinityRelation, "from" | "to"> = {}): AffinityRelation {
        return { from, to, ...options };
    }

    async create(props: ComponentProps): Promise<FrameNode> {
        const model = (props.model as AffinityMapModel | undefined) ?? this.createDefaultModel();
        const clusterGap = props.clusterGap ?? 24;
        const notesGap = props.notesGap ?? 12;
        const noteWidth = props.noteWidth ?? 150;
        const lineColor = (props.lineColor as RGB | undefined) ?? { r: 0.45, g: 0.45, b: 0.45 };
        const lineThickness = props.lineThickness ?? 2;

        const container = figma.createFrame();
        container.name = "Affinity Map";
        container.layoutMode = "HORIZONTAL";
        container.itemSpacing = clusterGap;
        container.fills = [];
        container.layoutAlign = "STRETCH";
        container.primaryAxisSizingMode = "AUTO";
        container.counterAxisSizingMode = "AUTO";
        container.layoutWrap = "NO_WRAP";
        container.clipsContent = false;
        container.paddingBottom = 20;

        const registry = new Map<string, FrameNode>();
        const cardMaker = new Card();

        for (const cluster of model.clusters) {
            const clusterContainer = figma.createFrame();
            clusterContainer.name = `Cluster: ${cluster.title}`;
            clusterContainer.layoutMode = "VERTICAL";
            clusterContainer.itemSpacing = 16;
            clusterContainer.fills = [];
            clusterContainer.primaryAxisSizingMode = "AUTO";
            clusterContainer.counterAxisSizingMode = "AUTO";
            clusterContainer.clipsContent = false;

            const titleText = figma.createText();
            await figma.loadFontAsync({ family: "Inter", style: "Medium" });
            titleText.fontName = { family: "Inter", style: "Medium" };
            titleText.characters = cluster.title;
            titleText.fontSize = 20;
            titleText.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
            clusterContainer.appendChild(titleText);

            const notesGrid = figma.createFrame();
            notesGrid.name = `Notes Grid ${cluster.id}`;
            notesGrid.layoutMode = "VERTICAL";
            notesGrid.itemSpacing = notesGap;
            notesGrid.fills = [];
            notesGrid.primaryAxisSizingMode = "AUTO";
            notesGrid.counterAxisSizingMode = "AUTO";
            notesGrid.clipsContent = false;
            clusterContainer.appendChild(notesGrid);

            for (const note of cluster.notes) {
                const card = await cardMaker.create({
                    variant: "elevated",
                    backgroundColor: note.color ?? cluster.noteColor ?? { r: 1.0, g: 0.95, b: 0.6 },
                    padding: 16,
                    cornerRadius: 0,
                    body: [
                        Card.text(note.title, { size: 14, weight: "Medium", color: { r: 0.2, g: 0.2, b: 0.2 } }),
                        Card.text(note.body, { size: 12, color: { r: 0.3, g: 0.3, b: 0.3 } })
                    ],
                    width: note.width ?? noteWidth
                }) as FrameNode;

                notesGrid.appendChild(card);
                registry.set(note.id, card);
            }

            container.appendChild(clusterContainer);
        }

        if ((model.relations?.length ?? 0) > 0) {
            const overlay = figma.createFrame();
            overlay.name = "Affinity Relations Overlay";
            container.appendChild(overlay);
            overlay.layoutPositioning = "ABSOLUTE";
            overlay.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            overlay.fills = [];
            overlay.clipsContent = true;
            overlay.resize(container.width, container.height);
            overlay.x = 0;
            overlay.y = 0;

            for (const relation of model.relations ?? []) {
                const fromNode = registry.get(relation.from);
                const toNode = registry.get(relation.to);
                if (!fromNode || !toNode) continue;
                const fromBox = this.getLocalBox(fromNode, container);
                const toBox = this.getLocalBox(toNode, container);
                const from: Point = {
                    x: fromBox.x + (toBox.x >= fromBox.x ? fromBox.width : 0),
                    y: fromBox.y + fromBox.height / 2
                };
                const to: Point = {
                    x: toBox.x + (toBox.x >= fromBox.x ? 0 : toBox.width),
                    y: toBox.y + toBox.height / 2
                };
                const isRightward = to.x >= from.x;
                const laneX = isRightward
                    ? Math.min(to.x, from.x + 18)
                    : Math.max(to.x, from.x - 18);
                const path: Point[] = Math.abs(from.y - to.y) < 0.5
                    ? [{ x: from.x, y: from.y }, { x: to.x, y: to.y }]
                    : [{ x: from.x, y: from.y }, { x: laneX, y: from.y }, { x: laneX, y: to.y }, { x: to.x, y: to.y }];
                this.drawPath(overlay, path, relation.color ?? lineColor, lineThickness, relation.id ?? `${relation.from}->${relation.to}`);
            }
        }

        return container;
    }

    private createDefaultModel(): AffinityMapModel {
        return {
            clusters: [
                AffinityMap.cluster("pain", "User Pain Points", [
                    AffinityMap.note("pain-1", "Observation 1", "User mentioned this specifically during the interview..."),
                    AffinityMap.note("pain-2", "Observation 2", "User mentioned this specifically during the interview..."),
                    AffinityMap.note("pain-3", "Observation 3", "User mentioned this specifically during the interview..."),
                    AffinityMap.note("pain-4", "Observation 4", "User mentioned this specifically during the interview..."),
                    AffinityMap.note("pain-5", "Observation 5", "User mentioned this specifically during the interview...")
                ], { noteColor: { r: 1.0, g: 0.95, b: 0.6 } }),
                AffinityMap.cluster("feature", "Feature Requests", [
                    AffinityMap.note("feature-1", "Observation 1", "User mentioned this specifically during the interview..."),
                    AffinityMap.note("feature-2", "Observation 2", "User mentioned this specifically during the interview..."),
                    AffinityMap.note("feature-3", "Observation 3", "User mentioned this specifically during the interview..."),
                    AffinityMap.note("feature-4", "Observation 4", "User mentioned this specifically during the interview...")
                ], { noteColor: { r: 0.7, g: 0.9, b: 0.95 } }),
                AffinityMap.cluster("positive", "Positive Feedback", [
                    AffinityMap.note("positive-1", "Observation 1", "User mentioned this specifically during the interview..."),
                    AffinityMap.note("positive-2", "Observation 2", "User mentioned this specifically during the interview..."),
                    AffinityMap.note("positive-3", "Observation 3", "User mentioned this specifically during the interview...")
                ], { noteColor: { r: 0.8, g: 0.95, b: 0.8 } }),
                AffinityMap.cluster("bugs", "Bug Reports", [
                    AffinityMap.note("bugs-1", "Observation 1", "User mentioned this specifically during the interview..."),
                    AffinityMap.note("bugs-2", "Observation 2", "User mentioned this specifically during the interview...")
                ], { noteColor: { r: 0.95, g: 0.75, b: 0.75 } })
            ],
            relations: [
                AffinityMap.relation("pain-2", "feature-1"),
                AffinityMap.relation("bugs-1", "feature-3")
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

    private drawPath(overlay: FrameNode, points: Point[], color: RGB, thickness: number, name: string) {
        for (let i = 0; i < points.length - 1; i += 1) {
            const a = points[i];
            const b = points[i + 1];
            if (a.x === b.x && a.y === b.y) continue;
            const line = figma.createFrame();
            line.name = `${name}:${i}`;
            line.fills = [{ type: "SOLID", color }];
            if (Math.abs(a.x - b.x) >= Math.abs(a.y - b.y)) {
                line.resize(Math.max(thickness, Math.abs(a.x - b.x)), thickness);
                line.x = Math.min(a.x, b.x);
                line.y = a.y - thickness / 2;
            } else {
                line.resize(thickness, Math.max(thickness, Math.abs(a.y - b.y)));
                line.x = a.x - thickness / 2;
                line.y = Math.min(a.y, b.y);
            }
            overlay.appendChild(line);
        }
    }
}
