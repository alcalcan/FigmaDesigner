import * as BaseModule from "../../BaseComponent";
import { CardSection_Title_Nav } from "./CardSection_Title_Nav";
import { ProgrammeCard, ProgrammeCardProps } from "./ProgrammeCard";

export interface ProgrammesCategorySectionProps extends BaseModule.ComponentProps {
    title: string;
    count: number;
    cards: ProgrammeCardProps[];
}

export class ProgrammesCategorySection extends BaseModule.BaseComponent {
    async create(props: BaseModule.ComponentProps): Promise<SceneNode> {
        const p = props as ProgrammesCategorySectionProps;
        const structure: BaseModule.NodeDefinition = {
            type: "FRAME",
            name: `Category: ${p.title}`,
            props: {
                layoutMode: "VERTICAL",
                itemSpacing: 40,
                layoutSizingHorizontal: "FILL",
                layoutSizingVertical: "HUG",
                fills: [],
            },
            children: [
                {
                    type: "COMPONENT",
                    name: "CardSection_Title_Nav",
                    component: CardSection_Title_Nav,
                    props: { title: p.title, count: p.count },
                    layoutProps: { layoutSizingHorizontal: "FILL", layoutSizingVertical: "HUG" },
                },
                {
                    type: "FRAME",
                    name: "Cards Container",
                    props: {
                        layoutMode: "HORIZONTAL",
                        itemSpacing: 24,
                        layoutWrap: "WRAP",
                        fills: [],
                    },
                    layoutProps: {
                        layoutSizingHorizontal: "FILL",
                        layoutSizingVertical: "HUG",
                    },
                    children: p.cards.map((cardProps) => ({
                        type: "COMPONENT",
                        name: cardProps.title,
                        component: ProgrammeCard,
                        props: cardProps,
                        layoutProps: {
                            layoutSizingHorizontal: "FIXED",
                            layoutSizingVertical: "HUG",
                            width: 404,
                        },
                    })),
                },
            ],
        };

        return this.renderDefinition(structure);
    }
}
