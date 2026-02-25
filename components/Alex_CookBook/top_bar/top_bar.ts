import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";
import { Placeholder } from "../../Placeholder";
import { input_field } from "../input_field/input_field";
import { button } from "../button/button";
import { Lucide_bell } from "../../lucide_icons/Lucide_bell/Lucide_bell";
import { Lucide_menu } from "../../lucide_icons/Lucide_menu/Lucide_menu";
import { Action___profile } from "../../UEFA_icons/Action___profile/Action___profile";
import { Lucide_search } from "../../lucide_icons/Lucide_search/Lucide_search";
import { Lucide_more_vertical } from "../../lucide_icons/Lucide_more_vertical/Lucide_more_vertical";

import SVG_Desktop_Logo from "./assets/euro_28_desktop_logo.svg";
import SVG_Desktop_Icon from "./assets/euro_28_desktop_icon.svg";
import SVG_Mobile_Logo from "./assets/euro_28_mobile_logo.svg";
import SVG_Mobile_Menu_Icon from "./assets/euro_28_mobile_menu.svg";

import SVG_MainNav_Logo from "./assets/uefa_main_nav_logo.svg";
import SVG_MainNav_Dropdown from "./assets/uefa_main_nav_dropdown.svg";
import SVG_MainNav_Login from "./assets/uefa_main_nav_login.svg";
import SVG_MainNav_Search from "./assets/uefa_main_nav_search.svg";

export interface TopBarProps extends ComponentProps {
    variant?: "simple" | "navigation" | "search" | "full" | "floating" | "island" | "main_navigation_28" | "main_navigation";
    theme?: "light" | "dark";
    navItems?: string[];
    showProfile?: boolean;
    showNotifications?: boolean;
    showMenu?: boolean;
    searchCornerRadius?: number;
    showSearchAction?: boolean;
    showKebabMenu?: boolean;
    showHamburgerMenu?: boolean;
    platform?: 'desktop' | 'mobile';
}

export class top_bar extends BaseComponent {
    async create(props: TopBarProps): Promise<SceneNode> {
        const variant = props.variant || "simple";

        if (variant === "main_navigation_28") {
            return await this.createMainNavigation28(props);
        }

        if (variant === "main_navigation") {
            return await this.createMainNavigation(props);
        }

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

    private async createMainNavigation28(props: TopBarProps): Promise<SceneNode> {
        const isMobile = props.platform === 'mobile';

        const width = props.width ?? (isMobile ? 375 : 1680);
        const height = isMobile ? 56 : 80;
        const paddingLeft = isMobile ? 12 : 24;
        const paddingRight = isMobile ? 12 : 24;
        const paddingTop = isMobile ? 4 : 13;
        const paddingBottom = isMobile ? 4 : 13;
        const logoWidth = isMobile ? 44 : 204;
        const logoHeight = isMobile ? 40 : 24;
        const fontSize = isMobile ? 14 : 16;

        const logoContent: NodeDefinition = isMobile ? {
            "type": "FRAME" as const,
            "name": "Link - UEFA EURO 2028",
            "props": { "layoutMode": "VERTICAL", "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER" },
            "layoutProps": { "width": 44, "height": 40, "parentIsAutoLayout": true },
            "children": [
                {
                    "type": "VECTOR" as const,
                    "shouldFlatten": true,
                    "name": "Vector",
                    "props": {},
                    "layoutProps": { "width": 23.70, "height": 40, "parentIsAutoLayout": true },
                    "svgContent": SVG_Mobile_Logo
                }
            ]
        } : {
            "type": "VECTOR" as const,
            "name": "Vector",
            "layoutProps": { "width": 156, "height": 23.99, "parentIsAutoLayout": true },
            "svgContent": SVG_Desktop_Logo
        };

        const navItems = [
            { name: "Video", isSelected: false },
            { name: "News", isSelected: false }
        ];

        const secondNavItems = [
            { name: "About", isSelected: false },
            { name: "Store", isSelected: false }
        ];

        const thirdItemName = isMobile ? "More" : "History";

        const structure: NodeDefinition = {
            "type": "FRAME" as const,
            "name": "Main_Navigation_28",
            "props": {
                "layoutMode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "FIXED",
                "paddingTop": paddingTop, "paddingRight": paddingRight, "paddingBottom": paddingBottom, "paddingLeft": paddingLeft,
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.16, "b": 0.77 } }]
            },
            "layoutProps": {
                "width": width,
                "height": height,
                "parentIsAutoLayout": false,
                ...((props as ComponentProps).layoutProps || {})
            },
            "children": [{
                "type": "FRAME" as const,
                "name": "Nav - Main navigation",
                "props": {
                    "layoutMode": "HORIZONTAL",
                    "primaryAxisAlignItems": "MIN", // Left align to enforce the 32px gap
                    "itemSpacing": isMobile ? 12 : 48,
                    "counterAxisAlignItems": "CENTER",
                    "counterAxisSizingMode": "AUTO",
                    "layoutGrow": 1
                },
                "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 },
                "children": [
                    {
                        "type": "FRAME" as const,
                        "name": "Logo Area",
                        "props": {
                            "layoutMode": "HORIZONTAL",
                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                            "counterAxisSizingMode": "AUTO"
                        },
                        "layoutProps": { "width": logoWidth, "height": logoHeight, "parentIsAutoLayout": true },
                        "children": [logoContent]
                    },
                    {
                        "type": "FRAME" as const,
                        "name": "Container",
                        "props": {
                            "layoutMode": "HORIZONTAL",
                            "itemSpacing": isMobile ? 4 : 24,
                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                            "counterAxisSizingMode": "AUTO"
                        },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 },
                        "children": [
                            {
                                "type": "FRAME" as const,
                                "name": "Menu item Group",
                                "props": {
                                    "layoutMode": "HORIZONTAL",
                                    "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                                    "counterAxisSizingMode": "AUTO"
                                },
                                "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 },
                                "children": [
                                    ...navItems.map(item => ({
                                        "type": "FRAME" as const,
                                        "name": `Menuitem - ${item.name}`,
                                        "props": {
                                            "layoutMode": "HORIZONTAL" as const, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "cornerRadius": 9999, "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                            "counterAxisSizingMode": "AUTO"
                                        },
                                        "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 },
                                        "children": [{
                                            "type": "TEXT" as const,
                                            "props": { "characters": item.name, "fontSize": fontSize, "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }], "font": { "family": "UEFA Euro Pro", "style": "Book" } },
                                            "layoutProps": { "parentIsAutoLayout": true }
                                        }]
                                    } as NodeDefinition)),
                                    {
                                        "type": "FRAME" as const,
                                        "name": "More-History Container",
                                        "props": {
                                            "layoutMode": "HORIZONTAL",
                                            "itemSpacing": 8,
                                            "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8,
                                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                            "counterAxisSizingMode": "AUTO"
                                        },
                                        "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 },
                                        "children": [
                                            {
                                                "type": "TEXT" as const,
                                                "props": { "characters": thirdItemName, "fontSize": fontSize, "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }], "font": { "family": "UEFA Euro Pro", "style": "Book" } },
                                                "layoutProps": { "parentIsAutoLayout": true }
                                            },
                                            {
                                                "type": "FRAME" as const,
                                                "name": "Icon Container",
                                                "props": { "layoutMode": "HORIZONTAL", "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER" },
                                                "layoutProps": { "width": isMobile ? 24 : 16, "height": isMobile ? 24 : 16, "parentIsAutoLayout": true },
                                                "children": [{
                                                    "type": "VECTOR" as const,
                                                    "props": {},
                                                    "layoutProps": {
                                                        "width": isMobile ? 18.75 : 8.39,
                                                        "height": isMobile ? 12.5 : 6.21,
                                                        "parentIsAutoLayout": false,
                                                        "relativeTransform": isMobile ? [[1, 0, 2.6], [0, 1, 5.75]] : [[1, 0, 4], [0, 1, 5]] as T2x3
                                                    },
                                                    "svgContent": isMobile ? SVG_Mobile_Menu_Icon : SVG_Desktop_Icon
                                                }]
                                            }
                                        ]
                                    },
                                    ...(!isMobile ? secondNavItems.map(item => ({
                                        "type": "FRAME" as const,
                                        "name": `Menuitem - ${item.name}`,
                                        "props": {
                                            "layoutMode": "HORIZONTAL" as const, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "cornerRadius": 9999, "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                            "counterAxisSizingMode": "AUTO"
                                        },
                                        "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 },
                                        "children": [{
                                            "type": "TEXT" as const,
                                            "props": { "characters": item.name, "fontSize": fontSize, "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }], "font": { "family": "UEFA Euro Pro", "style": "Book" } },
                                            "layoutProps": { "parentIsAutoLayout": true }
                                        }]
                                    } as NodeDefinition)) : [])
                                ]
                            }
                        ]
                    }
                ]
            }]
        } as NodeDefinition;

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }

    private async createMainNavigation(props: TopBarProps): Promise<SceneNode> {
        const isMobile = props.platform === 'mobile';
        const width = props.width ?? (isMobile ? 375 : 1680);
        const paddingHorizontal = isMobile ? 16 : 135;

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Main Navigation",
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": paddingHorizontal, "paddingBottom": 0, "paddingLeft": paddingHorizontal,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "fills": [
                    {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.0117647061124444, "g": 0.0117647061124444, "b": 0.10980392247438431 },
                        "boundVariables": {}
                    }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
            },
            "layoutProps": { "width": width, "height": 40, "parentIsAutoLayout": false },
            "children": [
                {
                    "type": "FRAME",
                    "name": "Left area",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 98.09954071044922, "height": 20,
                        "relativeTransform": [[1, 0, 135], [0, 1, 10]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                        {
                            "type": "FRAME",
                            "name": "Logo + Dropdown icon",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 98.09954071044922, "height": 20,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                                {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "UEFA.com",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 74.09954071044922, "height": 12,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 4]],
                                        "constraints": { "horizontal": "MIN", "vertical": "CENTER" }
                                    },
                                    "svgContent": SVG_MainNav_Logo
                                },
                                {
                                    "type": "FRAME",
                                    "name": "Navigation / dropdown-indicator",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "layoutMode": "NONE",
                                        "fills": [],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 20, "height": 20,
                                        "relativeTransform": [[1, 0, 78.09954071044922], [0, 1, 0]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                    },
                                    "children": [
                                        {
                                            "type": "VECTOR",
                                            "shouldFlatten": true,
                                            "name": "Vector",
                                            "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA",
                                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "x": 6.6448974609375, "y": 8.101704597473145,
                                                "strokes": [],
                                                "effects": [],
                                                "cornerRadius": 0
                                            },
                                            "layoutProps": {
                                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                "width": 6.710267066955566, "height": 4.968685150146484,
                                                "relativeTransform": [[1, 0, 6.6448974609375], [0, 1, 8.101704597473145]],
                                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                            },
                                            "svgContent": SVG_MainNav_Dropdown
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "FRAME",
                    "name": "Right area",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "layoutMode": "HORIZONTAL", "itemSpacing": isMobile ? 4 : 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": isMobile ? 4 : 12,
                        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "fills": [
                            {
                                "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                "gradientStops": [
                                    {
                                        "color": { "r": 1, "g": 1, "b": 1, "a": 0.05000000074505806 },
                                        "position": 0,
                                        "boundVariables": {}
                                    },
                                    {
                                        "color": { "r": 1, "g": 1, "b": 1, "a": 0.15000000596046448 },
                                        "position": 1,
                                        "boundVariables": {}
                                    }
                                ],
                                "gradientTransform": [
                                    [
                                        0.9056131839752197,
                                        0.5072765350341797,
                                        -0.04251556098461151
                                    ],
                                    [
                                        -0.5072765350341797,
                                        0.08316007256507874,
                                        0.6569646596908569
                                    ]
                                ]
                            }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 134, "height": 40,
                        "relativeTransform": [[1, 0, 1411], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                        {
                            "type": "FRAME",
                            "name": "pk-button",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": isMobile ? 4 : 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": isMobile ? 8 : 12, "paddingRight": 0, "paddingBottom": isMobile ? 8 : 12, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 8
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": isMobile ? 32 : 74, "height": 40,
                                "relativeTransform": [[1, 0, 12], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                                {
                                    "type": "FRAME",
                                    "name": "Leading icon",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "layoutMode": "NONE",
                                        "fills": [
                                            {
                                                "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 0.11614017188549042, "g": 0.11614017188549042, "b": 0.11614017188549042 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 24, "height": 24,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 8]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                        {
                                            "type": "VECTOR",
                                            "shouldFlatten": true,
                                            "name": "Vector",
                                            "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA",
                                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "x": 1, "y": 1,
                                                "strokes": [],
                                                "effects": [],
                                                "cornerRadius": 0
                                            },
                                            "layoutProps": {
                                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                "width": 22, "height": 22,
                                                "relativeTransform": [[1, 0, 1], [0, 1, 1]],
                                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                            },
                                            "svgContent": SVG_MainNav_Login
                                        }
                                    ]
                                },
                                ...(!isMobile ? [{
                                    "type": "TEXT" as const,
                                    "name": "Label",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": "Login", "fontSize": 16,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                        "paragraphSpacing": 16, "paragraphIndent": 0,
                                        "fills": [
                                            {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                        "lineHeight": { "unit": "PERCENT", "value": 150 },
                                        "font": { "family": "Manrope", "style": "SemiBold" }
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO" as "AUTO" | "ABSOLUTE" | undefined,
                                        "width": 42, "height": 24,
                                        "relativeTransform": [[1, 0, 32], [0, 1, 8]] as [[number, number, number], [number, number, number]],
                                        "constraints": { "horizontal": "STRETCH" as "MIN" | "MAX" | "CENTER" | "STRETCH" | "SCALE", "vertical": "CENTER" as "MIN" | "MAX" | "CENTER" | "STRETCH" | "SCALE" }
                                    }
                                }] : [])
                            ]
                        },
                        {
                            "type": "FRAME",
                            "name": "pk-divider",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "layoutMode": "NONE",
                                "fills": [
                                    {
                                        "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                    }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 24, "height": 0,
                                "relativeTransform": [[6.123234262925839e-17, 1, 98], [-1, 6.123234262925839e-17, 32]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                                {
                                    "type": "LINE",
                                    "name": "Divider",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 0, "y": 0,
                                        "fills": [],
                                        "strokes": [
                                            {
                                                "visible": true, "opacity": 0.25, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "effects": []
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 24, "height": 0,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                    }
                                }
                            ]
                        },
                        {
                            "type": "FRAME",
                            "name": "pk-button",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 2, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 2, "strokeRightWeight": 2, "strokeBottomWeight": 2, "strokeLeftWeight": 2,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "layoutMode": "NONE",
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 58
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 24, "height": 24,
                                "relativeTransform": [[1, 0, 110], [0, 1, 8]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                                {
                                    "type": "FRAME",
                                    "name": "Icon",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                        "x": 3, "y": 3,
                                        "layoutMode": "NONE",
                                        "fills": [
                                            {
                                                "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 18, "height": 18,
                                        "relativeTransform": [[1, 0, 3], [0, 1, 3]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                    },
                                    "children": [
                                        {
                                            "type": "VECTOR",
                                            "shouldFlatten": true,
                                            "name": "Vector",
                                            "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA",
                                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "x": 2.25, "y": 2.25,
                                                "strokes": [],
                                                "effects": [],
                                                "cornerRadius": 0
                                            },
                                            "layoutProps": {
                                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                "width": 12.807365417480469, "height": 12.807365417480469,
                                                "relativeTransform": [[1, 0, 2.25], [0, 1, 2.25]],
                                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                            },
                                            "svgContent": SVG_MainNav_Search
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        const root = await this.renderDefinition(structure);

        // Final positioning
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
