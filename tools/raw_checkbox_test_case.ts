import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";


// SVG Assets



export class raw_checkbox_test_case extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME"
  };

        const root = await this.renderDefinition(structure);
        
        // Final positioning
        root.x = props.x;
        root.y = props.y;

        return root;
    }
}
