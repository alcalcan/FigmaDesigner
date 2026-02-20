import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { Placeholder } from "../../Placeholder";
import { button } from "../button/button";
import { Lucide_home } from "../../lucide_icons/Lucide_home/Lucide_home";
import { Lucide_settings } from "../../lucide_icons/Lucide_settings/Lucide_settings";
import { Lucide_users } from "../../lucide_icons/Lucide_users/Lucide_users";
import { Lucide_folder } from "../../lucide_icons/Lucide_folder/Lucide_folder";
import { Action___profile } from "../../UEFA_icons/Action___profile/Action___profile";
import { Lucide_chevron_down } from "../../lucide_icons/Lucide_chevron_down/Lucide_chevron_down";
import { Lucide_chevron_up } from "../../lucide_icons/Lucide_chevron_up/Lucide_chevron_up";

export interface NavItem {
    label: string;
    icon: any;
    subItems?: { label: string }[];
}

export interface SidebarProps extends ComponentProps {
    variant?: "default" | "collapsed" | "floating" | "floating-collapsed";
    theme?: "light" | "dark";
    navItems?: NavItem[];
    expandedItems?: string[];
    activeItem?: string;
    showLogo?: boolean;
    showProfile?: boolean;
}

export class sidebar extends BaseComponent {
    async create(props: SidebarProps): Promise<SceneNode> {
        const variant = props.variant || "default";
        const theme = props.theme || "light";
        const isCollapsed = variant === "collapsed" || variant === "floating-collapsed";
        const isFloating = variant === "floating" || variant === "floating-collapsed";

        const defaultNavItems: NavItem[] = [
            { label: "Dashboard", icon: Lucide_home },
            {
                label: "Projects", icon: Lucide_folder, subItems: [
                    { label: "Internal" },
                    { label: "Client" },
                    { label: "Archive" }
                ]
            },
            { label: "Team", icon: Lucide_users },
            { label: "Settings", icon: Lucide_settings }
        ];

        const navItems = props.navItems || defaultNavItems;
        const expandedItems = props.expandedItems || [];
        const activeItemStr = props.activeItem || navItems[0]?.label;
        const showLogo = props.showLogo ?? true;
        const showProfile = props.showProfile ?? true;

        const isDark = theme === "dark";
        const bgColor = isDark ? { r: 0.1, g: 0.1, b: 0.12 } : { r: 1, g: 1, b: 1 };
        const textColor = isDark ? { r: 0.9, g: 0.9, b: 0.9 } : { r: 0.2, g: 0.2, b: 0.2 };
        const iconColor = isDark ? { r: 0.8, g: 0.8, b: 0.8 } : { r: 0.4, g: 0.4, b: 0.4 };
        const borderColor = isDark ? { r: 0.2, g: 0.2, b: 0.22 } : { r: 0.9, g: 0.9, b: 0.9 };

        const rootWidth = isCollapsed ? 80 : 260;

        const children: NodeDefinition[] = [];

        // Logo Section
        if (showLogo) {
            const logoIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A846E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`;

            const logoSection: NodeDefinition = {
                type: "FRAME",
                name: "Logo Section",
                props: {
                    layoutMode: "HORIZONTAL",
                    counterAxisAlignItems: "CENTER",
                    primaryAxisAlignItems: isCollapsed ? "CENTER" : "MIN",
                    primaryAxisSizingMode: "FIXED",
                    counterAxisSizingMode: "AUTO",
                    itemSpacing: 12,
                    fills: [],
                    paddingLeft: isCollapsed ? 0 : 32,
                    paddingRight: isCollapsed ? 0 : 32,
                    paddingTop: 24,
                    paddingBottom: 24
                },
                layoutProps: {
                    width: rootWidth
                },
                children: [
                    {
                        type: "FRAME",
                        name: "Logo Icon Wrapper",
                        props: {
                            fills: [],
                            clipsContent: false,
                        },
                        svgContent: logoIconSVG,
                        layoutProps: {
                            width: 24,
                            height: 24,
                            parentIsAutoLayout: true
                        }
                    }
                ]
            };

            if (!isCollapsed) {
                logoSection.children!.push({
                    type: "TEXT",
                    name: "Logo Text",
                    props: {
                        characters: "CookBook",
                        fontSize: 18,
                        font: { family: "Inter", style: "Bold" },
                        fills: [{ type: "SOLID", color: textColor }],
                        textAutoResize: "WIDTH_AND_HEIGHT"
                    }
                });
            }

            children.push(logoSection);
        }

        // Divider (Only for standard expanded variant)
        if (variant === "default") {
            children.push({
                type: "FRAME",
                name: "Divider",
                props: {
                    fills: [{ type: "SOLID", color: borderColor }]
                },
                layoutProps: {
                    width: rootWidth,
                    height: 1,
                    layoutAlign: "STRETCH"
                }
            });
        }

        // Navigation Section
        const navSection: NodeDefinition = {
            type: "FRAME",
            name: "Navigation Links",
            props: {
                layoutMode: "VERTICAL",
                primaryAxisAlignItems: isFloating ? "CENTER" : "MIN",
                counterAxisAlignItems: isCollapsed ? "CENTER" : "MIN",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "FIXED",
                itemSpacing: 8,
                fills: [],
                paddingLeft: isCollapsed ? 8 : 12,
                paddingRight: isCollapsed ? 8 : 12,
                paddingTop: 16,
                paddingBottom: 16
            },
            layoutProps: {
                width: rootWidth,
                layoutGrow: 1
            },
            children: navItems.map((item, index) => {
                const isActive = item.label === activeItemStr;
                const matchesSubItem = item.subItems?.some(s => s.label === activeItemStr);
                const isExpanded = expandedItems.includes(item.label) || matchesSubItem;

                const parentNode: NodeDefinition = {
                    type: "COMPONENT",
                    component: button,
                    name: `Nav Item: ${item.label}`,
                    props: {
                        variant: isActive ? "primary" : "ghost",
                        frontIcon: item.icon,
                        backIcon: (!isCollapsed && item.subItems) ? (isExpanded ? Lucide_chevron_up : Lucide_chevron_down) : undefined,
                        size: "medium",
                        iconSize: 24,
                        label: isCollapsed ? undefined : item.label,
                        // Custom text color for ghost items, filled handled by button
                        textColor: isActive ? undefined : textColor,
                        cornerRadius: isFloating ? 100 : 8,
                        width: "fill",
                        justifyContent: isCollapsed ? "CENTER" : "MIN",
                        fontWeight: isActive ? "Bold" : "Regular"
                    },
                    layoutProps: {
                        layoutAlign: "STRETCH"
                    }
                };

                if (!isCollapsed && item.subItems && isExpanded) {
                    const subItemNodes: NodeDefinition[] = item.subItems.map((sub) => {
                        const isSubActive = sub.label === activeItemStr;
                        return {
                            type: "FRAME",
                            name: `Sub Item Wrapper: ${sub.label}`,
                            props: {
                                layoutMode: "VERTICAL",
                                paddingLeft: 42, // Move the 42px left padding directly to the sub-item wrapper so the active box stretches full width.
                                fills: []
                            },
                            layoutProps: {
                                layoutAlign: "STRETCH"
                            },
                            children: [
                                {
                                    type: "COMPONENT",
                                    component: button,
                                    name: `Sub Item: ${sub.label}`,
                                    props: {
                                        variant: isSubActive ? "primary" : "ghost",
                                        size: "small", // Make sub-items less tall
                                        label: sub.label,
                                        textColor: isSubActive ? undefined : (isDark ? { r: 0.6, g: 0.6, b: 0.6 } : { r: 0.45, g: 0.5, b: 0.55 }), // Muted text color for hierarchy
                                        cornerRadius: isFloating ? 100 : 8,
                                        width: "fill",
                                        justifyContent: "MIN",
                                        fontWeight: isSubActive ? "Bold" : "Regular"
                                    }
                                }
                            ]
                        };
                    });

                    // To align the line with the center of the 24px icon (which is padded by 12px or 16px depending on button size)
                    // The medium button has 20px horizontal padding. So icon center is 20 + (24/2) = 32px from the left edge of the button.
                    // We need the vertical line (2px wide) to be centered at 32px. So it needs 31px padding left.
                    return {
                        type: "FRAME",
                        name: `Nav Item Group: ${item.label}`,
                        props: {
                            layoutMode: "VERTICAL",
                            itemSpacing: 2, // Tight grouping for parent and children
                            fills: []
                        },
                        layoutProps: {
                            layoutAlign: "STRETCH"
                        },
                        children: [
                            parentNode,
                            {
                                type: "FRAME",
                                name: "Sub Items List Wrapper",
                                props: {
                                    layoutMode: "VERTICAL",
                                    itemSpacing: 2,
                                    fills: []
                                },
                                layoutProps: {
                                    layoutAlign: "STRETCH"
                                },
                                children: [
                                    {
                                        type: "FRAME",
                                        name: "Hierarchy Line Container",
                                        // We use absolute positioning for the line so it doesn't affect the width of the sub-items
                                        props: {
                                            layoutMode: "NONE", // Absolute layout
                                            fills: [],
                                            clipsContent: false
                                        },
                                        layoutProps: {
                                            layoutAlign: "STRETCH",
                                            height: 0 // Zero height so it doesn't mess up vertical flow
                                        },
                                        children: [
                                            {
                                                type: "FRAME",
                                                name: "Hierarchy Line",
                                                props: {
                                                    layoutMode: "VERTICAL",
                                                    fills: [{ type: "SOLID", color: isDark ? { r: 0.8, g: 0.82, b: 0.85 } : { r: 0.1, g: 0.1, b: 0.1 } }],
                                                    cornerRadius: 0,
                                                },
                                                layoutProps: {
                                                    width: 1,
                                                },
                                                // We must manually size the absolute line because it can't stretch automatically in a NONE layout.
                                                // Subitems are 32px tall, with 2px gap.
                                                // Total height = (32 * N) + (2 * (N-1))
                                                postCreate: async (node: SceneNode) => {
                                                    if (node.type === "FRAME" && item.subItems) {
                                                        const numItems = item.subItems.length;
                                                        const totalHeight = (32 * numItems) + (2 * (numItems - 1));
                                                        node.resize(1, totalHeight);
                                                        // Absolute position: center of the 24px icon (which implies it's at 32px from left)
                                                        // A 1px line starting at 31.5 is exactly centered.
                                                        node.x = 31.5;
                                                        node.y = 0;
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    ...subItemNodes
                                ]
                            }
                        ]
                    };
                }

                return parentNode;
            })
        };

        children.push(navSection);

        // Profile Section
        if (showProfile) {
            const profileSection: NodeDefinition = {
                type: "FRAME",
                name: "Profile Section",
                props: {
                    layoutMode: "HORIZONTAL",
                    counterAxisAlignItems: "CENTER",
                    primaryAxisAlignItems: isCollapsed ? "CENTER" : "MIN",
                    primaryAxisSizingMode: "FIXED",
                    counterAxisSizingMode: "AUTO",
                    itemSpacing: 12,
                    fills: [],
                    paddingLeft: isCollapsed ? 0 : 20,
                    paddingRight: isCollapsed ? 0 : 20,
                    paddingTop: 24,
                    paddingBottom: 24,
                    strokes: [{ type: "SOLID", color: borderColor }],
                    strokeWeight: 1,
                    strokeTopWeight: 1,
                    strokeBottomWeight: 0,
                    strokeLeftWeight: 0,
                    strokeRightWeight: 0
                },
                layoutProps: {
                    width: rootWidth
                },
                children: [
                    {
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
                            width: 48,
                            height: 48,
                            parentIsAutoLayout: true
                        },
                        children: [
                            {
                                type: "COMPONENT",
                                component: Action___profile,
                                name: "User Icon",
                                props: { color: { r: 0.4, g: 0.4, b: 0.5 }, width: 24 }
                            }
                        ]
                    }
                ]
            };

            if (!isCollapsed) {
                profileSection.children!.push({
                    type: "FRAME",
                    name: "Profile Info",
                    props: {
                        layoutMode: "VERTICAL",
                        primaryAxisSizingMode: "AUTO",
                        counterAxisSizingMode: "AUTO",
                        fills: []
                    },
                    children: [
                        {
                            type: "TEXT",
                            name: "Name",
                            props: {
                                characters: "Alex Calcan",
                                fontSize: 14,
                                font: { family: "Inter", style: "Semi Bold" },
                                fills: [{ type: "SOLID", color: textColor }]
                            }
                        },
                        {
                            type: "TEXT",
                            name: "Email",
                            props: {
                                characters: "alex@example.com",
                                fontSize: 12,
                                font: { family: "Inter", style: "Regular" },
                                fills: [{ type: "SOLID", color: iconColor }]
                            }
                        }
                    ]
                });
            }

            children.push(profileSection);
        }

        const structure: NodeDefinition = {
            type: "FRAME",
            name: "Sidebar",
            props: {
                visible: true,
                clipsContent: !isFloating, // Ensure shadow isn't accidentally clipped
                fills: isFloating ? [{
                    type: "GRADIENT_LINEAR",
                    gradientStops: [
                        { position: 0, color: { r: 1, g: 1, b: 1, a: 1 } },
                        { position: 1, color: { r: 0.98, g: 0.99, b: 1, a: 0.96 } }
                    ],
                    gradientTransform: [[0, 1, 0], [-1, 0, 1]]
                } as any] : [{ type: "SOLID", color: bgColor }],
                strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: isFloating ? 0.8 : 0.1 }],
                strokeWeight: 1,
                strokeRightWeight: isFloating ? 1 : 1, // Explicit to override 0
                strokeTopWeight: isFloating ? 1 : 0,
                strokeBottomWeight: isFloating ? 1 : 0,
                strokeLeftWeight: isFloating ? 1 : 0,
                cornerRadius: isFloating ? 32 : 0,
                effects: isFloating ? [
                    { type: "BACKGROUND_BLUR", radius: 24, visible: true },
                    { type: "DROP_SHADOW", color: { r: 0.05, g: 0.1, b: 0.2, a: 0.06 }, offset: { x: 0, y: 16 }, radius: 32, showShadowBehindNode: true },
                    { type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.02 }, offset: { x: 0, y: 4 }, radius: 4, showShadowBehindNode: true }
                ] : [],
                layoutMode: "VERTICAL",
                primaryAxisAlignItems: isFloating ? "CENTER" : "MIN",
                counterAxisAlignItems: "CENTER",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: isFloating ? "AUTO" : "FIXED",
            },
            layoutProps: {
                width: rootWidth,
                height: props.height || (isFloating ? undefined : 800),
            },
            children: children
        };

        return await this.renderDefinition(structure);
    }
}
