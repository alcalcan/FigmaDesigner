import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { progress_bar } from "../../components/Alex_CookBook/progress_bar/progress_bar";

export class ProgressBarDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<FrameNode> {
        const root = await this.initPage("Alex CookBook - Progress Bar Showcase");

        await this.addHeader(
            root,
            "Progress Bars",
            "Functional progress bar components with varying sizes, colors, and label configurations."
        );

        const pb = new progress_bar();

        // 1. Basic Progress Bars
        await this.addSection(root, "Basic Progress Bars", "Standard progress bars in different sizes.", async (container) => {
            const row1 = this.createRow(container);
            row1.appendChild(await this.wrapWithCaption(
                await pb.create({ progress: 25, width: 300, size: "small" }),
                "1. Small (25%)"
            ));
            row1.appendChild(await this.wrapWithCaption(
                await pb.create({ progress: 50, width: 300, size: "medium" }),
                "2. Medium (50%)"
            ));

            const row2 = this.createRow(container);
            row2.appendChild(await this.wrapWithCaption(
                await pb.create({ progress: 75, width: 300, size: "large" }),
                "3. Large (75%)"
            ));
            row2.appendChild(await this.wrapWithCaption(
                await pb.create({ progress: 100, width: 300, size: "medium" }),
                "4. Full (100%)"
            ));
        });

        // 2. Progress Bars with Labels
        await this.addSection(root, "Progress Bars with Labels", "Progress bars accompanied by a percentage label.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await this.wrapWithCaption(
                await pb.create({ progress: 33, width: 260, showLabel: true }),
                "5. Label Example (33%)"
            ));

            row.appendChild(await this.wrapWithCaption(
                await pb.create({ progress: 88, width: 260, showLabel: true, color: "success" }),
                "6. Label Example (88%)"
            ));
        });

        // 3. Color Variations
        await this.addSection(root, "Color Variations", "Semantic color options for different contextual meanings.", async (container) => {
            const row1 = this.createRow(container);

            row1.appendChild(await this.wrapWithCaption(
                await pb.create({ progress: 60, width: 300, color: "default" }),
                "7. Default"
            ));

            row1.appendChild(await this.wrapWithCaption(
                await pb.create({ progress: 100, width: 300, color: "success" }),
                "8. Success"
            ));

            const row2 = this.createRow(container);

            row2.appendChild(await this.wrapWithCaption(
                await pb.create({ progress: 80, width: 300, color: "warning" }),
                "9. Warning"
            ));

            row2.appendChild(await this.wrapWithCaption(
                await pb.create({ progress: 15, width: 300, color: "error" }),
                "10. Error"
            ));
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
