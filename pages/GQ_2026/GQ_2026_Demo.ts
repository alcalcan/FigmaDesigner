import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { banner } from "../../components/GQ_2026/banner/banner";
import { hero } from "../../components/GQ_2026/hero/hero";

/**
 * GQ_2026_Demo
 * 
 * Showcase the refined GQ_2026 suite components:
 * - Hero Component
 * - Banner Component (Standard, Gradient, and Full Hero variants)
 */
export class GQ_2026_Demo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const children: NodeDefinition[] = [
            {
                "type": "TEXT", "name": "Title",
                "props": {
                    "characters": "GQ 2026 Components",
                    "fontSize": 48,
                    "fontWeight": 700,
                    "fills": [{ "type": "SOLID", "color": { "r": 0.03, "g": 0.1, "b": 0.25 } }],
                    "font": { "family": "Manrope", "style": "Bold" }
                },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },

            // Hero Component Section
            {
                "type": "TEXT", "name": "Hero_Label",
                "props": {
                    "characters": "Hero Component",
                    "fontSize": 24,
                    "fontWeight": 600,
                    "fills": [{ "type": "SOLID", "color": { "r": 0.4, "g": 0.4, "b": 0.4 } }],
                    "font": { "family": "Manrope", "style": "SemiBold" }
                },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "COMPONENT",
                "name": "GQ_Hero_Instance",
                "component": hero,
                "props": {},
                "layoutProps": { "parentIsAutoLayout": true }
            },

            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 80, "parentIsAutoLayout": true }, "props": { "fills": [] } },

            // Banner Components Section
            {
                "type": "TEXT", "name": "Banner_Standard_Label",
                "props": {
                    "characters": "Banner - Standard",
                    "fontSize": 24,
                    "fontWeight": 600,
                    "fills": [{ "type": "SOLID", "color": { "r": 0.4, "g": 0.4, "b": 0.4 } }],
                    "font": { "family": "Manrope", "style": "SemiBold" }
                },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "COMPONENT",
                "name": "GQ_Banner_Standard",
                "component": banner,
                "props": {
                    "showGradient": false,
                    "showVectors": false,
                    "showStripes": false,
                    "headline": "Win a shirt signed\nby a legend!",
                    "subline": "Pick your legend. Pick your signed shirt.*"
                },
                "layoutProps": { "parentIsAutoLayout": true }
            },

            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },

            {
                "type": "TEXT", "name": "Banner_Gradient_Label",
                "props": {
                    "characters": "Banner - Hero Gradient",
                    "fontSize": 24,
                    "fontWeight": 600,
                    "fills": [{ "type": "SOLID", "color": { "r": 0.4, "g": 0.4, "b": 0.4 } }],
                    "font": { "family": "Manrope", "style": "SemiBold" }
                },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "COMPONENT",
                "name": "GQ_Banner_Gradient",
                "component": banner,
                "props": {
                    "showGradient": true,
                    "showVectors": false,
                    "showStripes": false,
                    "headline": "Win a shirt signed\nby a legend!",
                    "subline": "Pick your legend. Pick your signed shirt.*"
                },
                "layoutProps": { "parentIsAutoLayout": true }
            },

            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },

            {
                "type": "TEXT", "name": "Banner_Full_Label",
                "props": {
                    "characters": "Banner - Full Hero",
                    "fontSize": 24,
                    "fontWeight": 600,
                    "fills": [{ "type": "SOLID", "color": { "r": 0.4, "g": 0.4, "b": 0.4 } }],
                    "font": { "family": "Manrope", "style": "SemiBold" }
                },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "COMPONENT",
                "name": "GQ_Banner_Full",
                "component": banner,
                "props": {
                    "showGradient": true,
                    "showVectors": true,
                    "showStripes": true,
                    "headline": "Win a shirt signed\nby a legend!",
                    "subline": "Pick your legend. Pick your signed shirt.*"
                },
                "layoutProps": { "parentIsAutoLayout": true }
            },

            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },

            {
                "type": "TEXT", "name": "Banner_Shirts_Label",
                "props": {
                    "characters": "Banner - Full Hero + Shirts",
                    "fontSize": 24,
                    "fontWeight": 600,
                    "fills": [{ "type": "SOLID", "color": { "r": 0.4, "g": 0.4, "b": 0.4 } }],
                    "font": { "family": "Manrope", "style": "SemiBold" }
                },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "COMPONENT",
                "name": "GQ_Banner_Shirts",
                "component": banner,
                "props": {
                    "showGradient": true,
                    "showVectors": true,
                    "showStripes": true,
                    "showShirts": true,
                    "headline": "Win a shirt signed\nby a legend!",
                    "subline": "Pick your legend. Pick your signed shirt.*"
                },
                "layoutProps": { "parentIsAutoLayout": true }
            },
        ];

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "GQ_2026_Demo",
            "props": {
                "layoutMode": "VERTICAL",
                "itemSpacing": 20,
                "paddingTop": 80,
                "paddingRight": 80,
                "paddingBottom": 80,
                "paddingLeft": 80,
                "fills": [{ "type": "SOLID", "color": { "r": 0.98, "g": 0.98, "b": 0.98 } }],
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "AUTO"
            },
            "layoutProps": {
                "parentIsAutoLayout": false
            },
            "children": children
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}
