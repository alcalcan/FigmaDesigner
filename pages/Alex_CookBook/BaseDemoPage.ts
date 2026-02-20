import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Page_title } from "../../components/Alex_CookBook/Page_title/Page_title";

export abstract class BaseDemoPage extends BaseComponent {
    protected pageTitle = new Page_title();

    protected async initPage(name: string, width: number = 1680): Promise<FrameNode> {
        const root = figma.createFrame();
        root.name = name;
        root.layoutMode = "VERTICAL";
        root.itemSpacing = 64;
        root.paddingTop = 80;
        root.paddingLeft = 80;
        root.paddingRight = 80;
        root.paddingBottom = 80;
        root.counterAxisSizingMode = "FIXED";
        root.resize(Math.max(1, width), 100); // Applied Math.max(1, width) to root.resize
        root.primaryAxisSizingMode = "AUTO";
        root.fills = [{ type: "SOLID", color: { r: 0.949, g: 0.960, b: 0.980 } }]; // #F2F5FA
        root.layoutAlign = "STRETCH";
        root.clipsContent = false;
        return root;
    }

    protected async addHeader(root: FrameNode, title: string, subtitle: string) {
        const titleNode = await this.pageTitle.create({
            title,
            subtitle
        });
        root.appendChild(titleNode);
    }

    protected createRow(container: FrameNode, itemSpacing: number = 24): FrameNode {
        const row = figma.createFrame();
        row.name = "Row Container";
        row.layoutMode = "HORIZONTAL";
        row.itemSpacing = itemSpacing;
        row.fills = [];
        row.layoutAlign = "STRETCH";
        row.primaryAxisSizingMode = "FIXED"; // Width is controlled by parent AL via STRETCH
        row.primaryAxisAlignItems = "MIN";
        row.counterAxisAlignItems = "MIN";
        row.clipsContent = false;

        // Explicitly set width to match parent's internal width to avoid collapse
        const parentInternalWidth = container.width - (container.paddingLeft + container.paddingRight);
        // Use a minimum width to ensure layoutGrow children have something to grab onto
        // 1000 is a safe bet for a 1200 or 1600 page
        const safeWidth = Math.max(1000, parentInternalWidth);
        row.resize(Math.max(1, safeWidth), 100); // Applied Math.max(1, safeWidth)
        row.counterAxisSizingMode = "AUTO";  // Height hugs content

        container.appendChild(row);
        return row;
    }

    protected async addSection(
        root: FrameNode,
        title: string,
        description: string,
        contentBuilder: (container: FrameNode) => Promise<void>,
        options: { itemSpacing?: number; padding?: number } = {}
    ) {
        const section = figma.createFrame();
        section.name = `Section: ${title}`;
        section.layoutMode = "VERTICAL";
        section.itemSpacing = 24;
        section.fills = [];
        section.layoutAlign = "STRETCH";
        section.primaryAxisSizingMode = "AUTO";
        section.counterAxisSizingMode = "FIXED";
        section.clipsContent = false;

        const headerContainer = figma.createFrame();
        headerContainer.name = "Header";
        headerContainer.layoutMode = "VERTICAL";
        headerContainer.itemSpacing = 8;
        headerContainer.fills = [];
        headerContainer.layoutAlign = "STRETCH";
        headerContainer.primaryAxisSizingMode = "AUTO";
        headerContainer.counterAxisSizingMode = "FIXED";

        const label = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        label.characters = title;
        label.fontSize = 24;
        label.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.12 } }];
        label.layoutAlign = "STRETCH";
        label.textAutoResize = "HEIGHT";
        headerContainer.appendChild(label);

        const desc = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        desc.characters = description;
        desc.fontSize = 16;
        desc.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.45 } }];
        desc.layoutAlign = "STRETCH";
        desc.textAutoResize = "HEIGHT";
        headerContainer.appendChild(desc);

        section.appendChild(headerContainer);

        const previewContainer = figma.createFrame();
        previewContainer.name = "Demo Preview Container";
        previewContainer.layoutMode = "VERTICAL";
        previewContainer.itemSpacing = options.itemSpacing ?? 24;
        previewContainer.fills = [];
        previewContainer.layoutAlign = "STRETCH";
        const padding = options.padding ?? 24;
        const rootPadding = root.paddingLeft + root.paddingRight;
        const safeWidth = Math.max(100, (root.width || 1200) - rootPadding);
        previewContainer.resize(Math.max(1, safeWidth), 100); // Applied Math.max(1, safeWidth)

        previewContainer.counterAxisSizingMode = "FIXED";

        previewContainer.paddingLeft = padding;
        previewContainer.paddingRight = padding;
        previewContainer.paddingTop = padding;
        previewContainer.paddingBottom = padding;

        previewContainer.clipsContent = false;
        previewContainer.cornerRadius = 16;
        previewContainer.strokes = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];
        previewContainer.strokeWeight = 1;

        await contentBuilder(previewContainer);
        section.appendChild(previewContainer);

        root.appendChild(section);
    }
}
