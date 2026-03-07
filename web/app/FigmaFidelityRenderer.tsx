import React from 'react';
import { cssMatrixFromFigmaTransform, imageFillToCss, linearGradientFillToCss, parseFontStyleToCss, toRgba } from './fidelityUtils';

type GenericNode = Record<string, unknown> & {
  type?: string;
  name?: string;
  props?: Record<string, unknown>;
  layoutProps?: Record<string, unknown>;
  children?: GenericNode[];
  svgContent?: string;
};

const toNumber = (value: unknown): number | undefined => {
  if (typeof value !== 'number' || Number.isNaN(value)) return undefined;
  return value;
};

const asArray = <T,>(value: unknown): T[] => (Array.isArray(value) ? (value as T[]) : []);

const firstVisiblePaint = (fills: unknown): Record<string, unknown> | null => {
  const entries = asArray<Record<string, unknown>>(fills);
  for (const fill of entries) {
    if (fill?.visible === false) continue;
    return fill;
  }
  return null;
};

const mapTextCase = (value: unknown): React.CSSProperties['textTransform'] | undefined => {
  if (value === 'UPPER') return 'uppercase';
  if (value === 'LOWER') return 'lowercase';
  if (value === 'TITLE') return 'capitalize';
  return undefined;
};

const mapTextDecoration = (value: unknown): React.CSSProperties['textDecoration'] | undefined => {
  if (value === 'UNDERLINE') return 'underline';
  if (value === 'STRIKETHROUGH') return 'line-through';
  return undefined;
};

const mapBlendMode = (value: unknown): React.CSSProperties['mixBlendMode'] | undefined => {
  if (typeof value !== 'string') return undefined;
  if (value === 'PASS_THROUGH' || value === 'NORMAL') return undefined;
  const css = value.toLowerCase().replace(/_/g, '-');
  return css as React.CSSProperties['mixBlendMode'];
};

const textAlignMap: Record<string, React.CSSProperties['textAlign']> = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFIED: 'justify'
};

const verticalAlignMap: Record<string, React.CSSProperties['alignItems']> = {
  TOP: 'flex-start',
  CENTER: 'center',
  BOTTOM: 'flex-end'
};

const autoLayoutAlignMap: Record<string, string> = {
  MIN: 'flex-start',
  CENTER: 'center',
  MAX: 'flex-end',
  SPACE_BETWEEN: 'space-between'
};

const renderRichText = (props: Record<string, unknown>): React.ReactNode => {
  const text = typeof props.characters === 'string' ? props.characters : '';
  const spans = asArray<Record<string, unknown>>(props.richTextSpans).slice().sort((a, b) => {
    const aStart = toNumber(a.start) ?? 0;
    const bStart = toNumber(b.start) ?? 0;
    return aStart - bStart;
  });

  if (spans.length === 0) return text;

  const chunks: React.ReactNode[] = [];
  let cursor = 0;

  for (let index = 0; index < spans.length; index += 1) {
    const span = spans[index];
    const start = Math.max(0, Math.min(text.length, toNumber(span.start) ?? cursor));
    const end = Math.max(start, Math.min(text.length, toNumber(span.end) ?? start));

    if (start > cursor) {
      chunks.push(text.slice(cursor, start));
    }

    const spanText = text.slice(start, end);
    const spanStyle: React.CSSProperties = {};

    const font = (span.font || {}) as { family?: string; style?: string };
    if (font.family) spanStyle.fontFamily = `"${font.family}", sans-serif`;
    if (font.style) {
      const parsed = parseFontStyleToCss(font.style);
      spanStyle.fontWeight = parsed.weight;
      spanStyle.fontStyle = parsed.style;
    }
    if (typeof span.fontSize === 'number') spanStyle.fontSize = span.fontSize;

    const fill = firstVisiblePaint(span.fills);
    if (fill && fill.type === 'SOLID' && fill.color && typeof fill.color === 'object') {
      spanStyle.color = toRgba(fill.color as { r: number; g: number; b: number; a?: number }, typeof fill.opacity === 'number' ? fill.opacity : 1);
    }

    chunks.push(<span key={`span-${index}-${start}-${end}`} style={spanStyle}>{spanText}</span>);
    cursor = end;
  }

  if (cursor < text.length) {
    chunks.push(text.slice(cursor));
  }

  return chunks;
};

const FigmaNode = ({ node, parentLayoutMode = 'NONE', isRoot = false }: { node: GenericNode; parentLayoutMode?: string; isRoot?: boolean }) => {
  const type = (node.type || 'FRAME').toUpperCase();
  const props = node.props || {};
  const layout = node.layoutProps || {};

  const style: React.CSSProperties = {
    boxSizing: 'border-box',
    transformOrigin: 'top left'
  };

  const layoutMode = typeof props.layoutMode === 'string' ? props.layoutMode : 'NONE';
  if (layoutMode === 'HORIZONTAL' || layoutMode === 'VERTICAL') {
    style.display = 'flex';
    style.flexDirection = layoutMode === 'HORIZONTAL' ? 'row' : 'column';
  } else {
    style.display = 'block';
  }

  const width = toNumber(layout.width);
  const height = toNumber(layout.height);
  if (width !== undefined) style.width = width;
  if (height !== undefined) style.height = height;

  const parentIsAutoLayout = parentLayoutMode !== 'NONE';
  const layoutPositioning = typeof layout.layoutPositioning === 'string' ? layout.layoutPositioning : 'AUTO';
  const isAbsolute = !parentIsAutoLayout || layoutPositioning === 'ABSOLUTE';

  if (!isRoot && isAbsolute) {
    style.position = 'absolute';
  } else {
    style.position = 'relative';
  }

  const relativeTransform = layout.relativeTransform;
  if (Array.isArray(relativeTransform) && relativeTransform.length === 2) {
    const matrix = relativeTransform as [[number, number, number], [number, number, number]];
    if (!isRoot && isAbsolute) {
      style.transform = cssMatrixFromFigmaTransform(matrix);
    } else {
      const [[a, b], [c, d]] = matrix;
      const hasRotation = Math.abs(a - 1) > 1e-4 || Math.abs(b) > 1e-4 || Math.abs(c) > 1e-4 || Math.abs(d - 1) > 1e-4;
      if (hasRotation) {
        style.transform = `matrix(${a}, ${c}, ${b}, ${d}, 0, 0)`;
      }
    }
  } else {
    const x = toNumber(layout.x);
    const y = toNumber(layout.y);
    if (!isRoot && isAbsolute) {
      if (x !== undefined) style.left = x;
      if (y !== undefined) style.top = y;
    }
  }

  if (typeof props.itemSpacing === 'number') style.gap = props.itemSpacing;
  if (typeof props.paddingTop === 'number') style.paddingTop = props.paddingTop;
  if (typeof props.paddingRight === 'number') style.paddingRight = props.paddingRight;
  if (typeof props.paddingBottom === 'number') style.paddingBottom = props.paddingBottom;
  if (typeof props.paddingLeft === 'number') style.paddingLeft = props.paddingLeft;

  if (typeof props.cornerRadius === 'number') style.borderRadius = props.cornerRadius;

  if (layoutMode !== 'NONE') {
    if (typeof props.primaryAxisAlignItems === 'string') {
      style.justifyContent = autoLayoutAlignMap[props.primaryAxisAlignItems] || 'flex-start';
    }
    if (typeof props.counterAxisAlignItems === 'string') {
      style.alignItems = autoLayoutAlignMap[props.counterAxisAlignItems] || 'flex-start';
    }
    if (props.layoutWrap === 'WRAP') style.flexWrap = 'wrap';
  }

  if (props.layoutSizingHorizontal === 'FILL' && parentLayoutMode === 'HORIZONTAL') {
    style.flexGrow = 1;
    style.flexShrink = 1;
    style.width = 'auto';
  } else if (props.layoutSizingHorizontal === 'FILL' && parentLayoutMode === 'VERTICAL') {
    style.alignSelf = 'stretch';
    style.width = 'auto';
  }

  if (props.layoutSizingVertical === 'FILL' && parentLayoutMode === 'VERTICAL') {
    style.flexGrow = 1;
    style.flexShrink = 1;
    style.height = 'auto';
  } else if (props.layoutSizingVertical === 'FILL' && parentLayoutMode === 'HORIZONTAL') {
    style.alignSelf = 'stretch';
    style.height = 'auto';
  }

  if (typeof layout.layoutGrow === 'number') style.flexGrow = layout.layoutGrow;
  if (layout.layoutAlign === 'STRETCH') style.alignSelf = 'stretch';

  const visibleFill = firstVisiblePaint(props.fills);
  if (visibleFill) {
    if (visibleFill.type === 'SOLID' && visibleFill.color && typeof visibleFill.color === 'object') {
      style.backgroundColor = toRgba(
        visibleFill.color as { r: number; g: number; b: number; a?: number },
        typeof visibleFill.opacity === 'number' ? visibleFill.opacity : 1
      );
    } else if (visibleFill.type === 'GRADIENT_LINEAR') {
      const gradientCss = linearGradientFillToCss(visibleFill as {
        type: 'GRADIENT_LINEAR';
        gradientStops?: Array<{ color: { r: number; g: number; b: number; a?: number }; position: number }>;
        gradientTransform?: [[number, number, number], [number, number, number]];
        opacity?: number;
      });
      if (gradientCss) style.backgroundImage = gradientCss;
    } else if (visibleFill.type === 'IMAGE') {
      const imageCss = imageFillToCss({
        type: 'IMAGE',
        scaleMode: (visibleFill.scaleMode as 'FILL' | 'FIT' | 'CROP' | 'TILE' | undefined),
        assetRef: (visibleFill.assetRef as string | undefined)
      });
      Object.assign(style, imageCss);
    }
  }

  const visibleStroke = firstVisiblePaint(props.strokes);
  if (visibleStroke && visibleStroke.type === 'SOLID' && visibleStroke.color && typeof visibleStroke.color === 'object') {
    const color = toRgba(
      visibleStroke.color as { r: number; g: number; b: number; a?: number },
      typeof visibleStroke.opacity === 'number' ? visibleStroke.opacity : 1
    );
    if (typeof props.strokeTopWeight === 'number') {
      style.borderTop = `${props.strokeTopWeight}px solid ${color}`;
      style.borderRight = `${typeof props.strokeRightWeight === 'number' ? props.strokeRightWeight : props.strokeTopWeight}px solid ${color}`;
      style.borderBottom = `${typeof props.strokeBottomWeight === 'number' ? props.strokeBottomWeight : props.strokeTopWeight}px solid ${color}`;
      style.borderLeft = `${typeof props.strokeLeftWeight === 'number' ? props.strokeLeftWeight : props.strokeTopWeight}px solid ${color}`;
    } else {
      const strokeWeight = typeof props.strokeWeight === 'number' ? props.strokeWeight : 1;
      style.border = `${strokeWeight}px solid ${color}`;
    }
  }

  const effects = asArray<Record<string, unknown>>(props.effects).filter((effect) => effect.visible !== false);
  const shadows = effects
    .filter((effect) => effect.type === 'DROP_SHADOW' || effect.type === 'INNER_SHADOW')
    .map((effect) => {
      const inset = effect.type === 'INNER_SHADOW' ? 'inset ' : '';
      const color = effect.color && typeof effect.color === 'object'
        ? toRgba(effect.color as { r: number; g: number; b: number; a?: number }, 1)
        : 'rgba(0,0,0,0.25)';
      const offset = (effect.offset || { x: 0, y: 0 }) as { x?: number; y?: number };
      const blur = typeof effect.radius === 'number' ? effect.radius : 0;
      const spread = typeof effect.spread === 'number' ? effect.spread : 0;
      return `${inset}${offset.x || 0}px ${offset.y || 0}px ${blur}px ${spread}px ${color}`;
    });
  if (shadows.length > 0) style.boxShadow = shadows.join(', ');

  const layerBlur = effects.find((effect) => effect.type === 'LAYER_BLUR');
  if (layerBlur && typeof layerBlur.radius === 'number') {
    style.filter = `blur(${layerBlur.radius}px)`;
  }

  const backgroundBlur = effects.find((effect) => effect.type === 'BACKGROUND_BLUR');
  if (backgroundBlur && typeof backgroundBlur.radius === 'number') {
    style.backdropFilter = `blur(${backgroundBlur.radius}px)`;
  }

  if (typeof props.opacity === 'number') style.opacity = props.opacity;
  if (props.clipsContent === true) style.overflow = 'hidden';

  const blendMode = mapBlendMode(props.blendMode);
  if (blendMode) style.mixBlendMode = blendMode;

  let content: React.ReactNode = null;

  if (type === 'TEXT') {
    style.whiteSpace = 'pre-wrap';
    if (typeof props.fontSize === 'number') style.fontSize = props.fontSize;
    const font = (props.font || {}) as { family?: string; style?: string };
    if (font.family) style.fontFamily = `"${font.family}", sans-serif`;
    if (font.style) {
      const parsed = parseFontStyleToCss(font.style);
      style.fontWeight = parsed.weight;
      style.fontStyle = parsed.style;
    }
    if (props.lineHeight && typeof props.lineHeight === 'object') {
      const lineHeight = props.lineHeight as { unit?: string; value?: number };
      if (typeof lineHeight.value === 'number') {
        style.lineHeight = lineHeight.unit === 'PERCENT' ? `${lineHeight.value}%` : `${lineHeight.value}px`;
      }
    }
    if (props.letterSpacing && typeof props.letterSpacing === 'object') {
      const letterSpacing = props.letterSpacing as { unit?: string; value?: number };
      if (typeof letterSpacing.value === 'number') {
        style.letterSpacing = letterSpacing.unit === 'PERCENT' ? `${letterSpacing.value / 100}em` : `${letterSpacing.value}px`;
      }
    }

    if (typeof props.textAlignHorizontal === 'string') {
      style.textAlign = textAlignMap[props.textAlignHorizontal] || 'left';
    }

    if (typeof props.textAlignVertical === 'string') {
      style.display = 'flex';
      style.alignItems = verticalAlignMap[props.textAlignVertical] || 'flex-start';
    }

    const textFill = firstVisiblePaint(props.fills);
    if (textFill && textFill.type === 'SOLID' && textFill.color && typeof textFill.color === 'object') {
      style.color = toRgba(
        textFill.color as { r: number; g: number; b: number; a?: number },
        typeof textFill.opacity === 'number' ? textFill.opacity : 1
      );
    }

    style.textTransform = mapTextCase(props.textCase);
    style.textDecoration = mapTextDecoration(props.textDecoration);
    style.backgroundImage = undefined;
    style.backgroundColor = 'transparent';

    content = renderRichText(props);
  } else if (type === 'VECTOR') {
    if (typeof node.svgContent === 'string' && node.svgContent.trim().length > 0) {
      content = (
        <div
          style={{ width: '100%', height: '100%' }}
          dangerouslySetInnerHTML={{ __html: node.svgContent }}
        />
      );
    }
  }

  if (!content && Array.isArray(node.children) && node.children.length > 0) {
    content = node.children.map((child, index) => (
      <FigmaNode key={`${child.name || child.type || 'node'}-${index}`} node={child} parentLayoutMode={layoutMode} />
    ));
  }

  return (
    <div
      className={`fidelity-node fidelity-node-${type.toLowerCase()}`}
      style={style}
      data-name={node.name || ''}
      data-node-type={type}
    >
      {content}
    </div>
  );
};

export const FigmaFidelityRenderer = ({ node }: { node: GenericNode }) => {
  return (
    <div data-fidelity-root="true" style={{ position: 'relative', display: 'inline-block' }}>
      <FigmaNode node={node} isRoot />
    </div>
  );
};
