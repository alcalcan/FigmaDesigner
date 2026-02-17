import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";
import { badge } from "../badge/badge";
import { checkbox } from "../checkbox/checkbox";

export interface TableColumn {
    label: string;
    key: string;
    type?: "text" | "badge" | "checkbox";
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
}

export class table extends BaseComponent {
    async create(props: TableProps): Promise<SceneNode> {
        const columns = props.columns || [];
        const data = props.data || [];
        const showHeader = props.showHeader !== false;
        const rowHeight = props.rowHeight || 52;
        const isFill = props.width === "fill";
        const tableWidth = isFill ? undefined : (props.width || 1440);

        // Prep instances for cells
        const badgeComp = new badge();
        const checkboxComp = new checkbox();

        // Store sub-components to inject after renderDefinition
        const complexCells: { slotId: string, node: SceneNode }[] = [];

        const renderCell = async (col: TableColumn, value: any, isHeader: boolean = false): Promise<NodeDefinition> => {
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
                return createFrame(`HeaderCell/${col.label}`, cellProps, [
                    createText("Label", col.label, 12, "Bold", { r: 0.4, g: 0.4, b: 0.5 }, {
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
            }

            // Text content
            return createFrame(`Cell/${col.key}`, cellProps, [
                createText("Value", String(value), 14, "Regular", { r: 0.1, g: 0.1, b: 0.2 }, {
                    font: { family: "Open Sans", style: "Regular" }
                })
            ]);
        };

        const renderRow = async (rowData: any, index: number, isHeader: boolean = false): Promise<NodeDefinition> => {
            const cells = await Promise.all(columns.map(col => renderCell(col, isHeader ? null : rowData[col.key], isHeader)));

            return createFrame(isHeader ? "HeaderRow" : `Row/${index}`, {
                layoutMode: "HORIZONTAL",
                layoutAlign: "STRETCH",
                // Width sizing: if filling, Figma handles it (Fixed). If hugging, it hugs child cells (Auto).
                primaryAxisSizingMode: isFill ? "FIXED" : "AUTO",
                counterAxisSizingMode: "FIXED", // Fixed height
                fills: isHeader ? [{ type: "SOLID", color: { r: 0.96, g: 0.97, b: 0.98 } }] :
                    (index % 2 === 1 ? [{ type: "SOLID", color: { r: 0.99, g: 0.99, b: 1.0 } }] : []),
                strokeBottomWeight: 1,
                strokes: [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.93 } }],
                layoutProps: {
                    width: tableWidth,
                    height: isHeader ? 44 : rowHeight,
                    parentIsAutoLayout: true
                }
            }, cells);
        };

        const structure: NodeDefinition = createFrame("TableContainer", {
            layoutMode: "VERTICAL",
            fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
            cornerRadius: 8,
            strokes: [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.93 } }],
            strokeWeight: 1,
            primaryAxisSizingMode: "AUTO", // Hug rows vertically
            counterAxisSizingMode: isFill ? "FIXED" : "AUTO", // Width: fixed for stretching, auto for hugging
            effects: [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.03 },
                offset: { x: 0, y: 4 },
                radius: 12,
                showShadowBehindNode: true
            }],
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

        mainNode.x = props.x ?? 0;
        mainNode.y = props.y ?? 0;
        return mainNode;
    }
}
