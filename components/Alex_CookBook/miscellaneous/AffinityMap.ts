import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Card } from "../Card/Card";

export class AffinityMap extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const container = figma.createFrame();
        container.name = "Affinity Map";
        container.layoutMode = "HORIZONTAL";
        container.itemSpacing = 24;
        container.fills = [];
        container.layoutAlign = "STRETCH";
        container.primaryAxisSizingMode = "AUTO";
        container.counterAxisSizingMode = "AUTO";
        container.layoutWrap = "WRAP";
        container.clipsContent = false;

        const noteColors = [
            { r: 1.0, g: 0.95, b: 0.6 }, // Yellow
            { r: 0.7, g: 0.9, b: 0.95 }, // Blue
            { r: 0.95, g: 0.75, b: 0.75 }, // Pink
            { r: 0.8, g: 0.95, b: 0.8 }, // Green
        ];

        const clusters = [
            { title: "User Pain Points", count: 5, colorIndex: 0 },
            { title: "Feature Requests", count: 4, colorIndex: 1 },
            { title: "Positive Feedback", count: 3, colorIndex: 3 },
            { title: "Bug Reports", count: 2, colorIndex: 2 }
        ];

        const cardMaker = new Card();

        for (const cluster of clusters) {
            const clusterContainer = figma.createFrame();
            clusterContainer.name = `Cluster: ${cluster.title}`;
            clusterContainer.layoutMode = "VERTICAL";
            clusterContainer.itemSpacing = 16;
            clusterContainer.fills = [];
            clusterContainer.primaryAxisSizingMode = "AUTO";
            clusterContainer.counterAxisSizingMode = "AUTO";

            // Title for cluster
            const titleText = figma.createText();
            titleText.characters = cluster.title;
            titleText.fontSize = 20;
            titleText.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
            await figma.loadFontAsync({ family: "Inter", style: "Medium" });
            titleText.fontName = { family: "Inter", style: "Medium" };
            clusterContainer.appendChild(titleText);

            // Grid of notes for this cluster
            const notesGrid = figma.createFrame();
            notesGrid.name = "Notes Grid";
            notesGrid.layoutMode = "HORIZONTAL";
            notesGrid.itemSpacing = 12;
            notesGrid.layoutWrap = "WRAP";
            notesGrid.fills = [];
            notesGrid.resize(350, 1); // Set small start height
            notesGrid.primaryAxisSizingMode = "FIXED";
            notesGrid.counterAxisSizingMode = "AUTO";
            notesGrid.clipsContent = false;
            notesGrid.paddingBottom = 48; // Space to account for rotated cards overflowing

            for (let i = 0; i < cluster.count; i++) {
                const note = await cardMaker.create({
                    variant: "elevated",
                    backgroundColor: noteColors[cluster.colorIndex],
                    padding: 16,
                    cornerRadius: 0,
                    body: [
                        Card.text(`Observation ${i + 1}`, { size: 14, weight: "Medium", color: { r: 0.2, g: 0.2, b: 0.2 } }),
                        Card.text("User mentioned this specifically during the interview...", { size: 12, color: { r: 0.3, g: 0.3, b: 0.3 } })
                    ],
                    width: 150
                });

                // Add a slight random rotation to simulate sticky notes
                const rotation = (Math.random() - 0.5) * 10; // -5 to 5 degrees
                note.rotation = rotation;

                notesGrid.appendChild(note);
            }

            clusterContainer.appendChild(notesGrid);
            container.appendChild(clusterContainer);
        }

        return container;
    }
}
