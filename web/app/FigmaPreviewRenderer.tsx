import React from 'react';

export function FigmaNodeRenderer({ node, parentLayoutMode = 'NONE' }: { node: any, parentLayoutMode?: string }) {
    if (!node) return null;

    const type = node.type || 'FRAME';
    const props = node.props || {};
    const layout = node.layoutProps || {};

    // 1. Base Setup
    const style: React.CSSProperties = {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
    };

    // 2. Positioning
    const isAbsolute = layout.layoutPositioning === 'ABSOLUTE' || parentLayoutMode === 'NONE';
    if (isAbsolute) {
        style.position = 'absolute';
        if (layout.x !== undefined) style.left = layout.x;
        if (layout.y !== undefined) style.top = layout.y;
    } else {
        style.position = 'relative';
    }

    // 3. Size & Growth
    if (layout.width !== undefined && props.layoutSizingHorizontal !== 'HUG' && props.textAutoResize !== 'WIDTH_AND_HEIGHT') {
        style.width = layout.width;
    }
    if (layout.height !== undefined && props.layoutSizingVertical !== 'HUG' && props.textAutoResize !== 'WIDTH_AND_HEIGHT' && props.textAutoResize !== 'HEIGHT') {
        style.height = layout.height;
    }

    if (layout.layoutGrow === 1) {
        style.flexGrow = 1;
        style.flexShrink = 0;
    }
    if (layout.layoutAlign === 'STRETCH') {
        style.alignSelf = 'stretch';
        if (parentLayoutMode === 'VERTICAL') style.width = 'auto';
        if (parentLayoutMode === 'HORIZONTAL') style.height = 'auto';
    }

    if (props.layoutSizingHorizontal === 'FILL') {
        if (parentLayoutMode === 'HORIZONTAL') {
            style.flexGrow = 1;
            style.width = 'auto';
            style.flexShrink = 0;
        } else if (parentLayoutMode === 'VERTICAL') {
            style.alignSelf = 'stretch';
            style.width = 'auto';
        }
    }

    if (props.layoutSizingVertical === 'FILL') {
        if (parentLayoutMode === 'VERTICAL') {
            style.flexGrow = 1;
            style.height = 'auto';
            style.flexShrink = 0;
        } else if (parentLayoutMode === 'HORIZONTAL') {
            style.alignSelf = 'stretch';
            style.height = 'auto';
        }
    }

    // 4. Auto Layout Properties (For this node as a parent)
    const currentLayoutMode = props.layoutMode || 'NONE';
    if (currentLayoutMode === 'HORIZONTAL') style.flexDirection = 'row';
    else if (currentLayoutMode === 'VERTICAL') style.flexDirection = 'column';
    else if (currentLayoutMode === 'NONE') {
        // children will be positioned absolutely
        style.display = 'block';
    }

    if (props.itemSpacing) style.gap = props.itemSpacing;
    if (props.paddingTop !== undefined) style.paddingTop = props.paddingTop;
    if (props.paddingRight !== undefined) style.paddingRight = props.paddingRight;
    if (props.paddingBottom !== undefined) style.paddingBottom = props.paddingBottom;
    if (props.paddingLeft !== undefined) style.paddingLeft = props.paddingLeft;
    if (props.cornerRadius !== undefined) style.borderRadius = props.cornerRadius;

    // 5. Alignment for children
    if (currentLayoutMode !== 'NONE') {
        const alignMap: Record<string, string> = {
            'MIN': 'flex-start',
            'CENTER': 'center',
            'MAX': 'flex-end',
            'SPACE_BETWEEN': 'space-between'
        };
        if (props.primaryAxisAlignItems) style.justifyContent = alignMap[props.primaryAxisAlignItems] || 'flex-start';
        if (props.counterAxisAlignItems) style.alignItems = alignMap[props.counterAxisAlignItems] || 'flex-start';

        // Wrap
        if (props.layoutWrap === 'WRAP') style.flexWrap = 'wrap';
    }

    // 6. Paint: Fills & Strokes
    const toRgba = (color: any, opacity: number = 1) => `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, ${opacity})`;

    if (props.fills && props.fills.length > 0) {
        const visibleFills = props.fills.filter((f: any) => f.visible !== false);
        const imageAndGradients: string[] = [];
        let solidColor: string | undefined = undefined;

        visibleFills.forEach((fill: any) => {
            if (fill.type === 'SOLID' && fill.color) {
                solidColor = toRgba(fill.color, fill.opacity !== undefined ? fill.opacity : 1);
            } else if (fill.type === 'IMAGE' && fill.assetRef) {
                const assetUrl = typeof fill.assetRef === 'object' && fill.assetRef.default ? fill.assetRef.default : fill.assetRef;
                imageAndGradients.push(`url(${assetUrl})`);

                // Map Figma scaleMode to CSS backgroundSize
                if (fill.scaleMode === 'FILL') style.backgroundSize = 'cover';
                else if (fill.scaleMode === 'FIT') style.backgroundSize = 'contain';
                else if (fill.scaleMode === 'TILE') {
                    style.backgroundRepeat = 'repeat';
                    style.backgroundSize = 'auto';
                } else if (fill.scaleMode === 'STRETCH') style.backgroundSize = '100% 100%';

                style.backgroundPosition = 'center';
            } else if (fill.type === 'GRADIENT_LINEAR' && fill.gradientStops) {
                const stops = fill.gradientStops.map((s: any) => {
                    const color = s.color ? toRgba(s.color, s.color.a !== undefined ? s.color.a : 1) : 'transparent';
                    return `${color} ${Math.round(s.position * 100)}%`;
                }).join(', ');

                // Simple transform mapping
                let angle = '90deg';
                if (fill.gradientTransform) {
                    const [[a, b], [c, d]] = fill.gradientTransform;
                    if (a === -1) angle = '270deg';
                    if (b === 1) angle = '180deg';
                    if (b === -1) angle = '0deg';
                }
                imageAndGradients.push(`linear-gradient(${angle}, ${stops})`);
            }
        });

        if (imageAndGradients.length > 0) {
            style.backgroundImage = imageAndGradients.reverse().join(', ');
        }
        if (solidColor) {
            style.backgroundColor = solidColor;
        }
    }

    if (props.strokes && props.strokes.length > 0) {
        const stroke = props.strokes.find((s: any) => s.visible !== false && s.type === 'SOLID');
        if (stroke && stroke.color) {
            const color = toRgba(stroke.color, stroke.opacity !== undefined ? stroke.opacity : 1);
            const w = props.strokeWeight || 1;
            const align = props.strokeAlign || 'INSIDE';

            if (props.strokeTopWeight !== undefined) {
                style.borderTop = `${props.strokeTopWeight}px solid ${color}`;
                style.borderRight = `${props.strokeRightWeight}px solid ${color}`;
                style.borderBottom = `${props.strokeBottomWeight}px solid ${color}`;
                style.borderLeft = `${props.strokeLeftWeight}px solid ${color}`;
            } else if (type === 'LINE') {
                const wVal = style.width;
                const wStr = String(wVal);
                if (wStr === '0px' || wStr === '0') {
                    style.borderLeft = `${w}px solid ${color}`;
                } else {
                    style.borderTop = `${w}px solid ${color}`;
                }
            } else {
                // Approximate INSIDE/OUTSIDE alignment
                if (align === 'INSIDE') {
                    style.boxShadow = `inset 0 0 0 ${w}px ${color}`;
                } else if (align === 'OUTSIDE') {
                    style.outline = `${w}px solid ${color}`;
                    style.outlineOffset = `-${w}px`; // Not quite right but outline is outside
                } else {
                    style.border = `${w}px solid ${color}`;
                }
            }
        }
    }

    // Per-corner radius support
    if (props.topLeftRadius !== undefined) style.borderTopLeftRadius = props.topLeftRadius;
    if (props.topRightRadius !== undefined) style.borderTopRightRadius = props.topRightRadius;
    if (props.bottomLeftRadius !== undefined) style.borderBottomLeftRadius = props.bottomLeftRadius;
    if (props.bottomRightRadius !== undefined) style.borderBottomRightRadius = props.bottomRightRadius;

    // 7. Effects (Shadows)
    if (props.effects && props.effects.length > 0) {
        const shadows = props.effects.filter((e: any) => e.visible !== false && (e.type === 'DROP_SHADOW' || e.type === 'INNER_SHADOW'));
        if (shadows.length > 0) {
            style.boxShadow = shadows.map((s: any) => {
                const inset = s.type === 'INNER_SHADOW' ? 'inset ' : '';
                const color = s.color ? toRgba(s.color, s.color.a !== undefined ? s.color.a : 1) : 'rgba(0,0,0,0.25)';
                const ox = s.offset?.x || 0;
                const oy = s.offset?.y || 0;
                const blur = s.radius || 0;
                const spread = s.spread || 0;
                return `${inset}${ox}px ${oy}px ${blur}px ${spread}px ${color}`;
            }).join(', ');
        }
    }

    if (props.opacity !== undefined) {
        style.opacity = props.opacity;
    }
    if (props.clipsContent) {
        style.overflow = 'hidden';
    } else if (style.overflow !== undefined) {
        delete style.overflow; // Don't clip by default if not requested
    }

    // 8. Children and Text
    let content: React.ReactNode = null;

    if (type === 'TEXT') {
        content = props.characters || '';

        // Text styling overrides
        if (props.fontSize) style.fontSize = props.fontSize;
        if (props.font && props.font.family) style.fontFamily = props.font.family;
        const fw = props.font?.style;
        if (fw?.includes('Bold')) style.fontWeight = 'bold';
        if (fw?.includes('Semi')) style.fontWeight = '600';
        if (fw?.includes('Medium')) style.fontWeight = '500';
        if (fw?.includes('Light')) style.fontWeight = '300';

        if (props.lineHeight && props.lineHeight.value) {
            style.lineHeight = props.lineHeight.unit === 'PERCENT'
                ? `${props.lineHeight.value}%`
                : `${props.lineHeight.value}px`;
        }
        if (props.letterSpacing && props.letterSpacing.value !== undefined) {
            style.letterSpacing = props.letterSpacing.unit === 'PERCENT'
                ? `${props.letterSpacing.value / 100}em`
                : `${props.letterSpacing.value}px`;
        }

        const alignH: Record<string, any> = { 'LEFT': 'left', 'CENTER': 'center', 'RIGHT': 'right', 'JUSTIFIED': 'justify' };
        if (props.textAlignHorizontal) style.textAlign = alignH[props.textAlignHorizontal];

        const alignV: Record<string, string> = { 'TOP': 'flex-start', 'CENTER': 'center', 'BOTTOM': 'flex-end' };
        if (props.textAlignVertical) {
            style.display = 'flex';
            style.alignItems = alignV[props.textAlignVertical] || 'flex-start';
            if (props.textAlignHorizontal === 'CENTER') style.justifyContent = 'center';
            else if (props.textAlignHorizontal === 'RIGHT') style.justifyContent = 'flex-end';
        }

        if (props.fills && props.fills.length > 0) {
            const fill = props.fills.find((f: any) => f.visible !== false && f.type === 'SOLID');
            if (fill && fill.color) {
                style.color = toRgba(fill.color, fill.opacity !== undefined ? fill.opacity : 1);
            }
        }

        // Clear background for text nodes which usually inherit it from fills incorrectly in DOM vs Figma
        style.backgroundColor = 'transparent';

    } else if (node.children) {
        content = node.children.map((child: any, i: number) => (
            <FigmaNodeRenderer key={i} node={child} parentLayoutMode={currentLayoutMode} />
        ));
    } else if (type === 'VECTOR') {
        let svgContent = node.svgContent;
        if (svgContent && typeof svgContent === 'object' && svgContent.default) {
            svgContent = svgContent.default;
        }

        if (svgContent) {
            // SVGs imported via Babel are converted to data URLs, not raw HTML tags
            if (typeof svgContent === 'string' && svgContent.trim().startsWith('data:image/')) {
                content = <img src={svgContent} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Vector asset" />;
            } else {
                content = <div dangerouslySetInnerHTML={{ __html: svgContent }} style={{ width: '100%', height: '100%' }} />;
            }
        } else {
            // Vector placeholder
            content = <div style={{ width: '100%', height: '100%', border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#aaa' }}>VECTOR</div>;
        }
    } else if (type === 'COMPONENT') {
        // Usually COMPONENT in this mock tree will have been evaluated, but if we encounter an unresolved component
        content = <div style={{ width: '100%', height: '100%', border: '1px dashed #f0f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#f0f' }}>{node.name || 'COMPONENT'}</div>;
    } else if (type === 'INSTANCE') {
        // Fallback for instances
        if (node.children) {
            content = node.children.map((child: any, i: number) => (
                <FigmaNodeRenderer key={i} node={child} parentLayoutMode={currentLayoutMode} />
            ));
        } else {
            content = <div style={{ width: '100%', height: '100%', border: '1px solid #0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#0ff' }}>INSTANCE</div>;
        }
    }

    return (
        <div className={`figma-node figma-node-${type.toLowerCase()}`} style={style} data-name={node.name}>
            {content}
        </div>
    );
}
