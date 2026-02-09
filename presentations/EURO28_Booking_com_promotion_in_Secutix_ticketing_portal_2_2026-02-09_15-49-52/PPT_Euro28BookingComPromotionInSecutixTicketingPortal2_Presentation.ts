import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_001 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_001";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_002 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_002";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_003 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_003";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_004 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_004";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_005 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_005";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_006 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_006";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_007 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_007";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_008 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_008";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_009 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_009";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_010 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_010";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_011 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_011";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_012 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_012";
import { PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_013 } from "../../slides/EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_2026-02-09_15-49-52/PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_013";

export class PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Presentation extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const presentation = figma.createFrame();
        presentation.name = "EURO28_Booking_com_promotion_in_Secutix_ticketing_portal_2_presentation";
        presentation.x = props.x ?? 0;
        presentation.y = props.y ?? 0;
        presentation.fills = [];
        presentation.layoutMode = "HORIZONTAL";
        presentation.primaryAxisSizingMode = "AUTO";
        presentation.counterAxisSizingMode = "AUTO";
        presentation.paddingLeft = 120;
        presentation.paddingRight = 120;
        presentation.paddingTop = 120;
        presentation.paddingBottom = 120;
        presentation.itemSpacing = 80;
        presentation.counterAxisAlignItems = "CENTER";

        const slides = [
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_001(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_002(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_003(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_004(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_005(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_006(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_007(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_008(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_009(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_010(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_011(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_012(),
            new PPT_Euro28BookingComPromotionInSecutixTicketingPortal2_Slide_013()
        ];

        for (const slide of slides) {
            const slideNode = await slide.create({ x: 0, y: 0 });
            presentation.appendChild(slideNode);
        }

        return presentation;
    }
}
