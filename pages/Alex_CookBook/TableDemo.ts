import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";

// Components
import { table, TableColumn } from "../../components/Alex_CookBook/table/table";

export class TableDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });

        const root = await this.initPage("Data Tables Showcase", 1200);

        await this.addHeader(
            root,
            "Interactive Tables",
            "Modern data tables with support for badges, checkboxes, custom alignment, and responsive layouts."
        );

        const tbl = new table();

        // Sample Data
        const columns: TableColumn[] = [
            { label: "Approved", key: "approved", type: "checkbox", width: 100, align: "CENTER" },
            { label: "Customer", key: "customer", type: "text", width: "fill", align: "LEFT" },
            { label: "Amount", key: "amount", type: "text", width: 150, align: "RIGHT" },
            { label: "Date", key: "date", type: "text", width: 150, align: "CENTER" },
            { label: "Status", key: "status", type: "badge", width: 120, align: "RIGHT" }
        ];

        const data = [
            { status: "Active", customer: "Alex Calcan", amount: "$1,250.00", date: "Feb 12, 2026", approved: true },
            { status: "Pending", customer: "John Doe", amount: "$450.00", date: "Feb 14, 2026", approved: false },
            { status: "Inactive", customer: "Jane Smith", amount: "$2,100.00", date: "Feb 10, 2026", approved: true },
            { status: "Success", customer: "Michael Brown", amount: "$890.00", date: "Feb 15, 2026", approved: true },
            { status: "Error", customer: "Sarah Wilson", amount: "$0.00", date: "Feb 08, 2026", approved: false }
        ];

        const advancedColumns: TableColumn[] = [
            { label: "", key: "drag", type: "drag", width: 40, align: "CENTER" },
            { label: "Select", key: "approved", type: "checkbox", width: 60, align: "CENTER" },
            { label: "Product", key: "product", type: "text", width: "fill", align: "LEFT" },
            { label: "Rating", key: "rating", type: "star", width: 120, align: "LEFT" },
            { label: "Quantity", key: "qty", type: "input", width: 100, align: "LEFT", isStepper: true },
            { label: "", key: "status", type: "badge", width: 110, align: "RIGHT" },
            { label: "Options", key: "options", type: "dropdown", width: 140, align: "CENTER" }
        ];
        const advancedData = [
            { product: "Figma Designer Pro", rating: 5, qty: "2", status: "Active", approved: true, options: "Edit" },
            { product: "UI Kit Essential", rating: 4, qty: "1", status: "Active", approved: false, options: "View" },
            { product: "Icon Set Bundle", rating: 3, qty: "5", status: "Pending", approved: true, options: "Delete" },
            { product: "UX Research Pack", rating: 5, qty: "10", status: "Active", approved: true, options: "Review" },
            { product: "Development Scripts", rating: 2, qty: "1", status: "Error", approved: false, options: "Fix" }
        ];

        // --- SECTION 1: Standard Table ---
        await this.addSection(root, "Standard Data Table", "A clean layout with header and varying column types.", async (container) => {
            const row = this.createRow(container);
            row.appendChild(await tbl.create({
                columns,
                data,
                width: 1000
            }));
            container.appendChild(row);
        });

        // --- SECTION 2: Compact/Fixed Variants ---
        await this.addSection(root, "Compact & Alternate Styles", "Tables without headers or with different row heights.", async (container) => {
            const row = this.createRow(container);

            // Sub-columns for compact view
            const compactCols: TableColumn[] = [
                { label: "User", key: "customer", type: "text", width: 250 },
                { label: "Status", key: "status", type: "badge", width: 120 }
            ];

            row.appendChild(await tbl.create({
                columns: compactCols,
                data: data.slice(0, 3),
                showHeader: false,
                rowHeight: 40,
                width: 450
            }));

            row.appendChild(await tbl.create({
                columns: columns.slice(1, 3),
                data: data.slice(0, 3),
                showHeader: true,
                rowHeight: 64,
                width: 450
            }));

            container.appendChild(row);
        });

        // --- SECTION 3: Interactive & Minimalist ---
        await this.addSection(root, "Interactive & Minimalist", "Showcasing a clean white header, black text labels, and vibrant hover states with inline delete actions.", async (container) => {
            const minimalistCols: TableColumn[] = [
                ...columns,
                { label: "Actions", key: "actions", type: "action", width: 80, align: "CENTER" }
            ];

            const tableNode = await tbl.create({
                columns: minimalistCols,
                data: data.slice(0, 4), // 4 rows
                variant: "minimalist",
                hoverRowIndex: 1, // Simulate a hover on the second data row
                width: 1000
            });
            container.appendChild(tableNode);
        });

        // --- SECTION 4: Advanced Cell Types ---
        await this.addSection(root, "Advanced Cell Types", "Tables with dynamic inline inputs and star ratings.", async (container) => {
            const tableNode = await tbl.create({
                columns: advancedColumns,
                data: advancedData,
                openedDropdownRowIndex: 0,
                width: 1000
            });
            container.appendChild(tableNode);
        });

        // --- SECTION 5: Full Width ---
        await this.addSection(root, "Stretched Layout", "Table that fills the entire container width.", async (container) => {
            const tableNode = await tbl.create({
                columns,
                data: data.slice(0, 2),
                width: "fill"
            });
            container.appendChild(tableNode);
        });

        // --- SECTION 6: Elevated & Corners ---
        await this.addSection(root, "Elevated & Corners", "Custom corner radius and shadow intensity variations.", async (container) => {
            const rowWrapper = this.createRow(container);

            // Sub-columns for variations
            const variationCols: TableColumn[] = [
                { label: "Product", key: "product", type: "text", width: 200 },
                { label: "Status", key: "status", type: "badge", width: 120 }
            ];

            rowWrapper.appendChild(await tbl.create({
                columns: variationCols,
                data: advancedData.slice(0, 2),
                cornerRadius: 16,
                shadow: "none",
                width: 350
            }));

            rowWrapper.appendChild(await tbl.create({
                columns: variationCols,
                data: advancedData.slice(0, 2),
                cornerRadius: 24,
                shadow: "medium",
                width: 350
            }));

            rowWrapper.appendChild(await tbl.create({
                columns: variationCols,
                data: advancedData.slice(0, 2),
                cornerRadius: 0,
                shadow: "heavy",
                width: 350
            }));

            container.appendChild(rowWrapper);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
