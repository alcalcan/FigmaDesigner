import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";
import { badge } from "../badge/badge";
import { checkbox } from "../checkbox/checkbox";
import { input_field } from "../input_field/input_field";
import { Lucide_star } from "../../lucide_icons/Lucide_star/Lucide_star";

export interface TableColumn {
    label: string;
    key: string;
    type?: "text" | "badge" | "checkbox" | "star" | "input";
    width?: number | "fill";
    align?: "LEFT" | "CENTER" | "RIGHT";
}

export interface TableProps extends ComponentProps {
    columns: TableColumn[];
    data: any[];
    showCheckbox?: boolean;
    showHeader?: boolean;
    rowHeight?: number;
    width?: number | "fill";
    variant?: "default" | "minimalist";
    hoverRowIndex?: number;
    cornerRadius?: number;
    shadow?: "none" | "light" | "medium" | "heavy";
}

export class table extends BaseComponent {
    async create(props: TableProps): Promise<SceneNode> {
        const columns = props.columns || [];
        const data = props.data || [];
        const showHeader = props.showHeader !== false;
        const rowHeight = props.rowHeight || 52;
        const isFill = props.width === "fill";
        const tableWidth = isFill ? undefined : (props.width || 1440);
        const variant = props.variant || "default";
        const isMinimalist = variant === "minimalist";

        // Prep instances for cells
        const badgeComp = new badge();
        const checkboxComp = new checkbox();
        const inputComp = new input_field();
        const starComp = new Lucide_star();

        // Store sub-components to inject after renderDefinition
        const complexCells: { slotId: string, node: SceneNode }[] = [];

        const renderCell = async (col: TableColumn, value: any, isHeader: boolean = false, isHovered: boolean = false): Promise<NodeDefinition> => {
            const isCellFill = col.width === "fill";
            const cellWidth = isCellFill ? undefined : (col.width || 200);
            const align = col.align || "LEFT";

            // Base cell frame
            const cellProps: any = {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: align === "LEFT" ? "MIN" : align === "CENTER" ? "CENTER" : "MAX",
                counterAxisAlignItems: "CENTER",
                paddingLeft: 16,
                paddingRight: 16,
                // CRITICAL: Table columns MUST have fixed width or grow to align across rows.
                // AUTO (Hug) would cause inconsistent widths between rows.
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "FIXED", // Fixed height
                fills: [],
                layoutProps: {
                    width: cellWidth,
                    height: isHeader ? 44 : rowHeight,
                    layoutGrow: isCellFill ? 1 : 0,
                    parentIsAutoLayout: true
                }
            };

            if (isHeader) {
                const headerColor = (isMinimalist) ? { r: 1, g: 1, b: 1 } : { r: 0.2, g: 0.2, b: 0.25 };
                return createFrame(`HeaderCell/${col.label}`, cellProps, [
                    createText("Label", col.label, 12, "Bold", headerColor, {
                        font: { family: "Open Sans", style: "Bold" },
                        textCase: "UPPER"
                    })
                ]);
            }

            // Data Cell content
            if (col.type === "badge") {
                // Determine badge variant based on value (heuristic)
                const val = String(value).toLowerCase();
                const variant = val === "active" || val === "success" || val === "completed" ? "success" :
                    val === "pending" || val === "warning" ? "warning" :
                        val === "inactive" || val === "error" || val === "failed" ? "error" : "neutral";

                const badgeNode = await badgeComp.create({ label: String(value), variant, type: "subtle" });
                const slotId = `badge_${Math.random().toString(36).substr(2, 6)}`;
                complexCells.push({ slotId, node: badgeNode });

                return createFrame(slotId, cellProps, []);
            } else if (col.type === "checkbox") {
                const cbNode = await checkboxComp.create({
                    checked: !!value,
                    characterOverride: "", // Empty label
                    hugContents: true
                });
                const slotId = `checkbox_${Math.random().toString(36).substr(2, 6)}`;
                complexCells.push({ slotId, node: cbNode });

                return createFrame(slotId, cellProps, []);
            } else if (col.type === "input") {
                const inputNode = await inputComp.create({
                    value: String(value),
                    type: "simple",
                    hasBorder: false,
                    width: typeof cellWidth === 'number' ? (cellWidth - 32) : "fill", // adjust for padding
                    height: 32
                });

                // Force no clipping on the input field so dropdowns or inner things don't get hidden
                if (inputNode.type === "FRAME") {
                    inputNode.clipsContent = false;
                    for (const child of inputNode.children) {
                        if (child.type === "FRAME") child.clipsContent = false;
                    }
                }

                const slotId = `input_${Math.random().toString(36).substr(2, 6)}`;
                complexCells.push({ slotId, node: inputNode });

                return createFrame(slotId, cellProps, []);
            } else if (col.type === "star") {
                const numStars = Math.max(0, Math.min(5, Number(value) || 0));

                const starsContainerProps: any = {
                    layoutMode: "HORIZONTAL",
                    itemSpacing: 2,
                    fills: [],
                    layoutProps: { parentIsAutoLayout: true }
                };

                const starNodes = [];
                for (let i = 0; i < 5; i++) {
                    const isFilled = i < numStars;
                    const starNode = await starComp.create({
                        width: 16,
                        strokeWeight: 1.5,
                        color: isFilled ? { r: 1, g: 0.7, b: 0.1 } : { r: 0.8, g: 0.8, b: 0.8 }
                    });

                    if (isFilled && starNode.type === "FRAME") {
                        const svgFrame = starNode.children[0] as FrameNode;
                        if (svgFrame) {
                            for (const path of svgFrame.children) {
                                if (path.type === "VECTOR") {
                                    path.fills = [{ type: "SOLID", color: { r: 1, g: 0.7, b: 0.1 } }];
                                }
                            }
                        }
                    }
                    starNodes.push(starNode);
                }

                const slotId = `stars_${Math.random().toString(36).substr(2, 6)}`;

                // Wrap stars in a frame
                const starWrapper = figma.createFrame();
                starWrapper.name = "Stars Wrapper";
                starWrapper.layoutMode = "HORIZONTAL";
                starWrapper.itemSpacing = 2;
                starWrapper.fills = [];
                starWrapper.primaryAxisSizingMode = "AUTO";
                starWrapper.counterAxisSizingMode = "AUTO";
                starNodes.forEach(s => starWrapper.appendChild(s));

                complexCells.push({ slotId, node: starWrapper });

                return createFrame(slotId, cellProps, []);
            }

            // Text content
            let textColor = { r: 0.1, g: 0.1, b: 0.2 };
            if (isHovered) {
                textColor = { r: 1, g: 1, b: 1 };
            }

            return createFrame(`Cell/${col.key}`, cellProps, [
                createText("Value", String(value), 14, "Regular", textColor, {
                    font: { family: "Open Sans", style: "Regular" }
                })
            ]);
        };

        const renderRow = async (rowData: any, index: number, isHeader: boolean = false): Promise<NodeDefinition> => {
            const isHovered = props.hoverRowIndex === index;
            const cells = await Promise.all(columns.map(col => renderCell(col, isHeader ? null : rowData[col.key], isHeader, isHovered)));



            // Background logic
            let bgFills: any[] = [];
            if (isHeader) {
                bgFills = isMinimalist ? [{ type: "SOLID", color: { r: 0.05, g: 0.05, b: 0.08 } }] : [{ type: "SOLID", color: { r: 0.96, g: 0.97, b: 0.98 } }];
            } else if (isHovered) {
                // Dark accessible hover shade (dark purple)
                bgFills = [{ type: "SOLID", color: { r: 0.35, g: 0.20, b: 0.75 } }];
            } else if (!isMinimalist && index % 2 === 1) {
                bgFills = [{ type: "SOLID", color: { r: 0.99, g: 0.99, b: 1.0 } }];
            }

            let effects: Effect[] = [];
            if (isHovered) {
                effects = [{
                    type: "DROP_SHADOW",
                    color: { r: 0, g: 0, b: 0, a: 0.08 },
                    offset: { x: 0, y: 4 },
                    radius: 12,
                    showShadowBehindNode: true,
                    spread: 0,
                    visible: true,
                    blendMode: "NORMAL"
                }];
            }

            return createFrame(isHeader ? "HeaderRow" : `Row/${index}`, {
                layoutMode: "HORIZONTAL",
                layoutAlign: "STRETCH",
                // Width sizing: if filling, Figma handles it (Fixed). If hugging, it hugs child cells (Auto).
                primaryAxisSizingMode: isFill ? "FIXED" : "AUTO",
                counterAxisSizingMode: "FIXED", // Fixed height
                fills: bgFills,
                strokeBottomWeight: isMinimalist && !isHeader ? 0 : 1,
                strokes: isMinimalist ? [] : [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.93 } }],
                effects: effects,
                layoutProps: {
                    width: tableWidth,
                    height: isHeader ? 44 : rowHeight,
                    parentIsAutoLayout: true,
                    // elevate the hovered row
                    layoutPositioning: isHovered ? "ABSOLUTE" : "AUTO"
                },
                // Add bottom border radius if it's the last row AND hover isn't triggering a break in the container shape.
                // For simplicity, we keep rows rectangular but respect outer container clipping or we clip in container
            }, cells);
        };


        let containerShadows: Effect[] = [];
        if (!isMinimalist) {
            if (props.shadow === "none") {
                containerShadows = [];
            } else if (props.shadow === "medium") {
                containerShadows = [{
                    type: "DROP_SHADOW",
                    color: { r: 0, g: 0, b: 0, a: 0.08 },
                    offset: { x: 0, y: 8 },
                    radius: 24,
                    showShadowBehindNode: true,
                    spread: 0,
                    visible: true,
                    blendMode: "NORMAL"
                }];
            } else if (props.shadow === "heavy") {
                containerShadows = [{
                    type: "DROP_SHADOW",
                    color: { r: 0, g: 0, b: 0, a: 0.12 },
                    offset: { x: 0, y: 16 },
                    radius: 32,
                    showShadowBehindNode: true,
                    spread: 0,
                    visible: true,
                    blendMode: "NORMAL"
                }];
            } else {
                // "light" / default
                containerShadows = [{
                    type: "DROP_SHADOW",
                    color: { r: 0, g: 0, b: 0, a: 0.04 },
                    offset: { x: 0, y: 4 },
                    radius: 12,
                    showShadowBehindNode: true,
                    spread: 0,
                    visible: true,
                    blendMode: "NORMAL"
                }];
            }
        }

        const structure: NodeDefinition = createFrame("TableContainer", {
            layoutMode: "VERTICAL",
            fills: isMinimalist ? [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }] : [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
            cornerRadius: isMinimalist ? 0 : (props.cornerRadius ?? 8),
            strokes: isMinimalist ? [] : [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.93 } }],
            strokeWeight: isMinimalist ? 0 : 1,
            primaryAxisSizingMode: "AUTO", // Hug rows vertically
            counterAxisSizingMode: isFill ? "FIXED" : "AUTO", // Width: fixed for stretching, auto for hugging
            effects: containerShadows,
            clipsContent: true, // Crucial for corner radius clipping rows
            layoutProps: {
                width: tableWidth,
                layoutAlign: isFill ? "STRETCH" : "INHERIT"
            }
        }, [
            showHeader ? await renderRow(null, -1, true) : null,
            ...await Promise.all(data.map((item, i) => renderRow(item, i)))
        ].filter(Boolean) as NodeDefinition[]);

        const mainNode = await this.renderDefinition(structure) as FrameNode;

        // Post-render: inject complex cells
        for (const complex of complexCells) {
            const slot = mainNode.findOne(n => n.name === complex.slotId) as FrameNode;
            if (slot) {
                slot.appendChild(complex.node);
                // Center the sub-component within the slot frame
                // Since slot is auto-layout, it will handle positioning based on cellProps
            }
        }

        // Deal with absolute positioning for highlighted row correctly
        if (props.hoverRowIndex !== undefined && props.hoverRowIndex >= 0) {
            const rowIndexOffset = showHeader ? 1 : 0;
            const targetIndex = props.hoverRowIndex + rowIndexOffset;
            if (targetIndex < mainNode.children.length) {
                const row = mainNode.children[targetIndex] as FrameNode;
                if (row) {
                    row.layoutPositioning = "ABSOLUTE";
                    // Calculate Y based on previous rows
                    let yPos = 0;
                    for (let i = 0; i < targetIndex; i++) {
                        yPos += mainNode.children[i].height;
                    }
                    row.y = yPos;
                    // Move to front so shadow casts correctly
                    mainNode.appendChild(row);
                }
            }
        }

        mainNode.x = props.x ?? 0;
        mainNode.y = props.y ?? 0;
        return mainNode;
    }
}
