import { BaseDemoPage } from "./BaseDemoPage";
import { ComponentProps } from "../../components/BaseComponent";

// Components
import { date_picker } from "../../components/Alex_CookBook/date_picker/date_picker";
import { Browser } from "../../components/Alex_CookBook/Browser/Browser";
import { GQ_Banner_Shirts_Aligned } from "../../components/Alex_CookBook/GQ_Banner_Shirts_Aligned/GQ_Banner_Shirts_Aligned";

export class SpecializedBlocksDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = await this.initPage("Specialized Blocks & Widgets");
        await this.addHeader(root, "Specialized Blocks & Widgets", "Showcasing deeply custom, complex, and specialized components.");

        // --- DATE & TIME PICKERS ---
        await this.addSection(root, "Date & Time Pickers", "Standard form inputs for time ranges.", async (container) => {
            const row = figma.createFrame();
            row.name = "Pickers Row";
            row.layoutMode = "HORIZONTAL";
            row.itemSpacing = 24;
            row.layoutAlign = "STRETCH";
            row.primaryAxisSizingMode = "FIXED";
            row.counterAxisSizingMode = "AUTO";
            row.counterAxisAlignItems = "MIN";
            row.fills = [];

            const dp = new date_picker();

            row.appendChild(await dp.create({
                type: "date",
                placeholder: "Select Date",
                isOpen: true,
            }));

            row.appendChild(await dp.create({
                type: "time",
                placeholder: "Select Time",
                value: "14:30",
                isOpen: true,
            }));

            container.appendChild(row);
        });

        // --- BROWSER MOCKUP ---
        await this.addSection(root, "Browser Container", "Wrapper for showing generic screens.", async (container) => {
            const browser = new Browser();
            // Just displaying the default browser states since it's a large container
            const browserNode = await browser.create({});
            (browserNode as FrameNode).layoutAlign = "STRETCH";
            container.appendChild(browserNode);
        });

        // --- PROMOTIONAL BANNERS ---
        await this.addSection(root, "Promotional Banners", "Marketing banners with dynamic configurations.", async (container) => {
            const banner = new GQ_Banner_Shirts_Aligned();
            const bannerNode = await banner.create({});
            (bannerNode as FrameNode).layoutAlign = "STRETCH";
            container.appendChild(bannerNode);
        });


        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
