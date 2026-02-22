import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { input_field } from "../input_field/input_field";
import { createText } from "../../ComponentHelpers";
import { Lucide_calendar } from "../../lucide_icons/Lucide_calendar/Lucide_calendar";
import { Lucide_clock } from "../../lucide_icons/Lucide_clock/Lucide_clock";

export interface DatePickerProps extends ComponentProps {
    type?: "date" | "time";
    placeholder?: string;
    value?: string;
    width?: number | "fill";
    isOpen?: boolean; // To forcibly open the dropdown (for demo purposes)
    timeOptions?: string[]; // E.g., ["09:00", "09:30", "10:00"]
}

export class date_picker extends BaseComponent {
    async create(props: DatePickerProps): Promise<SceneNode> {
        const type = props.type ?? "date";
        const width = props.width ?? 320;
        const isOpen = props.isOpen ?? false;

        const containerWidth = typeof width === "number" ? width : 320;

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": type === "date" ? "Date Picker Group" : "Time Picker Group",
            "props": {
                "visible": true,
                "layoutMode": "VERTICAL",
                "itemSpacing": 8,
                "fills": [],
                "clipsContent": false,
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "layoutAlign": props.width === "fill" ? "STRETCH" : "INHERIT"
            },
            "layoutProps": {
                "parentIsAutoLayout": true,
                "width": containerWidth
            },
            "children": [
                {
                    "type": "COMPONENT",
                    "component": input_field,
                    "props": {
                        "placeholder": props.placeholder ?? (type === "date" ? `September 14, 2026` : "Select Time..."),
                        "value": props.value,
                        "type": "simple", // the input_field itself shouldn't draw its own dropdown
                        "width": props.width === "fill" ? "fill" : containerWidth,
                        "backIcon": type === "date" ? Lucide_calendar : Lucide_clock
                    }
                }
            ]
        };

        const root = await this.renderDefinition(structure) as FrameNode;

        if (isOpen) {
            const menu = figma.createFrame();
            menu.name = "Dropdown Body";

            // Append first before setting absolute positioning so the parent is known
            root.appendChild(menu);

            menu.layoutMode = "VERTICAL";
            menu.primaryAxisSizingMode = "AUTO";
            menu.counterAxisSizingMode = "FIXED";
            menu.clipsContent = true;
            menu.paddingTop = 8;
            menu.paddingBottom = 8;
            menu.itemSpacing = 4;
            menu.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
            menu.strokes = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.92 } }];
            menu.cornerRadius = 8;
            menu.effects = [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.1 },
                offset: { x: 0, y: 8 },
                radius: 16,
                visible: true,
                blendMode: "NORMAL"
            }];

            menu.layoutPositioning = "ABSOLUTE";
            menu.x = 0;
            // Place it below the input field (height usually ~40px)
            menu.y = 44;

            if (type === "date") {
                // Render a mockup Calendar Body
                menu.resize(containerWidth, 100);
                menu.primaryAxisSizingMode = "AUTO";
                menu.counterAxisSizingMode = "FIXED";

                menu.paddingTop = 16;
                menu.paddingBottom = 16;
                menu.paddingLeft = 16;
                menu.paddingRight = 16;

                // Calendar Header Group
                const header = figma.createFrame();
                header.name = "Calendar Header";
                header.layoutMode = "HORIZONTAL";
                header.primaryAxisAlignItems = "SPACE_BETWEEN";
                header.counterAxisAlignItems = "CENTER";
                header.layoutAlign = "STRETCH";
                header.counterAxisSizingMode = "FIXED";
                header.fills = [];
                header.resize(268, 24);

                const today = new Date();
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const currentMonth = monthNames[today.getMonth()];
                const mockDateText = `${currentMonth} 2026`;

                const monthYear = await this.renderDefinition(
                    createText("Month/Year", mockDateText, 14, "SemiBold", { r: 0.1, g: 0.1, b: 0.15 }, { font: { family: "Open Sans", style: "SemiBold" } })
                );

                const arrows = figma.createFrame();
                arrows.layoutMode = "HORIZONTAL";
                arrows.primaryAxisSizingMode = "AUTO";
                arrows.counterAxisSizingMode = "AUTO";
                arrows.itemSpacing = 16;
                arrows.fills = [];
                const leftArrow = await this.renderDefinition(createText("Left", "<", 14, "Bold", { r: 0.4, g: 0.4, b: 0.45 }, { font: { family: "Open Sans", style: "Bold" } }));
                const rightArrow = await this.renderDefinition(createText("Right", ">", 14, "Bold", { r: 0.4, g: 0.4, b: 0.45 }, { font: { family: "Open Sans", style: "Bold" } }));
                arrows.appendChild(leftArrow);
                arrows.appendChild(rightArrow);

                header.appendChild(monthYear);
                header.appendChild(arrows);
                menu.appendChild(header);

                try { (header as any).layoutSizingHorizontal = "FILL"; } catch (e) { }

                // Days of week
                const daysRow = figma.createFrame();
                daysRow.name = "Days Row";
                daysRow.layoutMode = "HORIZONTAL";
                daysRow.primaryAxisAlignItems = "SPACE_BETWEEN";
                daysRow.layoutAlign = "STRETCH";
                daysRow.counterAxisSizingMode = "AUTO";
                daysRow.fills = [];
                daysRow.paddingTop = 16;
                daysRow.paddingBottom = 8;
                const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
                for (const d of days) {
                    const df = figma.createFrame();
                    df.layoutMode = "VERTICAL";
                    df.primaryAxisAlignItems = "CENTER";
                    df.counterAxisAlignItems = "CENTER";
                    df.primaryAxisSizingMode = "FIXED";
                    df.counterAxisSizingMode = "FIXED";
                    df.resize(30, 24);
                    df.fills = [];
                    df.appendChild(await this.renderDefinition(createText(d, d, 12, "Regular", { r: 0.5, g: 0.5, b: 0.55 })));
                    daysRow.appendChild(df);
                }
                menu.appendChild(daysRow);
                try { (daysRow as any).layoutSizingHorizontal = "FILL"; } catch (e) { }

                // Mock grid for dates
                const grid = figma.createFrame();
                grid.name = "Dates Grid";
                grid.layoutMode = "VERTICAL";
                grid.itemSpacing = 8;
                grid.fills = [];
                grid.layoutAlign = "STRETCH";
                grid.primaryAxisSizingMode = "AUTO";

                let dayCount = 1;
                for (let r = 0; r < 4; r++) { // Just 4 rows for mockup
                    const row = figma.createFrame();
                    row.layoutMode = "HORIZONTAL";
                    row.primaryAxisAlignItems = "SPACE_BETWEEN";
                    row.layoutAlign = "STRETCH";
                    row.counterAxisSizingMode = "AUTO";
                    row.fills = [];

                    for (let c = 0; c < 7; c++) {
                        const isSelected = dayCount === 14;
                        const cell = figma.createFrame();
                        cell.layoutMode = "VERTICAL";
                        cell.primaryAxisAlignItems = "CENTER";
                        cell.counterAxisAlignItems = "CENTER";
                        cell.primaryAxisSizingMode = "FIXED";
                        cell.counterAxisSizingMode = "FIXED";
                        cell.resize(30, 30);
                        cell.cornerRadius = 15;

                        if (isSelected) {
                            cell.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.4, b: 0.9 } }]; // Primary blue
                        } else {
                            cell.fills = [];
                        }

                        const textColor = isSelected ? { r: 1, g: 1, b: 1 } : { r: 0.2, g: 0.2, b: 0.25 };
                        const weight = isSelected ? "Bold" : "Regular";

                        cell.appendChild(await this.renderDefinition(
                            createText(`Day ${dayCount}`, dayCount.toString(), 13, weight, textColor)
                        ));

                        row.appendChild(cell);
                        dayCount++;
                        if (dayCount > 28) break;
                    }
                    grid.appendChild(row);
                    try { (row as any).layoutSizingHorizontal = "FILL"; } catch (e) { }
                    if (dayCount > 28) break;
                }
                menu.appendChild(grid);
                try { (grid as any).layoutSizingHorizontal = "FILL"; } catch (e) { }

                // Allow it to recalculate height from constraints before resizing width accurately
                menu.resize(containerWidth, menu.height);

            } else {
                // Render Time Options List
                menu.resize(containerWidth, 100);
                menu.primaryAxisSizingMode = "AUTO";
                menu.counterAxisSizingMode = "FIXED";
                menu.clipsContent = true;

                const timeStrOptions = props.timeOptions ?? ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];

                for (const t of timeStrOptions) {
                    const isSelected = t === props.value;
                    const item = figma.createFrame();
                    item.name = `Time Option ${t}`;
                    item.layoutMode = "HORIZONTAL";
                    item.primaryAxisAlignItems = "MIN";
                    item.counterAxisAlignItems = "CENTER";
                    item.paddingLeft = 16;
                    item.paddingRight = 16;
                    item.paddingTop = 8;
                    item.paddingBottom = 8;
                    item.layoutAlign = "STRETCH";
                    item.counterAxisSizingMode = "AUTO";

                    if (isSelected) {
                        item.fills = [{ type: "SOLID", color: { r: 0.94, g: 0.96, b: 1 } }]; // Light blue hover/active
                    } else {
                        item.fills = [];
                    }

                    const textColor = isSelected ? { r: 0.1, g: 0.4, b: 0.9 } : { r: 0.2, g: 0.2, b: 0.25 };
                    item.appendChild(await this.renderDefinition(
                        createText("Time", t, 14, isSelected ? "Medium" : "Regular", textColor)
                    ));

                    menu.appendChild(item);
                    try { (item as any).layoutSizingHorizontal = "FILL"; } catch (e) { }
                }

                // First apply explicitly exact width to satisfy counterAxis layout stretch
                menu.resize(containerWidth, menu.height);

                // Set max height for time dropdown
                if (menu.height > 240) {
                    menu.resize(containerWidth, 240);
                }
            }
        }

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}
