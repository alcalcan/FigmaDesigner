import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { Lucide_chevron_right } from "../../lucide_icons/Lucide_chevron_right/Lucide_chevron_right";
import { Lucide_chevron_down } from "../../lucide_icons/Lucide_chevron_down/Lucide_chevron_down";
import { Lucide_plus } from "../../lucide_icons/Lucide_plus/Lucide_plus";
import { Lucide_check } from "../../lucide_icons/Lucide_check/Lucide_check";

export interface TreeViewNodeItem {
    title: string;
    subTitle?: string;
    description?: string;

    iconType?: "chevron-right" | "chevron-down" | "plus" | "plus-filled" | "empty-circle" | "check";
    iconColor?: { r: number, g: number, b: number } | "blue" | "grey" | "black" | "transparent";

    status?: "completed" | "active" | "inactive";
    isExpanded?: boolean;
    indentLevel?: number; // Supports hierarchical structures

    hasTextArea?: boolean;
    bottomActionNode?: string;
}

export interface TreeViewProps extends ComponentProps {
    nodes: TreeViewNodeItem[];
    lineColor?: { r: number, g: number, b: number };
    themeColor?: { r: number, g: number, b: number }; // usually blue
    paddingLeft?: number;
    paddingRight?: number;
    itemContentPaddingRight?: number;
}

export class tree_view extends BaseComponent {
    private getColor(colorArg: TreeViewNodeItem["iconColor"], fallback: { r: number, g: number, b: number }): { r: number, g: number, b: number } {
        if (!colorArg) return fallback;
        if (typeof colorArg === "string") {
            switch (colorArg) {
                case "blue": return { r: 0.1, g: 0.4, b: 0.8 };
                case "grey": return { r: 0.4, g: 0.4, b: 0.4 };
                case "black": return { r: 0.1, g: 0.1, b: 0.1 };
                case "transparent": return { r: 1, g: 1, b: 1 }; // Render white to "hide" on white background
                default: return fallback;
            }
        }
        return colorArg;
    }

    private getIconComponent(iconType: TreeViewNodeItem["iconType"]): NodeDefinition["component"] | null {
        switch (iconType) {
            case "chevron-right": return Lucide_chevron_right;
            case "chevron-down": return Lucide_chevron_down;
            case "plus": return Lucide_plus;
            case "plus-filled": return Lucide_plus;
            case "check": return Lucide_check;
            default: return null;
        }
    }

    private normalizeIndentLevel(level: number | undefined): number {
        if (typeof level !== "number" || Number.isNaN(level)) return 0;
        return Math.max(0, Math.floor(level));
    }

    private nodeHasNextSibling(levels: number[], index: number): boolean {
        const currentLevel = levels[index];
        for (let j = index + 1; j < levels.length; j++) {
            const nextLevel = levels[j];
            if (nextLevel === currentLevel) return true;
            if (nextLevel < currentLevel) return false;
        }
        return false;
    }

    private buildConnectorState(nodes: TreeViewNodeItem[]): {
        levels: number[];
        hasChildren: boolean[];
        hasNextSibling: boolean[];
        ancestorLines: boolean[][];
    } {
        const levels = nodes.map((node) => this.normalizeIndentLevel(node.indentLevel));
        const hasNextSibling = levels.map((_level, index) => this.nodeHasNextSibling(levels, index));
        const hasChildren = levels.map((level, index) => index < levels.length - 1 && levels[index + 1] > level);
        const ancestorLines: boolean[][] = [];
        const activePathNodeByLevel: number[] = [];

        const lineEndsAt: number[] = [];
        for (let i = 0; i < levels.length; i++) {
            const level = levels[i];
            if (hasNextSibling[i]) {
                lineEndsAt[i] = Infinity;
            } else {
                let lastChildIndex = i;
                for (let j = i + 1; j < levels.length; j++) {
                    if (levels[j] <= level) break;
                    if (levels[j] === level + 1) {
                        lastChildIndex = j;
                    }
                }
                lineEndsAt[i] = lastChildIndex;
            }
        }

        for (let i = 0; i < levels.length; i++) {
            const level = levels[i];

            while (activePathNodeByLevel.length > level) {
                activePathNodeByLevel.pop();
            }

            ancestorLines[i] = activePathNodeByLevel.map((ancestorIndex) => i <= lineEndsAt[ancestorIndex]);
            activePathNodeByLevel[level] = i;
            activePathNodeByLevel.length = level + 1;
        }

        return { levels, hasChildren, hasNextSibling, ancestorLines };
    }

    private isSelectedPreviewNode(node: TreeViewNodeItem | undefined): boolean {
        if (!node) return false;
        const hasPreviewContent = Boolean(node.description || node.hasTextArea || node.bottomActionNode);
        return node.isExpanded === true && (hasPreviewContent || node.status === "active");
    }

    async create(props: TreeViewProps): Promise<SceneNode> {
        const defaultLineColor = props.lineColor ?? { r: 0.85, g: 0.87, b: 0.9 }; // Light Grey
        const defaultThemeColor = props.themeColor ?? { r: 0.08, g: 0.38, b: 0.8 }; // Blue
        const rootPaddingLeft = props.paddingLeft ?? 0;
        const rootPaddingRight = props.paddingRight ?? 0;
        const itemContentPaddingRight = props.itemContentPaddingRight ?? 20;
        const connectorState = this.buildConnectorState(props.nodes);

        const rootProps: NodeDefinition["props"] = {
            layoutMode: "VERTICAL",
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "FIXED",
            fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
            itemSpacing: 0,
            paddingLeft: rootPaddingLeft,
            paddingRight: rootPaddingRight,
            paddingTop: 16,
            paddingBottom: 16
        };

        const children: NodeDefinition[] = [];

        for (let i = 0; i < props.nodes.length; i++) {
            const node = props.nodes[i];
            const isLast = i === props.nodes.length - 1;
            const isSelectedPreview = this.isSelectedPreviewNode(node);
            const isAfterSelectedPreview = i > 0 && this.isSelectedPreviewNode(props.nodes[i - 1]);

            const iconColor = this.getColor(node.iconColor, node.status === "active" || node.status === "completed" ? defaultThemeColor : { r: 0.6, g: 0.6, b: 0.6 });
            const isTransparent = node.iconColor === "transparent";

            const leftColumn: NodeDefinition = {
                type: "FRAME",
                name: `Left Column - Node ${i + 1}`,
                layoutProps: { parentIsAutoLayout: true, layoutAlign: "STRETCH", width: 48 },
                props: {
                    layoutMode: "VERTICAL",
                    primaryAxisSizingMode: "FIXED",
                    counterAxisSizingMode: "FIXED",
                    primaryAxisAlignItems: "MIN",
                    counterAxisAlignItems: "CENTER",
                    fills: [],
                    clipsContent: false
                },
                children: []
            };

            // Build Icon Node
            let iconNode: NodeDefinition;

            if (node.iconType === "empty-circle" || !node.iconType) {
                iconNode = {
                    type: "ELLIPSE",
                    name: "Indicator",
                    layoutProps: { width: 16, height: 16 },
                    props: {
                        fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                        strokes: isTransparent ? [] : [{ type: "SOLID", color: iconColor }],
                        strokeWeight: isTransparent ? 0 : 2
                    }
                };
            } else if (node.iconType === "plus-filled") {
                iconNode = {
                    type: "FRAME",
                    name: "Indicator Filled",
                    layoutProps: { width: 24, height: 24 },
                    props: {
                        fills: [{ type: "SOLID", color: iconColor }],
                        cornerRadius: 12,
                        layoutMode: "HORIZONTAL",
                        primaryAxisAlignItems: "CENTER",
                        counterAxisAlignItems: "CENTER"
                    },
                    children: [{
                        type: "COMPONENT",
                        component: this.getIconComponent("plus") ?? undefined,
                        name: "Plus",
                        props: { color: { r: 1, g: 1, b: 1 }, width: 14 }
                    }]
                };
            } else {
                const isCheckIndicator = node.iconType === "check";
                iconNode = {
                    type: "FRAME",
                    name: "Indicator Outline",
                    layoutProps: { width: 24, height: 24 },
                    props: {
                        fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                        strokes: [{ type: "SOLID", color: iconColor }],
                        strokeWeight: 2,
                        cornerRadius: 12,
                        layoutMode: isCheckIndicator ? "VERTICAL" : "HORIZONTAL",
                        primaryAxisAlignItems: "CENTER",
                        counterAxisAlignItems: "CENTER"
                    },
                    children: [{
                        type: "COMPONENT",
                        component: this.getIconComponent(node.iconType) ?? undefined,
                        name: "Icon",
                        props: { color: iconColor, width: isCheckIndicator ? 14 : 16, height: isCheckIndicator ? 14 : 16 }
                    }]
                };
            }

            if (!isTransparent) {
                leftColumn.children!.push({
                    type: "FRAME",
                    name: "Icon Top Compensation",
                    layoutProps: { width: 48, height: 10, parentIsAutoLayout: true },
                    props: {
                        fills: []
                    }
                });

                leftColumn.children!.push({
                    type: "FRAME",
                    name: "Icon Wrapper",
                    layoutProps: { width: 48, height: 24, parentIsAutoLayout: true },
                    props: {
                        layoutMode: "HORIZONTAL",
                        primaryAxisAlignItems: "CENTER",
                        counterAxisAlignItems: "CENTER",
                        fills: []
                    },
                    children: [iconNode]
                });
            }

            const level = connectorState.levels[i];

            const guideCols: NodeDefinition[] = [];
            for (let k = 0; k < level; k++) {
                const isActive = connectorState.ancestorLines[i][k] ?? false;

                guideCols.push({
                    type: "FRAME",
                    name: `Guide Level ${k}`,
                    layoutProps: { width: 48, layoutAlign: "STRETCH", parentIsAutoLayout: true },
                    props: {
                        layoutMode: "VERTICAL",
                        primaryAxisSizingMode: "FIXED",
                        primaryAxisAlignItems: "MIN",
                        counterAxisAlignItems: "CENTER",
                        fills: [],
                        clipsContent: false
                    },
                    children: isActive ? [{
                        type: "FRAME",
                        name: "Guide Line",
                        layoutProps: { width: 2, height: 16, layoutGrow: 1, parentIsAutoLayout: true },
                        props: { fills: [{ type: "SOLID", color: defaultLineColor }] }
                    }] : []
                });
            }

            const isLineContinuingDown = connectorState.hasChildren[i] || connectorState.hasNextSibling[i];

            if (isLineContinuingDown && !isTransparent) {
                leftColumn.children!.push({
                    type: "FRAME",
                    name: "Vertical Line",
                    layoutProps: { width: 2, height: 16, layoutGrow: 1, parentIsAutoLayout: true },
                    props: {
                        fills: [{ type: "SOLID", color: defaultLineColor }]
                    }
                });
            }

            const rightColumn: NodeDefinition = {
                type: "FRAME",
                name: `Right Column - Node ${i + 1}`,
                layoutProps: { layoutGrow: 1, parentIsAutoLayout: true },
                props: {
                    layoutMode: "VERTICAL",
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "AUTO",
                    paddingTop: 12,
                    paddingBottom: isSelectedPreview ? 16 : (isLast ? 12 : 32),
                    paddingRight: itemContentPaddingRight,
                    itemSpacing: 8,
                    fills: []
                },
                children: []
            };

            const headerFrame: NodeDefinition = {
                type: "FRAME",
                name: "Header",
                layoutProps: { layoutAlign: "STRETCH" },
                props: {
                    layoutMode: "VERTICAL",
                    itemSpacing: 4,
                    fills: []
                },
                children: [{
                    type: "TEXT",
                    name: "Title",
                    layoutProps: { layoutAlign: "STRETCH" },
                    props: {
                        characters: node.title,
                        fontSize: 16,
                        font: { family: "Inter", style: node.status === "active" ? "Bold" : "Medium" },
                        fills: [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }]
                    }
                }]
            };

            if (node.subTitle) {
                headerFrame.children!.push({
                    type: "TEXT",
                    name: "SubTitle",
                    layoutProps: { layoutAlign: "STRETCH" },
                    props: {
                        characters: node.subTitle,
                        fontSize: 14,
                        font: { family: "Inter", style: "Semi Bold" },
                        fills: [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }]
                    }
                });
            }

            rightColumn.children!.push(headerFrame);

            if (node.description && node.isExpanded) {
                rightColumn.children!.push({
                    type: "TEXT",
                    name: "Description",
                    layoutProps: { layoutAlign: "STRETCH" },
                    props: {
                        characters: node.description,
                        fontSize: 14,
                        font: { family: "Inter", style: "Regular" },
                        fills: [{ type: "SOLID", color: { r: 0.3, g: 0.3, b: 0.3 } }]
                    }
                });
            }

            if (node.hasTextArea && node.isExpanded) {
                rightColumn.children!.push({
                    type: "FRAME",
                    name: "Text Area",
                    layoutProps: { layoutAlign: "STRETCH", height: 100 },
                    props: {
                        fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                        strokes: [{ type: "SOLID", color: { r: 0.8, g: 0.8, b: 0.8 } }],
                        strokeWeight: 1,
                        cornerRadius: 6,
                        paddingTop: 12,
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingBottom: 12
                    },
                    children: [{
                        type: "TEXT",
                        name: "Input Placeholder",
                        props: {
                            characters: "The principal activity of the company continued to be...",
                            fontSize: 14,
                            font: { family: "Inter", style: "Regular" },
                            fills: [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }]
                        }
                    }]
                });
            }

            if (node.bottomActionNode && node.isExpanded) {
                rightColumn.children!.push({
                    type: "FRAME",
                    name: "Action Button Wrapper",
                    layoutProps: { layoutAlign: "STRETCH" }, // Keep wrapping container stretched
                    props: {
                        layoutMode: "HORIZONTAL",
                        primaryAxisSizingMode: "AUTO",
                        counterAxisSizingMode: "AUTO",
                        fills: []
                    },
                    children: [{
                        type: "FRAME",
                        name: "Action Bar",
                        layoutProps: { width: 140, height: 36 }, // Make it a compact button
                        props: {
                            layoutMode: "HORIZONTAL",
                            primaryAxisAlignItems: "CENTER",
                            counterAxisAlignItems: "CENTER",
                            itemSpacing: 4,
                            fills: [{ type: "SOLID", color: defaultThemeColor }],
                            cornerRadius: 4
                        },
                        children: [
                            {
                                type: "TEXT",
                                name: "Action Text",
                                props: {
                                    characters: node.bottomActionNode,
                                    fontSize: 13,
                                    font: { family: "Inter", style: "Medium" },
                                    fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]
                                }
                            },
                            {
                                type: "COMPONENT",
                                component: this.getIconComponent("plus") ?? undefined,
                                name: "Action Icon",
                                props: { color: { r: 1, g: 1, b: 1 }, width: 16 }
                            }
                        ]
                    }]
                });
            }

            // Note on bugfix: counterAxisAlignItems must be MIN or CENTER for horizontal layoutMode
            const nodeRow: NodeDefinition = {
                type: "FRAME",
                name: `Node Row ${i + 1}`,
                layoutProps: { layoutAlign: "STRETCH", parentIsAutoLayout: true },
                props: {
                    layoutMode: "HORIZONTAL",
                    primaryAxisSizingMode: "FIXED",
                    counterAxisSizingMode: "AUTO",
                    primaryAxisAlignItems: "MIN",
                    counterAxisAlignItems: "MIN", // STRETCH is invalid!
                    itemSpacing: 0,
                    paddingTop: isAfterSelectedPreview ? 14 : 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    fills: isSelectedPreview
                        ? [
                            {
                                visible: true,
                                opacity: 1,
                                blendMode: "NORMAL",
                                type: "GRADIENT_LINEAR",
                                gradientStops: [
                                    { color: { r: 1, g: 1, b: 1, a: 1 }, position: 0 },
                                    { color: { r: 0.98, g: 0.99, b: 1, a: 0.96 }, position: 1 }
                                ],
                                gradientTransform: [
                                    [0.690418004989624, 0.38661691546440125, -0.044504158198833466],
                                    [-0.38661691546440125, 0.37372609972953796, 0.49469995498657227]
                                ]
                            }
                        ]
                        : [],
                    strokes: isSelectedPreview ? [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 1 }] : [],
                    strokeWeight: isSelectedPreview ? 2 : 0,
                    strokeAlign: isSelectedPreview ? "OUTSIDE" : "INSIDE",
                    cornerRadius: isSelectedPreview ? 16 : 0,
                    effects: isSelectedPreview
                        ? [
                            { visible: true, type: "BACKGROUND_BLUR", radius: 24, blurType: "NORMAL" },
                            {
                                visible: true,
                                blendMode: "NORMAL",
                                type: "DROP_SHADOW",
                                radius: 24,
                                color: { r: 0.05, g: 0.1, b: 0.2, a: 0.08 },
                                offset: { x: 0, y: 10 },
                                spread: 0,
                                showShadowBehindNode: true
                            },
                            {
                                visible: true,
                                blendMode: "NORMAL",
                                type: "DROP_SHADOW",
                                radius: 4,
                                color: { r: 0, g: 0, b: 0, a: 0.03 },
                                offset: { x: 0, y: 2 },
                                spread: 0,
                                showShadowBehindNode: true
                            }
                        ]
                        : [],
                    clipsContent: false
                },
                children: [...guideCols, leftColumn, rightColumn]
            };

            children.push(nodeRow);
        }

        const structure: NodeDefinition = {
            type: "FRAME",
            name: "TreeView",
            props: rootProps,
            layoutProps: {
                width: props.width ?? 600,
                layoutAlign: "INHERIT"
            },
            children: children
        };

        const root = await this.renderDefinition(structure);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
