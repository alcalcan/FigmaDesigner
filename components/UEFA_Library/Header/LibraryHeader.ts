import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Header } from "../../UEFA_Academy_online/Header/Header";

export interface LibraryHeaderProps extends ComponentProps {
  title?: string;
  subtitle?: string;
}

export class LibraryHeader extends BaseComponent {
  async create(props: LibraryHeaderProps): Promise<SceneNode> {
    const node = await new Header().create({
      ...props,
      title: props.title ?? "UEFA Resources",
      subtitle: props.subtitle ?? "Second line for text description"
    });
    node.name = "LibraryHeader";
    return node;
  }
}
