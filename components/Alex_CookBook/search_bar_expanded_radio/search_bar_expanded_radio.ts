
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { search_bar } from "../search_bar/search_bar";

// Extended interface to support component composition
interface ExtendedNodeDefinition extends NodeDefinition {
    type: "FRAME" | "TEXT" | "VECTOR" | "COMPONENT" | "BOOLEAN_OPERATION" | "RECTANGLE"; // etc
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component?: any; // Class constructor
    // Function to run after creation
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    postCreate?: (node: SceneNode, props: any) => void | Promise<void>;
    children?: ExtendedNodeDefinition[];
}

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
        const structure: ExtendedNodeDefinition = {
            "type": "COMPONENT",
            "component": search_bar,
            "name": "search_bar_expanded_radio",
            "props": {
                ...props,
                chips: [
                    { label: "Sort By", dropdownOptions: sortOptions, expanded: true, selectionType: "radio" },
                    { label: "Author" },
                    { label: "Category" },
                    { label: "Date Range" }
                ]
            }
        };

        const root = await this.renderExtendedDefinition(structure);

        return root;
    }

    async renderExtendedDefinition(def: ExtendedNodeDefinition, parent?: BaseNode): Promise<SceneNode> {
        return await super.renderDefinition(def, parent);
    }
}
