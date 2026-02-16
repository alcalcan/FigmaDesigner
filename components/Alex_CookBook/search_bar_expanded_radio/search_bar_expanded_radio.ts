
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { search_bar } from "../search_bar/search_bar";

// Extended interface to support component composition


export class search_bar_expanded_radio extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {

        // Define Sorting Options
        const sortOptions = [
            { name: "Newest First", selected: true },
            { name: "Oldest First", selected: false },
            { name: "Relevance", selected: false },
            { name: "Popularity", selected: false }
        ];

        // Define Structure
        const structure: NodeDefinition = {
            "type": "COMPONENT",
            "component": search_bar,
            "name": "search_bar_expanded_radio",
            "props": {
                ...props,
                chips: props.chips || [
                    { label: "Sort By", dropdownOptions: sortOptions, expanded: true, selectionType: "radio" },
                    { label: "Author" },
                    { label: "Category" },
                    { label: "Date Range" }
                ]
            }
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }


}
