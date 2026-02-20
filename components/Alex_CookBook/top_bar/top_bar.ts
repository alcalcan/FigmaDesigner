import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { Placeholder } from "../../Placeholder";
import { input_field } from "../input_field/input_field";
import { button } from "../button/button";
import { Lucide_bell } from "../../lucide_icons/Lucide_bell/Lucide_bell";
import { Lucide_menu } from "../../lucide_icons/Lucide_menu/Lucide_menu";
import { Action___profile } from "../../UEFA_icons/Action___profile/Action___profile";
import { Lucide_search } from "../../lucide_icons/Lucide_search/Lucide_search";
import { Lucide_more_vertical } from "../../lucide_icons/Lucide_more_vertical/Lucide_more_vertical";

export interface TopBarProps extends ComponentProps {
    variant?: "simple" | "navigation" | "search" | "full" | "floating" | "island";
    theme?: "light" | "dark";
    navItems?: string[];
    showProfile?: boolean;
    showNotifications?: boolean;
    showMenu?: boolean;
    searchCornerRadius?: number;
    showSearchAction?: boolean;
    showKebabMenu?: boolean;
    showHamburgerMenu?: boolean;
}

export class top_bar extends BaseComponent {
    async create(props: TopBarProps): Promise<SceneNode> {
        const variant = props.variant || "simple";
        const theme = props.theme || "light";
        const navItems = props.navItems || ["Dashboard", "Projects", "Team", "Settings"];
        const showProfile = props.showProfile ?? true;
        const showNotifications = props.showNotifications ?? true;
        const showMenu = props.showMenu ?? false;
        const showSearchAction = props.showSearchAction ?? false;

        const hasNavItems = (variant === "navigation" || variant === "full" || variant === "floating") && navItems.length > 0;
        const finalShowMenu = showMenu && !hasNavItems;
        const showKebabMenu = props.showKebabMenu ?? false;
        const showHamburgerMenu = props.showHamburgerMenu ?? false;

        const isDark = theme === "dark";
        const bgColor = isDark ? { r: 0.1, g: 0.1, b: 0.12 } : { r: 1, g: 1, b: 1 };
        const textColor = isDark ? { r: 0.9, g: 0.9, b: 0.9 } : { r: 0.2, g: 0.2, b: 0.2 };
        const iconColor = isDark ? { r: 0.8, g: 0.8, b: 0.8 } : { r: 0.3, g: 0.3, b: 0.3 };
        const borderColor = isDark ? { r: 0.2, g: 0.2, b: 0.22 } : { r: 0.9, g: 0.9, b: 0.9 };

        const isFloating = variant === "floating";
        const isUnifiedIsland = variant === "island";

        const rootProps: NodeDefinition["props"] = {
            visible: true,
            clipsContent: false,
            fills: isFloating ? [] : [{ type: "SOLID", color: bgColor }],
            strokes: isFloating ? [] : [{ type: "SOLID", color: borderColor }],
            strokeWeight: isFloating ? 0 : 1,
            strokeBottomWeight: isFloating ? 0 : 1,
            strokeTopWeight: 0,
            strokeLeftWeight: 0,
            strokeRightWeight: 0,
            effects: (isFloating || isUnifiedIsland) ? [] : [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.05 },
                offset: { x: 0, y: 4 },
                radius: 12,
                spread: 0,
                visible: true,
                blendMode: "NORMAL"
            }],
            layoutMode: "HORIZONTAL",
            // @TODO: DO NOT DELETE THIS COMMENT OVERRIDE EVER NEVER
            // Auto gap vs Defined gap rule:
            // If the TopBar has NO center element, use "SPACE_BETWEEN" to push elements to opposite edges.
            // If the TopBar HAS a center element, use "CENTER" alignment to apply the strict 48px gap instead.
            // This logic is applied right before creating the root structure based on `hasCenterSection`.
            // Defaulting values here for typing, but they are overridden below.
            primaryAxisAlignItems: "CENTER",
            counterAxisAlignItems: "CENTER",
            itemSpacing: 48,
            paddingLeft: (isFloating || isUnifiedIsland) ? 0 : 32,
            paddingRight: (isFloating || isUnifiedIsland) ? 0 : 32,
            paddingTop: (isFloating || isUnifiedIsland) ? 0 : 16,
            paddingBottom: (isFloating || isUnifiedIsland) ? 0 : 16,
        };

        const islandProps = isFloating ? {
            fills: [{ type: "SOLID", color: bgColor }],
            cornerRadius: 100,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 12,
            paddingBottom: 12,
            strokes: [{ type: "SOLID", color: borderColor }],
            strokeWeight: 1,
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

        const islandLayoutProps = isFloating ? {
            height: 64
        } : {};

        if (isUnifiedIsland) {
            // Apply island styling directly to root
            rootProps.fills = [{ type: "SOLID", color: bgColor }];
            rootProps.cornerRadius = 100;
            rootProps.paddingLeft = 24;
            rootProps.paddingRight = 24;
            rootProps.paddingTop = 12;
            rootProps.paddingBottom = 12;
            rootProps.strokes = [{ type: "SOLID", color: borderColor }];
            rootProps.strokeWeight = 1;
            rootProps.effects = [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.08 },
                offset: { x: 0, y: 8 },
                radius: 24,
                spread: 0,
                visible: true,
                blendMode: "NORMAL"
            }];
        }

        const children: NodeDefinition[] = [];

        // 1. Left Section: Menu & Logo
        const leftSection: NodeDefinition = {
            type: "FRAME",
            name: "Left Section",
            props: {
                layoutMode: "HORIZONTAL",
                counterAxisAlignItems: "CENTER",
                primaryAxisSizingMode: "AUTO", // Width Hug
                counterAxisSizingMode: isFloating ? "FIXED" : "AUTO", // Height Hug
                itemSpacing: 16,
                fills: [],
                ...islandProps
            },
            layoutProps: {
                ...(isFloating ? islandLayoutProps : {})
            },
            children: []
        };

        // Professional Brand Logo (Instead of Placeholder)
        const logoIconPath = "M 12 2 L 2 7 L 12 12 L 22 7 L 12 2 Z M 2 17 L 12 22 L 22 17 M 2 12 L 12 17 L 22 12"; // Sleek geometric isometric box

        leftSection.children!.push({
            type: "FRAME",
            name: "Brand Logo",
            props: {
                layoutMode: "HORIZONTAL",
                counterAxisAlignItems: "CENTER",
                primaryAxisAlignItems: "MIN",
                primaryAxisSizingMode: "AUTO", // Width Hug
                counterAxisSizingMode: "AUTO", // Height Hug
                itemSpacing: 10,
                fills: [],
                clipsContent: false,
            },
            children: [
                {
                    type: "VECTOR",
                    name: "Logo Icon",
                    props: {
                        strokeWeight: 2,
                        strokeAlign: "CENTER",
                        strokes: [{ type: "SOLID", color: { r: 0.1, g: 0.65, b: 0.55 } }], // Brand green
                        strokeJoin: "ROUND",
                        strokeCap: "ROUND",
                        vectorPaths: [{ windingRule: "EVENODD", data: logoIconPath }]
                    },
                    layoutProps: {
                        width: 24,
                        height: 24,
                        parentIsAutoLayout: true
                    }
                },
                {
                    type: "TEXT",
                    name: "Logo Text",
                    props: {
                        characters: "CookBook",
                        fontSize: 16,
                        font: { family: "Inter", style: "Bold" },
                        fills: [{ type: "SOLID", color: textColor }],
                        textAutoResize: "WIDTH_AND_HEIGHT" // Prevent crop
                    }
                }
            ]
        });

        if (finalShowMenu) {
            leftSection.children!.push({
                type: "COMPONENT",
                component: button,
                name: "Menu Button",
                props: {
                    variant: "ghost",
                    frontIcon: Lucide_menu,
                    size: "small",
                    label: "Menu",
                    textColor: textColor // Use the main text color (darker) instead of brand green
                }
            });
        }

        children.push(leftSection);

        // 2. Center Section: Navigation or Search
        const centerSection: NodeDefinition = {
            type: "FRAME",
            name: "Center Section",
            props: {
                layoutMode: "HORIZONTAL",
                counterAxisAlignItems: "CENTER",
                primaryAxisAlignItems: (variant === "navigation" || isFloating || isUnifiedIsland) ? "CENTER" : variant === "search" || variant === "full" ? "MIN" : "CENTER",
                primaryAxisSizingMode: "FIXED", // Parent controls width because layoutGrow = 1
                counterAxisSizingMode: (isFloating && (navItems.length > 0)) ? "FIXED" : "AUTO", // Height Hug
                itemSpacing: 32,
                fills: [],
                ...(isFloating && (navItems.length > 0) ? islandProps : {})
            },
            layoutProps: {
                layoutGrow: 1,
                ...(isFloating && (navItems.length > 0) ? islandLayoutProps : {})
            },
            children: []
        };

        if ((variant === "navigation" || variant === "full" || variant === "floating" || isUnifiedIsland) && navItems.length > 0) {
            const navGroup: NodeDefinition = {
                type: "FRAME",
                name: "Navigation Links",
                props: {
                    layoutMode: "HORIZONTAL",
                    primaryAxisSizingMode: "AUTO", // Width Hug
                    counterAxisSizingMode: "AUTO", // Height Hug
                    itemSpacing: 24,
                    fills: [],
                },
                children: navItems.map((item, index) => ({
                    type: "TEXT",
                    name: `Nav Item: ${item}`,
                    props: {
                        characters: item,
                        fontSize: 14,
                        fontName: { family: "Inter", style: index === 0 ? "Semi Bold" : "Regular" },
                        fills: [{ type: "SOLID", color: index === 0 ? textColor : iconColor }],
                        textAutoResize: "WIDTH_AND_HEIGHT" // Prevent crop
                    }
                }))
            };
            if (variant === "full") {
                // If full, search and nav exist. Nav goes left, search goes right.
                // We'll wrap search in a growing container later.
                navGroup.layoutProps = { layoutGrow: 1 };
            }
            centerSection.children!.push(navGroup);
        }

        if (variant === "search" || variant === "full") {
            const searchContainer: NodeDefinition = {
                type: "FRAME",
                name: "Search Container",
                props: {
                    layoutMode: "HORIZONTAL",
                    primaryAxisSizingMode: "AUTO", // Let layoutGrow handle Fill
                    counterAxisSizingMode: "AUTO", // Height Hug
                    fills: [],
                    primaryAxisAlignItems: variant === "full" ? "MAX" : "MIN",
                },
                layoutProps: {
                    layoutGrow: variant === "search" ? 0 : 1,
                    width: 320 // fixed width for search
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
                            width: variant === "full" ? 240 : 320,
                            cornerRadius: props.searchCornerRadius
                        }
                    }
                ]
            };

            // For full, push it slightly right but kept in bounds
            centerSection.children!.push(searchContainer);

            if (variant === "search") {
                // Add some layout grow trick to center the search nicely if it's lonely
                centerSection.props!.primaryAxisAlignItems = "CENTER";
            }
        }

        // Add Center section if it has children
        if (centerSection.children && centerSection.children.length > 0) {
            children.push(centerSection);
        }

        // 3. Right Section: Actions & Profile
        const rightSection: NodeDefinition = {
            type: "FRAME",
            name: "Right Section",
            props: {
                layoutMode: "HORIZONTAL",
                counterAxisAlignItems: "CENTER",
                primaryAxisSizingMode: "AUTO", // Width Hug
                counterAxisSizingMode: isFloating ? "FIXED" : "AUTO", // Height Hug
                itemSpacing: 24, // 24px gap between icon group and profile
                fills: [],
                ...islandProps
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
                itemSpacing: 8, // 8px gap between social icons
                fills: [],
                clipsContent: false
            },
            children: []
        };

        if (showSearchAction) {
            actionGroup.children!.push({
                type: "COMPONENT",
                component: button,
                name: "Search",
                props: {
                    variant: "ghost",
                    frontIcon: Lucide_search,
                    size: "small",
                    label: undefined,
                    textColor: { r: 0.2, g: 0.2, b: 0.2 }
                }
            });
        }

        if (showNotifications) {
            actionGroup.children!.push({
                type: "COMPONENT",
                component: button,
                name: "Notifications",
                props: {
                    variant: "ghost",
                    frontIcon: Lucide_bell,
                    size: "small",
                    label: undefined, // Explicitly no label for icon-only
                    textColor: { r: 0.2, g: 0.2, b: 0.2 } // Solid dark color as requested
                }
            });
        }

        if (showKebabMenu) {
            actionGroup.children!.push({
                type: "COMPONENT",
                component: button,
                name: "More Actions",
                props: {
                    variant: "ghost",
                    frontIcon: Lucide_more_vertical,
                    size: "small",
                    label: undefined,
                    textColor: { r: 0.2, g: 0.2, b: 0.2 }
                }
            });
        }

        if (showHamburgerMenu) {
            actionGroup.children!.push({
                type: "COMPONENT",
                component: button,
                name: "Hamburger Menu",
                props: {
                    variant: "ghost",
                    frontIcon: Lucide_menu,
                    size: "small",
                    label: undefined,
                    textColor: { r: 0.2, g: 0.2, b: 0.2 }
                }
            });
        }

        if (actionGroup.children!.length > 0) {
            rightSection.children!.push(actionGroup);
        }

        if (showProfile) {
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

        if (rightSection.children && rightSection.children.length > 0) {
            children.push(rightSection);
        }

        const hasCenterSection = centerSection.children && centerSection.children.length > 0;
        const finalPrimaryAxisAlignItems = hasCenterSection ? "CENTER" : "SPACE_BETWEEN";

        const structure: NodeDefinition = {
            type: "FRAME",
            name: "TopBar",
            props: {
                ...rootProps,
                primaryAxisAlignItems: isUnifiedIsland ? "SPACE_BETWEEN" : finalPrimaryAxisAlignItems,
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "AUTO",
            },
            layoutProps: {
                width: props.width,
                height: props.height,
                layoutAlign: "STRETCH",
            },
            children: children
        };

        return await this.renderDefinition(structure);
    }
}
