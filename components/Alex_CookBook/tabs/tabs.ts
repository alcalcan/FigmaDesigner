import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export interface TabsProps extends ComponentProps {
    items: string[];
    activeIndex?: number;
}

export class tabs extends BaseComponent {
    async create(props: TabsProps): Promise<SceneNode> {
        const items = props.items || ["Tab 1", "Tab 2", "Tab 3"];
        const activeIndex = props.activeIndex ?? 0;

        const colors = {
            active: { r: 0, g: 0.635, b: 0.588 }, // Brand green
            inactive: { r: 0.5, g: 0.5, b: 0.5 },
            hover: { r: 0.1, g: 0.1, b: 0.1 }
        };

        const children: NodeDefinition[] = items.map((item, index) => {
            const isActive = index === activeIndex;
            return {
                type: "FRAME",
                name: `Tab/${item}${isActive ? " (Active)" : ""}`,
                props: {
                    layoutMode: "VERTICAL",
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "CENTER",
                    paddingTop: 12,
                    paddingBottom: 10, // Slightly less bottom padding to accommodate indicator
                    paddingLeft: 16,
                    paddingRight: 16,
                    fills: [],
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "AUTO",
                    strokeBottomWeight: isActive ? 2 : 0,
                    strokes: isActive ? [{ type: "SOLID", color: colors.active }] : []
                },
                layoutProps: {
                    parentIsAutoLayout: true
                },
                children: [
                    {
                        type: "TEXT",
                        name: "Tab Label",
                        props: {
                            characters: item,
                            fontSize: 14,
                            font: { family: "Open Sans", style: isActive ? "Bold" : "Regular" },
                            fills: [{ type: "SOLID", color: isActive ? colors.active : colors.inactive }]
                        }
                    }
                ]
            };
        });

        const structure: NodeDefinition = {
            type: "FRAME",
            name: "Tabs Area",
            props: {
                layoutMode: "HORIZONTAL",
                itemSpacing: 8,
                fills: [],
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO"
            },
            layoutProps: {
                parentIsAutoLayout: true
            },
            children
        };

        const node = await this.renderDefinition(structure);

        node.x = props.x ?? 0;
        node.y = props.y ?? 0;

        return node;
    }
}
