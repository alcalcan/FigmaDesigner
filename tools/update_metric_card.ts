import * as fs from 'fs';

const filePath = './components/Alex_CookBook/metric_card/metric_card.ts';
let code = fs.readFileSync(filePath, 'utf-8');

// Fix sizing modes based on horizontal/vertical
const sizingFix = `        const primaryIsFill = isHorizontal ? isFillWidth : isFillHeight;
        const counterIsFill = isHorizontal ? isFillHeight : isFillWidth;
        const primaryIsFixedNum = isHorizontal ? typeof props.width === 'number' : typeof props.height === 'number';
        const counterIsFixedNum = isHorizontal ? typeof props.height === 'number' : typeof props.width === 'number';

        const primarySizingMode = (primaryIsFill || primaryIsFixedNum) ? "FIXED" : "AUTO";
        const counterSizingMode = (counterIsFill || counterIsFixedNum) ? "FIXED" : "AUTO";

        const sparklineWidth = props.chartWidth ?? (isHorizontal ? (isCompact ? 80 : 160) : (isCompact ? 320 - 24 : 490.6667 - 32));`;

code = code.replace(
    /        const sparklineWidth .*?;/,
    sizingFix
);

// Fix structure props for root
const rootPropsFix = `                layoutMode: isHorizontal ? "HORIZONTAL" : "VERTICAL",
                itemSpacing: gap,
                paddingTop: padding,
                paddingRight: padding,
                paddingBottom: padding,
                paddingLeft: padding,
                primaryAxisSizingMode: primarySizingMode,
                counterAxisSizingMode: counterSizingMode,
                primaryAxisAlignItems: props.gap === "auto" ? "SPACE_BETWEEN" : "MIN",
                counterAxisAlignItems: isHorizontal ? "CENTER" : "MIN",`;

code = code.replace(
    /                layoutMode.*?\n.*?itemSpacing.*\n.*\n.*\n.*\n.*\n                primaryAxisSizingMode.*?\n                counterAxisSizingMode.*?\n                primaryAxisAlignItems.*?\n                counterAxisAlignItems.*?,/s,
    rootPropsFix
);

// Fix leftColumn to FILL vertically and horizontally, center contents, and ensure texts map to FILL.
const leftColumnFix = `        const leftColumn: NodeDefinition | null = isHorizontal ? createFrame("Left Content", {
            layoutMode: "VERTICAL",
            layoutSizingHorizontal: "FILL",
            layoutSizingVertical: "FILL",
            layoutGrow: 1,
            itemSpacing: gap,
            fills: [],
            primaryAxisAlignItems: "CENTER",
            counterAxisAlignItems: "MIN"
        }, [
            headerComponent,
            contentComponent,
            footerComponent
        ].filter(Boolean) as NodeDefinition[]) : null;`;

code = code.replace(
    /        const leftColumn: NodeDefinition \| null = isHorizontal \? createFrame\("Left Content"[\s\S]*?\]\.filter\(Boolean\) as NodeDefinition\[\]\) : null;/s,
    leftColumnFix
);

// Fix label string in contentComponent to HUG/FILL so it wraps nicely
code = code.replace(
    / layoutSizingHorizontal: "HUG",\n\s*layoutSizingVertical: "HUG"\n\s*}\),/s,
    ` layoutSizingHorizontal: "FILL",
                        layoutSizingVertical: "HUG"
                    }),`
);

// Also fix layoutAlign inside MetricCardsDesign1Demo.ts? We should fix layoutSizingHorizontal instead. 

fs.writeFileSync(filePath, code);
