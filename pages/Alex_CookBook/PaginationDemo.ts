import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { pagination } from "../../components/Alex_CookBook/pagination/pagination";

export class PaginationDemo extends BaseDemoPage {
  async create(props: ComponentProps): Promise<SceneNode> {
    await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
    await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });

    const root = await this.initPage("Pagination Demo", 1200);

    await this.addHeader(
      root,
      "Pagination",
      "Reusable Alex CookBook pagination component with library-aligned styling and parametric behavior."
    );

    await this.addSection(
      root,
      "Default",
      "Default pagination used in UEFA Library style.",
      async (container) => {
        const row = this.createRow(container);
        const comp = new pagination();

        const node = await comp.create({
          width: 1000,
          itemsPerPageValue: 10,
          rangeLabel: "1 - 10 of 50",
          pageLabel: "Page 1 of 5",
          firstDisabled: true,
          prevDisabled: true,
          nextDisabled: false,
          lastDisabled: false
        });

        row.appendChild(node);
        container.appendChild(row);
      }
    );

    await this.addSection(
      root,
      "Variant States",
      "Examples for middle page and compact controls without First/Last links.",
      async (container) => {
        const comp = new pagination();

        const rowA = this.createRow(container);
        rowA.appendChild(await comp.create({
          width: 1000,
          itemsPerPageValue: 20,
          rangeLabel: "21 - 40 of 240",
          pageLabel: "Page 2 of 12",
          firstDisabled: false,
          prevDisabled: false,
          nextDisabled: false,
          lastDisabled: false
        }));
        container.appendChild(rowA);

        const rowB = this.createRow(container);
        rowB.appendChild(await comp.create({
          width: 1000,
          showFirstLast: false,
          itemsPerPageLabel: "Rows",
          itemsPerPageValue: 25,
          rangeLabel: "226 - 250 of 250",
          pageLabel: "Page 10 of 10",
          prevDisabled: false,
          nextDisabled: true
        }));
        container.appendChild(rowB);
      }
    );

    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}
