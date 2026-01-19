export interface ComponentProps {
  x: number;
  y: number;
}

export abstract class BaseComponent {
  abstract create(props: ComponentProps): SceneNode;
}
