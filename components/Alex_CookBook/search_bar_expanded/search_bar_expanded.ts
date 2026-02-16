import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { search_bar } from "../search_bar/search_bar";
// Extended interface to support component composition


export class search_bar_expanded extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {

    // Define Authors (Famous European football book writers)
    const authors = [
      { name: "Nick Hornby", selected: true },
      { name: "Jonathan Wilson", selected: false },
      { name: "Simon Kuper", selected: false },
      { name: "Sid Lowe", selected: true },
      { name: "Ronald Reng", selected: false },
      { name: "Gabriele Marcotti", selected: true }
    ];

    // Define Structure
    const structure: NodeDefinition = {
      "type": "COMPONENT",
      "component": search_bar,
      "name": "search_bar_expanded",
      "props": {
        ...props,
        chips: [
          { label: "Newer first" },
          { label: "PDF" },
          { label: "Author", dropdownOptions: authors, expanded: true },
          { label: "Range date" }
        ]
      }
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;

    return root;
  }


}
