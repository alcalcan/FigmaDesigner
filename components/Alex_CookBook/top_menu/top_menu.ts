import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";
import { Placeholder } from "../../Placeholder";
import { input_field } from "../input_field/input_field";
import { button } from "../button/button";
import { Lucide_bell } from "../../lucide_icons/Lucide_bell/Lucide_bell";
import { Lucide_menu } from "../../lucide_icons/Lucide_menu/Lucide_menu";
import { Action___profile } from "../../UEFA_icons/Action___profile/Action___profile";
import { Lucide_search } from "../../lucide_icons/Lucide_search/Lucide_search";
import { Lucide_more_vertical } from "../../lucide_icons/Lucide_more_vertical/Lucide_more_vertical";

export interface TopMenuProps extends ComponentProps {

    // Overall Layout Rules
    layoutType?: "fill" | "fixed";
    fillWidth?: boolean; // Let topMenu fill its parent container
    isFloating?: boolean;
    isIsland?: boolean;   // if elements within it are islands, or if it itself is one

    // Core Styling
    backgroundColor?: { r: number, g: number, b: number };
    borderColor?: { r: number, g: number, b: number } | null;
    textColor?: { r: number, g: number, b: number };
    iconColor?: { r: number, g: number, b: number };

    // Left Element Rules
    hasLogo?: boolean;
    logoAsset?: string | NodeDefinition | null;  // SVG Content or full Custom Node
    logoText?: string | null;   // Next to standard logo
    showMenuOnLeft?: boolean;

    // Center Element Rules
    navItems?: ({ name: string, isSelected?: boolean } | string | NodeDefinition)[];
    navItemSpacing?: number;
    navFont?: string;
    navFontSize?: number;
    navFontWeight?: string;
    customCenterNode?: NodeDefinition; // Total custom override (e.g UEFA desktop menu group)
    centerAlignMode?: "MIN" | "CENTER" | "MAX" | "SPACE_BETWEEN";
    centerSectionGrow?: boolean; // Grow center section to FILL space horizontally
    showSearchInCenter?: boolean;
    searchCornerRadius?: number;
    searchFullMode?: boolean; // Grow search field

    // Right Element Rules
    showSearchAction?: boolean;
    showNotifications?: boolean;
    showKebabMenu?: boolean;
    showHamburgerMenu?: boolean;
    showProfile?: boolean;
    customRightElements?: NodeDefinition[]; // Array of nodes injected before actions
    customRightNode?: NodeDefinition; // Total custom override

    // Override Layout properties directly from outside (paddings, gaps, sizing)
    rootLayoutProps?: Partial<NodeDefinition["props"]>;
    itemSpacing?: number;
    sectionSpacing?: number | "auto"; // Default gap between Left, Center and Right areas
}

export class top_menu extends BaseComponent {
    async create(props: TopMenuProps): Promise<SceneNode> {

        const isFloating = props.isFloating ?? false;
        const isIsland = props.isIsland ?? false; // The single cohesive island pill style

        // Default colors
        const bgColor = props.backgroundColor ?? { r: 1, g: 1, b: 1 };
        const borderColor = props.borderColor !== undefined ? props.borderColor : { r: 0.9, g: 0.9, b: 0.9 };
        const textColor = props.textColor ?? { r: 0.2, g: 0.2, b: 0.2 };
        const iconColor = props.iconColor ?? { r: 0.3, g: 0.3, b: 0.3 };

        const rootProps: NodeDefinition["props"] = {
            layoutMode: "HORIZONTAL",
            primaryAxisSizingMode: (props.fillWidth || props.layoutType === "fill") ? "AUTO" : "FIXED",
            counterAxisSizingMode: "AUTO",
            primaryAxisAlignItems: props.sectionSpacing === "auto" ? "SPACE_BETWEEN" : "MIN", // Changed this to respect sectionSpacing
            counterAxisAlignItems: "CENTER",
            itemSpacing: props.sectionSpacing === "auto" ? 0 : (props.sectionSpacing ?? props.itemSpacing ?? 48), // Use 0 for strict auto SPACE_BETWEEN
            paddingLeft: (isFloating || isIsland) ? 0 : 32,
            paddingRight: (isFloating || isIsland) ? 0 : 32,
            paddingTop: (isFloating || isIsland) ? 0 : 16,
            paddingBottom: (isFloating || isIsland) ? 0 : 16,
            fills: (isFloating && !isIsland) ? [] : [{ type: "SOLID", color: bgColor }],
            strokes: (isFloating || !borderColor) ? [] : [{ type: "SOLID", color: borderColor }],
            strokeWeight: (isFloating || !borderColor) ? 0 : 1,
            strokeBottomWeight: (isFloating || isIsland || !borderColor) ? 0 : 1,
            effects: (isFloating || isIsland) ? [] : [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.05 },
                offset: { x: 0, y: 4 },
                radius: 12,
                spread: 0,
                visible: true,
                blendMode: "NORMAL"
            }],
            ...props.rootLayoutProps // User override
        };

        const islandProps = isFloating || isIsland ? {
            fills: [{ type: "SOLID", color: bgColor }],
            cornerRadius: 100,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 12,
            paddingBottom: 12,
            strokes: borderColor ? [{ type: "SOLID", color: borderColor }] : [],
            strokeWeight: borderColor ? 1 : 0,
            effects: [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.08 },
                offset: { x: 0, y: 8 },
                radius: 24,
                spread: 0,
                visible: true,
                blendMode: "NORMAL"
            }]
        } : {};

        if (isIsland) {
            // Apply island props directly to root
            Object.assign(rootProps, islandProps);
        }

        const islandLayoutProps = isFloating || isIsland ? {
            height: 64
        } : {};

        const children: NodeDefinition[] = [];

        // --- LEFT SECTION ---
        const leftSection: NodeDefinition = {
            type: "FRAME",
            name: "Left Section",
            props: {
                layoutMode: "HORIZONTAL",
                counterAxisAlignItems: "CENTER",
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: isFloating ? "FIXED" : "AUTO",
                itemSpacing: 16,
                fills: [],
                ...(isFloating ? islandProps : {})
            },
            layoutProps: {
                ...(isFloating ? islandLayoutProps : {})
            },
            children: []
        };

        if (props.hasLogo || props.logoAsset || props.logoText) {
            let logoContent: NodeDefinition;

            if (typeof props.logoAsset === "object" && props.logoAsset !== null) {
                // Supplied a full NodeDefinition for the logo
                logoContent = props.logoAsset;
            } else if (typeof props.logoAsset === "string") {
                logoContent = {
                    type: "VECTOR",
                    name: "Logo Icon SVG",
                    props: {},
                    layoutProps: { parentIsAutoLayout: true },
                    svgContent: props.logoAsset
                };
            } else {
                logoContent = {
                    type: "VECTOR",
                    name: "Logo Icon Vector",
                    props: {
                        strokeWeight: 2,
                        strokeAlign: "CENTER",
                        strokes: [{ type: "SOLID", color: { r: 0.1, g: 0.65, b: 0.55 } }],
                        strokeJoin: "ROUND",
                        strokeCap: "ROUND",
                        vectorPaths: [{ windingRule: "EVENODD", data: "M 12 2 L 2 7 L 12 12 L 22 7 L 12 2 Z M 2 17 L 12 22 L 22 17 M 2 12 L 12 17 L 22 12" }]
                    },
                    layoutProps: {
                        width: 24,
                        height: 24,
                        parentIsAutoLayout: true
                    }
                };
            }

            const logoGroup: NodeDefinition = {
                type: "FRAME",
                name: "Brand Logo",
                props: {
                    layoutMode: "HORIZONTAL",
                    counterAxisAlignItems: "CENTER",
                    primaryAxisAlignItems: "MIN",
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "AUTO",
                    itemSpacing: 10,
                    fills: [],
                    clipsContent: false,
                },
                children: [logoContent]
            };

            if (props.logoText) {
                logoGroup.children!.push({
                    type: "TEXT",
                    name: "Logo Text",
                    props: {
                        characters: props.logoText,
                        fontSize: 16,
                        font: { family: "Inter", style: "Bold" },
                        fills: [{ type: "SOLID", color: textColor }],
                        textAutoResize: "WIDTH_AND_HEIGHT"
                    }
                });
            }

            leftSection.children!.push(logoGroup);
        }

        if (props.showMenuOnLeft) {
            leftSection.children!.push({
                type: "COMPONENT",
                component: button,
                name: "Menu Button",
                props: {
                    variant: "ghost",
                    frontIcon: Lucide_menu,
                    size: "small",
                    label: "Menu",
                    textColor: textColor
                }
            });
        }

        if (leftSection.children!.length > 0) {
            children.push(leftSection);
        }

        // --- CENTER SECTION ---
        if (props.customCenterNode) {
            children.push(props.customCenterNode);
        } else {
            const hasNavItems = props.navItems && props.navItems.length > 0;
            const primaryAlign = props.centerAlignMode ?? ((hasNavItems || isFloating || isIsland) ? "CENTER" : (props.showSearchInCenter && !props.searchFullMode ? "CENTER" : (props.searchFullMode ? "MIN" : "CENTER")));

            const centerSection: NodeDefinition = {
                type: "FRAME",
                name: "Center Section",
                props: {
                    layoutMode: "HORIZONTAL",
                    counterAxisAlignItems: "CENTER",
                    primaryAxisAlignItems: primaryAlign,
                    primaryAxisSizingMode: "FIXED",
                    counterAxisSizingMode: (isFloating && hasNavItems) ? "FIXED" : "AUTO",
                    itemSpacing: 32,
                    fills: [],
                    ...(isFloating && hasNavItems ? islandProps : {})
                },
                layoutProps: {
                    layoutGrow: props.centerSectionGrow ? 1 : 0,
                    ...(isFloating && hasNavItems ? islandLayoutProps : {})
                },
                children: []
            };

            if (hasNavItems) {
                const navGroup: NodeDefinition = {
                    type: "FRAME",
                    name: "Navigation Links",
                    props: {
                        layoutMode: "HORIZONTAL",
                        primaryAxisSizingMode: "AUTO",
                        counterAxisSizingMode: "AUTO",
                        primaryAxisAlignItems: primaryAlign === "SPACE_BETWEEN" ? "SPACE_BETWEEN" : "MIN",
                        itemSpacing: props.navItemSpacing ?? 24,
                        fills: [],
                    },
                    layoutProps: props.centerSectionGrow ? { layoutGrow: 1, parentIsAutoLayout: true } : undefined,
                    children: props.navItems!.map((itemArg, index) => {
                        // Support native NodeDefinitions integrated seamlessly
                        if (typeof itemArg === "object" && itemArg !== null && "type" in itemArg) {
                            return itemArg as NodeDefinition;
                        }

                        const itemName = typeof itemArg === "string" ? itemArg : (itemArg as { name: string, isSelected?: boolean }).name;
                        const isSelected = typeof itemArg === "string" ? index === 0 : ((itemArg as { name: string, isSelected?: boolean }).isSelected ?? false);

                        return {
                            type: "TEXT",
                            name: `Nav Item: ${itemName}`,
                            props: {
                                characters: itemName,
                                fontSize: props.navFontSize ?? 14,
                                fontName: { family: props.navFont ?? "Inter", style: isSelected ? (props.navFontWeight ?? "Semi Bold") : "Regular" },
                                fills: [{ type: "SOLID", color: isSelected ? textColor : iconColor }],
                                textAutoResize: "WIDTH_AND_HEIGHT"
                            },
                            layoutProps: { parentIsAutoLayout: true }
                        };
                    })
                };
                if (props.searchFullMode) {
                    navGroup.layoutProps = { ...navGroup.layoutProps, layoutGrow: 1 };
                }
                centerSection.children!.push(navGroup);
            }

            if (props.showSearchInCenter) {
                const searchContainer: NodeDefinition = {
                    type: "FRAME",
                    name: "Search Container",
                    props: {
                        layoutMode: "HORIZONTAL",
                        primaryAxisSizingMode: "AUTO",
                        counterAxisSizingMode: "AUTO",
                        fills: [],
                        primaryAxisAlignItems: props.searchFullMode ? "MAX" : "MIN",
                    },
                    layoutProps: {
                        layoutGrow: props.searchFullMode ? 1 : 0,
                        width: 320
                    },
                    children: [
                        {
                            type: "COMPONENT",
                            component: input_field,
                            name: "Search Input",
                            props: {
                                placeholder: "Search...",
                                type: "simple",
                                showSearchIcon: true,
                                width: props.searchFullMode ? 240 : 320,
                                cornerRadius: props.searchCornerRadius
                            }
                        }
                    ]
                };
                centerSection.children!.push(searchContainer);
            }

            if (centerSection.children!.length > 0) {
                children.push(centerSection);
            }
        }

        // --- RIGHT SECTION ---
        if (props.customRightNode) {
            children.push(props.customRightNode);
        } else {
            const hasRightActions = props.showSearchAction || props.showNotifications || props.showKebabMenu || props.showHamburgerMenu;

            const rightSection: NodeDefinition = {
                type: "FRAME",
                name: "Right Section",
                props: {
                    layoutMode: "HORIZONTAL",
                    counterAxisAlignItems: "CENTER",
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: isFloating ? "FIXED" : "AUTO",
                    itemSpacing: 24,
                    fills: [],
                    ...(isFloating ? islandProps : {})
                },
                layoutProps: {
                    ...(isFloating ? islandLayoutProps : {})
                },
                children: []
            };

            const actionGroup: NodeDefinition = {
                type: "FRAME",
                name: "Utility Icons",
                props: {
                    layoutMode: "HORIZONTAL",
                    counterAxisAlignItems: "CENTER",
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "AUTO",
                    itemSpacing: 8,
                    fills: [],
                    clipsContent: false
                },
                children: []
            };

            if (props.customRightElements) {
                actionGroup.children!.push(...props.customRightElements);
            }

            if (props.showSearchAction) {
                actionGroup.children!.push({
                    type: "COMPONENT",
                    component: button,
                    name: "Search",
                    props: {
                        variant: "ghost",
                        frontIcon: Lucide_search,
                        size: "small",
                        label: undefined,
                        textColor: textColor
                    }
                });
            }

            if (props.showNotifications) {
                actionGroup.children!.push({
                    type: "COMPONENT",
                    component: button,
                    name: "Notifications",
                    props: {
                        variant: "ghost",
                        frontIcon: Lucide_bell,
                        size: "small",
                        label: undefined,
                        textColor: textColor
                    }
                });
            }

            if (props.showKebabMenu) {
                actionGroup.children!.push({
                    type: "COMPONENT",
                    component: button,
                    name: "More Actions",
                    props: {
                        variant: "ghost",
                        frontIcon: Lucide_more_vertical,
                        size: "small",
                        label: undefined,
                        textColor: textColor
                    }
                });
            }

            if (props.showHamburgerMenu) {
                actionGroup.children!.push({
                    type: "COMPONENT",
                    component: button,
                    name: "Hamburger Menu",
                    props: {
                        variant: "ghost",
                        frontIcon: Lucide_menu,
                        size: "small",
                        label: undefined,
                        textColor: textColor
                    }
                });
            }

            if (actionGroup.children!.length > 0) {
                rightSection.children!.push(actionGroup);
            }

            if (props.showProfile) {
                rightSection.children!.push({
                    type: "FRAME",
                    name: "Profile Avatar",
                    props: {
                        cornerRadius: 20,
                        fills: [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.95 } }],
                        layoutMode: "HORIZONTAL",
                        primaryAxisSizingMode: "FIXED",
                        counterAxisSizingMode: "FIXED",
                        primaryAxisAlignItems: "CENTER",
                        counterAxisAlignItems: "CENTER"
                    },
                    layoutProps: {
                        width: 40,
                        height: 40,
                        parentIsAutoLayout: true
                    },
                    children: [
                        {
                            type: "COMPONENT",
                            component: Action___profile,
                            name: "User Icon",
                            props: { color: { r: 0.4, g: 0.4, b: 0.5 }, width: 20 }
                        }
                    ]
                });
            }

            if (rightSection.children!.length > 0) {
                children.push(rightSection);
            }
        }

        // Align override logic based on properties
        // We defer to rootProps unless we absolutely need to force a layout Align
        const hasCenterSection = !props.customCenterNode && (props.navItems?.length || props.showSearchInCenter);
        const derivedAlign = hasCenterSection ? "CENTER" : (isIsland ? "SPACE_BETWEEN" : "SPACE_BETWEEN");

        // Let explicit overrides or sectionSpacing dictate before falling back to heuristics
        if (props.sectionSpacing !== "auto" && !props.rootLayoutProps?.primaryAxisAlignItems) {
            rootProps.primaryAxisAlignItems = "MIN"; // If fixed spacing, pack from left
        } else if (props.sectionSpacing === "auto" && !props.rootLayoutProps?.primaryAxisAlignItems) {
            rootProps.primaryAxisAlignItems = "SPACE_BETWEEN"; // Explicit auto pushes apart
        } else {
            rootProps.primaryAxisAlignItems = props.rootLayoutProps?.primaryAxisAlignItems ?? derivedAlign;
        }

        const structure: NodeDefinition = {
            type: "FRAME",
            name: "TopMenu",
            props: rootProps,
            layoutProps: {
                width: props.fillWidth ? undefined : props.width,
                height: props.height,
                layoutAlign: props.fillWidth ? "STRETCH" : (props.layoutType === "fill" ? "STRETCH" : "INHERIT"),
                layoutGrow: props.fillWidth ? 1 : 0
            },
            children: children
        };

        const root = await this.renderDefinition(structure);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
