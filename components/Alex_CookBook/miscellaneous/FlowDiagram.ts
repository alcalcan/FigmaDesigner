import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Card } from "../Card/Card";
import { Lucide_arrow_right } from "../../lucide_icons/Lucide_arrow_right/Lucide_arrow_right";

export class FlowDiagram extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const container = figma.createFrame();
        container.name = "Flow Diagram";
        container.layoutMode = "HORIZONTAL";
        container.itemSpacing = 24;
        container.fills = [];
        container.primaryAxisAlignItems = "CENTER";
        container.counterAxisAlignItems = "CENTER";
        container.primaryAxisSizingMode = "AUTO";
        container.counterAxisSizingMode = "AUTO";

        const cardMaker = new Card();
        const arrowMaker = new Lucide_arrow_right();

        const steps = [
            { title: "Homepage", desc: "User lands on main page", color: { r: 0.2, g: 0.6, b: 0.9 } }, // Blue
            { title: "Product Detail", desc: "Views a specific item", color: { r: 0.6, g: 0.4, b: 0.8 } }, // Purple
            { title: "Cart", desc: "Adds item to cart", color: { r: 0.9, g: 0.5, b: 0.2 } }, // Orange
            { title: "Checkout", desc: "Completes purchase", color: { r: 0.2, g: 0.7, b: 0.4 } } // Green
        ];

        for (let i = 0; i < steps.length; i++) {
            const step = steps[i];

            const stepNode = await cardMaker.create({
                variant: "outlined",
                padding: 16,
                cornerRadius: 8,
                body: [
                    Card.text(step.title, { size: 16, weight: "Semi Bold", color: step.color }),
                    Card.text(step.desc, { size: 14, color: { r: 0.4, g: 0.4, b: 0.4 } })
                ],
                width: 180
            });

            // Add top border indicator
            const topIndicator = figma.createFrame();
            topIndicator.resize(180, 4);
            topIndicator.fills = [{ type: "SOLID", color: step.color }];
            topIndicator.cornerRadius = 2; // Slight rounding at the top
            stepNode.appendChild(topIndicator);
            topIndicator.layoutPositioning = "ABSOLUTE";
            topIndicator.x = 0;
            topIndicator.y = 0;

            container.appendChild(stepNode);

            // Add arrow if not the last step
            if (i < steps.length - 1) {
                const arrow = await arrowMaker.create({ width: 24, color: { r: 0, g: 0, b: 0 } }) as FrameNode;
                container.appendChild(arrow);
            }
        }

        return container;
    }
}
