import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { Lucide_chevron_right } from "../../lucide_icons/Lucide_chevron_right/Lucide_chevron_right";
import { Lucide_chevron_down } from "../../lucide_icons/Lucide_chevron_down/Lucide_chevron_down";
import { Lucide_plus } from "../../lucide_icons/Lucide_plus/Lucide_plus";
import { Lucide_check } from "../../lucide_icons/Lucide_check/Lucide_check";
import { Lucide_minus } from "../../lucide_icons/Lucide_minus/Lucide_minus";

export interface TreeViewNodeItem {
    title: string;
    subTitle?: string;
    description?: string;

    iconType?: "chevron-right" | "chevron-down" | "plus" | "plus-filled" | "empty-circle" | "check";
    iconColor?: { r: number, g: number, b: number } | "blue" | "grey" | "black" | "transparent";

    status?: "completed" | "active" | "inactive";
    isExpanded?: boolean;
    indentLevel?: number; // Supports hierarchical structures

    checkbox?: boolean | "indeterminate";
    customIcon?: NodeDefinition;
    rightContent?: NodeDefinition[];
    expandedContent?: NodeDefinition[];
    isHovered?: boolean;
    isDisabled?: boolean;

    hasTextArea?: boolean;
    extendGuideLines?: boolean;
    bottomActionNode?: string;
}

export interface TreeViewProps extends ComponentProps {
    nodes: TreeViewNodeItem[];
    lineColor?: { r: number, g: number, b: number };
    themeColor?: { r: number, g: number, b: number }; // usually blue
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    itemContentPaddingLeft?: number;
    itemContentPaddingRight?: number;
    itemPaddingVertical?: number;
    itemPaddingHorizontal?: number;
    dense?: boolean;
    leftColumnPaddingTop?: number;
}

export class tree_view extends BaseComponent {
    // --- Semantic Node Builders ---
    static textNode(text: string, propsDef: any = {}): NodeDefinition {
        return {
            type: "TEXT",
            props: { characters: text, fontSize: propsDef.size ?? 13, font: { family: "Inter", style: propsDef.weight ?? "Regular" }, fills: [{ type: "SOLID", color: propsDef.color ?? { r: 0.3, g: 0.3, b: 0.3 } }] }
        };
    }

    static badge(text: string, colorVariant: "grey" | "warning" = "grey"): NodeDefinition {
        const isGrey = colorVariant === "grey";
        const fillColor = isGrey ? { r: 0.93, g: 0.94, b: 0.96 } : { r: 0.97, g: 0.92, b: 0.82 };
        const textColor = isGrey ? { r: 0.33, g: 0.37, b: 0.43 } : { r: 0.75, g: 0.47, b: 0 };
        const radius = isGrey ? 999 : 6;
        const padding = isGrey ? { left: 8, right: 8, top: 2, bottom: 2 } : { left: 7, right: 7, top: 2, bottom: 2 };
        const badgeHeight = isGrey ? 20 : 22;

        return {
            type: "FRAME", layoutProps: { parentIsAutoLayout: true, layoutAlign: "INHERIT", height: badgeHeight },
            props: {
                layoutMode: "HORIZONTAL",
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "FIXED",
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER",
                fills: [{ type: "SOLID", color: fillColor }],
                cornerRadius: radius,
                paddingLeft: padding.left,
                paddingRight: padding.right,
                paddingTop: padding.top,
                paddingBottom: padding.bottom
            },
            children: [{ type: "TEXT", props: { characters: text, fontSize: 11, font: { family: "Inter", style: "Semi Bold" }, fills: [{ type: "SOLID", color: textColor }] } }]
        };
    }

    static avatar(initials: string, color: { r: number, g: number, b: number }): NodeDefinition {
        return {
            type: "FRAME", layoutProps: { width: 36, height: 36 },
            props: { layoutMode: "HORIZONTAL", fills: [{ type: "SOLID", color }], cornerRadius: 18, primaryAxisAlignItems: "CENTER", counterAxisAlignItems: "CENTER" },
            children: [{ type: "TEXT", props: { characters: initials, fontSize: 13, font: { family: "Inter", style: "Semi Bold" }, fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }] } }]
        };
    }

    static fileIcon(label: string, color: { r: number, g: number, b: number }): NodeDefinition {
        return {
            type: "FRAME", layoutProps: { width: 16, height: 16 },
            props: { layoutMode: "HORIZONTAL", primaryAxisAlignItems: "CENTER", counterAxisAlignItems: "CENTER", fills: [{ type: "SOLID", color }], cornerRadius: 2, paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 },
            children: [{ type: "TEXT", props: { characters: label, fontSize: 9, font: { family: "Inter", style: "Medium" }, fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }] } }]
        };
    }

    static actionText(label: string): NodeDefinition {
        return { type: "TEXT", props: { characters: label, fontSize: 12, font: { family: "Inter", style: "Medium" }, fills: [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }] } };
    }

    static actionRow(items: NodeDefinition[]): NodeDefinition {
        return {
            type: "FRAME",
            props: {
                layoutMode: "HORIZONTAL",
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                itemSpacing: 8,
                fills: []
            },
            children: items
        };
    }

    static formRow(items: NodeDefinition[], align: "STRETCH" | "MIN" = "STRETCH", height?: number): NodeDefinition {
        return {
            type: "FRAME",
            name: "Form Row",
            layoutProps: { layoutAlign: align, parentIsAutoLayout: true, height: height },
            props: { layoutMode: "HORIZONTAL", primaryAxisSizingMode: align === "STRETCH" ? "FIXED" : "AUTO", counterAxisSizingMode: height ? "FIXED" : "AUTO", itemSpacing: 8, fills: [] },
            children: items
        };
    }

    static formColumn(items: NodeDefinition[], align: "STRETCH" | "MIN" = "STRETCH", gap: number = 8): NodeDefinition {
        return {
            type: "FRAME",
            name: "Form Column",
            layoutProps: { layoutAlign: align, parentIsAutoLayout: true },
            props: { layoutMode: "VERTICAL", primaryAxisSizingMode: "AUTO", counterAxisSizingMode: align === "STRETCH" ? "FIXED" : "AUTO", itemSpacing: gap, fills: [] },
            children: items
        };
    }

    // --------------------------------
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

    private nodeHasPreviousSibling(levels: number[], index: number): boolean {
        const currentLevel = levels[index];
        for (let j = index - 1; j >= 0; j--) {
            const previousLevel = levels[j];
            if (previousLevel === currentLevel) return true;
            if (previousLevel < currentLevel) return false;
        }
        return false;
    }

    private buildConnectorState(nodes: TreeViewNodeItem[]): {
        levels: number[];
        hasChildren: boolean[];
        hasPreviousSibling: boolean[];
        hasNextSibling: boolean[];
        ancestorLines: boolean[][];
        subtreeEnds: boolean[][];
        ancestorHasNextSibling: boolean[][];
    } {
        const levels = nodes.map((node) => this.normalizeIndentLevel(node.indentLevel));
        const hasPreviousSibling = levels.map((_level, index) => this.nodeHasPreviousSibling(levels, index));
        const hasNextSibling = levels.map((_level, index) => this.nodeHasNextSibling(levels, index));
        const hasChildren = levels.map((level, index) => index < levels.length - 1 && levels[index + 1] > level);
        const ancestorLines: boolean[][] = [];
        const subtreeEnds: boolean[][] = [];
        const ancestorHasNextSibling: boolean[][] = [];
        const activePathNodeByLevel: number[] = [];
        const subtreeEndByIndex: number[] = [];

        for (let i = 0; i < levels.length; i++) {
            const level = levels[i];
            let subtreeEnd = i;
            for (let j = i + 1; j < levels.length; j++) {
                if (levels[j] <= level) break;
                subtreeEnd = j;
            }
            subtreeEndByIndex[i] = subtreeEnd;
        }

        for (let i = 0; i < levels.length; i++) {
            const level = levels[i];

            while (activePathNodeByLevel.length > level) {
                activePathNodeByLevel.pop();
            }

            ancestorLines[i] = [];
            subtreeEnds[i] = [];
            ancestorHasNextSibling[i] = [];
            for (let depth = 0; depth < level; depth++) {
                const ancestorIndex = activePathNodeByLevel[depth];
                ancestorLines[i][depth] = typeof ancestorIndex === "number" ? i <= subtreeEndByIndex[ancestorIndex] : false;
                subtreeEnds[i][depth] = typeof ancestorIndex === "number" ? i === subtreeEndByIndex[ancestorIndex] : false;
                ancestorHasNextSibling[i][depth] = typeof ancestorIndex === "number" ? hasNextSibling[ancestorIndex] : false;
            }

            activePathNodeByLevel[level] = i;
            activePathNodeByLevel.length = level + 1;
        }

        return { levels, hasChildren, hasPreviousSibling, hasNextSibling, ancestorLines, subtreeEnds, ancestorHasNextSibling };
    }

    private isSelectedPreviewNode(node: TreeViewNodeItem | undefined): boolean {
        if (!node) return false;
        const hasPreviewContent = Boolean(node.description || node.hasTextArea || node.bottomActionNode);
        return node.isExpanded === true && (hasPreviewContent || node.status === "active");
    }

    private getNodeDimension(nodeDef: NodeDefinition | undefined, axis: "width" | "height", fallback: number): number {
        if (!nodeDef) return fallback;
        const layoutValue = nodeDef.layoutProps?.[axis];
        if (typeof layoutValue === "number" && Number.isFinite(layoutValue)) return layoutValue;
        const propValue = nodeDef.props?.[axis];
        if (typeof propValue === "number" && Number.isFinite(propValue)) return propValue;
        return fallback;
    }

    async create(props: TreeViewProps): Promise<SceneNode> {
        const defaultLineColor = props.lineColor ?? { r: 0.85, g: 0.87, b: 0.9 }; // Light Grey
        const defaultThemeColor = props.themeColor ?? { r: 0.08, g: 0.38, b: 0.8 }; // Blue
        const isDense = props.dense === true;
        const rootPaddingLeft = props.paddingLeft ?? 0;
        const rootPaddingRight = props.paddingRight ?? 0;
        const rootPaddingTop = props.paddingTop ?? (isDense ? 10 : 16);
        const rootPaddingBottom = props.paddingBottom ?? (isDense ? 10 : 16);
        const itemContentPaddingLeft = props.itemContentPaddingLeft ?? 0;
        const itemContentPaddingRight = props.itemPaddingHorizontal !== undefined ? props.itemPaddingHorizontal : (props.itemContentPaddingRight ?? 20);
        const railWidth = isDense ? 28 : 40;
        const guideColumnWidth = railWidth;
        const connectorThickness = 1;
        const centeredConnectorX = Math.round((railWidth - connectorThickness) / 2);
        const nestedConnectorX = Math.max(10, Math.round(railWidth * 0.3));
        const defaultIconCenterX = centeredConnectorX + Math.floor(connectorThickness / 2);
        const connectorState = this.buildConnectorState(props.nodes);

        const rootProps: NodeDefinition["props"] = {
            layoutMode: "VERTICAL",
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "FIXED",
            fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
            itemSpacing: 0,
            paddingLeft: rootPaddingLeft,
            paddingRight: rootPaddingRight,
            paddingTop: rootPaddingTop,
            paddingBottom: rootPaddingBottom
        };

        const children: NodeDefinition[] = [];

        for (let i = 0; i < props.nodes.length; i++) {
            const node = props.nodes[i];
            const isLast = i === props.nodes.length - 1;
            const isSelectedPreview = this.isSelectedPreviewNode(node);
            const isAfterSelectedPreview = i > 0 && this.isSelectedPreviewNode(props.nodes[i - 1]);
            const isBeforeSelectedPreview = i < props.nodes.length - 1 && this.isSelectedPreviewNode(props.nodes[i + 1]);
            const selectedTopRadius = isSelectedPreview && !isAfterSelectedPreview ? 10 : 0;
            const selectedBottomRadius = isSelectedPreview && !isBeforeSelectedPreview ? 10 : 0;

            const iconColor = this.getColor(node.iconColor, node.status === "active" || node.status === "completed" ? defaultThemeColor : { r: 0.6, g: 0.6, b: 0.6 });
            const isTransparent = node.iconColor === "transparent";
            const isDisclosureIcon = node.checkbox === undefined && (node.iconType === "chevron-right" || node.iconType === "chevron-down");
            const level = connectorState.levels[i];
            const isLineContinuingDown = connectorState.hasChildren[i] || connectorState.hasNextSibling[i];
            const hasPreviousSibling = connectorState.hasPreviousSibling[i];
            const isSectionHeaderRow = level === 0 && isDisclosureIcon && node.status === "active" && !node.description && !node.subTitle && !node.checkbox;

            const computedTopPadding = props.leftColumnPaddingTop !== undefined
                ? props.leftColumnPaddingTop
                : (hasPreviousSibling ? 0 : 4);

            const leftColumn: NodeDefinition = {
                type: "FRAME",
                name: `Left Column - Node ${i + 1}`,
                layoutProps: { parentIsAutoLayout: true, layoutAlign: "STRETCH", width: railWidth },
                props: {
                    layoutMode: "VERTICAL",
                    primaryAxisSizingMode: "FIXED",
                    counterAxisSizingMode: "FIXED",
                    primaryAxisAlignItems: "MIN",
                    counterAxisAlignItems: "CENTER",
                    paddingTop: computedTopPadding,
                    fills: [],
                    clipsContent: false
                },
                children: []
            };

            // Build Icon Node
            let iconNode: NodeDefinition;

            if (node.customIcon) {
                iconNode = node.customIcon;
            } else if (node.checkbox !== undefined) {
                const isChecked = node.checkbox === true;
                const isIndeterminate = node.checkbox === "indeterminate";
                const isActive = isChecked || isIndeterminate;

                iconNode = {
                    type: "FRAME",
                    name: "Checkbox",
                    layoutProps: { width: 16, height: 16 },
                    props: {
                        fills: [{ type: "SOLID", color: isActive ? defaultThemeColor : { r: 1, g: 1, b: 1 } }],
                        strokes: isActive ? [] : [{ type: "SOLID", color: { r: 0.8, g: 0.8, b: 0.8 } }],
                        strokeWeight: isActive ? 0 : 1.5,
                        cornerRadius: 4,
                        layoutMode: "HORIZONTAL",
                        primaryAxisAlignItems: "CENTER",
                        counterAxisAlignItems: "CENTER"
                    },
                    children: isChecked ? [{
                        type: "COMPONENT",
                        component: this.getIconComponent("check") ?? undefined,
                        name: "Check",
                        props: { color: { r: 1, g: 1, b: 1 }, width: 12, height: 12 }
                    }] : isIndeterminate ? [{
                        type: "COMPONENT",
                        component: Lucide_minus,
                        name: "Dash",
                        props: { color: { r: 1, g: 1, b: 1 }, width: 12, height: 12 }
                    }] : []
                };
            } else if (node.iconType === "empty-circle" || !node.iconType) {
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
            } else if (isDisclosureIcon) {
                iconNode = {
                    type: "FRAME",
                    name: "Disclosure Icon",
                    layoutProps: { width: 16, height: 16 },
                    props: {
                        layoutMode: "HORIZONTAL",
                        primaryAxisAlignItems: "CENTER",
                        counterAxisAlignItems: "CENTER",
                        fills: []
                    },
                    children: [{
                        type: "COMPONENT",
                        component: this.getIconComponent(node.iconType) ?? undefined,
                        name: "Icon",
                        props: { color: iconColor, width: 14, height: 14 }
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

            const iconSizeFallback = (node.checkbox !== undefined || node.customIcon || node.iconType === "empty-circle" || !node.iconType || isDisclosureIcon) ? 16 : 24;
            const iconWidth = this.getNodeDimension(iconNode, "width", iconSizeFallback);
            const iconHeight = this.getNodeDimension(iconNode, "height", iconSizeFallback);
            const iconWrapperHeight = Math.max(24, iconHeight + (isDense ? 0 : 2));
            const titleFontSize = isSectionHeaderRow ? 14 : (isDense ? 13 : 16);
            const titleLineHeight = titleFontSize * 1.25;
            const rightPaddingTop = isSectionHeaderRow ? 8 : (props.itemPaddingVertical !== undefined ? props.itemPaddingVertical : (isDense ? 4 : 10));
            const textCenter = rightPaddingTop + (titleLineHeight / 2);
            const calculatedTopComp = Math.max(0, Math.round(textCenter - (Math.round((iconWrapperHeight - iconHeight) / 2) + Math.round(iconHeight / 2))));
            const iconTopCompensation = isTransparent ? 0 : calculatedTopComp;

            // Unify connectors to strictly center to enforce "auto layout center environment"
            const connectorX = centeredConnectorX;
            const iconX = Math.round(centeredConnectorX + Math.floor(connectorThickness / 2) - (iconWidth / 2));
            const iconY = Math.round((iconWrapperHeight - iconHeight) / 2);
            const iconCenterY = iconY + Math.round(iconHeight / 2);
            const iconConnectorGap = (node.customIcon || isDisclosureIcon || node.checkbox !== undefined || node.iconType === "plus-filled")
                ? (isDense ? 3 : 4)
                : 0;
            const connectorTopEndY = Math.max(0, iconCenterY - iconConnectorGap);
            const connectorBottomStartY = Math.min(iconWrapperHeight, iconCenterY + iconConnectorGap);
            const branchConnectorWidth = 0;

            if (!isTransparent) {
                const spaceAboveIconCenter = rightPaddingTop + (titleLineHeight / 2);
                const topHeight = Math.max(0, spaceAboveIconCenter - (iconHeight / 2) - iconConnectorGap);

                if (topHeight > 0) {
                    leftColumn.children!.push({
                        type: "FRAME",
                        name: "Top Space",
                        layoutProps: { width: railWidth, height: topHeight, parentIsAutoLayout: true },
                        props: {
                            layoutMode: "VERTICAL",
                            primaryAxisAlignItems: "MIN",
                            counterAxisAlignItems: "CENTER",
                            fills: []
                        },
                        children: hasPreviousSibling ? [{
                            type: "FRAME",
                            name: "Top Connector",
                            layoutProps: { width: connectorThickness, layoutGrow: 1, parentIsAutoLayout: true },
                            props: { fills: [{ type: "SOLID", color: defaultLineColor }] }
                        }] : []
                    });
                }

                if (iconConnectorGap > 0 && hasPreviousSibling) {
                    leftColumn.children!.push({
                        type: "FRAME",
                        name: "Top Gap",
                        layoutProps: { width: railWidth, height: iconConnectorGap, parentIsAutoLayout: true },
                        props: { fills: [] }
                    });
                }

                const configuredIconNode = {
                    ...iconNode,
                    props: {
                        ...(iconNode.props ?? {}),
                        clipsContent: false
                    },
                    layoutProps: {
                        ...(iconNode.layoutProps ?? {}),
                        parentIsAutoLayout: true
                    },
                    children: [
                        ...(iconNode.children ?? [])
                    ]
                };


                leftColumn.children!.push(configuredIconNode);

                if (iconConnectorGap > 0 && isLineContinuingDown) {
                    leftColumn.children!.push({
                        type: "FRAME",
                        name: "Bottom Gap",
                        layoutProps: { width: railWidth, height: iconConnectorGap, parentIsAutoLayout: true },
                        props: { fills: [] }
                    });
                }
            }

            const guideCols: NodeDefinition[] = [];
            for (let k = 0; k < level; k++) {
                const isActive = connectorState.ancestorLines[i][k] ?? false;
                const isLastInSubtree = connectorState.subtreeEnds[i][k] ?? false;
                const ancestorHasNextSibling = connectorState.ancestorHasNextSibling[i][k] ?? false;

                // A guide line should stop halfway if it's the end of a subtree that has no continuing siblings,
                // UNLESS the node explicitly asks to extend guide lines through its entire height (like a tall form box).
                const shouldStopHalfway = isLastInSubtree && !ancestorHasNextSibling && !node.extendGuideLines;

                const guideLineHeight = shouldStopHalfway ? (iconTopCompensation + iconCenterY + Math.floor(connectorThickness / 2)) : 16;
                const layoutGrow = shouldStopHalfway ? 0 : 1;

                const lineLayoutProps: any = {
                    width: connectorThickness,
                    layoutGrow,
                    parentIsAutoLayout: true,
                    layoutSizingHorizontal: "FIXED",
                    layoutSizingVertical: layoutGrow ? "FILL" : "FIXED"
                };
                if (!layoutGrow) {
                    lineLayoutProps.height = guideLineHeight;
                }

                guideCols.push({
                    type: "FRAME",
                    name: `Guide Level ${k}`,
                    layoutProps: { width: guideColumnWidth, layoutAlign: "STRETCH", parentIsAutoLayout: true },
                    props: {
                        layoutMode: "VERTICAL",
                        primaryAxisSizingMode: "FIXED",
                        primaryAxisAlignItems: "MIN",
                        counterAxisAlignItems: "CENTER",
                        paddingLeft: 0,
                        paddingRight: 0,
                        fills: [],
                        clipsContent: false
                    },
                    children: isActive ? [{
                        type: "FRAME",
                        name: "Guide Line",
                        layoutProps: lineLayoutProps,
                        props: { fills: [{ type: "SOLID", color: defaultLineColor }] }
                    }] : []
                });
            }

            if (isLineContinuingDown && !isTransparent) {
                leftColumn.children!.push({
                    type: "FRAME",
                    name: "Bottom Space",
                    layoutProps: { width: railWidth, layoutGrow: 1, parentIsAutoLayout: true },
                    props: {
                        layoutMode: "VERTICAL",
                        primaryAxisSizingMode: "FIXED",
                        counterAxisSizingMode: "FIXED",
                        primaryAxisAlignItems: "MIN",
                        counterAxisAlignItems: "CENTER",
                        paddingLeft: 0,
                        paddingRight: 0,
                        fills: []
                    },
                    children: [{
                        type: "FRAME",
                        name: "Bottom Connector",
                        layoutProps: { width: connectorThickness, layoutGrow: 1, parentIsAutoLayout: true },
                        props: { fills: [{ type: "SOLID", color: defaultLineColor }] }
                    }]
                });
            }

            const rightColumn: NodeDefinition = {
                type: "FRAME",
                name: `Right Column - Node ${i + 1}`,
                layoutProps: { layoutGrow: 1, parentIsAutoLayout: true },
                props: {
                    layoutMode: "VERTICAL",
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "FIXED",
                    paddingTop: isSectionHeaderRow ? 8 : (props.itemPaddingVertical !== undefined ? props.itemPaddingVertical : (isDense ? 4 : 10)),
                    paddingBottom: isSectionHeaderRow ? 8 : (props.itemPaddingVertical !== undefined ? props.itemPaddingVertical : (isSelectedPreview ? 16 : (isLast ? (isDense ? 6 : 12) : (isDense ? 8 : 18)))),
                    paddingLeft: itemContentPaddingLeft,
                    paddingRight: itemContentPaddingRight,
                    itemSpacing: isDense ? 4 : 6,
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
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "FIXED",
                    itemSpacing: 4,
                    fills: []
                },
                children: [{
                    type: "TEXT",
                    name: "Title",
                    layoutProps: { layoutAlign: "STRETCH" },
                    props: {
                        characters: node.title,
                        textAutoResize: "HEIGHT",
                        fontSize: isSectionHeaderRow ? 14 : (isDense ? 13 : 16),
                        font: { family: "Inter", style: node.status === "active" ? "Bold" : "Medium" },
                        fills: [{ type: "SOLID", color: node.isDisabled ? { r: 0.6, g: 0.6, b: 0.6 } : { r: 0.1, g: 0.1, b: 0.1 } }]
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
                        textAutoResize: "HEIGHT",
                        fontSize: isDense ? 12 : 14,
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
                        textAutoResize: "HEIGHT",
                        fontSize: isDense ? 12 : 14,
                        font: { family: "Inter", style: "Regular" },
                        fills: [{ type: "SOLID", color: { r: 0.3, g: 0.3, b: 0.3 } }]
                    }
                });
            }

            if (node.expandedContent && node.isExpanded) {
                rightColumn.children!.push({
                    type: "FRAME",
                    name: "Expanded Content",
                    layoutProps: { layoutAlign: "STRETCH" },
                    props: { fills: [], layoutMode: "VERTICAL", primaryAxisSizingMode: "AUTO", counterAxisSizingMode: "FIXED", itemSpacing: 8 },
                    children: node.expandedContent
                });
            } else if (node.hasTextArea && node.isExpanded) {
                rightColumn.children!.push({
                    type: "FRAME",
                    name: "Text Area",
                    layoutProps: { layoutAlign: "STRETCH" },
                    props: {
                        layoutMode: "VERTICAL",
                        primaryAxisSizingMode: "AUTO",
                        counterAxisSizingMode: "FIXED",
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
                        layoutProps: { layoutAlign: "STRETCH" },
                        props: {
                            characters: "The principal activity of the company continued to be...",
                            textAutoResize: "HEIGHT",
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
                        layoutProps: { width: 140, height: isDense ? 32 : 36 }, // Make it a compact button
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
                    paddingTop: isAfterSelectedPreview && !isSelectedPreview ? 14 : 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    fills: node.isHovered || isSelectedPreview
                        ? [{ type: "SOLID", color: { r: 0, g: 0, b: 0, a: 0.04 } }]
                        : [],
                    strokes: [],
                    strokeWeight: 0,
                    strokeAlign: "INSIDE",
                    cornerRadius: node.isHovered ? 8 : 0,
                    topLeftRadius: node.isHovered ? 8 : selectedTopRadius,
                    topRightRadius: node.isHovered ? 8 : selectedTopRadius,
                    bottomLeftRadius: node.isHovered ? 8 : selectedBottomRadius,
                    bottomRightRadius: node.isHovered ? 8 : selectedBottomRadius,
                    effects: [],
                    clipsContent: false
                },
                children: [...guideCols, leftColumn, rightColumn]
            };

            if (node.rightContent) {
                nodeRow.children!.push({
                    type: "FRAME",
                    name: "Right Content",
                    layoutProps: { parentIsAutoLayout: true },
                    props: {
                        layoutMode: "HORIZONTAL",
                        primaryAxisSizingMode: "AUTO",
                        counterAxisSizingMode: "AUTO",
                        primaryAxisAlignItems: "MAX",
                        counterAxisAlignItems: "CENTER",
                        itemSpacing: 8,
                        fills: [],
                        paddingTop: isAfterSelectedPreview ? 12 : (props.itemPaddingVertical !== undefined ? props.itemPaddingVertical : (isDense ? 4 : 10)),
                        paddingRight: props.itemPaddingHorizontal !== undefined ? props.itemPaddingHorizontal : 16,
                        paddingBottom: props.itemPaddingVertical !== undefined ? props.itemPaddingVertical : 0,
                    },
                    children: node.rightContent
                });
            }

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
