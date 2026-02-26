import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { slider } from "../../components/Alex_CookBook/slider/slider";

export class SliderDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<FrameNode> {
        const root = await this.initPage("Alex CookBook - Slider Showcase");

        await this.addHeader(
            root,
            "Sliders",
            "Functional slider components including simple, range, and input-integrated variations."
        );

        const sl = new slider();

        // 1. Simple Sliders
        await this.addSection(root, "Simple Sliders", "Basic single-point selection sliders.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await this.wrapWithCaption(
                await sl.create({ type: "simple", value: 30, width: 300 }),
                "1. Value: 30%"
            ));

            row.appendChild(await this.wrapWithCaption(
                await sl.create({ type: "simple", value: 70, width: 300 }),
                "2. Value: 70%"
            ));
        });

        // 2. Range Sliders
        await this.addSection(root, "Range Sliders", "Dual-thumb sliders for selecting a range of values.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await this.wrapWithCaption(
                await sl.create({ type: "range", rangeValue: [10, 40], width: 300 }),
                "3. Range: 10 - 40"
            ));

            row.appendChild(await this.wrapWithCaption(
                await sl.create({ type: "range", rangeValue: [30, 90], width: 300 }),
                "4. Range: 30 - 90"
            ));
        });

        // 3. Sliders with Input
        await this.addSection(root, "Sliders with Input", "Single-point sliders paired with numerical input fields.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await this.wrapWithCaption(
                await sl.create({ type: "with-input", value: 45, width: 350 }),
                "5. Interactive Input (45)"
            ));

            row.appendChild(await this.wrapWithCaption(
                await sl.create({ type: "with-input", value: 82, width: 350 }),
                "6. Interactive Input (82)"
            ));
        });

        // 4. Range Sliders with Inputs
        await this.addSection(root, "Range Sliders with Inputs", "Range selection with dual numerical input fields for precise control.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await this.wrapWithCaption(
                await sl.create({ type: "range-with-inputs", rangeValue: [15, 65], width: 500 }),
                "7. Precision Range Control (15-65)"
            ));

            row.appendChild(await this.wrapWithCaption(
                await sl.create({ type: "range-with-inputs", rangeValue: [40, 95], width: 500 }),
                "8. Precision Range Control (40-95)"
            ));
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
