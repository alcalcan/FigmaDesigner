export type ImportFidelity = 'editable_fallback' | 'pixel_strict';

export interface ImportPptRequest {
    fileName: string;
    data: string;
    options?: {
        fidelity?: ImportFidelity;
        autoInsert?: boolean;
    };
}

export interface ImportPptResponse {
    status: 'ok';
    importKey: string;
    deckName: string;
    slideCount: number;
    generated: {
        slidesDir: string;
        presentationPath: string;
        presentationClassName: string;
    };
    warnings: string[];
}

export type HorizontalAlign = 'left' | 'center' | 'right' | 'justify';
export type VerticalAlign = 'top' | 'middle' | 'bottom';

export interface BaseSlideElement {
    kind: 'text' | 'shape' | 'image';
    x: number;
    y: number;
    w: number;
    h: number;
    opacity?: number;
}

export interface TextSlideElement extends BaseSlideElement {
    kind: 'text';
    text: string;
    color?: string;
    fontFamily?: string;
    fontStyle?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    align?: HorizontalAlign;
    valign?: VerticalAlign;
}

export interface ShapeSlideElement extends BaseSlideElement {
    kind: 'shape';
    shapeType: 'rect' | 'ellipse' | 'line';
    fillColor?: string;
    strokeColor?: string;
    strokeWeight?: number;
    cornerRadius?: number;
}

export interface ImageSlideElement extends BaseSlideElement {
    kind: 'image';
    assetFileName: string;
}

export type SlideElement = TextSlideElement | ShapeSlideElement | ImageSlideElement;

export interface ParsedSlide {
    index: number;
    name: string;
    width: number;
    height: number;
    background?: string;
    elements: SlideElement[];
}

export interface ParsedAsset {
    fileName: string;
    bytes: Buffer;
    sourcePath: string;
}

export interface ParsedDeck {
    deckName: string;
    width: number;
    height: number;
    slides: ParsedSlide[];
    assets: ParsedAsset[];
    warnings: string[];
}

export interface SlideClassInfo {
    className: string;
    fileName: string;
    relativePath: string;
}

export const EMU_PER_PX = 9525;

export function emuToPx(value: number): number {
    return value / EMU_PER_PX;
}

export function hundredthPointToPx(value: number): number {
    return (value / 100) * (96 / 72);
}
