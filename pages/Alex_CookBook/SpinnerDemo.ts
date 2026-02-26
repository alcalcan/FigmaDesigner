import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { spinner } from "../../components/Alex_CookBook/spinner/spinner";

export class SpinnerDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<FrameNode> {
        const root = await this.initPage("Alex CookBook - Spinner Showcase");

        await this.addHeader(
            root,
            "Spinners / Circular Progress",
            "Functional circular progress indicators capable of varying sizes, stroke weights, and label configurations."
        );

        const sp = new spinner();

        // 1. Basic Spinners (Indeterminate/Progress Variants)
        await this.addSection(root, "Progress States", "Demonstrating various completion states.", async (container) => {
            const row = this.createRow(container, 32);
            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 10, size: 64 }),
                "1. 10%"
            ));
            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 25, size: 64 }),
                "2. 25%"
            ));
            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 50, size: 64 }),
                "3. 50%"
            ));
            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 85, size: 64 }),
                "4. 85%"
            ));
            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 100, size: 64 }),
                "5. 100%"
            ));
        });

        // 2. Sizes and Stroke Weights
        await this.addSection(root, "Sizes & Stroke Weights", "Customizable diameters and ring thickness.", async (container) => {
            const row = this.createRow(container, 32);

            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 66, size: 32, strokeWeight: 3 }),
                "6. Small (32px, 3stk)"
            ));

            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 66, size: 64, strokeWeight: 6 }),
                "7. Medium (64px, 6stk)"
            ));

            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 66, size: 120, strokeWeight: 12 }),
                "8. Large (120px, 12stk)"
            ));
        });

        // 3. With Labels
        await this.addSection(root, "Spinners with Labels", "Percentage labels automatically centered.", async (container) => {
            const row = this.createRow(container, 32);

            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 42, size: 80, strokeWeight: 6, showLabel: true }),
                "9. Default Label"
            ));

            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 100, size: 80, strokeWeight: 6, showLabel: true, labelValue: "Done" }),
                "10. Custom Label"
            ));
        });

        // 4. Color Variations
        await this.addSection(root, "Color Variations", "Support for semantic colors and rich gradients.", async (container) => {
            const row = this.createRow(container, 32);

            // Default
            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 70, size: 80, strokeWeight: 8 }),
                "11. Default Green"
            ));

            // Error Solid
            row.appendChild(await this.wrapWithCaption(
                await sp.create({ progress: 30, size: 80, strokeWeight: 8, activeColor: { r: 0.937, g: 0.267, b: 0.267 } }),
                "12. Error Red"
            ));

            // Brand Gradient
            row.appendChild(await this.wrapWithCaption(
                await sp.create({
                    progress: 88,
                    size: 80,
                    strokeWeight: 8,
                    activeColor: [{ r: 0.15, g: 0.45, b: 0.95 }, { r: 0.68, g: 0.4, b: 1 }]
                }),
                "13. Mixed Gradient"
            ));
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
