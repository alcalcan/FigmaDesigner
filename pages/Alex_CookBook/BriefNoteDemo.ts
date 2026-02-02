import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { BriefNote } from "../../components/Miscellaneous/BriefNote/BriefNote";

export class BriefNoteDemo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const storyText = `**Project:** EURO 2028 Ticketing Portal
**Issue Type:** UX Task / Design Exploration
**Summary:** [UX] Impact Assessment & Design Alternatives for Booking.com Navigation Integration
**Priority:** High (Deadline Critical)
**Assignee:** Alex Calcan
**Due Date:** Feb 02

## **Description**

**Context & Business Goal**
Booking.com (Accommodation and Travel Partner) is negotiating for increased visibility throughout the ticketing purchase journey for EURO 2028. Following performance reviews of EURO 2024, the partner requires a "branding element" that is aggressively visible to drive traffic and accommodation sales.

Stakeholders (Sponsorship Team) have proposed replacing the **center links of the primary navigation bar** with a fixed Booking.com branded bar to ensure maximum visibility without increasing the page's vertical height.

**Problem Statement**
While the proposed solution meets the visibility requirement, removing the primary navigation links presents significant UX risks, potentially creating a "dead end" for users and inconsistent site behavior.

We need to validate the impact of this proposal and provide alternative design solutions that balance **partner visibility** with **user experience standards**.

## **Scope of Work**

### **1. UX Impact Assessment**

* Review the current proposal (Replacing central nav links with branding).
* Document the UX risks involved (e.g., loss of navigation utility, inconsistency with the rest of the UEFA ecosystem, potential friction in the user journey).
* Provide a rationale for why maintaining navigation is critical, even within the ticketing funnel.

### **2. UI/UX Design Exploration (Alternatives)**

* Create design proposals that offer "more elegant" integration than a standard banner or complete navigation removal.
* **Constraint 1:** Solution must not add extra vertical height (must not push content below the fold).
* **Constraint 2:** Branding must be anchored/sticky (remain visible during scroll).
* Objective: Find a middle ground where the Booking.com brand is prominent but the site remains navigable.

## **Requirements & Constraints**

* Platform: Ticket Portal (Web/Mobile).
* Fixed Elements: Competition Logo (Left), "More" Menu (Right).
* Variable Area: Center navigation space.
* Partner Assets: Must utilize Booking.com branding (Blue color palette/rounded rectangle style).

## **Deliverables**

* Impact Assessment Summary: A brief write-up or slide outlining the pros/cons of the stakeholder proposal vs. UX recommended approach.
* High-Fidelity Mockups: 2-3 alternative visual options for the header integration.

## **Timeline**

* Internal Review: February 2nd (Must be ready for review with Product).
* Stakeholder Presentation: February 9th (Final proposal to Booking.com).

---

## **Acceptance Criteria**

* [ ] Impact assessment clearly articulates the risks of removing primary navigation.
* [ ] At least 2 alternative design options provided that satisfy the "sticky" and "height" constraints.
* [ ] Designs visually align with Secutix implementation capabilities (standard web component behavior).`;

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "BriefNoteDemo",
            "props": {
                "layoutMode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "AUTO",
                "paddingTop": 100,
                "paddingRight": 100,
                "paddingBottom": 100,
                "paddingLeft": 100,
                "fills": [] // Transparent
            },
            "layoutProps": { "parentIsAutoLayout": false },
            "children": [
                {
                    "type": "COMPONENT",
                    "component": BriefNote,
                    "props": {
                        "text": storyText
                    },
                    "layoutProps": { "parentIsAutoLayout": true }
                }
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}
