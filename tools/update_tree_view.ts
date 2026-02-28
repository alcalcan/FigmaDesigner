import fs from "fs";

let content = fs.readFileSync("components/Alex_CookBook/tree_view/tree_view.ts", "utf-8");

// 1. Fix icon alignment and dense padding
content = content.replace(
    /const iconTopCompensation = isTransparent \? 0 : \(iconWrapperHeight > 24 \? 4 : \(isDense \? 4 : 8\)\);/,
    `const titleFontSize = isSectionHeaderRow ? 14 : (isDense ? 13 : 16);
            const titleLineHeight = titleFontSize * 1.25;
            const rightPaddingTop = isSectionHeaderRow ? 8 : (isDense ? 4 : 10);
            const textCenter = rightPaddingTop + (titleLineHeight / 2);
            const calculatedTopComp = Math.max(0, Math.round(textCenter - (Math.round((iconWrapperHeight - iconHeight) / 2) + Math.round(iconHeight / 2))));
            const iconTopCompensation = isTransparent ? 0 : calculatedTopComp;`
);

// 2. Fix the guide columns loop to handle the last node "L" shape correctly
content = content.replace(
    /for \(let k = 0; k < level; k\+\) \{[\s\S]*?guideCols\.push\(\{[\s\S]*?children: isActive \? \[\{[\s\S]*?name: "Guide Line",[\s\S]*?\] : \[\]\n                \}\);/,
    `for (let k = 0; k < level; k++) {
                const isActive = connectorState.ancestorLines[i][k] ?? false;
                
                // Determine if this is the final node for the ancestor at level k
                let isFinalNodeForThisAncestor = false;
                
                // Make sure we have activePathNodeByLevel properly rebuilt for this index to check
                let currentAncestorIndex = -1;
                for (let scan = i; scan >= 0; scan--) {
                    if (connectorState.levels[scan] === k) {
                        currentAncestorIndex = scan;
                        break;
                    }
                }
                
                if (currentAncestorIndex !== -1) {
                    // Find the end of this ancestor's subtree
                    let subtreeEnd = currentAncestorIndex;
                    for (let j = currentAncestorIndex + 1; j < props.nodes.length; j++) {
                        if (connectorState.levels[j] <= k) break;
                        subtreeEnd = j;
                    }
                    isFinalNodeForThisAncestor = (i === subtreeEnd);
                }

                let guideChildren: NodeDefinition[] = [];
                if (isActive) {
                    if (isFinalNodeForThisAncestor) {
                        const stopY = (typeof iconTopCompensation !== 'undefined' ? iconTopCompensation : 0) + (Math.round((iconWrapperHeight - iconHeight) / 2) + Math.round(iconHeight / 2)) - Math.floor(connectorThickness / 2);
                        guideChildren.push({
                            type: "FRAME",
                            name: "Guide Line (End)",
                            layoutProps: { width: connectorThickness, height: stopY, parentIsAutoLayout: true },
                            props: { fills: [{ type: "SOLID", color: defaultLineColor }] }
                        });
                    } else {
                        guideChildren.push({
                            type: "FRAME",
                            name: "Guide Line",
                            layoutProps: { width: connectorThickness, height: 16, layoutGrow: 1, parentIsAutoLayout: true },
                            props: { fills: [{ type: "SOLID", color: defaultLineColor }] }
                        });
                    }
                }

                guideCols.push({
                    type: "FRAME",
                    name: \`Guide Level \${k}\`,
                    layoutProps: { width: guideColumnWidth, layoutAlign: "STRETCH", parentIsAutoLayout: true },
                    props: {
                        layoutMode: "VERTICAL",
                        primaryAxisSizingMode: "FIXED",
                        primaryAxisAlignItems: "MIN",
                        counterAxisAlignItems: "MIN",
                        paddingLeft: k === 0 ? centeredConnectorX : nestedConnectorX,
                        paddingRight: Math.max(0, guideColumnWidth - (k === 0 ? centeredConnectorX : nestedConnectorX) - connectorThickness),
                        fills: [],
                        clipsContent: false
                    },
                    children: guideChildren
                });`
);

fs.writeFileSync("components/Alex_CookBook/tree_view/tree_view.ts", content);
