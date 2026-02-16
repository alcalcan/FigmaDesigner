import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export interface UserObservationStickyNoteProps extends ComponentProps {
    text?: string;
}

export class UserObservationStickyNote extends BaseComponent {
    async create(props: UserObservationStickyNoteProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "UX Sticky Note",
            "props": {
                "layoutMode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "paddingTop": 16,
                "paddingRight": 20,
                "paddingBottom": 16,
                "paddingLeft": 20,
                "cornerRadius": 4,
                "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 0.98, "b": 0.82 } }], // Parchment yellow
                "effects": [{
                    "type": "DROP_SHADOW",
                    "color": { "r": 0, "g": 0, "b": 0, "a": 0.1 },
                    "offset": { "x": 0, "y": 2 },
                    "radius": 4,
                    "visible": true,
                    "blendMode": "NORMAL"
                }]
            },
            "layoutProps": { "parentIsAutoLayout": true, "width": 600, "layoutAlign": "INHERIT" },
            "children": [
                {
                    "type": "TEXT",
                    "name": "Note Header",
                    "props": {
                        "characters": "UX OBSERVATION",
                        "fontSize": 10,
                        "fills": [{ "type": "SOLID", "color": { "r": 0.4, "g": 0.35, "b": 0.1 } }],
                        "font": { "family": "Manrope", "style": "ExtraBold" }
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                },
                {
                    "type": "TEXT",
                    "name": "Note Body",
                    "props": {
                        "characters": props.text,
                        "fontSize": 13,
                        "fills": [{ "type": "SOLID", "color": { "r": 0.2, "g": 0.18, "b": 0.05 } }],
                        "font": { "family": "Inter", "style": "Medium" },
                        "textAutoResize": "HEIGHT"
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                }
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}
