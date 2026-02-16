import { BaseComponent, ComponentProps, NodeDefinition } from "../components/BaseComponent";


// SVG Assets



export class raw_checkbox_test_case extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME"
        };

        const root = await this.renderDefinition(structure);

        // Final positioning
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
