import { BaseComponent, ComponentProps } from "../../BaseComponent";
import IMG_img_1_opt_bin from "./assets/img_1_opt.bin";
import IMG_img_2_opt_bin from "./assets/img_2_opt.bin";
import IMG_img_4_bin from "./assets/img_4.bin";
import IMG_img_5_bin from "./assets/img_5.bin";
import IMG_img_6_bin from "./assets/img_6.bin";
import IMG_img_7_bin from "./assets/img_7.bin";
import IMG_img_8_bin from "./assets/img_8.bin";
import IMG_img_9_bin from "./assets/img_9.bin";
import IMG_img_3_opt_bin from "./assets/img_3_opt.bin";


// SVG Assets
const SVG_assets_icon_Icon_4748_25343_svg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.93487 9.14844L4.93487 0.723261M4.93487 0.723261L0.722285 4.93585M4.93487 0.723261L9.14746 4.93585" stroke="#19C201" stroke-width="1.44432" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const SVG_assets_icon_Icon_4748_25359_svg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.93476 0.722656V9.14783M4.93476 9.14783L9.14734 4.93524M4.93476 9.14783L0.722168 4.93524" stroke="#FF3B3B" stroke-width="1.44432" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const SVG_assets_icon_Icon_4748_25377_svg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.93487 9.14844L4.93487 0.723261M4.93487 0.723261L0.722285 4.93585M4.93487 0.723261L9.14746 4.93585" stroke="#19C201" stroke-width="1.44432" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const SVG_assets_icon_Icon_4748_25392_svg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.93476 0.722656V9.14783M4.93476 9.14783L9.14734 4.93524M4.93476 9.14783L0.722168 4.93524" stroke="#FF3B3B" stroke-width="1.44432" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const SVG_assets_icon_Icon_4748_25410_svg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.93476 0.722656V9.14783M4.93476 9.14783L9.14734 4.93524M4.93476 9.14783L0.722168 4.93524" stroke="#FF3B3B" stroke-width="1.44432" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const SVG_assets_icon_Icon_4748_25425_svg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.93476 0.722656V9.14783M4.93476 9.14783L9.14734 4.93524M4.93476 9.14783L0.722168 4.93524" stroke="#FF3B3B" stroke-width="1.44432" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const SVG_assets_icon_Logo_I4748_25440_2662_14597_svg = `<svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2106 40.5721V40.5579L11.6059 40.1034L13.1732 35.9279L12.8767 35.4734V35.4592H14.5992L16.1523 40.1034L16.5759 40.5579V40.5721H14.4015V40.5579L14.8251 40.1034L14.5851 39.3081H12.8061L12.5378 40.1034L12.9331 40.5579V40.5721H11.2106ZM13.0602 38.5269H14.3733L13.7662 36.4818L13.0602 38.5269ZM48.358 37.4191C47.4403 37.1635 47.1579 37.0499 47.1579 36.6238C47.1579 36.1267 47.7933 36.0273 48.1886 36.0273C48.5275 36.0273 48.8381 36.0699 49.1205 36.1551L49.897 36.9931H49.9111L49.8405 35.5444C49.3605 35.3598 48.8522 35.2603 48.2733 35.2603C47.0591 35.2603 45.8872 35.6864 45.8872 36.8936C45.8872 37.6748 46.4237 38.1435 47.5956 38.4701C48.4992 38.7258 48.9369 38.882 48.9369 39.3365C48.9369 39.8762 48.2592 39.9898 47.8074 39.9898C47.4262 39.9898 47.0873 39.933 46.8049 39.8478L46.0284 38.882H46.0143L46.0707 40.4159C46.6073 40.6573 47.2426 40.7425 47.8497 40.7425C49.1487 40.7425 50.25 40.1886 50.25 39.0808C50.25 38.044 49.5299 37.7458 48.358 37.4191ZM43.1763 35.4592L43.6705 35.9137V38.6405L41.6091 35.445H39.7454V35.4592L40.1266 35.9137V40.0892L39.7454 40.5437V40.5579H41.4397V40.5437L40.9455 40.0892V36.6948L43.5293 40.5721H44.4894V35.9279L44.8706 35.4734V35.4592H43.1763ZM43.5152 43.5546L43.7693 43.9523H43.614L43.3881 43.5688H43.2328V43.9523H43.1057V43.0575H43.4446C43.6564 43.0575 43.7552 43.1285 43.7552 43.3132C43.7411 43.4694 43.6422 43.5404 43.5152 43.5546ZM43.3881 43.441C43.501 43.441 43.5999 43.441 43.5999 43.299C43.5999 43.1854 43.5011 43.1712 43.4022 43.1712H43.2187V43.441H43.3881ZM44.1646 43.4978C44.1646 43.9523 43.8117 44.2647 43.3881 44.2647C42.9645 44.2647 42.6115 43.9381 42.6115 43.4978C42.6115 43.0575 42.9645 42.7309 43.3881 42.7309C43.7976 42.7309 44.1646 43.0575 44.1646 43.4978ZM44.0093 43.4978C44.0093 43.1285 43.7411 42.8587 43.3881 42.8587C43.0351 42.8587 42.7669 43.1285 42.7669 43.4978C42.7669 43.8671 43.0351 44.1369 43.3881 44.1369C43.727 44.1369 44.0093 43.8671 44.0093 43.4978ZM34.2954 42.8587L34.719 43.3132V46.2389C34.719 47.0768 34.3095 47.2899 33.6459 47.2899C32.9682 47.2899 32.5587 47.091 32.5587 46.2389V43.3274L32.9823 42.8729V42.8587H30.8785V42.8729L31.2598 43.3274V46.2531C31.2598 47.6449 31.9657 48.1562 33.4765 48.1562C34.846 48.1562 35.552 47.6734 35.552 46.2815V43.3274L35.9191 42.8729V42.8587H34.2954ZM36.0038 40.7425C34.4083 40.7425 33.3776 39.4217 33.3776 37.9304C33.3776 36.3823 34.5636 35.2603 36.032 35.2603C37.6699 35.2603 38.7147 36.5528 38.7147 38.0156C38.7147 39.7057 37.4581 40.7425 36.0038 40.7425ZM37.3451 38.3707C37.3451 37.4759 37.0204 36.0699 35.8908 36.0699C34.9872 36.0699 34.7331 36.9789 34.7331 37.5896C34.7331 38.4843 35.1002 39.933 36.1873 39.933C36.9639 39.933 37.3451 39.1944 37.3451 38.3707ZM25.2027 40.0892V35.9137L24.8214 35.4592V35.445H27.2358C28.7042 35.445 29.3678 36.1125 29.3678 37.1351C29.3678 38.2003 28.5771 38.8536 27.49 38.8536C27.137 38.8536 26.7699 38.8252 26.5157 38.7684V40.1034L27.0523 40.5579V40.5721H24.8356V40.5579L25.2027 40.0892ZM26.5016 38.0724C26.6569 38.1151 26.8405 38.1435 27.0381 38.1435C27.7441 38.1435 28.0547 37.76 28.0547 37.1777C28.0547 36.496 27.6594 36.1693 26.9252 36.1693H26.5016V38.0724ZM27.8288 45.5714L28.3371 46.0259V46.9916C28.1818 47.1763 27.8994 47.3325 27.5182 47.3325C26.6146 47.3325 26.1486 46.2247 26.1486 45.3015C26.1486 44.2931 26.6569 43.441 27.7017 43.441C27.9982 43.441 28.2947 43.4694 28.5489 43.5546L29.3537 44.421H29.3678L29.3254 43.0149C28.8595 42.7735 28.2947 42.6741 27.73 42.6741C26.0216 42.6741 24.8073 43.7393 24.8073 45.4862C24.8073 46.949 25.7392 48.1562 27.1935 48.1562C27.8288 48.1562 28.4077 48.0142 28.9442 47.6165L29.5796 48.1562H29.5937V46.0401L29.989 45.5856V45.5714H27.8288ZM32.3328 40.5579L31.9657 40.1034V35.9279L32.3328 35.4734V35.4592H30.2855V35.4734L30.6668 35.9279V40.1034L30.2855 40.5579V40.5721H32.3328V40.5579ZM3.06385 39.8904C2.01904 39.8904 1.35544 38.8252 1.35544 37.902C1.35544 36.7658 1.96256 36.0273 2.83795 36.0273C3.07797 36.0273 3.28976 36.0557 3.50155 36.1125L4.29222 37.0925H4.30634L4.24986 35.4734C4.02395 35.3882 3.52978 35.2603 2.93678 35.2603C1.07305 35.2603 0 36.5386 0 38.0156C0 39.4643 1.0307 40.7425 2.79559 40.7425C3.27564 40.7425 3.96748 40.5863 4.44753 40.217L4.51812 39.3649H4.504C4.08043 39.6915 3.50155 39.8904 3.06385 39.8904ZM23.9461 47.5029L24.3696 47.9574V47.9716H22.1953V47.9574L22.6189 47.5029L22.3788 46.7076H20.5716L20.3033 47.5029L20.6987 47.9574V47.9716H18.9902V47.9574L19.3856 47.5029L20.9528 43.3274L20.6563 42.8729V42.8587H22.3788L23.9461 47.5029ZM22.1388 45.9264L21.5317 43.8955L20.8257 45.9264H22.1388ZM40.5925 47.2331H38.5876V45.685H39.7877L40.2819 46.1111H40.296V44.5204H40.2819L39.7877 44.9465H38.5876V43.5972H40.5219L41.0867 44.2079H41.1008L41.0302 42.8587H36.8933V42.8729L37.2745 43.3274V47.5029L36.8933 47.9574V47.9716H41.2138L41.3126 46.4235H41.2985L40.5925 47.2331ZM8.57031 40.5579V40.5721H10.6176V40.5579L10.2364 40.1034V35.9279L10.6176 35.4734V35.4592H8.57031V35.4734L8.93741 35.9279V37.4759H7.11604V35.9279L7.48314 35.4734V35.4592H5.43587V35.4734L5.81708 35.9279V40.1034L5.43587 40.5579V40.5721H7.48314V40.5579L7.11604 40.1034V38.2997H8.93741V40.1034L8.57031 40.5579ZM12.4672 47.2189H10.7164V43.3274L11.1965 42.8729V42.8587H9.03625V42.8729L9.41746 43.3274V47.5029L9.03625 47.9574V47.9858H13.0743L13.272 46.3809H13.2579L12.4672 47.2189ZM18.4537 36.9078L19.8797 40.5579H20.6704L21.9835 36.8652L22.2094 40.0892L21.7152 40.5437V40.5579H23.8755V40.5437L23.4519 40.0892L23.1413 35.9137L23.466 35.4592V35.445H21.6588L20.4304 38.8678L19.1173 35.445H17.2959V35.4592L17.663 35.9137L17.4513 40.0892L17.0136 40.5437V40.5579H18.7926V40.5437L18.3549 40.0892L18.4537 36.9078ZM17.6913 47.2331H15.6864V45.685H16.8865L17.3807 46.1111H17.3948V44.5204H17.3807L16.8865 44.9465H15.6864V43.5972H17.6207L18.1854 44.2079H18.1996L18.129 42.8587H14.0062V42.8729L14.3874 43.3274V47.5029L14.0062 47.9574V47.9716H18.3125L18.4114 46.4235H18.3972L17.6913 47.2331ZM30.5114 32.4056L30.6385 31.9512L30.0738 31.5251L30.5256 31.1984L30.7938 31.3973L31.0903 30.3747L29.3537 31.5109L28.6477 31.099L31.3727 29.3237C31.4716 29.2527 31.6269 29.1959 31.7963 29.3379L31.9092 29.4231C32.0928 29.5651 32.0646 29.7214 32.0363 29.835L31.1327 32.9737L30.5114 32.4056ZM33.6035 29.906L34.013 29.4089C33.8153 29.2101 33.6035 29.0112 33.3776 28.8266C31.1045 26.8525 28.1818 25.7731 25.1038 25.7731C22.0258 25.7731 19.1032 26.8525 16.83 28.8266C16.6182 29.0112 16.4064 29.2101 16.1946 29.4089L16.6041 29.906C16.8018 29.693 17.0277 29.4941 17.2395 29.2953C19.3856 27.4348 22.1812 26.398 25.0897 26.398C27.9982 26.398 30.7938 27.4206 32.9399 29.2953C33.1941 29.4941 33.4059 29.693 33.6035 29.906ZM27.6594 28.1875L28.803 28.4857L28.9866 27.7756L27.8006 27.4632C27.1511 27.2927 26.7134 27.5342 26.5581 28.1449L26.078 30.0196C26.0498 30.1048 26.0639 30.19 26.1063 30.2611C26.1486 30.3321 26.2192 30.3747 26.3039 30.4031L26.7416 30.5167L27.0523 29.3095L28.3795 29.6503L28.563 28.9544L27.2358 28.6136L27.2923 28.4147C27.3346 28.1591 27.4194 28.1307 27.6594 28.1875ZM23.9319 27.1649L22.0117 27.5626C21.927 27.5768 21.8564 27.6194 21.8141 27.6904C21.7717 27.7614 21.7576 27.8324 21.7717 27.9318L22.1529 29.8208C22.2094 30.1332 22.3506 30.3463 22.5624 30.4741C22.7036 30.5593 22.8589 30.6019 23.0565 30.6019C23.1554 30.6019 23.2542 30.5877 23.3672 30.5735L24.5673 30.3321L24.4261 29.6219L23.2683 29.8634C23.0283 29.906 22.9577 29.8918 22.9012 29.6219L22.8589 29.4231L24.2002 29.1533L24.059 28.4431L22.7177 28.713L22.6189 28.2017L24.0872 27.9034L23.9319 27.1649ZM19.8939 31.4399C19.7527 31.5535 19.5691 31.6245 19.4279 31.5961C19.2303 31.5677 19.1173 31.4967 18.9338 31.2552L17.8325 29.906L17.2395 30.3889L18.4396 31.8659C18.6937 32.1784 18.9761 32.3488 19.3291 32.3772C19.3715 32.3772 19.4138 32.3772 19.442 32.3772C19.7668 32.3772 20.0774 32.2636 20.3739 32.0222C20.6986 31.7523 20.8822 31.4399 20.9246 31.0564C20.9669 30.7155 20.854 30.3889 20.5998 30.0764L19.3997 28.5994L18.8067 29.0822L19.908 30.4457C20.1056 30.6871 20.148 30.815 20.1339 30.9996C20.1339 31.1558 20.0351 31.312 19.8939 31.4399ZM25.1179 31.1132C22.8871 31.1132 20.854 32.1216 19.6115 33.6129L20.0068 34.0957C21.1363 32.6897 23.0424 31.7239 25.1179 31.7239C27.1935 31.7239 29.0995 32.6897 30.2291 34.0957L30.6244 33.6129C29.3819 32.1216 27.3488 31.1132 25.1179 31.1132ZM35.439 13.7435C35.4108 13.7577 35.3684 13.7293 35.3684 13.7009C35.2978 12.3091 35.1708 10.9598 35.1002 10.4627C35.1002 9.25553 34.9025 8.01991 34.7048 7.09675C34.6907 7.06834 34.7331 7.03994 34.7613 7.03994C35.8908 7.26718 36.2579 7.69325 36.2579 7.69325C35.6649 6.34401 34.8037 5.32143 33.8718 4.5545C33.067 2.8644 32.1493 2.08326 32.1493 2.08326C32.2199 2.45252 32.1775 2.8786 32.0363 3.31888C32.0222 3.34728 31.994 3.36149 31.9657 3.34728C30.4267 2.59455 28.8454 2.25369 28.2383 2.15427C27.3205 1.69979 26.3181 1.41574 25.5133 1.1885C25.485 1.1885 25.485 1.16009 25.4992 1.14589C26.5722 0.251133 27.5747 0.00968986 27.5747 0.00968986C25.8239 -0.0613227 24.3132 0.265335 23.0424 0.748221C21.1505 0.591993 19.9503 0.932854 19.9503 0.932854C19.9503 0.932854 20.4727 1.55776 20.6704 1.91283C20.6987 1.95544 20.6845 2.01225 20.6422 2.04065C19.4562 2.8644 18.609 3.78756 18.2702 4.15683C17.8889 4.21364 17.2536 4.29885 16.6888 4.44088C16.6606 4.44088 16.6465 4.42667 16.6606 4.39827C17.2253 3.03483 17.8466 2.28209 17.8466 2.28209C17.8466 2.28209 14.2039 4.88116 13.512 9.56799C13.512 9.56799 13.8085 8.74424 14.8251 7.48022C14.8392 7.46601 14.8674 7.46601 14.8674 7.48022C15.1498 8.11933 15.4887 8.68743 15.644 8.95728C15.0792 9.86624 14.698 10.8462 14.458 11.6558C14.4439 11.6842 14.4298 11.7126 14.4015 11.7126C13.5544 12.0392 13.3426 12.3375 13.3426 12.3375C13.4697 12.792 13.7379 13.2322 14.0627 13.6441C14.0909 13.6867 14.105 13.7293 14.105 13.7719C14.0203 15.7745 14.6557 17.0811 14.6557 17.0811C14.7969 16.3852 15.0792 15.7035 15.4463 15.0644C15.4605 15.036 15.4887 15.036 15.5169 15.0502C16.35 15.7177 17.2112 16.3 17.5501 16.4988C17.7336 16.9533 18.2278 18.1321 18.9055 19.3393C18.9196 19.3677 18.9055 19.3961 18.8773 19.4103C18.0725 19.7086 17.2395 19.8364 16.477 19.6518C16.477 19.6518 17.3948 20.8022 20.2186 21.2993C21.0093 22.2366 21.9553 23.0036 23.0707 23.2734C23.0707 23.2734 22.7459 22.9042 22.6612 21.5549C22.6612 21.5265 22.6753 21.4981 22.7036 21.4981C23.3954 21.5123 24.3555 21.5265 25.2168 21.4555C25.5274 21.6969 26.191 22.2366 26.8546 22.5775C26.8828 22.5917 26.8828 22.6343 26.8546 22.6627C25.7109 23.3586 24.9344 23.4296 24.9344 23.4296C30.1444 23.5433 33.2788 20.1205 33.2788 20.1205C32.4175 20.6886 31.4292 21.0436 30.4409 21.2567C30.4126 21.2567 30.3844 21.2283 30.3844 21.1998C30.5679 20.3051 30.5115 19.4387 30.4973 19.1405C31.7398 18.828 32.8129 18.2741 33.6177 17.706C33.6318 17.6918 33.66 17.6918 33.6741 17.706C34.013 17.9333 34.2954 18.2031 34.5778 18.6292C34.5778 18.6292 35.1143 17.8623 35.2978 16.0727C36.6392 14.3116 36.8368 12.5079 36.8368 12.5079C36.5403 13.0902 36.032 13.4737 35.439 13.7435ZM24.2143 2.62295C24.2567 2.55194 24.3273 2.50933 24.412 2.49513C26.0922 2.26789 27.6311 2.23949 28.2241 2.25369C29.2972 2.97802 30.3561 3.92959 31.1892 4.82434C31.2456 4.88116 31.2598 4.98057 31.2174 5.05158C30.6244 5.98895 29.749 6.89791 29.3678 7.29558C27.9559 7.63644 26.4451 8.11933 25.2309 8.5312C25.1179 8.57381 24.9767 8.5312 24.9062 8.41758C23.9743 7.06834 23.3954 5.90374 23.1554 5.46346C23.4095 4.34146 23.7484 3.33308 24.2143 2.62295ZM15.9829 11.2155C15.8417 10.3349 15.757 9.39756 15.7428 8.97148C15.7146 7.99151 15.8699 7.11095 16.0535 6.30141C16.0817 6.17358 16.1523 6.04576 16.2511 5.96055C16.7735 5.47766 17.7195 4.62551 18.3266 4.24204C18.8914 3.87278 20.4586 3.36148 21.1081 3.17685C21.2352 3.13424 21.3623 3.19105 21.4328 3.30467C21.5034 3.4467 21.5882 3.57452 21.6729 3.71655C22.1812 4.51189 22.7459 5.20781 22.9718 5.49186C22.6612 6.74168 22.52 8.14773 22.4635 9.32654C22.4635 9.44016 22.3929 9.53958 22.28 9.58219C20.6422 10.2213 19.4138 10.7326 18.9902 10.9172C17.8748 10.9598 16.8018 11.1587 16.0817 11.2865C16.0393 11.3007 15.9829 11.2581 15.9829 11.2155ZM20.5716 18.6008C20.4727 18.6576 20.3598 18.6576 20.261 18.5866C19.4279 17.9901 18.4537 17.2373 17.6207 16.4704C17.1406 15.6325 16.7594 14.5673 16.5053 13.6583C16.4911 13.6015 16.5053 13.5305 16.5335 13.4879C17.4513 12.3517 18.5667 11.4427 19.0185 11.1019C20.0633 11.5563 21.2634 11.954 22.3082 12.3091C22.4212 12.3517 22.4918 12.4369 22.5059 12.5505C22.6471 14.4252 23.0001 15.9449 23.0848 16.5272C22.7036 16.9533 21.6729 17.9191 20.5716 18.6008ZM32.0646 16.7403C31.2739 18.0753 30.6668 18.8848 30.4691 19.1263C30.2008 19.4956 29.5372 20.4755 28.5065 21.4555C28.4359 21.5123 28.3512 21.5549 28.2665 21.5549C26.9675 21.6117 25.7533 21.5123 25.2874 21.4129C24.892 21.2425 23.9602 20.8306 22.8589 20.2199C22.76 20.1631 22.7036 20.0636 22.7177 19.95C22.7742 19.0979 23.0424 17.8765 23.2825 16.584C23.8755 15.533 24.4826 14.3542 25.1179 13.3743C25.1885 13.2748 25.3156 13.218 25.4286 13.2606C27.3205 13.7861 28.9725 14.1838 29.6502 14.3258C30.5679 15.391 31.4574 16.1438 32.0504 16.6124C32.0787 16.655 32.0787 16.6977 32.0646 16.7403ZM33.4341 14.198C33.4059 14.2548 33.3494 14.2974 33.2929 14.2974C31.8528 14.4679 30.3279 14.269 29.7349 14.1696C28.7466 13.1754 27.6876 12.0818 26.8969 11.1161C26.8122 11.0166 26.8122 10.8746 26.8828 10.7752C27.9982 9.19872 29.0289 7.9489 29.4666 7.45181C30.7091 7.18196 31.9375 6.94052 32.7705 6.89791C32.827 6.89791 32.8976 6.92632 32.9258 6.98313C33.9989 8.48859 34.7754 9.93725 35.0155 10.4627C34.5213 11.7978 33.9283 13.147 33.4341 14.198Z" fill="white"/>
</svg>
`;



type T2x3 = [[number, number, number], [number, number, number]];
function applySizeAndTransform(
    node: SceneNode & LayoutMixin & GeometryMixin,
    opts: {
        width?: number;
        height?: number;
        relativeTransform?: T2x3;
        parentIsAutoLayout: boolean;
        layoutPositioning?: "AUTO" | "ABSOLUTE";
    }
) {
    const { width, height, relativeTransform, parentIsAutoLayout } = opts;
    const positioning = opts.layoutPositioning ?? "AUTO";

    if (typeof width === "number" && typeof height === "number") {
        node.resize(width, height);
    }

    if (relativeTransform) {
        const t = relativeTransform;
        const inFlow = parentIsAutoLayout && positioning !== "ABSOLUTE";

        // Strip translation in auto-layout flow; keep axis vectors
        const tx = inFlow ? 0 : t[0][2];
        const ty = inFlow ? 0 : t[1][2];

        try {
            node.relativeTransform = [
                [t[0][0], t[0][1], tx],
                [t[1][0], t[1][1], ty],
            ];
        } catch (e) {
            console.warn("Failed to set relativeTransform", e);
        }
    }
}


export class DesktopBanner extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "DesktopBanner";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("layoutMode" in root) {
    root.layoutMode = "NONE";
}
root.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root.strokes = await this.hydratePaints([]);
root.strokeWeight = 1.0049999952316284;
root.strokeAlign = "INSIDE";
root.effects = [];
if ("cornerRadius" in root) root.cornerRadius = 0;

// Start Child: Image placeholder
const root_child_0 = figma.createFrame();
root_child_0.name = "Image placeholder";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_0) {
    root_child_0.layoutMode = "NONE";
}
root_child_0.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0.004227029159665108,"g":0.24253396689891815,"b":0.7897573709487915,"a":1},"position":0,"boundVariables":{}},{"color":{"r":0,"g":0.09838132560253143,"b":0.3242938816547394,"a":1},"position":1,"boundVariables":{}}],"gradientTransform":[[-0.8690954446792603,0.8705018162727356,0.7127553224563599],[-0.8279772400856018,-1.1123262643814087,1.527748465538025]]}]);
root_child_0.strokes = await this.hydratePaints([]);
root_child_0.strokeWeight = 1.0049999952316284;
root_child_0.strokeAlign = "INSIDE";
root_child_0.effects = [];
if ("cornerRadius" in root_child_0) root_child_0.cornerRadius = 0;

// Start Child: Frame 626577
const root_child_0_child_0 = figma.createFrame();
root_child_0_child_0.name = "Frame 626577";
root_child_0_child_0.visible = true;
root_child_0_child_0.opacity = 1;
root_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0) root_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_0_child_0) {
    root_child_0_child_0.layoutMode = "NONE";
}
root_child_0_child_0.fills = await this.hydratePaints([]);
root_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0.strokeWeight = 1.6053199768066406;
root_child_0_child_0.strokeAlign = "INSIDE";
root_child_0_child_0.effects = [{"type":"LAYER_BLUR","visible":true,"radius":11.456998825073242,"boundVariables":{},"blurType":"NORMAL"}];
if ("cornerRadius" in root_child_0_child_0) root_child_0_child_0.cornerRadius = 0;

// Start Child: Ellipse 2300
const root_child_0_child_0_child_0 = figma.createVector();
root_child_0_child_0_child_0.name = "Ellipse 2300";
root_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0,"g":0,"b":0,"a":1},"position":0.5208994150161743,"boundVariables":{}},{"color":{"r":0,"g":0,"b":0,"a":0},"position":0.948544979095459,"boundVariables":{}}],"gradientTransform":[[5.551115123125783e-17,1.337795376777649,-0.48529431223869324],[-1.0066038370132446,0,1.0084799528121948]]}]);
root_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_0.strokeWeight = 1.6605207920074463;
root_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_0_child_0_child_0.effects = [{"type":"LAYER_BLUR","visible":true,"radius":49.81562042236328,"boundVariables":{},"blurType":"NORMAL"}];
if ("cornerRadius" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.cornerRadius = 0;
root_child_0_child_0_child_0.vectorPaths = [{"windingRule":"NONZERO","data":"M 485.19359438344026 309.06936498943486 C 452.236594104884 399.33280306240533 375.9784366858189 428.59832763671875 240.26396414946788 428.59832763671875 C 104.54949161311686 428.59832763671875 40.27282596507423 428.59832763671875 8.182942605357718 319.4344879636574 C -23.9069407543588 210.270648290596 34.68357834572021 0 249.90054783569738 0 C 471.5419064498276 0 518.1505946619965 218.8059269164644 485.19359438344026 309.06936498943486 Z"}];
root_child_0_child_0.appendChild(root_child_0_child_0_child_0);
applySizeAndTransform(root_child_0_child_0_child_0, {"width":494.71136474609375,"height":428.59832763671875,"relativeTransform":[[0.9006906747817993,-0.43446099758148193,424.6299743652344],[0.43446099758148193,0.9006906747817993,165.8123016357422]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});

// Start Child: UCL_2024-27_LightWaveTexture_RGB_Transparent_V3_5k 2
const root_child_0_child_0_child_1 = figma.createRectangle();
root_child_0_child_0_child_1.name = "UCL_2024-27_LightWaveTexture_RGB_Transparent_V3_5k 2";
root_child_0_child_0_child_1.visible = true;
root_child_0_child_0_child_1.opacity = 1;
root_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
root_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":0.20000000298023224,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}},{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"c5ba8a8306d03b392fa6a9b23dd51107bc846e40","assetRef":IMG_img_1_opt_bin}]);
root_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_1.strokeWeight = 1.1088640689849854;
root_child_0_child_0_child_1.strokeAlign = "INSIDE";
root_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.cornerRadius = 0;
root_child_0_child_0.appendChild(root_child_0_child_0_child_1);
applySizeAndTransform(root_child_0_child_0_child_1, {"width":1572.9254150390625,"height":1574.11669921875,"relativeTransform":[[-0.7183816432952881,-0.6956492066383362,1396.36865234375],[-0.6956492066383362,0.7183816432952881,289.5010986328125]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});

// Start Child: UCL_2024-27_LightWaveTexture_RGB_Transparent_V3_5k 2
const root_child_0_child_0_child_2 = figma.createRectangle();
root_child_0_child_0_child_2.name = "UCL_2024-27_LightWaveTexture_RGB_Transparent_V3_5k 2";
root_child_0_child_0_child_2.visible = true;
root_child_0_child_0_child_2.opacity = 1;
root_child_0_child_0_child_2.locked = false;
if ("blendMode" in root_child_0_child_0_child_2) root_child_0_child_0_child_2.blendMode = "PASS_THROUGH";
root_child_0_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":0.20000000298023224,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}},{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"c5ba8a8306d03b392fa6a9b23dd51107bc846e40","assetRef":IMG_img_2_opt_bin}]);
root_child_0_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_2.strokeWeight = 1.1088640689849854;
root_child_0_child_0_child_2.strokeAlign = "INSIDE";
root_child_0_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_2) root_child_0_child_0_child_2.cornerRadius = 0;
root_child_0_child_0.appendChild(root_child_0_child_0_child_2);
applySizeAndTransform(root_child_0_child_0_child_2, {"width":1572.9254150390625,"height":1574.11669921875,"relativeTransform":[[-0.7183816432952881,-0.6956492066383362,1388.5574951171875],[-0.6956492066383362,0.7183816432952881,272.55279541015625]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0.appendChild(root_child_0_child_0);
applySizeAndTransform(root_child_0_child_0, {"width":756.52783203125,"height":694.0621948242188,"relativeTransform":[[0.4332197606563568,0.9012883305549622,-109.54499816894531],[-0.9012883305549622,0.4332197606563568,513.009521484375]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});

// Start Child: opacity
const root_child_0_child_1 = figma.createFrame();
root_child_0_child_1.name = "opacity";
root_child_0_child_1.visible = true;
root_child_0_child_1.opacity = 1;
root_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_1) root_child_0_child_1.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_0_child_1) {
    root_child_0_child_1.layoutMode = "NONE";
}
root_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_1.strokeWeight = 1.0049999952316284;
root_child_0_child_1.strokeAlign = "INSIDE";
root_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_1) root_child_0_child_1.cornerRadius = 0;

// Start Child: opacity
const root_child_0_child_1_child_0 = figma.createRectangle();
root_child_0_child_1_child_0.name = "opacity";
root_child_0_child_1_child_0.visible = true;
root_child_0_child_1_child_0.opacity = 1;
root_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
root_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":0.8999999761581421,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0,"g":0,"b":0,"a":0},"position":0.06926402449607849,"boundVariables":{}},{"color":{"r":0,"g":0,"b":0,"a":0.4699999988079071},"position":0.507688581943512,"boundVariables":{}},{"color":{"r":0,"g":0,"b":0,"a":1},"position":1,"boundVariables":{}}],"gradientTransform":[[4.563296851500809e-9,1.4345513582229614,-0.35438522696495056],[-4.1392741203308105,-3.1086244689504383e-15,2.4483015537261963]]}]);
root_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_0.strokeWeight = 0.8780455589294434;
root_child_0_child_1_child_0.strokeAlign = "INSIDE";
root_child_0_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.cornerRadius = 0;
root_child_0_child_1.appendChild(root_child_0_child_1_child_0);
applySizeAndTransform(root_child_0_child_1_child_0, {"width":603,"height":345.7200012207031,"relativeTransform":[[-1,0,603],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0.appendChild(root_child_0_child_1);
applySizeAndTransform(root_child_0_child_1, {"width":603,"height":345.7200012207031,"relativeTransform":[[1,0,-3.637978807091713e-12],[0,-1,345.7202453613281]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root.appendChild(root_child_0);
applySizeAndTransform(root_child_0, {"width":603,"height":699.47998046875,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});

// Start Child: bg
const root_child_1 = figma.createFrame();
root_child_1.name = "bg";
root_child_1.visible = true;
root_child_1.opacity = 1;
root_child_1.locked = false;
if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1) {
    root_child_1.layoutMode = "VERTICAL";
    root_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1.counterAxisSizingMode = "FIXED";
    root_child_1.primaryAxisAlignItems = "MIN";
    root_child_1.counterAxisAlignItems = "MIN";
    root_child_1.itemSpacing = 7.221578598022461;
    root_child_1.paddingTop = 10.832366943359375;
    root_child_1.paddingRight = 10.832366943359375;
    root_child_1.paddingBottom = 10.832366943359375;
    root_child_1.paddingLeft = 10.832366943359375;
}
root_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.6399999856948853,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0.6078431606292725},"boundVariables":{}}]);
root_child_1.strokes = await this.hydratePaints([]);
root_child_1.strokeWeight = 0.9026973247528076;
root_child_1.strokeAlign = "INSIDE";
root_child_1.effects = [{"type":"GLASS","visible":true,"radius":41.02901077270508,"boundVariables":{},"refraction":0.7099999785423279,"depth":108.67646789550781,"lightAngle":-45,"lightIntensity":1,"dispersion":0.2199999988079071}];
if ("cornerRadius" in root_child_1) root_child_1.cornerRadius = 10.832366943359375;

// Start Child: Frame 2609324
const root_child_1_child_0 = figma.createFrame();
root_child_1_child_0.name = "Frame 2609324";
root_child_1_child_0.visible = true;
root_child_1_child_0.opacity = 1;
root_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_0) root_child_1_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_0) {
    root_child_1_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_0.itemSpacing = 14.443157196044922;
    root_child_1_child_0.paddingTop = 0;
    root_child_1_child_0.paddingRight = 3.6107892990112305;
    root_child_1_child_0.paddingBottom = 0;
    root_child_1_child_0.paddingLeft = 3.6107892990112305;
}
root_child_1_child_0.fills = await this.hydratePaints([]);
root_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_0.strokeAlign = "INSIDE";
root_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0) root_child_1_child_0.cornerRadius = 0;

// Start Child: Team
const root_child_1_child_0_child_0 = figma.createText();
root_child_1_child_0_child_0.name = "Team";
root_child_1_child_0_child_0.visible = true;
root_child_1_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.699999988079071,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:3cd64fb992e1bd67f592632151a528f17c6ab0eb/3505:234"}}}]);
root_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_0_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_0_child_0.effects = [];
// Text Properties
root_child_1_child_0_child_0.characters = "Position";
root_child_1_child_0_child_0.fontSize = 10.832366943359375;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_0_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_0_child_0.setRangeFontName(0, 8, {"family":"Champions","style":"Bold"});
root_child_1_child_0_child_0.setRangeFills(0, 8, [{"type":"SOLID","visible":true,"opacity":0.699999988079071,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:3cd64fb992e1bd67f592632151a528f17c6ab0eb/3505:234"}}}]);
root_child_1_child_0_child_0.setRangeFontSize(0, 8, 10.832366943359375);
root_child_1_child_0.appendChild(root_child_1_child_0_child_0);
// Child Layout Props
root_child_1_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_0, {"width":38,"height":14,"relativeTransform":[[1,0,3.6107892990112305],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 2609325
const root_child_1_child_0_child_1 = figma.createFrame();
root_child_1_child_0_child_1.name = "Frame 2609325";
root_child_1_child_0_child_1.visible = true;
root_child_1_child_0_child_1.opacity = 1;
root_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_0_child_1) {
    root_child_1_child_0_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1_child_0_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_0_child_1.primaryAxisAlignItems = "CENTER";
    root_child_1_child_0_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_1.itemSpacing = 7.221578598022461;
    root_child_1_child_0_child_1.paddingTop = 0;
    root_child_1_child_0_child_1.paddingRight = 0;
    root_child_1_child_0_child_1.paddingBottom = 0;
    root_child_1_child_0_child_1.paddingLeft = 39.71867370605469;
}
root_child_1_child_0_child_1.fills = await this.hydratePaints([]);
root_child_1_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_0_child_1.strokeAlign = "INSIDE";
root_child_1_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.cornerRadius = 0;

// Start Child: Team
const root_child_1_child_0_child_1_child_0 = figma.createText();
root_child_1_child_0_child_1_child_0.name = "Team";
root_child_1_child_0_child_1_child_0.visible = true;
root_child_1_child_0_child_1_child_0.opacity = 1;
root_child_1_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.699999988079071,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:3cd64fb992e1bd67f592632151a528f17c6ab0eb/3505:234"}}}]);
root_child_1_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_1_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_0_child_1_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_0_child_1_child_0.effects = [];
// Text Properties
root_child_1_child_0_child_1_child_0.characters = "Team";
root_child_1_child_0_child_1_child_0.fontSize = 10.832366943359375;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_0_child_1_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_0_child_1_child_0.setRangeFontName(0, 4, {"family":"Champions","style":"Bold"});
root_child_1_child_0_child_1_child_0.setRangeFills(0, 4, [{"type":"SOLID","visible":true,"opacity":0.699999988079071,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:3cd64fb992e1bd67f592632151a528f17c6ab0eb/3505:234"}}}]);
root_child_1_child_0_child_1_child_0.setRangeFontSize(0, 4, 10.832366943359375);
root_child_1_child_0_child_1.appendChild(root_child_1_child_0_child_1_child_0);
// Child Layout Props
root_child_1_child_0_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_1_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_0_child_1_child_0, {"width":115.72256469726562,"height":14,"relativeTransform":[[1,0,39.71867370605469],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_0.appendChild(root_child_1_child_0_child_1);
// Child Layout Props
root_child_1_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_0_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_0_child_1, {"width":155.4412384033203,"height":14,"relativeTransform":[[1,0,56.05394744873047],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 2609328
const root_child_1_child_0_child_2 = figma.createFrame();
root_child_1_child_0_child_2.name = "Frame 2609328";
root_child_1_child_0_child_2.visible = true;
root_child_1_child_0_child_2.opacity = 1;
root_child_1_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_0_child_2) {
    root_child_1_child_0_child_2.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_2.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_2.counterAxisSizingMode = "AUTO";
    root_child_1_child_0_child_2.primaryAxisAlignItems = "CENTER";
    root_child_1_child_0_child_2.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_2.itemSpacing = 7.221578598022461;
    root_child_1_child_0_child_2.paddingTop = 0;
    root_child_1_child_0_child_2.paddingRight = 16.248550415039062;
    root_child_1_child_0_child_2.paddingBottom = 0;
    root_child_1_child_0_child_2.paddingLeft = 0;
}
root_child_1_child_0_child_2.fills = await this.hydratePaints([]);
root_child_1_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.cornerRadius = 0;

// Start Child: Team
const root_child_1_child_0_child_2_child_0 = figma.createText();
root_child_1_child_0_child_2_child_0.name = "Team";
root_child_1_child_0_child_2_child_0.visible = true;
root_child_1_child_0_child_2_child_0.opacity = 1;
root_child_1_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_0_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.699999988079071,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:3cd64fb992e1bd67f592632151a528f17c6ab0eb/3505:234"}}}]);
root_child_1_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_2_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_0_child_2_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_0_child_2_child_0.effects = [];
// Text Properties
root_child_1_child_0_child_2_child_0.characters = "Points";
root_child_1_child_0_child_2_child_0.fontSize = 10.832366943359375;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_0_child_2_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_0_child_2_child_0.setRangeFontName(0, 6, {"family":"Champions","style":"Bold"});
root_child_1_child_0_child_2_child_0.setRangeFills(0, 6, [{"type":"SOLID","visible":true,"opacity":0.699999988079071,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:3cd64fb992e1bd67f592632151a528f17c6ab0eb/3505:234"}}}]);
root_child_1_child_0_child_2_child_0.setRangeFontSize(0, 6, 10.832366943359375);
root_child_1_child_0_child_2.appendChild(root_child_1_child_0_child_2_child_0);
// Child Layout Props
root_child_1_child_0_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_2_child_0, {"width":29,"height":14,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_0.appendChild(root_child_1_child_0_child_2);
// Child Layout Props
root_child_1_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_2, {"width":45.24855041503906,"height":14,"relativeTransform":[[1,0,225.9383544921875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 2609327
const root_child_1_child_0_child_3 = figma.createFrame();
root_child_1_child_0_child_3.name = "Frame 2609327";
root_child_1_child_0_child_3.visible = true;
root_child_1_child_0_child_3.opacity = 1;
root_child_1_child_0_child_3.locked = false;
if ("blendMode" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_0_child_3) {
    root_child_1_child_0_child_3.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_3.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_3.counterAxisSizingMode = "AUTO";
    root_child_1_child_0_child_3.primaryAxisAlignItems = "CENTER";
    root_child_1_child_0_child_3.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_3.itemSpacing = 7.221578598022461;
    root_child_1_child_0_child_3.paddingTop = 0;
    root_child_1_child_0_child_3.paddingRight = 3.6107892990112305;
    root_child_1_child_0_child_3.paddingBottom = 0;
    root_child_1_child_0_child_3.paddingLeft = 0;
}
root_child_1_child_0_child_3.fills = await this.hydratePaints([]);
root_child_1_child_0_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_3.strokeWeight = 0.9026973247528076;
root_child_1_child_0_child_3.strokeAlign = "INSIDE";
root_child_1_child_0_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.cornerRadius = 0;

// Start Child: Team
const root_child_1_child_0_child_3_child_0 = figma.createText();
root_child_1_child_0_child_3_child_0.name = "Team";
root_child_1_child_0_child_3_child_0.visible = true;
root_child_1_child_0_child_3_child_0.opacity = 1;
root_child_1_child_0_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_0_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.699999988079071,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:3cd64fb992e1bd67f592632151a528f17c6ab0eb/3505:234"}}}]);
root_child_1_child_0_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_3_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_0_child_3_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_0_child_3_child_0.effects = [];
// Text Properties
root_child_1_child_0_child_3_child_0.characters = "Goal difference";
root_child_1_child_0_child_3_child_0.fontSize = 10.832366943359375;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_0_child_3_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_0_child_3_child_0.setRangeFontName(0, 15, {"family":"Champions","style":"Bold"});
root_child_1_child_0_child_3_child_0.setRangeFills(0, 15, [{"type":"SOLID","visible":true,"opacity":0.699999988079071,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:3cd64fb992e1bd67f592632151a528f17c6ab0eb/3505:234"}}}]);
root_child_1_child_0_child_3_child_0.setRangeFontSize(0, 15, 10.832366943359375);
root_child_1_child_0_child_3.appendChild(root_child_1_child_0_child_3_child_0);
// Child Layout Props
root_child_1_child_0_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_3_child_0, {"width":69,"height":14,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_0.appendChild(root_child_1_child_0_child_3);
// Child Layout Props
root_child_1_child_0_child_3.layoutAlign = "INHERIT";
root_child_1_child_0_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_3, {"width":72.61078643798828,"height":14,"relativeTransform":[[1,0,285.63006591796875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 2609326
const root_child_1_child_0_child_4 = figma.createFrame();
root_child_1_child_0_child_4.name = "Frame 2609326";
root_child_1_child_0_child_4.visible = true;
root_child_1_child_0_child_4.opacity = 1;
root_child_1_child_0_child_4.locked = false;
if ("blendMode" in root_child_1_child_0_child_4) root_child_1_child_0_child_4.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_0_child_4) {
    root_child_1_child_0_child_4.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_4.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_4.counterAxisSizingMode = "AUTO";
    root_child_1_child_0_child_4.primaryAxisAlignItems = "CENTER";
    root_child_1_child_0_child_4.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_4.itemSpacing = 7.221578598022461;
    root_child_1_child_0_child_4.paddingTop = 0;
    root_child_1_child_0_child_4.paddingRight = 7.221578598022461;
    root_child_1_child_0_child_4.paddingBottom = 0;
    root_child_1_child_0_child_4.paddingLeft = 0;
}
root_child_1_child_0_child_4.fills = await this.hydratePaints([]);
root_child_1_child_0_child_4.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_4.strokeWeight = 0.9026973247528076;
root_child_1_child_0_child_4.strokeAlign = "INSIDE";
root_child_1_child_0_child_4.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_4) root_child_1_child_0_child_4.cornerRadius = 0;

// Start Child: Team
const root_child_1_child_0_child_4_child_0 = figma.createText();
root_child_1_child_0_child_4_child_0.name = "Team";
root_child_1_child_0_child_4_child_0.visible = true;
root_child_1_child_0_child_4_child_0.opacity = 1;
root_child_1_child_0_child_4_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_4_child_0) root_child_1_child_0_child_4_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_0_child_4_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.699999988079071,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:3cd64fb992e1bd67f592632151a528f17c6ab0eb/3505:234"}}}]);
root_child_1_child_0_child_4_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_4_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_0_child_4_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_0_child_4_child_0.effects = [];
// Text Properties
root_child_1_child_0_child_4_child_0.characters = "Goals scored";
root_child_1_child_0_child_4_child_0.fontSize = 10.832366943359375;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_0_child_4_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_0_child_4_child_0.setRangeFontName(0, 12, {"family":"Champions","style":"Bold"});
root_child_1_child_0_child_4_child_0.setRangeFills(0, 12, [{"type":"SOLID","visible":true,"opacity":0.699999988079071,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:3cd64fb992e1bd67f592632151a528f17c6ab0eb/3505:234"}}}]);
root_child_1_child_0_child_4_child_0.setRangeFontSize(0, 12, 10.832366943359375);
root_child_1_child_0_child_4.appendChild(root_child_1_child_0_child_4_child_0);
// Child Layout Props
root_child_1_child_0_child_4_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_4_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_4_child_0, {"width":57,"height":14,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_0.appendChild(root_child_1_child_0_child_4);
// Child Layout Props
root_child_1_child_0_child_4.layoutAlign = "INHERIT";
root_child_1_child_0_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_4, {"width":64.2215805053711,"height":14,"relativeTransform":[[1,0,372.68402099609375],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_0);
// Child Layout Props
root_child_1_child_0.layoutAlign = "STRETCH";
root_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0, {"width":440.516357421875,"height":14,"relativeTransform":[[1,0,10.83233642578125],[0,1,10.832366943359375]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: stats
const root_child_1_child_1 = figma.createFrame();
root_child_1_child_1.name = "stats";
root_child_1_child_1.visible = true;
root_child_1_child_1.opacity = 1;
root_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1) root_child_1_child_1.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1) {
    root_child_1_child_1.layoutMode = "VERTICAL";
    root_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_1.counterAxisAlignItems = "MIN";
    root_child_1_child_1.itemSpacing = 0;
    root_child_1_child_1.paddingTop = 0;
    root_child_1_child_1.paddingRight = 0;
    root_child_1_child_1.paddingBottom = 0;
    root_child_1_child_1.paddingLeft = 0;
}
root_child_1_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1.strokeAlign = "INSIDE";
root_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1) root_child_1_child_1.cornerRadius = 0;

// Start Child: Frame 2609329
const root_child_1_child_1_child_0 = figma.createFrame();
root_child_1_child_1_child_0.name = "Frame 2609329";
root_child_1_child_1_child_0.visible = true;
root_child_1_child_1_child_0.opacity = 1;
root_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_0) {
    root_child_1_child_1_child_0.layoutMode = "VERTICAL";
    root_child_1_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_0.counterAxisAlignItems = "MIN";
    root_child_1_child_1_child_0.itemSpacing = 0;
    root_child_1_child_1_child_0.paddingTop = 3.6107892990112305;
    root_child_1_child_1_child_0.paddingRight = 0;
    root_child_1_child_1_child_0.paddingBottom = 3.6107892990112305;
    root_child_1_child_1_child_0.paddingLeft = 0;
}
root_child_1_child_1_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.cornerRadius = 0;

// Start Child: Team
const root_child_1_child_1_child_0_child_0 = figma.createText();
root_child_1_child_1_child_0_child_0.name = "Team";
root_child_1_child_1_child_0_child_0.visible = true;
root_child_1_child_1_child_0_child_0.opacity = 1;
root_child_1_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.48627451062202454,"g":0.7960784435272217,"b":0.43921568989753723},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:14ecd962e935cde0195464aeaa432b0f6502c153/3505:242"}}}]);
root_child_1_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_0_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_0_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_0_child_0.characters = "Qualified to R16";
root_child_1_child_1_child_0_child_0.fontSize = 13.676337242126465;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_0_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_0_child_0.setRangeFontName(0, 16, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_0_child_0.setRangeFills(0, 16, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.48627451062202454,"g":0.7960784435272217,"b":0.43921568989753723},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:14ecd962e935cde0195464aeaa432b0f6502c153/3505:242"}}}]);
root_child_1_child_1_child_0_child_0.setRangeFontSize(0, 16, 13.676337242126465);
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_0, {"width":92,"height":18,"relativeTransform":[[1,0,0.00008151409565471113],[0,1,3.6109983921051025]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_0_child_1 = figma.createRectangle();
root_child_1_child_1_child_0_child_1.name = "Separator";
root_child_1_child_1_child_0_child_1.visible = true;
root_child_1_child_1_child_0_child_1.opacity = 1;
root_child_1_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.19429495930671692,"g":0.6541666388511658,"b":0.17444443702697754},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_0_child_1.strokeAlign = "INSIDE";
root_child_1_child_1_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.cornerRadius = 0;
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_0_child_1.layoutAlign = "STRETCH";
root_child_1_child_1_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_1, {"width":440.516357421875,"height":0.9026973247528076,"relativeTransform":[[1,0,0],[0,1,21.610790252685547]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_0.layoutAlign = "STRETCH";
root_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0, {"width":440.516357421875,"height":26.12427520751953,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Table standing row
const root_child_1_child_1_child_1 = figma.createFrame();
root_child_1_child_1_child_1.name = "Table standing row";
root_child_1_child_1_child_1.visible = true;
root_child_1_child_1_child_1.opacity = 1;
root_child_1_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_1) {
    root_child_1_child_1_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1.itemSpacing = 0;
    root_child_1_child_1_child_1.paddingTop = 0;
    root_child_1_child_1_child_1.paddingRight = 0;
    root_child_1_child_1_child_1.paddingBottom = 0;
    root_child_1_child_1_child_1.paddingLeft = 0;
}
root_child_1_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1.strokeAlign = "INSIDE";
root_child_1_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.cornerRadius = 0;

// Start Child: Content
const root_child_1_child_1_child_1_child_0 = figma.createFrame();
root_child_1_child_1_child_1_child_0.name = "Content";
root_child_1_child_1_child_1_child_0.visible = true;
root_child_1_child_1_child_1_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_1_child_0) {
    root_child_1_child_1_child_1_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_1_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_1_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1_child_0.itemSpacing = 0;
    root_child_1_child_1_child_1_child_0.paddingTop = 0;
    root_child_1_child_1_child_1_child_0.paddingRight = 0;
    root_child_1_child_1_child_1_child_0.paddingBottom = 0;
    root_child_1_child_1_child_1_child_0.paddingLeft = 0;
}
root_child_1_child_1_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.10000000149011612,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:e4272c5b50925900063c785683e2cc7483ed7dcd/3505:272"}}}]);
root_child_1_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.cornerRadius = 0;

// Start Child: Country
const root_child_1_child_1_child_1_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_1_child_0_child_0.name = "Country";
root_child_1_child_1_child_1_child_0_child_0.visible = true;
root_child_1_child_1_child_1_child_0_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_1_child_0_child_0) {
    root_child_1_child_1_child_1_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_1_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1_child_0_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_1_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1_child_0_child_0.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_0.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_0.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_0.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_0.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_1_child_0_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0.cornerRadius = 0;

// Start Child: Arrow_up
const root_child_1_child_1_child_1_child_0_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_1_child_0_child_0_child_0.name = "Arrow_up";
root_child_1_child_1_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_1_child_0_child_0_child_0) {
    root_child_1_child_1_child_1_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: Icon
const root_child_1_child_1_child_1_child_0_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Icon_4748_25343_svg);
const root_child_1_child_1_child_1_child_0_child_0_child_0_child_0 = figma.flatten([root_child_1_child_1_child_1_child_0_child_0_child_0_child_0_svgContainer]);
root_child_1_child_1_child_1_child_0_child_0_child_0_child_0.name = "Icon";
root_child_1_child_1_child_1_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_1_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_1_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09803921729326248,"g":0.7607843279838562,"b":0.003921568859368563},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_0_child_0_child_0.strokeWeight = 1.4443155527114868;
root_child_1_child_1_child_1_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
root_child_1_child_1_child_1_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_1_child_0_child_0_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_0_child_0_child_0, {"relativeTransform":[[1,-1.193113228304153e-23,3.0104477405548096],[-1.193113228304153e-23,1,3.008397102355957]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_1_child_0_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_0_child_0, {"width":14.443157196044922,"height":14.443157196044922,"relativeTransform":[[-1,8.742277657347586e-8,21.66476821899414],[-8.742277657347586e-8,-1,27.0808048248291]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: 1
const root_child_1_child_1_child_1_child_0_child_0_child_1 = figma.createText();
root_child_1_child_1_child_1_child_0_child_0_child_1.name = "1";
root_child_1_child_1_child_1_child_0_child_0_child_1.visible = true;
root_child_1_child_1_child_1_child_0_child_0_child_1.opacity = 1;
root_child_1_child_1_child_1_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_1_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_1_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_1_child_0_child_0_child_1.characters = "1";
root_child_1_child_1_child_1_child_0_child_0_child_1.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_0_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_0_child_1.setRangeFontName(0, 1, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_0_child_1.setRangeFills(0, 1, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_0_child_1.setRangeFontSize(0, 1, 18.053945541381836);
root_child_1_child_1_child_1_child_0_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_0_child_1, {"width":25.27552604675293,"height":23,"relativeTransform":[[1,0,28.886316299438477],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_1_child_0_child_0_child_2 = figma.createFrame();
root_child_1_child_1_child_1_child_0_child_0_child_2.name = "Team";
root_child_1_child_1_child_1_child_0_child_0_child_2.visible = true;
root_child_1_child_1_child_1_child_0_child_0_child_2.opacity = 1;
root_child_1_child_1_child_1_child_0_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_0_child_2) root_child_1_child_1_child_1_child_0_child_0_child_2.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_1_child_0_child_0_child_2) {
    root_child_1_child_1_child_1_child_0_child_0_child_2.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_1_child_0_child_0_child_2.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_1_child_0_child_0_child_2.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_1_child_0_child_0_child_2.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_1_child_0_child_0_child_2.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1_child_0_child_0_child_2.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_0_child_2.paddingTop = 0;
    root_child_1_child_1_child_1_child_0_child_0_child_2.paddingRight = 0;
    root_child_1_child_1_child_1_child_0_child_0_child_2.paddingBottom = 0;
    root_child_1_child_1_child_1_child_0_child_0_child_2.paddingLeft = 0;
}
root_child_1_child_1_child_1_child_0_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_1_child_0_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_0_child_2) root_child_1_child_1_child_1_child_0_child_0_child_2.cornerRadius = 0;

// Start Child: Arsenal
const root_child_1_child_1_child_1_child_0_child_0_child_2_child_0 = figma.createFrame();
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.name = "Arsenal";
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.visible = true;
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_0_child_2_child_0) root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_1_child_0_child_0_child_2_child_0) {
    root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_0_child_2_child_0) root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.cornerRadius = 0;

// Start Child: Crest
const root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0 = figma.createRectangle();
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0.name = "Crest";
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0.visible = true;
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0.locked = true;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FIT","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"0fda6dd8fc76d8be7ee36b445c3cdb235b0c1cef","assetRef":IMG_img_4_bin}]);
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0.strokeWeight = 0;
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0.strokeAlign = "CENTER";
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_0_child_2_child_0_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_1_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_1_child_0_child_0_child_2_child_0);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_0_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_0_child_2_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_1_child_0_child_0_child_2_child_1 = figma.createText();
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.name = "Team";
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.visible = true;
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.opacity = 1;
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_0_child_2_child_1) root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.characters = "Arsenal";
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.fontSize = 18.05394744873047;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.setRangeFontName(0, 7, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.setRangeFills(0, 7, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.setRangeFontSize(0, 7, 18.05394744873047);
root_child_1_child_1_child_1_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_1_child_0_child_0_child_2_child_1);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_0_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_0_child_2_child_1, {"width":56,"height":23,"relativeTransform":[[1,0,36.10789489746094],[0,1,2.943157196044922]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_1_child_0_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_0_child_2, {"width":92.10789489746094,"height":28.886314392089844,"relativeTransform":[[1,0,61.3834228515625],[0,1,5.416181564331055]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_0, {"width":200.39883422851562,"height":39.71867752075195,"relativeTransform":[[1,0,0.000030517578125],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: P
const root_child_1_child_1_child_1_child_0_child_1 = figma.createFrame();
root_child_1_child_1_child_1_child_0_child_1.name = "P";
root_child_1_child_1_child_1_child_0_child_1.visible = true;
root_child_1_child_1_child_1_child_0_child_1.opacity = 1;
root_child_1_child_1_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_1) root_child_1_child_1_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_1_child_0_child_1) {
    root_child_1_child_1_child_1_child_0_child_1.layoutMode = "VERTICAL";
    root_child_1_child_1_child_1_child_0_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1_child_0_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1_child_0_child_1.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1_child_0_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1_child_0_child_1.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_1.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_1.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_1.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_1.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_1_child_0_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_1.strokeAlign = "INSIDE";
root_child_1_child_1_child_1_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_1) root_child_1_child_1_child_1_child_0_child_1.cornerRadius = 0;

// Start Child: 18
const root_child_1_child_1_child_1_child_0_child_1_child_0 = figma.createText();
root_child_1_child_1_child_1_child_0_child_1_child_0.name = "18";
root_child_1_child_1_child_1_child_0_child_1_child_0.visible = true;
root_child_1_child_1_child_1_child_0_child_1_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_1_child_0) root_child_1_child_1_child_1_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_1_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_1_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_1_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_1_child_0_child_1_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_1_child_0_child_1_child_0.characters = "18";
root_child_1_child_1_child_1_child_0_child_1_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_1_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_1_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_1_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_1_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_1_child_0_child_1.appendChild(root_child_1_child_1_child_1_child_0_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_1_child_0, {"width":20,"height":23,"relativeTransform":[[1,0,29.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_1, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,200.39889526367188],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_1_child_0_child_2 = figma.createRectangle();
root_child_1_child_1_child_1_child_0_child_2.name = "Separator";
root_child_1_child_1_child_1_child_0_child_2.visible = true;
root_child_1_child_1_child_1_child_0_child_2.opacity = 1;
root_child_1_child_1_child_1_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_2) root_child_1_child_1_child_1_child_0_child_2.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_1_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.3499999940395355,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:f9c1b299d9a184836b78bdd6a7208465fdc47a3c/3505:262"}}}]);
root_child_1_child_1_child_1_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_1_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_2) root_child_1_child_1_child_1_child_0_child_2.cornerRadius = 0;
root_child_1_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_2, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,279.83624267578125],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Pts
const root_child_1_child_1_child_1_child_0_child_3 = figma.createFrame();
root_child_1_child_1_child_1_child_0_child_3.name = "Pts";
root_child_1_child_1_child_1_child_0_child_3.visible = true;
root_child_1_child_1_child_1_child_0_child_3.opacity = 1;
root_child_1_child_1_child_1_child_0_child_3.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_3) root_child_1_child_1_child_1_child_0_child_3.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_1_child_0_child_3) {
    root_child_1_child_1_child_1_child_0_child_3.layoutMode = "VERTICAL";
    root_child_1_child_1_child_1_child_0_child_3.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1_child_0_child_3.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1_child_0_child_3.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1_child_0_child_3.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1_child_0_child_3.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_3.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_3.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_3.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_3.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_1_child_0_child_3.fills = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_3.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_3.strokeAlign = "INSIDE";
root_child_1_child_1_child_1_child_0_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_3) root_child_1_child_1_child_1_child_0_child_3.cornerRadius = 0;

// Start Child: 16
const root_child_1_child_1_child_1_child_0_child_3_child_0 = figma.createText();
root_child_1_child_1_child_1_child_0_child_3_child_0.name = "16";
root_child_1_child_1_child_1_child_0_child_3_child_0.visible = true;
root_child_1_child_1_child_1_child_0_child_3_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_3_child_0) root_child_1_child_1_child_1_child_0_child_3_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_1_child_0_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_3_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_3_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_1_child_0_child_3_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_1_child_0_child_3_child_0.characters = "16";
root_child_1_child_1_child_1_child_0_child_3_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_3_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_3_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_3_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_3_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_1_child_0_child_3.appendChild(root_child_1_child_1_child_1_child_0_child_3_child_0);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_3_child_0, {"width":20,"height":23,"relativeTransform":[[1,0,29.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_3);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_3.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_3, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,280.73895263671875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_1_child_0_child_4 = figma.createRectangle();
root_child_1_child_1_child_1_child_0_child_4.name = "Separator";
root_child_1_child_1_child_1_child_0_child_4.visible = true;
root_child_1_child_1_child_1_child_0_child_4.opacity = 1;
root_child_1_child_1_child_1_child_0_child_4.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_4) root_child_1_child_1_child_1_child_0_child_4.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_1_child_0_child_4.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.3499999940395355,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:f9c1b299d9a184836b78bdd6a7208465fdc47a3c/3505:262"}}}]);
root_child_1_child_1_child_1_child_0_child_4.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_4.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_4.strokeAlign = "INSIDE";
root_child_1_child_1_child_1_child_0_child_4.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_4) root_child_1_child_1_child_1_child_0_child_4.cornerRadius = 0;
root_child_1_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_4);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_4.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_4, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,360.1763000488281],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Pts
const root_child_1_child_1_child_1_child_0_child_5 = figma.createFrame();
root_child_1_child_1_child_1_child_0_child_5.name = "Pts";
root_child_1_child_1_child_1_child_0_child_5.visible = true;
root_child_1_child_1_child_1_child_0_child_5.opacity = 1;
root_child_1_child_1_child_1_child_0_child_5.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_5) root_child_1_child_1_child_1_child_0_child_5.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_1_child_0_child_5) {
    root_child_1_child_1_child_1_child_0_child_5.layoutMode = "VERTICAL";
    root_child_1_child_1_child_1_child_0_child_5.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1_child_0_child_5.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_1_child_0_child_5.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1_child_0_child_5.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1_child_0_child_5.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_5.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_5.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_5.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_1_child_0_child_5.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_1_child_0_child_5.fills = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_5.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_5.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_5.strokeAlign = "INSIDE";
root_child_1_child_1_child_1_child_0_child_5.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_5) root_child_1_child_1_child_1_child_0_child_5.cornerRadius = 0;

// Start Child: 17
const root_child_1_child_1_child_1_child_0_child_5_child_0 = figma.createText();
root_child_1_child_1_child_1_child_0_child_5_child_0.name = "17";
root_child_1_child_1_child_1_child_0_child_5_child_0.visible = true;
root_child_1_child_1_child_1_child_0_child_5_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0_child_5_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_5_child_0) root_child_1_child_1_child_1_child_0_child_5_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_1_child_0_child_5_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_5_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_5_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_1_child_0_child_5_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_1_child_0_child_5_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_1_child_0_child_5_child_0.characters = "17";
root_child_1_child_1_child_1_child_0_child_5_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_5_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_5_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_1_child_0_child_5_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_5_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_1_child_0_child_5.appendChild(root_child_1_child_1_child_1_child_0_child_5_child_0);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_5_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_5_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_5_child_0, {"width":20,"height":23,"relativeTransform":[[1,0,29.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_5);
// Child Layout Props
root_child_1_child_1_child_1_child_0_child_5.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0_child_5.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_5, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,361.0790100097656],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_1.appendChild(root_child_1_child_1_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_1_child_0, {"width":440.516357421875,"height":39.71867752075195,"relativeTransform":[[1,0,0],[0,1,4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_1);
// Child Layout Props
root_child_1_child_1_child_1.layoutAlign = "STRETCH";
root_child_1_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1, {"width":440.516357421875,"height":48.74565505981445,"relativeTransform":[[1,0,0],[0,1,26.12427520751953]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: opacity_green
const root_child_1_child_1_child_2 = figma.createRectangle();
root_child_1_child_1_child_2.name = "opacity_green";
root_child_1_child_1_child_2.visible = true;
root_child_1_child_1_child_2.opacity = 0.699999988079071;
root_child_1_child_1_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.blendMode = "COLOR_DODGE";
root_child_1_child_1_child_2.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0.19429495930671692,"g":0.6541666388511658,"b":0.17444443702697754,"a":1},"position":0,"boundVariables":{}},{"color":{"r":0.07549039274454117,"g":0.2541666328907013,"b":0.06777776777744293,"a":0},"position":1,"boundVariables":{}}],"gradientTransform":[[2.154817835275935e-8,1,-1.1371293240358682e-8],[-13.665748596191406,1.0391687510491465e-13,7.711636543273926]]}]);
root_child_1_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2.strokeWeight = 0.976881206035614;
root_child_1_child_1_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.cornerRadius = 0;
root_child_1_child_1.appendChild(root_child_1_child_1_child_2);
// Child Layout Props
root_child_1_child_1_child_2.layoutPositioning = "ABSOLUTE";
root_child_1_child_1_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2, {"width":440.573486328125,"height":108.43382263183594,"relativeTransform":[[1,0,-0.02685546875],[0,1,28.23046875]],"parentIsAutoLayout":true,"layoutPositioning":"ABSOLUTE"});

// Start Child: Table standing row
const root_child_1_child_1_child_3 = figma.createFrame();
root_child_1_child_1_child_3.name = "Table standing row";
root_child_1_child_1_child_3.visible = true;
root_child_1_child_1_child_3.opacity = 1;
root_child_1_child_1_child_3.locked = false;
if ("blendMode" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_3) {
    root_child_1_child_1_child_3.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_3.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_3.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_3.itemSpacing = 0;
    root_child_1_child_1_child_3.paddingTop = 0;
    root_child_1_child_1_child_3.paddingRight = 0;
    root_child_1_child_1_child_3.paddingBottom = 0;
    root_child_1_child_1_child_3.paddingLeft = 0;
}
root_child_1_child_1_child_3.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3.strokeAlign = "INSIDE";
root_child_1_child_1_child_3.effects = [{"type":"LAYER_BLUR","visible":true,"radius":11.373985290527344,"boundVariables":{},"blurType":"NORMAL"}];
if ("cornerRadius" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.cornerRadius = 0;

// Start Child: Content
const root_child_1_child_1_child_3_child_0 = figma.createFrame();
root_child_1_child_1_child_3_child_0.name = "Content";
root_child_1_child_1_child_3_child_0.visible = true;
root_child_1_child_1_child_3_child_0.opacity = 1;
root_child_1_child_1_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_3_child_0) {
    root_child_1_child_1_child_3_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_3_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_3_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_3_child_0.itemSpacing = 0;
    root_child_1_child_1_child_3_child_0.paddingTop = 0;
    root_child_1_child_1_child_3_child_0.paddingRight = 0;
    root_child_1_child_1_child_3_child_0.paddingBottom = 0;
    root_child_1_child_1_child_3_child_0.paddingLeft = 0;
}
root_child_1_child_1_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.10000000149011612,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:e4272c5b50925900063c785683e2cc7483ed7dcd/3505:272"}}}]);
root_child_1_child_1_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_3_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.cornerRadius = 0;

// Start Child: Country
const root_child_1_child_1_child_3_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_3_child_0_child_0.name = "Country";
root_child_1_child_1_child_3_child_0_child_0.visible = true;
root_child_1_child_1_child_3_child_0_child_0.opacity = 1;
root_child_1_child_1_child_3_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_0) root_child_1_child_1_child_3_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_3_child_0_child_0) {
    root_child_1_child_1_child_3_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_3_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3_child_0_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_3_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_3_child_0_child_0.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_0.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_0.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_0.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_0.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_3_child_0_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_3_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0_child_0) root_child_1_child_1_child_3_child_0_child_0.cornerRadius = 0;

// Start Child: Arrow_down
const root_child_1_child_1_child_3_child_0_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_3_child_0_child_0_child_0.name = "Arrow_down";
root_child_1_child_1_child_3_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_3_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_3_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_0_child_0) root_child_1_child_1_child_3_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_3_child_0_child_0_child_0) {
    root_child_1_child_1_child_3_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_3_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_3_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0_child_0_child_0) root_child_1_child_1_child_3_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: Icon
const root_child_1_child_1_child_3_child_0_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Icon_4748_25359_svg);
const root_child_1_child_1_child_3_child_0_child_0_child_0_child_0 = figma.flatten([root_child_1_child_1_child_3_child_0_child_0_child_0_child_0_svgContainer]);
root_child_1_child_1_child_3_child_0_child_0_child_0_child_0.name = "Icon";
root_child_1_child_1_child_3_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_3_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_3_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_0_child_0_child_0) root_child_1_child_1_child_3_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_3_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.23137255012989044,"b":0.23137255012989044},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_0_child_0_child_0.strokeWeight = 1.4443155527114868;
root_child_1_child_1_child_3_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
root_child_1_child_1_child_3_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0_child_0_child_0_child_0) root_child_1_child_1_child_3_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_3_child_0_child_0_child_0.appendChild(root_child_1_child_1_child_3_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_0_child_0_child_0, {"relativeTransform":[[1,0,3.011559009552002],[0,1,3.0064098834991455]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_3_child_0_child_0.appendChild(root_child_1_child_1_child_3_child_0_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_0_child_0, {"width":14.443157196044922,"height":14.443157196044922,"relativeTransform":[[1,0,7.221578598022461],[0,1,12.637760162353516]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: 2
const root_child_1_child_1_child_3_child_0_child_0_child_1 = figma.createText();
root_child_1_child_1_child_3_child_0_child_0_child_1.name = "2";
root_child_1_child_1_child_3_child_0_child_0_child_1.visible = true;
root_child_1_child_1_child_3_child_0_child_0_child_1.opacity = 1;
root_child_1_child_1_child_3_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_0_child_1) root_child_1_child_1_child_3_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_3_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_3_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_3_child_0_child_0_child_1.characters = "2";
root_child_1_child_1_child_3_child_0_child_0_child_1.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_0_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_0_child_1.setRangeFontName(0, 1, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_0_child_1.setRangeFills(0, 1, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_0_child_1.setRangeFontSize(0, 1, 18.053945541381836);
root_child_1_child_1_child_3_child_0_child_0.appendChild(root_child_1_child_1_child_3_child_0_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_0_child_1, {"width":25.27552604675293,"height":23,"relativeTransform":[[1,0,28.886314392089844],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_3_child_0_child_0_child_2 = figma.createFrame();
root_child_1_child_1_child_3_child_0_child_0_child_2.name = "Team";
root_child_1_child_1_child_3_child_0_child_0_child_2.visible = true;
root_child_1_child_1_child_3_child_0_child_0_child_2.opacity = 1;
root_child_1_child_1_child_3_child_0_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_0_child_2) root_child_1_child_1_child_3_child_0_child_0_child_2.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_3_child_0_child_0_child_2) {
    root_child_1_child_1_child_3_child_0_child_0_child_2.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_3_child_0_child_0_child_2.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_3_child_0_child_0_child_2.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_3_child_0_child_0_child_2.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_3_child_0_child_0_child_2.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_3_child_0_child_0_child_2.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_0_child_2.paddingTop = 0;
    root_child_1_child_1_child_3_child_0_child_0_child_2.paddingRight = 0;
    root_child_1_child_1_child_3_child_0_child_0_child_2.paddingBottom = 0;
    root_child_1_child_1_child_3_child_0_child_0_child_2.paddingLeft = 0;
}
root_child_1_child_1_child_3_child_0_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_3_child_0_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0_child_0_child_2) root_child_1_child_1_child_3_child_0_child_0_child_2.cornerRadius = 0;

// Start Child: Bayern
const root_child_1_child_1_child_3_child_0_child_0_child_2_child_0 = figma.createFrame();
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.name = "Bayern";
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.visible = true;
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.opacity = 1;
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_0_child_2_child_0) root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_3_child_0_child_0_child_2_child_0) {
    root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0_child_0_child_2_child_0) root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.cornerRadius = 0;

// Start Child: Crest
const root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0 = figma.createRectangle();
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0.name = "Crest";
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0.visible = true;
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0.opacity = 1;
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"6522b1aa0383c1e2636a69c46d42dbfdfef290b5","assetRef":IMG_img_5_bin}]);
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0.strokeWeight = 0;
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0.strokeAlign = "CENTER";
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.appendChild(root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_0_child_2_child_0_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,-0.000006887034032843076],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_3_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_3_child_0_child_0_child_2_child_0);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_0_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_0_child_2_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_3_child_0_child_0_child_2_child_1 = figma.createText();
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.name = "Team";
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.visible = true;
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.opacity = 1;
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_0_child_2_child_1) root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.characters = "Bayern";
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.fontSize = 18.05394744873047;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.setRangeFontName(0, 6, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.setRangeFills(0, 6, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.setRangeFontSize(0, 6, 18.05394744873047);
root_child_1_child_1_child_3_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_3_child_0_child_0_child_2_child_1);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_0_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_0_child_2_child_1, {"width":53,"height":23,"relativeTransform":[[1,0,36.10789489746094],[0,1,2.943157196044922]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_3_child_0_child_0.appendChild(root_child_1_child_1_child_3_child_0_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_0_child_2, {"width":89.10789489746094,"height":28.886314392089844,"relativeTransform":[[1,0,61.383419036865234],[0,1,5.416181564331055]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_3_child_0.appendChild(root_child_1_child_1_child_3_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_0, {"width":200.39877319335938,"height":39.71867752075195,"relativeTransform":[[1,0,0.00006103515625],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: P
const root_child_1_child_1_child_3_child_0_child_1 = figma.createFrame();
root_child_1_child_1_child_3_child_0_child_1.name = "P";
root_child_1_child_1_child_3_child_0_child_1.visible = true;
root_child_1_child_1_child_3_child_0_child_1.opacity = 1;
root_child_1_child_1_child_3_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_1) root_child_1_child_1_child_3_child_0_child_1.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_3_child_0_child_1) {
    root_child_1_child_1_child_3_child_0_child_1.layoutMode = "VERTICAL";
    root_child_1_child_1_child_3_child_0_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3_child_0_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3_child_0_child_1.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_3_child_0_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_3_child_0_child_1.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_1.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_1.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_1.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_1.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_3_child_0_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_1.strokeAlign = "INSIDE";
root_child_1_child_1_child_3_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0_child_1) root_child_1_child_1_child_3_child_0_child_1.cornerRadius = 0;

// Start Child: 15
const root_child_1_child_1_child_3_child_0_child_1_child_0 = figma.createText();
root_child_1_child_1_child_3_child_0_child_1_child_0.name = "15";
root_child_1_child_1_child_3_child_0_child_1_child_0.visible = true;
root_child_1_child_1_child_3_child_0_child_1_child_0.opacity = 1;
root_child_1_child_1_child_3_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_1_child_0) root_child_1_child_1_child_3_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_3_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_1_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_1_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_3_child_0_child_1_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_3_child_0_child_1_child_0.characters = "15";
root_child_1_child_1_child_3_child_0_child_1_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_1_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_1_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_1_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_1_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_3_child_0_child_1.appendChild(root_child_1_child_1_child_3_child_0_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_1_child_0, {"width":20,"height":23,"relativeTransform":[[1,0,29.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_3_child_0.appendChild(root_child_1_child_1_child_3_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_1, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,200.39891052246094],[0,1,0.0002111654175678268]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_3_child_0_child_2 = figma.createRectangle();
root_child_1_child_1_child_3_child_0_child_2.name = "Separator";
root_child_1_child_1_child_3_child_0_child_2.visible = true;
root_child_1_child_1_child_3_child_0_child_2.opacity = 1;
root_child_1_child_1_child_3_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_2) root_child_1_child_1_child_3_child_0_child_2.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_3_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_3_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0_child_2) root_child_1_child_1_child_3_child_0_child_2.cornerRadius = 0;
root_child_1_child_1_child_3_child_0.appendChild(root_child_1_child_1_child_3_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_2, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,279.83624267578125],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Pts
const root_child_1_child_1_child_3_child_0_child_3 = figma.createFrame();
root_child_1_child_1_child_3_child_0_child_3.name = "Pts";
root_child_1_child_1_child_3_child_0_child_3.visible = true;
root_child_1_child_1_child_3_child_0_child_3.opacity = 1;
root_child_1_child_1_child_3_child_0_child_3.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_3) root_child_1_child_1_child_3_child_0_child_3.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_3_child_0_child_3) {
    root_child_1_child_1_child_3_child_0_child_3.layoutMode = "VERTICAL";
    root_child_1_child_1_child_3_child_0_child_3.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3_child_0_child_3.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3_child_0_child_3.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_3_child_0_child_3.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_3_child_0_child_3.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_3.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_3.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_3.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_3.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_3_child_0_child_3.fills = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_3.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_3.strokeAlign = "INSIDE";
root_child_1_child_1_child_3_child_0_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0_child_3) root_child_1_child_1_child_3_child_0_child_3.cornerRadius = 0;

// Start Child: 11
const root_child_1_child_1_child_3_child_0_child_3_child_0 = figma.createText();
root_child_1_child_1_child_3_child_0_child_3_child_0.name = "11";
root_child_1_child_1_child_3_child_0_child_3_child_0.visible = true;
root_child_1_child_1_child_3_child_0_child_3_child_0.opacity = 1;
root_child_1_child_1_child_3_child_0_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_3_child_0) root_child_1_child_1_child_3_child_0_child_3_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_3_child_0_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_3_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_3_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_3_child_0_child_3_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_3_child_0_child_3_child_0.characters = "11";
root_child_1_child_1_child_3_child_0_child_3_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_3_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_3_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_3_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_3_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_3_child_0_child_3.appendChild(root_child_1_child_1_child_3_child_0_child_3_child_0);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_3_child_0, {"width":20,"height":23,"relativeTransform":[[1,0,29.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_3_child_0.appendChild(root_child_1_child_1_child_3_child_0_child_3);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_3.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_3, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,280.7389221191406],[0,1,0.0002111654175678268]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_3_child_0_child_4 = figma.createRectangle();
root_child_1_child_1_child_3_child_0_child_4.name = "Separator";
root_child_1_child_1_child_3_child_0_child_4.visible = true;
root_child_1_child_1_child_3_child_0_child_4.opacity = 1;
root_child_1_child_1_child_3_child_0_child_4.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_4) root_child_1_child_1_child_3_child_0_child_4.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_3_child_0_child_4.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_4.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_4.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_4.strokeAlign = "INSIDE";
root_child_1_child_1_child_3_child_0_child_4.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0_child_4) root_child_1_child_1_child_3_child_0_child_4.cornerRadius = 0;
root_child_1_child_1_child_3_child_0.appendChild(root_child_1_child_1_child_3_child_0_child_4);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_4.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_4, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,360.1763000488281],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: P
const root_child_1_child_1_child_3_child_0_child_5 = figma.createFrame();
root_child_1_child_1_child_3_child_0_child_5.name = "P";
root_child_1_child_1_child_3_child_0_child_5.visible = true;
root_child_1_child_1_child_3_child_0_child_5.opacity = 1;
root_child_1_child_1_child_3_child_0_child_5.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_5) root_child_1_child_1_child_3_child_0_child_5.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_3_child_0_child_5) {
    root_child_1_child_1_child_3_child_0_child_5.layoutMode = "VERTICAL";
    root_child_1_child_1_child_3_child_0_child_5.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3_child_0_child_5.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_3_child_0_child_5.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_3_child_0_child_5.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_3_child_0_child_5.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_5.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_5.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_5.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_3_child_0_child_5.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_3_child_0_child_5.fills = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_5.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_5.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_5.strokeAlign = "INSIDE";
root_child_1_child_1_child_3_child_0_child_5.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0_child_5) root_child_1_child_1_child_3_child_0_child_5.cornerRadius = 0;

// Start Child: 18
const root_child_1_child_1_child_3_child_0_child_5_child_0 = figma.createText();
root_child_1_child_1_child_3_child_0_child_5_child_0.name = "18";
root_child_1_child_1_child_3_child_0_child_5_child_0.visible = true;
root_child_1_child_1_child_3_child_0_child_5_child_0.opacity = 1;
root_child_1_child_1_child_3_child_0_child_5_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0_child_5_child_0) root_child_1_child_1_child_3_child_0_child_5_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_3_child_0_child_5_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_5_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_0_child_5_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_3_child_0_child_5_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_3_child_0_child_5_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_3_child_0_child_5_child_0.characters = "18";
root_child_1_child_1_child_3_child_0_child_5_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_5_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_5_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_3_child_0_child_5_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0_child_5_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_3_child_0_child_5.appendChild(root_child_1_child_1_child_3_child_0_child_5_child_0);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_5_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_5_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_5_child_0, {"width":20,"height":23,"relativeTransform":[[1,0,29.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_3_child_0.appendChild(root_child_1_child_1_child_3_child_0_child_5);
// Child Layout Props
root_child_1_child_1_child_3_child_0_child_5.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0_child_5.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0_child_5, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,361.0791931152344],[0,1,0.0002111654175678268]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_3.appendChild(root_child_1_child_1_child_3_child_0);
// Child Layout Props
root_child_1_child_1_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_3_child_0, {"width":440.516357421875,"height":39.71867752075195,"relativeTransform":[[1,0,0],[0,1,4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_3);
// Child Layout Props
root_child_1_child_1_child_3.layoutAlign = "STRETCH";
root_child_1_child_1_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3, {"width":440.516357421875,"height":48.74565505981445,"relativeTransform":[[1,0,0],[0,1,74.86993408203125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 2609330
const root_child_1_child_1_child_4 = figma.createFrame();
root_child_1_child_1_child_4.name = "Frame 2609330";
root_child_1_child_1_child_4.visible = true;
root_child_1_child_1_child_4.opacity = 1;
root_child_1_child_1_child_4.locked = false;
if ("blendMode" in root_child_1_child_1_child_4) root_child_1_child_1_child_4.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_4) {
    root_child_1_child_1_child_4.layoutMode = "VERTICAL";
    root_child_1_child_1_child_4.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_4.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_4.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_4.counterAxisAlignItems = "MIN";
    root_child_1_child_1_child_4.itemSpacing = 0;
    root_child_1_child_1_child_4.paddingTop = 3.6107892990112305;
    root_child_1_child_1_child_4.paddingRight = 0;
    root_child_1_child_1_child_4.paddingBottom = 3.6107892990112305;
    root_child_1_child_1_child_4.paddingLeft = 0;
}
root_child_1_child_1_child_4.fills = await this.hydratePaints([]);
root_child_1_child_1_child_4.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_4.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_4.strokeAlign = "INSIDE";
root_child_1_child_1_child_4.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_4) root_child_1_child_1_child_4.cornerRadius = 0;

// Start Child: Team
const root_child_1_child_1_child_4_child_0 = figma.createText();
root_child_1_child_1_child_4_child_0.name = "Team";
root_child_1_child_1_child_4_child_0.visible = true;
root_child_1_child_1_child_4_child_0.opacity = 1;
root_child_1_child_1_child_4_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_4_child_0) root_child_1_child_1_child_4_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_4_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.876416027545929,"g":0.5342792272567749,"b":0.3013963997364044},"boundVariables":{}}]);
root_child_1_child_1_child_4_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_4_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_4_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_4_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_4_child_0.characters = "Qualified to Play-offs";
root_child_1_child_1_child_4_child_0.fontSize = 13.676337242126465;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_4_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_4_child_0.setRangeFontName(0, 22, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_4_child_0.setRangeFills(0, 22, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.876416027545929,"g":0.5342792272567749,"b":0.3013963997364044},"boundVariables":{}}]);
root_child_1_child_1_child_4_child_0.setRangeFontSize(0, 22, 13.676337242126465);
root_child_1_child_1_child_4.appendChild(root_child_1_child_1_child_4_child_0);
// Child Layout Props
root_child_1_child_1_child_4_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_4_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_4_child_0, {"width":121,"height":18,"relativeTransform":[[1,0,0],[0,1,3.6107892990112305]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_4_child_1 = figma.createRectangle();
root_child_1_child_1_child_4_child_1.name = "Separator";
root_child_1_child_1_child_4_child_1.visible = true;
root_child_1_child_1_child_4_child_1.opacity = 1;
root_child_1_child_1_child_4_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_4_child_1) root_child_1_child_1_child_4_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_4_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.875,"g":0.4059038460254669,"b":0.09114587306976318},"boundVariables":{}}]);
root_child_1_child_1_child_4_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_4_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_4_child_1.strokeAlign = "INSIDE";
root_child_1_child_1_child_4_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_4_child_1) root_child_1_child_1_child_4_child_1.cornerRadius = 0;
root_child_1_child_1_child_4.appendChild(root_child_1_child_1_child_4_child_1);
// Child Layout Props
root_child_1_child_1_child_4_child_1.layoutAlign = "STRETCH";
root_child_1_child_1_child_4_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_4_child_1, {"width":440.516357421875,"height":0.9026973247528076,"relativeTransform":[[1,0,0],[0,1,21.610790252685547]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_4);
// Child Layout Props
root_child_1_child_1_child_4.layoutAlign = "STRETCH";
root_child_1_child_1_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_4, {"width":440.516357421875,"height":26.12427520751953,"relativeTransform":[[1,0,0],[0,1,123.61558532714844]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Table standing row
const root_child_1_child_1_child_5 = figma.createFrame();
root_child_1_child_1_child_5.name = "Table standing row";
root_child_1_child_1_child_5.visible = true;
root_child_1_child_1_child_5.opacity = 1;
root_child_1_child_1_child_5.locked = false;
if ("blendMode" in root_child_1_child_1_child_5) root_child_1_child_1_child_5.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_5) {
    root_child_1_child_1_child_5.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_5.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_5.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_5.itemSpacing = 0;
    root_child_1_child_1_child_5.paddingTop = 0;
    root_child_1_child_1_child_5.paddingRight = 0;
    root_child_1_child_1_child_5.paddingBottom = 0;
    root_child_1_child_1_child_5.paddingLeft = 0;
}
root_child_1_child_1_child_5.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5.strokeAlign = "INSIDE";
root_child_1_child_1_child_5.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5) root_child_1_child_1_child_5.cornerRadius = 0;

// Start Child: Content
const root_child_1_child_1_child_5_child_0 = figma.createFrame();
root_child_1_child_1_child_5_child_0.name = "Content";
root_child_1_child_1_child_5_child_0.visible = true;
root_child_1_child_1_child_5_child_0.opacity = 1;
root_child_1_child_1_child_5_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0) root_child_1_child_1_child_5_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_5_child_0) {
    root_child_1_child_1_child_5_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_5_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_5_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_5_child_0.itemSpacing = 0;
    root_child_1_child_1_child_5_child_0.paddingTop = 0;
    root_child_1_child_1_child_5_child_0.paddingRight = 0;
    root_child_1_child_1_child_5_child_0.paddingBottom = 0;
    root_child_1_child_1_child_5_child_0.paddingLeft = 0;
}
root_child_1_child_1_child_5_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.10000000149011612,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:e4272c5b50925900063c785683e2cc7483ed7dcd/3505:272"}}}]);
root_child_1_child_1_child_5_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_5_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0) root_child_1_child_1_child_5_child_0.cornerRadius = 0;

// Start Child: Country
const root_child_1_child_1_child_5_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_5_child_0_child_0.name = "Country";
root_child_1_child_1_child_5_child_0_child_0.visible = true;
root_child_1_child_1_child_5_child_0_child_0.opacity = 1;
root_child_1_child_1_child_5_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_0) root_child_1_child_1_child_5_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_5_child_0_child_0) {
    root_child_1_child_1_child_5_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_5_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5_child_0_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_5_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_5_child_0_child_0.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_0.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_0.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_0.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_0.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_5_child_0_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_5_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0_child_0) root_child_1_child_1_child_5_child_0_child_0.cornerRadius = 0;

// Start Child: Arrow_up
const root_child_1_child_1_child_5_child_0_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_5_child_0_child_0_child_0.name = "Arrow_up";
root_child_1_child_1_child_5_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_5_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_5_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_0_child_0) root_child_1_child_1_child_5_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_5_child_0_child_0_child_0) {
    root_child_1_child_1_child_5_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_5_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_5_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0_child_0_child_0) root_child_1_child_1_child_5_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: Icon
const root_child_1_child_1_child_5_child_0_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Icon_4748_25377_svg);
const root_child_1_child_1_child_5_child_0_child_0_child_0_child_0 = figma.flatten([root_child_1_child_1_child_5_child_0_child_0_child_0_child_0_svgContainer]);
root_child_1_child_1_child_5_child_0_child_0_child_0_child_0.name = "Icon";
root_child_1_child_1_child_5_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_5_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_5_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_0_child_0_child_0) root_child_1_child_1_child_5_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_5_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09803921729326248,"g":0.7607843279838562,"b":0.003921568859368563},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_0_child_0_child_0.strokeWeight = 1.4443155527114868;
root_child_1_child_1_child_5_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
root_child_1_child_1_child_5_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0_child_0_child_0_child_0) root_child_1_child_1_child_5_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_5_child_0_child_0_child_0.appendChild(root_child_1_child_1_child_5_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_0_child_0_child_0, {"relativeTransform":[[1,-1.193113228304153e-23,3.0104477405548096],[-1.193113228304153e-23,1,3.0126566886901855]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_5_child_0_child_0.appendChild(root_child_1_child_1_child_5_child_0_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_0_child_0, {"width":14.443157196044922,"height":14.443157196044922,"relativeTransform":[[-1,8.742277657347586e-8,21.66476821899414],[-8.742277657347586e-8,-1,27.08087921142578]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: 9
const root_child_1_child_1_child_5_child_0_child_0_child_1 = figma.createText();
root_child_1_child_1_child_5_child_0_child_0_child_1.name = "9";
root_child_1_child_1_child_5_child_0_child_0_child_1.visible = true;
root_child_1_child_1_child_5_child_0_child_0_child_1.opacity = 1;
root_child_1_child_1_child_5_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_0_child_1) root_child_1_child_1_child_5_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_5_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_5_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_5_child_0_child_0_child_1.characters = "9";
root_child_1_child_1_child_5_child_0_child_0_child_1.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_0_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_0_child_1.setRangeFontName(0, 1, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_0_child_1.setRangeFills(0, 1, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_0_child_1.setRangeFontSize(0, 1, 18.053945541381836);
root_child_1_child_1_child_5_child_0_child_0.appendChild(root_child_1_child_1_child_5_child_0_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_0_child_1, {"width":25.27552604675293,"height":23,"relativeTransform":[[1,0,28.886316299438477],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_5_child_0_child_0_child_2 = figma.createFrame();
root_child_1_child_1_child_5_child_0_child_0_child_2.name = "Team";
root_child_1_child_1_child_5_child_0_child_0_child_2.visible = true;
root_child_1_child_1_child_5_child_0_child_0_child_2.opacity = 1;
root_child_1_child_1_child_5_child_0_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_0_child_2) root_child_1_child_1_child_5_child_0_child_0_child_2.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_5_child_0_child_0_child_2) {
    root_child_1_child_1_child_5_child_0_child_0_child_2.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_5_child_0_child_0_child_2.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_5_child_0_child_0_child_2.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_5_child_0_child_0_child_2.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_5_child_0_child_0_child_2.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_5_child_0_child_0_child_2.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_0_child_2.paddingTop = 0;
    root_child_1_child_1_child_5_child_0_child_0_child_2.paddingRight = 0;
    root_child_1_child_1_child_5_child_0_child_0_child_2.paddingBottom = 0;
    root_child_1_child_1_child_5_child_0_child_0_child_2.paddingLeft = 0;
}
root_child_1_child_1_child_5_child_0_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_5_child_0_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0_child_0_child_2) root_child_1_child_1_child_5_child_0_child_0_child_2.cornerRadius = 0;

// Start Child: Liverpool
const root_child_1_child_1_child_5_child_0_child_0_child_2_child_0 = figma.createFrame();
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.name = "Liverpool";
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.visible = true;
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.opacity = 1;
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_0_child_2_child_0) root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_5_child_0_child_0_child_2_child_0) {
    root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0_child_0_child_2_child_0) root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.cornerRadius = 0;

// Start Child: Crest
const root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0 = figma.createRectangle();
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0.name = "Crest";
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0.visible = true;
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0.opacity = 1;
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FIT","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"98a8273fba83eb1654353f76005aea0672414754","assetRef":IMG_img_6_bin}]);
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0.strokeWeight = 0;
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0.strokeAlign = "CENTER";
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.appendChild(root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_0_child_2_child_0_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_5_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_5_child_0_child_0_child_2_child_0);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_0_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_0_child_2_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_5_child_0_child_0_child_2_child_1 = figma.createText();
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.name = "Team";
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.visible = true;
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.opacity = 1;
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_0_child_2_child_1) root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.characters = "Liverpool";
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.fontSize = 18.05394744873047;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.setRangeFontName(0, 9, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.setRangeFills(0, 9, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.setRangeFontSize(0, 9, 18.05394744873047);
root_child_1_child_1_child_5_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_5_child_0_child_0_child_2_child_1);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_0_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_0_child_2_child_1, {"width":69,"height":23,"relativeTransform":[[1,0,36.10789489746094],[0,1,2.943157196044922]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_5_child_0_child_0.appendChild(root_child_1_child_1_child_5_child_0_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_0_child_2, {"width":105.10789489746094,"height":28.886314392089844,"relativeTransform":[[1,0,61.3834228515625],[0,1,5.416181564331055]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_5_child_0.appendChild(root_child_1_child_1_child_5_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_0, {"width":200.39877319335938,"height":39.71867752075195,"relativeTransform":[[1,0,0.00006103515625],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: P
const root_child_1_child_1_child_5_child_0_child_1 = figma.createFrame();
root_child_1_child_1_child_5_child_0_child_1.name = "P";
root_child_1_child_1_child_5_child_0_child_1.visible = true;
root_child_1_child_1_child_5_child_0_child_1.opacity = 1;
root_child_1_child_1_child_5_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_1) root_child_1_child_1_child_5_child_0_child_1.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_5_child_0_child_1) {
    root_child_1_child_1_child_5_child_0_child_1.layoutMode = "VERTICAL";
    root_child_1_child_1_child_5_child_0_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5_child_0_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5_child_0_child_1.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_5_child_0_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_5_child_0_child_1.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_1.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_1.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_1.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_1.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_5_child_0_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_1.strokeAlign = "INSIDE";
root_child_1_child_1_child_5_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0_child_1) root_child_1_child_1_child_5_child_0_child_1.cornerRadius = 0;

// Start Child: 12
const root_child_1_child_1_child_5_child_0_child_1_child_0 = figma.createText();
root_child_1_child_1_child_5_child_0_child_1_child_0.name = "12";
root_child_1_child_1_child_5_child_0_child_1_child_0.visible = true;
root_child_1_child_1_child_5_child_0_child_1_child_0.opacity = 1;
root_child_1_child_1_child_5_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_1_child_0) root_child_1_child_1_child_5_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_5_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_1_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_1_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_5_child_0_child_1_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_5_child_0_child_1_child_0.characters = "12";
root_child_1_child_1_child_5_child_0_child_1_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_1_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_1_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_1_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_1_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_5_child_0_child_1.appendChild(root_child_1_child_1_child_5_child_0_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_1_child_0, {"width":20,"height":23,"relativeTransform":[[1,0,29.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_5_child_0.appendChild(root_child_1_child_1_child_5_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_1, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,200.39889526367188],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_5_child_0_child_2 = figma.createRectangle();
root_child_1_child_1_child_5_child_0_child_2.name = "Separator";
root_child_1_child_1_child_5_child_0_child_2.visible = true;
root_child_1_child_1_child_5_child_0_child_2.opacity = 1;
root_child_1_child_1_child_5_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_2) root_child_1_child_1_child_5_child_0_child_2.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_5_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.3499999940395355,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:f9c1b299d9a184836b78bdd6a7208465fdc47a3c/3505:262"}}}]);
root_child_1_child_1_child_5_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_5_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0_child_2) root_child_1_child_1_child_5_child_0_child_2.cornerRadius = 0;
root_child_1_child_1_child_5_child_0.appendChild(root_child_1_child_1_child_5_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_2, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,279.83624267578125],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Pts
const root_child_1_child_1_child_5_child_0_child_3 = figma.createFrame();
root_child_1_child_1_child_5_child_0_child_3.name = "Pts";
root_child_1_child_1_child_5_child_0_child_3.visible = true;
root_child_1_child_1_child_5_child_0_child_3.opacity = 1;
root_child_1_child_1_child_5_child_0_child_3.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_3) root_child_1_child_1_child_5_child_0_child_3.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_5_child_0_child_3) {
    root_child_1_child_1_child_5_child_0_child_3.layoutMode = "VERTICAL";
    root_child_1_child_1_child_5_child_0_child_3.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5_child_0_child_3.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5_child_0_child_3.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_5_child_0_child_3.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_5_child_0_child_3.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_3.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_3.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_3.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_3.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_5_child_0_child_3.fills = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_3.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_3.strokeAlign = "INSIDE";
root_child_1_child_1_child_5_child_0_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0_child_3) root_child_1_child_1_child_5_child_0_child_3.cornerRadius = 0;

// Start Child: 3
const root_child_1_child_1_child_5_child_0_child_3_child_0 = figma.createText();
root_child_1_child_1_child_5_child_0_child_3_child_0.name = "3";
root_child_1_child_1_child_5_child_0_child_3_child_0.visible = true;
root_child_1_child_1_child_5_child_0_child_3_child_0.opacity = 1;
root_child_1_child_1_child_5_child_0_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_3_child_0) root_child_1_child_1_child_5_child_0_child_3_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_5_child_0_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_3_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_3_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_5_child_0_child_3_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_5_child_0_child_3_child_0.characters = "3";
root_child_1_child_1_child_5_child_0_child_3_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_3_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_3_child_0.setRangeFontName(0, 1, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_3_child_0.setRangeFills(0, 1, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_3_child_0.setRangeFontSize(0, 1, 18.053945541381836);
root_child_1_child_1_child_5_child_0_child_3.appendChild(root_child_1_child_1_child_5_child_0_child_3_child_0);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_3_child_0, {"width":10,"height":23,"relativeTransform":[[1,0,34.71867752075195],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_5_child_0.appendChild(root_child_1_child_1_child_5_child_0_child_3);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_3.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_3, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,280.73895263671875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_5_child_0_child_4 = figma.createRectangle();
root_child_1_child_1_child_5_child_0_child_4.name = "Separator";
root_child_1_child_1_child_5_child_0_child_4.visible = true;
root_child_1_child_1_child_5_child_0_child_4.opacity = 1;
root_child_1_child_1_child_5_child_0_child_4.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_4) root_child_1_child_1_child_5_child_0_child_4.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_5_child_0_child_4.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.3499999940395355,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:f9c1b299d9a184836b78bdd6a7208465fdc47a3c/3505:262"}}}]);
root_child_1_child_1_child_5_child_0_child_4.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_4.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_4.strokeAlign = "INSIDE";
root_child_1_child_1_child_5_child_0_child_4.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0_child_4) root_child_1_child_1_child_5_child_0_child_4.cornerRadius = 0;
root_child_1_child_1_child_5_child_0.appendChild(root_child_1_child_1_child_5_child_0_child_4);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_4.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_4, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,360.1763000488281],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Pts
const root_child_1_child_1_child_5_child_0_child_5 = figma.createFrame();
root_child_1_child_1_child_5_child_0_child_5.name = "Pts";
root_child_1_child_1_child_5_child_0_child_5.visible = true;
root_child_1_child_1_child_5_child_0_child_5.opacity = 1;
root_child_1_child_1_child_5_child_0_child_5.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_5) root_child_1_child_1_child_5_child_0_child_5.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_5_child_0_child_5) {
    root_child_1_child_1_child_5_child_0_child_5.layoutMode = "VERTICAL";
    root_child_1_child_1_child_5_child_0_child_5.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5_child_0_child_5.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_5_child_0_child_5.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_5_child_0_child_5.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_5_child_0_child_5.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_5.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_5.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_5.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_5_child_0_child_5.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_5_child_0_child_5.fills = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_5.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_5.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_5.strokeAlign = "INSIDE";
root_child_1_child_1_child_5_child_0_child_5.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_5_child_0_child_5) root_child_1_child_1_child_5_child_0_child_5.cornerRadius = 0;

// Start Child: 11
const root_child_1_child_1_child_5_child_0_child_5_child_0 = figma.createText();
root_child_1_child_1_child_5_child_0_child_5_child_0.name = "11";
root_child_1_child_1_child_5_child_0_child_5_child_0.visible = true;
root_child_1_child_1_child_5_child_0_child_5_child_0.opacity = 1;
root_child_1_child_1_child_5_child_0_child_5_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_5_child_0_child_5_child_0) root_child_1_child_1_child_5_child_0_child_5_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_5_child_0_child_5_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_5_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_5_child_0_child_5_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_5_child_0_child_5_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_5_child_0_child_5_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_5_child_0_child_5_child_0.characters = "11";
root_child_1_child_1_child_5_child_0_child_5_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_5_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_5_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_5_child_0_child_5_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_5_child_0_child_5_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_5_child_0_child_5.appendChild(root_child_1_child_1_child_5_child_0_child_5_child_0);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_5_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_5_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_5_child_0, {"width":20,"height":23,"relativeTransform":[[1,0,29.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_5_child_0.appendChild(root_child_1_child_1_child_5_child_0_child_5);
// Child Layout Props
root_child_1_child_1_child_5_child_0_child_5.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0_child_5.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5_child_0_child_5, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,361.0790100097656],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_5.appendChild(root_child_1_child_1_child_5_child_0);
// Child Layout Props
root_child_1_child_1_child_5_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_5_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_5_child_0, {"width":440.516357421875,"height":39.71867752075195,"relativeTransform":[[1,0,0],[0,1,4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_5);
// Child Layout Props
root_child_1_child_1_child_5.layoutAlign = "STRETCH";
root_child_1_child_1_child_5.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_5, {"width":440.516357421875,"height":48.74565505981445,"relativeTransform":[[1,0,0],[0,1,149.7398681640625]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Table standing row
const root_child_1_child_1_child_6 = figma.createFrame();
root_child_1_child_1_child_6.name = "Table standing row";
root_child_1_child_1_child_6.visible = true;
root_child_1_child_1_child_6.opacity = 1;
root_child_1_child_1_child_6.locked = false;
if ("blendMode" in root_child_1_child_1_child_6) root_child_1_child_1_child_6.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_6) {
    root_child_1_child_1_child_6.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_6.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_6.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_6.itemSpacing = 0;
    root_child_1_child_1_child_6.paddingTop = 0;
    root_child_1_child_1_child_6.paddingRight = 0;
    root_child_1_child_1_child_6.paddingBottom = 0;
    root_child_1_child_1_child_6.paddingLeft = 0;
}
root_child_1_child_1_child_6.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6.strokeAlign = "INSIDE";
root_child_1_child_1_child_6.effects = [{"type":"LAYER_BLUR","visible":true,"radius":11.373985290527344,"boundVariables":{},"blurType":"NORMAL"}];
if ("cornerRadius" in root_child_1_child_1_child_6) root_child_1_child_1_child_6.cornerRadius = 0;

// Start Child: Content
const root_child_1_child_1_child_6_child_0 = figma.createFrame();
root_child_1_child_1_child_6_child_0.name = "Content";
root_child_1_child_1_child_6_child_0.visible = true;
root_child_1_child_1_child_6_child_0.opacity = 1;
root_child_1_child_1_child_6_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0) root_child_1_child_1_child_6_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_6_child_0) {
    root_child_1_child_1_child_6_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_6_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_6_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_6_child_0.itemSpacing = 0;
    root_child_1_child_1_child_6_child_0.paddingTop = 0;
    root_child_1_child_1_child_6_child_0.paddingRight = 0;
    root_child_1_child_1_child_6_child_0.paddingBottom = 0;
    root_child_1_child_1_child_6_child_0.paddingLeft = 0;
}
root_child_1_child_1_child_6_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.10000000149011612,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:e4272c5b50925900063c785683e2cc7483ed7dcd/3505:272"}}}]);
root_child_1_child_1_child_6_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_6_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0) root_child_1_child_1_child_6_child_0.cornerRadius = 0;

// Start Child: Country
const root_child_1_child_1_child_6_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_6_child_0_child_0.name = "Country";
root_child_1_child_1_child_6_child_0_child_0.visible = true;
root_child_1_child_1_child_6_child_0_child_0.opacity = 1;
root_child_1_child_1_child_6_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_0) root_child_1_child_1_child_6_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_6_child_0_child_0) {
    root_child_1_child_1_child_6_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_6_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6_child_0_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_6_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_6_child_0_child_0.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_0.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_0.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_0.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_0.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_6_child_0_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_6_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0_child_0) root_child_1_child_1_child_6_child_0_child_0.cornerRadius = 0;

// Start Child: Arrow_down
const root_child_1_child_1_child_6_child_0_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_6_child_0_child_0_child_0.name = "Arrow_down";
root_child_1_child_1_child_6_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_6_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_6_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_0_child_0) root_child_1_child_1_child_6_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_6_child_0_child_0_child_0) {
    root_child_1_child_1_child_6_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_6_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_6_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0_child_0_child_0) root_child_1_child_1_child_6_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: Icon
const root_child_1_child_1_child_6_child_0_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Icon_4748_25392_svg);
const root_child_1_child_1_child_6_child_0_child_0_child_0_child_0 = figma.flatten([root_child_1_child_1_child_6_child_0_child_0_child_0_child_0_svgContainer]);
root_child_1_child_1_child_6_child_0_child_0_child_0_child_0.name = "Icon";
root_child_1_child_1_child_6_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_6_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_6_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_0_child_0_child_0) root_child_1_child_1_child_6_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_6_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.23137255012989044,"b":0.23137255012989044},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_0_child_0_child_0.strokeWeight = 1.4443155527114868;
root_child_1_child_1_child_6_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
root_child_1_child_1_child_6_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0_child_0_child_0_child_0) root_child_1_child_1_child_6_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_6_child_0_child_0_child_0.appendChild(root_child_1_child_1_child_6_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_0_child_0_child_0, {"relativeTransform":[[1,0,3.0112881660461426],[0,1,3.002150297164917]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_6_child_0_child_0.appendChild(root_child_1_child_1_child_6_child_0_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_0_child_0, {"width":14.443157196044922,"height":14.443157196044922,"relativeTransform":[[1,0,7.221578598022461],[0,1,12.637760162353516]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: 10
const root_child_1_child_1_child_6_child_0_child_0_child_1 = figma.createText();
root_child_1_child_1_child_6_child_0_child_0_child_1.name = "10";
root_child_1_child_1_child_6_child_0_child_0_child_1.visible = true;
root_child_1_child_1_child_6_child_0_child_0_child_1.opacity = 1;
root_child_1_child_1_child_6_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_0_child_1) root_child_1_child_1_child_6_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_6_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_6_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_6_child_0_child_0_child_1.characters = "10";
root_child_1_child_1_child_6_child_0_child_0_child_1.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_0_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_0_child_1.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_0_child_1.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_0_child_1.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_6_child_0_child_0.appendChild(root_child_1_child_1_child_6_child_0_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_0_child_1, {"width":25.27552604675293,"height":23,"relativeTransform":[[1,0,28.886314392089844],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_6_child_0_child_0_child_2 = figma.createFrame();
root_child_1_child_1_child_6_child_0_child_0_child_2.name = "Team";
root_child_1_child_1_child_6_child_0_child_0_child_2.visible = true;
root_child_1_child_1_child_6_child_0_child_0_child_2.opacity = 1;
root_child_1_child_1_child_6_child_0_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_0_child_2) root_child_1_child_1_child_6_child_0_child_0_child_2.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_6_child_0_child_0_child_2) {
    root_child_1_child_1_child_6_child_0_child_0_child_2.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_6_child_0_child_0_child_2.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_6_child_0_child_0_child_2.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_6_child_0_child_0_child_2.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_6_child_0_child_0_child_2.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_6_child_0_child_0_child_2.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_0_child_2.paddingTop = 0;
    root_child_1_child_1_child_6_child_0_child_0_child_2.paddingRight = 0;
    root_child_1_child_1_child_6_child_0_child_0_child_2.paddingBottom = 0;
    root_child_1_child_1_child_6_child_0_child_0_child_2.paddingLeft = 0;
}
root_child_1_child_1_child_6_child_0_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_6_child_0_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0_child_0_child_2) root_child_1_child_1_child_6_child_0_child_0_child_2.cornerRadius = 0;

// Start Child: Dortmund
const root_child_1_child_1_child_6_child_0_child_0_child_2_child_0 = figma.createFrame();
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.name = "Dortmund";
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.visible = true;
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.opacity = 1;
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_0_child_2_child_0) root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_6_child_0_child_0_child_2_child_0) {
    root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0_child_0_child_2_child_0) root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.cornerRadius = 0;

// Start Child: Crest
const root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0 = figma.createRectangle();
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0.name = "Crest";
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0.visible = true;
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0.opacity = 1;
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FIT","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"55b26c1ade538db6ecfaa8a42b0c9d7c3fd76ca0","assetRef":IMG_img_7_bin}]);
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.appendChild(root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_0_child_2_child_0_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_6_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_6_child_0_child_0_child_2_child_0);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_0_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_0_child_2_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_6_child_0_child_0_child_2_child_1 = figma.createText();
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.name = "Team";
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.visible = true;
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.opacity = 1;
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_0_child_2_child_1) root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.characters = "B. Dortmund";
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.fontSize = 18.05394744873047;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.setRangeFontName(0, 11, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.setRangeFills(0, 11, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.setRangeFontSize(0, 11, 18.05394744873047);
root_child_1_child_1_child_6_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_6_child_0_child_0_child_2_child_1);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_0_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_0_child_2_child_1, {"width":96,"height":23,"relativeTransform":[[1,0,36.10789489746094],[0,1,2.943157196044922]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_6_child_0_child_0.appendChild(root_child_1_child_1_child_6_child_0_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_0_child_2, {"width":132.10789489746094,"height":28.886314392089844,"relativeTransform":[[1,0,61.383419036865234],[0,1,5.416181564331055]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_6_child_0.appendChild(root_child_1_child_1_child_6_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_0, {"width":200.39877319335938,"height":39.71867752075195,"relativeTransform":[[1,0,0.00006103515625],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: P
const root_child_1_child_1_child_6_child_0_child_1 = figma.createFrame();
root_child_1_child_1_child_6_child_0_child_1.name = "P";
root_child_1_child_1_child_6_child_0_child_1.visible = true;
root_child_1_child_1_child_6_child_0_child_1.opacity = 1;
root_child_1_child_1_child_6_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_1) root_child_1_child_1_child_6_child_0_child_1.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_6_child_0_child_1) {
    root_child_1_child_1_child_6_child_0_child_1.layoutMode = "VERTICAL";
    root_child_1_child_1_child_6_child_0_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6_child_0_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6_child_0_child_1.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_6_child_0_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_6_child_0_child_1.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_1.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_1.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_1.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_1.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_6_child_0_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_1.strokeAlign = "INSIDE";
root_child_1_child_1_child_6_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0_child_1) root_child_1_child_1_child_6_child_0_child_1.cornerRadius = 0;

// Start Child: 11
const root_child_1_child_1_child_6_child_0_child_1_child_0 = figma.createText();
root_child_1_child_1_child_6_child_0_child_1_child_0.name = "11";
root_child_1_child_1_child_6_child_0_child_1_child_0.visible = true;
root_child_1_child_1_child_6_child_0_child_1_child_0.opacity = 1;
root_child_1_child_1_child_6_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_1_child_0) root_child_1_child_1_child_6_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_6_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_1_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_1_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_6_child_0_child_1_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_6_child_0_child_1_child_0.characters = "11";
root_child_1_child_1_child_6_child_0_child_1_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_1_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_1_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_1_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_1_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_6_child_0_child_1.appendChild(root_child_1_child_1_child_6_child_0_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_1_child_0, {"width":20,"height":23,"relativeTransform":[[1,0,29.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_6_child_0.appendChild(root_child_1_child_1_child_6_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_1, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,200.39889526367188],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_6_child_0_child_2 = figma.createRectangle();
root_child_1_child_1_child_6_child_0_child_2.name = "Separator";
root_child_1_child_1_child_6_child_0_child_2.visible = true;
root_child_1_child_1_child_6_child_0_child_2.opacity = 1;
root_child_1_child_1_child_6_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_2) root_child_1_child_1_child_6_child_0_child_2.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_6_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_6_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0_child_2) root_child_1_child_1_child_6_child_0_child_2.cornerRadius = 0;
root_child_1_child_1_child_6_child_0.appendChild(root_child_1_child_1_child_6_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_2, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,279.83624267578125],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Pts
const root_child_1_child_1_child_6_child_0_child_3 = figma.createFrame();
root_child_1_child_1_child_6_child_0_child_3.name = "Pts";
root_child_1_child_1_child_6_child_0_child_3.visible = true;
root_child_1_child_1_child_6_child_0_child_3.opacity = 1;
root_child_1_child_1_child_6_child_0_child_3.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_3) root_child_1_child_1_child_6_child_0_child_3.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_6_child_0_child_3) {
    root_child_1_child_1_child_6_child_0_child_3.layoutMode = "VERTICAL";
    root_child_1_child_1_child_6_child_0_child_3.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6_child_0_child_3.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6_child_0_child_3.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_6_child_0_child_3.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_6_child_0_child_3.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_3.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_3.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_3.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_3.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_6_child_0_child_3.fills = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_3.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_3.strokeAlign = "INSIDE";
root_child_1_child_1_child_6_child_0_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0_child_3) root_child_1_child_1_child_6_child_0_child_3.cornerRadius = 0;

// Start Child: 6
const root_child_1_child_1_child_6_child_0_child_3_child_0 = figma.createText();
root_child_1_child_1_child_6_child_0_child_3_child_0.name = "6";
root_child_1_child_1_child_6_child_0_child_3_child_0.visible = true;
root_child_1_child_1_child_6_child_0_child_3_child_0.opacity = 1;
root_child_1_child_1_child_6_child_0_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_3_child_0) root_child_1_child_1_child_6_child_0_child_3_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_6_child_0_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_3_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_3_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_6_child_0_child_3_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_6_child_0_child_3_child_0.characters = "6";
root_child_1_child_1_child_6_child_0_child_3_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_3_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_3_child_0.setRangeFontName(0, 1, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_3_child_0.setRangeFills(0, 1, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_3_child_0.setRangeFontSize(0, 1, 18.053945541381836);
root_child_1_child_1_child_6_child_0_child_3.appendChild(root_child_1_child_1_child_6_child_0_child_3_child_0);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_3_child_0, {"width":10,"height":23,"relativeTransform":[[1,0,34.71867752075195],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_6_child_0.appendChild(root_child_1_child_1_child_6_child_0_child_3);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_3.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_3, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,280.73895263671875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_6_child_0_child_4 = figma.createRectangle();
root_child_1_child_1_child_6_child_0_child_4.name = "Separator";
root_child_1_child_1_child_6_child_0_child_4.visible = true;
root_child_1_child_1_child_6_child_0_child_4.opacity = 1;
root_child_1_child_1_child_6_child_0_child_4.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_4) root_child_1_child_1_child_6_child_0_child_4.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_6_child_0_child_4.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_4.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_4.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_4.strokeAlign = "INSIDE";
root_child_1_child_1_child_6_child_0_child_4.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0_child_4) root_child_1_child_1_child_6_child_0_child_4.cornerRadius = 0;
root_child_1_child_1_child_6_child_0.appendChild(root_child_1_child_1_child_6_child_0_child_4);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_4.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_4, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,360.1763000488281],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Pts
const root_child_1_child_1_child_6_child_0_child_5 = figma.createFrame();
root_child_1_child_1_child_6_child_0_child_5.name = "Pts";
root_child_1_child_1_child_6_child_0_child_5.visible = true;
root_child_1_child_1_child_6_child_0_child_5.opacity = 1;
root_child_1_child_1_child_6_child_0_child_5.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_5) root_child_1_child_1_child_6_child_0_child_5.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_6_child_0_child_5) {
    root_child_1_child_1_child_6_child_0_child_5.layoutMode = "VERTICAL";
    root_child_1_child_1_child_6_child_0_child_5.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6_child_0_child_5.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_6_child_0_child_5.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_6_child_0_child_5.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_6_child_0_child_5.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_5.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_5.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_5.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_6_child_0_child_5.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_6_child_0_child_5.fills = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_5.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_5.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_5.strokeAlign = "INSIDE";
root_child_1_child_1_child_6_child_0_child_5.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_6_child_0_child_5) root_child_1_child_1_child_6_child_0_child_5.cornerRadius = 0;

// Start Child: 19
const root_child_1_child_1_child_6_child_0_child_5_child_0 = figma.createText();
root_child_1_child_1_child_6_child_0_child_5_child_0.name = "19";
root_child_1_child_1_child_6_child_0_child_5_child_0.visible = true;
root_child_1_child_1_child_6_child_0_child_5_child_0.opacity = 1;
root_child_1_child_1_child_6_child_0_child_5_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_6_child_0_child_5_child_0) root_child_1_child_1_child_6_child_0_child_5_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_6_child_0_child_5_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_5_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_6_child_0_child_5_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_6_child_0_child_5_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_6_child_0_child_5_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_6_child_0_child_5_child_0.characters = "19";
root_child_1_child_1_child_6_child_0_child_5_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_5_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_5_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_6_child_0_child_5_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_6_child_0_child_5_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_6_child_0_child_5.appendChild(root_child_1_child_1_child_6_child_0_child_5_child_0);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_5_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_5_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_5_child_0, {"width":20,"height":23,"relativeTransform":[[1,0,29.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_6_child_0.appendChild(root_child_1_child_1_child_6_child_0_child_5);
// Child Layout Props
root_child_1_child_1_child_6_child_0_child_5.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0_child_5.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6_child_0_child_5, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,361.0790100097656],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_6.appendChild(root_child_1_child_1_child_6_child_0);
// Child Layout Props
root_child_1_child_1_child_6_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_6_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_6_child_0, {"width":440.516357421875,"height":39.71867752075195,"relativeTransform":[[1,0,0],[0,1,4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_6);
// Child Layout Props
root_child_1_child_1_child_6.layoutAlign = "STRETCH";
root_child_1_child_1_child_6.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_6, {"width":440.516357421875,"height":48.74565505981445,"relativeTransform":[[1,0,0],[0,1,198.4855194091797]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 2609331
const root_child_1_child_1_child_7 = figma.createFrame();
root_child_1_child_1_child_7.name = "Frame 2609331";
root_child_1_child_1_child_7.visible = true;
root_child_1_child_1_child_7.opacity = 1;
root_child_1_child_1_child_7.locked = false;
if ("blendMode" in root_child_1_child_1_child_7) root_child_1_child_1_child_7.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_7) {
    root_child_1_child_1_child_7.layoutMode = "VERTICAL";
    root_child_1_child_1_child_7.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_7.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_7.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_7.counterAxisAlignItems = "MIN";
    root_child_1_child_1_child_7.itemSpacing = 0;
    root_child_1_child_1_child_7.paddingTop = 3.6107892990112305;
    root_child_1_child_1_child_7.paddingRight = 0;
    root_child_1_child_1_child_7.paddingBottom = 3.6107892990112305;
    root_child_1_child_1_child_7.paddingLeft = 0;
}
root_child_1_child_1_child_7.fills = await this.hydratePaints([]);
root_child_1_child_1_child_7.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_7.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_7.strokeAlign = "INSIDE";
root_child_1_child_1_child_7.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_7) root_child_1_child_1_child_7.cornerRadius = 0;

// Start Child: Team
const root_child_1_child_1_child_7_child_0 = figma.createText();
root_child_1_child_1_child_7_child_0.name = "Team";
root_child_1_child_1_child_7_child_0.visible = true;
root_child_1_child_1_child_7_child_0.opacity = 1;
root_child_1_child_1_child_7_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_7_child_0) root_child_1_child_1_child_7_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_7_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9172526001930237,"g":0.40547820925712585,"b":0.4649868607521057},"boundVariables":{}}]);
root_child_1_child_1_child_7_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_7_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_7_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_7_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_7_child_0.characters = "Eliminated";
root_child_1_child_1_child_7_child_0.fontSize = 13.676337242126465;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_7_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_7_child_0.setRangeFontName(0, 10, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_7_child_0.setRangeFills(0, 10, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9172526001930237,"g":0.40547820925712585,"b":0.4649868607521057},"boundVariables":{}}]);
root_child_1_child_1_child_7_child_0.setRangeFontSize(0, 10, 13.676337242126465);
root_child_1_child_1_child_7.appendChild(root_child_1_child_1_child_7_child_0);
// Child Layout Props
root_child_1_child_1_child_7_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_7_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_7_child_0, {"width":61,"height":18,"relativeTransform":[[1,0,0],[0,1,3.6107892990112305]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_7_child_1 = figma.createRectangle();
root_child_1_child_1_child_7_child_1.name = "Separator";
root_child_1_child_1_child_7_child_1.visible = true;
root_child_1_child_1_child_7_child_1.opacity = 1;
root_child_1_child_1_child_7_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_7_child_1) root_child_1_child_1_child_7_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_7_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9231119751930237,"g":0.24563732743263245,"b":0.32576873898506165},"boundVariables":{}}]);
root_child_1_child_1_child_7_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_7_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_7_child_1.strokeAlign = "INSIDE";
root_child_1_child_1_child_7_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_7_child_1) root_child_1_child_1_child_7_child_1.cornerRadius = 0;
root_child_1_child_1_child_7.appendChild(root_child_1_child_1_child_7_child_1);
// Child Layout Props
root_child_1_child_1_child_7_child_1.layoutAlign = "STRETCH";
root_child_1_child_1_child_7_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_7_child_1, {"width":440.516357421875,"height":0.9026973247528076,"relativeTransform":[[1,0,0],[0,1,21.610790252685547]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_7);
// Child Layout Props
root_child_1_child_1_child_7.layoutAlign = "STRETCH";
root_child_1_child_1_child_7.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_7, {"width":440.516357421875,"height":26.12427520751953,"relativeTransform":[[1,0,0],[0,1,247.23117065429688]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Table standing row
const root_child_1_child_1_child_8 = figma.createFrame();
root_child_1_child_1_child_8.name = "Table standing row";
root_child_1_child_1_child_8.visible = true;
root_child_1_child_1_child_8.opacity = 1;
root_child_1_child_1_child_8.locked = false;
if ("blendMode" in root_child_1_child_1_child_8) root_child_1_child_1_child_8.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_8) {
    root_child_1_child_1_child_8.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_8.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_8.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_8.itemSpacing = 0;
    root_child_1_child_1_child_8.paddingTop = 0;
    root_child_1_child_1_child_8.paddingRight = 0;
    root_child_1_child_1_child_8.paddingBottom = 0;
    root_child_1_child_1_child_8.paddingLeft = 0;
}
root_child_1_child_1_child_8.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8.strokeAlign = "INSIDE";
root_child_1_child_1_child_8.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8) root_child_1_child_1_child_8.cornerRadius = 0;

// Start Child: Content
const root_child_1_child_1_child_8_child_0 = figma.createFrame();
root_child_1_child_1_child_8_child_0.name = "Content";
root_child_1_child_1_child_8_child_0.visible = true;
root_child_1_child_1_child_8_child_0.opacity = 1;
root_child_1_child_1_child_8_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0) root_child_1_child_1_child_8_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_8_child_0) {
    root_child_1_child_1_child_8_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_8_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_8_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_8_child_0.itemSpacing = 0;
    root_child_1_child_1_child_8_child_0.paddingTop = 0;
    root_child_1_child_1_child_8_child_0.paddingRight = 0;
    root_child_1_child_1_child_8_child_0.paddingBottom = 0;
    root_child_1_child_1_child_8_child_0.paddingLeft = 0;
}
root_child_1_child_1_child_8_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.10000000149011612,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:e4272c5b50925900063c785683e2cc7483ed7dcd/3505:272"}}}]);
root_child_1_child_1_child_8_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_8_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0) root_child_1_child_1_child_8_child_0.cornerRadius = 0;

// Start Child: Country
const root_child_1_child_1_child_8_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_8_child_0_child_0.name = "Country";
root_child_1_child_1_child_8_child_0_child_0.visible = true;
root_child_1_child_1_child_8_child_0_child_0.opacity = 1;
root_child_1_child_1_child_8_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_0) root_child_1_child_1_child_8_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_8_child_0_child_0) {
    root_child_1_child_1_child_8_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_8_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8_child_0_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_8_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_8_child_0_child_0.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_0.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_0.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_0.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_0.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_8_child_0_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_8_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0_child_0) root_child_1_child_1_child_8_child_0_child_0.cornerRadius = 0;

// Start Child: Arrow_down
const root_child_1_child_1_child_8_child_0_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_8_child_0_child_0_child_0.name = "Arrow_down";
root_child_1_child_1_child_8_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_8_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_8_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_0_child_0) root_child_1_child_1_child_8_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_8_child_0_child_0_child_0) {
    root_child_1_child_1_child_8_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_8_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_8_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0_child_0_child_0) root_child_1_child_1_child_8_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: Icon
const root_child_1_child_1_child_8_child_0_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Icon_4748_25410_svg);
const root_child_1_child_1_child_8_child_0_child_0_child_0_child_0 = figma.flatten([root_child_1_child_1_child_8_child_0_child_0_child_0_child_0_svgContainer]);
root_child_1_child_1_child_8_child_0_child_0_child_0_child_0.name = "Icon";
root_child_1_child_1_child_8_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_8_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_8_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_0_child_0_child_0) root_child_1_child_1_child_8_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_8_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.23137255012989044,"b":0.23137255012989044},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_0_child_0_child_0.strokeWeight = 1.4443155527114868;
root_child_1_child_1_child_8_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
root_child_1_child_1_child_8_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0_child_0_child_0_child_0) root_child_1_child_1_child_8_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_8_child_0_child_0_child_0.appendChild(root_child_1_child_1_child_8_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_0_child_0_child_0, {"relativeTransform":[[1,0,3.0112881660461426],[0,1,3.0052764415740967]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_8_child_0_child_0.appendChild(root_child_1_child_1_child_8_child_0_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_0_child_0, {"width":14.443157196044922,"height":14.443157196044922,"relativeTransform":[[1,0,7.221578598022461],[0,1,12.637760162353516]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: 25
const root_child_1_child_1_child_8_child_0_child_0_child_1 = figma.createText();
root_child_1_child_1_child_8_child_0_child_0_child_1.name = "25";
root_child_1_child_1_child_8_child_0_child_0_child_1.visible = true;
root_child_1_child_1_child_8_child_0_child_0_child_1.opacity = 1;
root_child_1_child_1_child_8_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_0_child_1) root_child_1_child_1_child_8_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_8_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_8_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_8_child_0_child_0_child_1.characters = "25";
root_child_1_child_1_child_8_child_0_child_0_child_1.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_0_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_0_child_1.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_0_child_1.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_0_child_1.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_8_child_0_child_0.appendChild(root_child_1_child_1_child_8_child_0_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_0_child_1, {"width":25.27552604675293,"height":23,"relativeTransform":[[1,0,28.886314392089844],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_8_child_0_child_0_child_2 = figma.createFrame();
root_child_1_child_1_child_8_child_0_child_0_child_2.name = "Team";
root_child_1_child_1_child_8_child_0_child_0_child_2.visible = true;
root_child_1_child_1_child_8_child_0_child_0_child_2.opacity = 1;
root_child_1_child_1_child_8_child_0_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_0_child_2) root_child_1_child_1_child_8_child_0_child_0_child_2.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_8_child_0_child_0_child_2) {
    root_child_1_child_1_child_8_child_0_child_0_child_2.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_8_child_0_child_0_child_2.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_8_child_0_child_0_child_2.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_8_child_0_child_0_child_2.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_8_child_0_child_0_child_2.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_8_child_0_child_0_child_2.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_0_child_2.paddingTop = 0;
    root_child_1_child_1_child_8_child_0_child_0_child_2.paddingRight = 0;
    root_child_1_child_1_child_8_child_0_child_0_child_2.paddingBottom = 0;
    root_child_1_child_1_child_8_child_0_child_0_child_2.paddingLeft = 0;
}
root_child_1_child_1_child_8_child_0_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_8_child_0_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0_child_0_child_2) root_child_1_child_1_child_8_child_0_child_0_child_2.cornerRadius = 0;

// Start Child: Benfica
const root_child_1_child_1_child_8_child_0_child_0_child_2_child_0 = figma.createFrame();
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.name = "Benfica";
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.visible = true;
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.opacity = 1;
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_0_child_2_child_0) root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_8_child_0_child_0_child_2_child_0) {
    root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0_child_0_child_2_child_0) root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.cornerRadius = 0;

// Start Child: Crest
const root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0 = figma.createRectangle();
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0.name = "Crest";
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0.visible = true;
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0.opacity = 1;
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"9a14a664f522cbccc0266f5d1f5a158baae68bb1","assetRef":IMG_img_8_bin}]);
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.appendChild(root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_0_child_2_child_0_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_8_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_8_child_0_child_0_child_2_child_0);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_0_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_0_child_2_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_8_child_0_child_0_child_2_child_1 = figma.createText();
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.name = "Team";
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.visible = true;
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.opacity = 1;
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_0_child_2_child_1) root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.characters = "Benfica";
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.fontSize = 18.05394744873047;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.setRangeFontName(0, 7, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.setRangeFills(0, 7, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.setRangeFontSize(0, 7, 18.05394744873047);
root_child_1_child_1_child_8_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_8_child_0_child_0_child_2_child_1);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_0_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_0_child_2_child_1, {"width":57,"height":23,"relativeTransform":[[1,0,36.10789489746094],[0,1,2.943157196044922]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_8_child_0_child_0.appendChild(root_child_1_child_1_child_8_child_0_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_0_child_2, {"width":93.10790252685547,"height":28.886314392089844,"relativeTransform":[[1,0,61.383419036865234],[0,1,5.416181564331055]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_8_child_0.appendChild(root_child_1_child_1_child_8_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_0, {"width":200.39877319335938,"height":39.71867752075195,"relativeTransform":[[1,0,0.00006103515625],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: P
const root_child_1_child_1_child_8_child_0_child_1 = figma.createFrame();
root_child_1_child_1_child_8_child_0_child_1.name = "P";
root_child_1_child_1_child_8_child_0_child_1.visible = true;
root_child_1_child_1_child_8_child_0_child_1.opacity = 1;
root_child_1_child_1_child_8_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_1) root_child_1_child_1_child_8_child_0_child_1.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_8_child_0_child_1) {
    root_child_1_child_1_child_8_child_0_child_1.layoutMode = "VERTICAL";
    root_child_1_child_1_child_8_child_0_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8_child_0_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8_child_0_child_1.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_8_child_0_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_8_child_0_child_1.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_1.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_1.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_1.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_1.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_8_child_0_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_1.strokeAlign = "INSIDE";
root_child_1_child_1_child_8_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0_child_1) root_child_1_child_1_child_8_child_0_child_1.cornerRadius = 0;

// Start Child: 6
const root_child_1_child_1_child_8_child_0_child_1_child_0 = figma.createText();
root_child_1_child_1_child_8_child_0_child_1_child_0.name = "6";
root_child_1_child_1_child_8_child_0_child_1_child_0.visible = true;
root_child_1_child_1_child_8_child_0_child_1_child_0.opacity = 1;
root_child_1_child_1_child_8_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_1_child_0) root_child_1_child_1_child_8_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_8_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_1_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_1_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_8_child_0_child_1_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_8_child_0_child_1_child_0.characters = "6";
root_child_1_child_1_child_8_child_0_child_1_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_1_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_1_child_0.setRangeFontName(0, 1, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_1_child_0.setRangeFills(0, 1, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_1_child_0.setRangeFontSize(0, 1, 18.053945541381836);
root_child_1_child_1_child_8_child_0_child_1.appendChild(root_child_1_child_1_child_8_child_0_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_1_child_0, {"width":10,"height":23,"relativeTransform":[[1,0,34.71867752075195],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_8_child_0.appendChild(root_child_1_child_1_child_8_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_1, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,200.39889526367188],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_8_child_0_child_2 = figma.createRectangle();
root_child_1_child_1_child_8_child_0_child_2.name = "Separator";
root_child_1_child_1_child_8_child_0_child_2.visible = true;
root_child_1_child_1_child_8_child_0_child_2.opacity = 1;
root_child_1_child_1_child_8_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_2) root_child_1_child_1_child_8_child_0_child_2.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_8_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.3499999940395355,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:f9c1b299d9a184836b78bdd6a7208465fdc47a3c/3505:262"}}}]);
root_child_1_child_1_child_8_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_8_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0_child_2) root_child_1_child_1_child_8_child_0_child_2.cornerRadius = 0;
root_child_1_child_1_child_8_child_0.appendChild(root_child_1_child_1_child_8_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_2, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,279.83624267578125],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Pts
const root_child_1_child_1_child_8_child_0_child_3 = figma.createFrame();
root_child_1_child_1_child_8_child_0_child_3.name = "Pts";
root_child_1_child_1_child_8_child_0_child_3.visible = true;
root_child_1_child_1_child_8_child_0_child_3.opacity = 1;
root_child_1_child_1_child_8_child_0_child_3.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_3) root_child_1_child_1_child_8_child_0_child_3.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_8_child_0_child_3) {
    root_child_1_child_1_child_8_child_0_child_3.layoutMode = "VERTICAL";
    root_child_1_child_1_child_8_child_0_child_3.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8_child_0_child_3.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8_child_0_child_3.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_8_child_0_child_3.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_8_child_0_child_3.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_3.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_3.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_3.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_3.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_8_child_0_child_3.fills = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_3.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_3.strokeAlign = "INSIDE";
root_child_1_child_1_child_8_child_0_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0_child_3) root_child_1_child_1_child_8_child_0_child_3.cornerRadius = 0;

// Start Child: -2
const root_child_1_child_1_child_8_child_0_child_3_child_0 = figma.createText();
root_child_1_child_1_child_8_child_0_child_3_child_0.name = "-2";
root_child_1_child_1_child_8_child_0_child_3_child_0.visible = true;
root_child_1_child_1_child_8_child_0_child_3_child_0.opacity = 1;
root_child_1_child_1_child_8_child_0_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_3_child_0) root_child_1_child_1_child_8_child_0_child_3_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_8_child_0_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_3_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_3_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_8_child_0_child_3_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_8_child_0_child_3_child_0.characters = "-2";
root_child_1_child_1_child_8_child_0_child_3_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_3_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_3_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_3_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_3_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_8_child_0_child_3.appendChild(root_child_1_child_1_child_8_child_0_child_3_child_0);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_3_child_0, {"width":16,"height":23,"relativeTransform":[[1,0,31.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_8_child_0.appendChild(root_child_1_child_1_child_8_child_0_child_3);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_3.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_3, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,280.73895263671875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_8_child_0_child_4 = figma.createRectangle();
root_child_1_child_1_child_8_child_0_child_4.name = "Separator";
root_child_1_child_1_child_8_child_0_child_4.visible = true;
root_child_1_child_1_child_8_child_0_child_4.opacity = 1;
root_child_1_child_1_child_8_child_0_child_4.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_4) root_child_1_child_1_child_8_child_0_child_4.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_8_child_0_child_4.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.3499999940395355,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:f9c1b299d9a184836b78bdd6a7208465fdc47a3c/3505:262"}}}]);
root_child_1_child_1_child_8_child_0_child_4.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_4.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_4.strokeAlign = "INSIDE";
root_child_1_child_1_child_8_child_0_child_4.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0_child_4) root_child_1_child_1_child_8_child_0_child_4.cornerRadius = 0;
root_child_1_child_1_child_8_child_0.appendChild(root_child_1_child_1_child_8_child_0_child_4);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_4.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_4, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,360.1763000488281],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Pts
const root_child_1_child_1_child_8_child_0_child_5 = figma.createFrame();
root_child_1_child_1_child_8_child_0_child_5.name = "Pts";
root_child_1_child_1_child_8_child_0_child_5.visible = true;
root_child_1_child_1_child_8_child_0_child_5.opacity = 1;
root_child_1_child_1_child_8_child_0_child_5.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_5) root_child_1_child_1_child_8_child_0_child_5.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_8_child_0_child_5) {
    root_child_1_child_1_child_8_child_0_child_5.layoutMode = "VERTICAL";
    root_child_1_child_1_child_8_child_0_child_5.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8_child_0_child_5.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_8_child_0_child_5.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_8_child_0_child_5.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_8_child_0_child_5.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_5.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_5.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_5.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_8_child_0_child_5.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_8_child_0_child_5.fills = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_5.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_5.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_5.strokeAlign = "INSIDE";
root_child_1_child_1_child_8_child_0_child_5.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_8_child_0_child_5) root_child_1_child_1_child_8_child_0_child_5.cornerRadius = 0;

// Start Child: 6
const root_child_1_child_1_child_8_child_0_child_5_child_0 = figma.createText();
root_child_1_child_1_child_8_child_0_child_5_child_0.name = "6";
root_child_1_child_1_child_8_child_0_child_5_child_0.visible = true;
root_child_1_child_1_child_8_child_0_child_5_child_0.opacity = 1;
root_child_1_child_1_child_8_child_0_child_5_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_8_child_0_child_5_child_0) root_child_1_child_1_child_8_child_0_child_5_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_8_child_0_child_5_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_5_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_8_child_0_child_5_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_8_child_0_child_5_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_8_child_0_child_5_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_8_child_0_child_5_child_0.characters = "6";
root_child_1_child_1_child_8_child_0_child_5_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_5_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_5_child_0.setRangeFontName(0, 1, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_8_child_0_child_5_child_0.setRangeFills(0, 1, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_8_child_0_child_5_child_0.setRangeFontSize(0, 1, 18.053945541381836);
root_child_1_child_1_child_8_child_0_child_5.appendChild(root_child_1_child_1_child_8_child_0_child_5_child_0);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_5_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_5_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_5_child_0, {"width":10,"height":23,"relativeTransform":[[1,0,34.71867752075195],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_8_child_0.appendChild(root_child_1_child_1_child_8_child_0_child_5);
// Child Layout Props
root_child_1_child_1_child_8_child_0_child_5.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0_child_5.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8_child_0_child_5, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,361.0790100097656],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_8.appendChild(root_child_1_child_1_child_8_child_0);
// Child Layout Props
root_child_1_child_1_child_8_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_8_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_8_child_0, {"width":440.516357421875,"height":39.71867752075195,"relativeTransform":[[1,0,0],[0,1,4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_8);
// Child Layout Props
root_child_1_child_1_child_8.layoutAlign = "STRETCH";
root_child_1_child_1_child_8.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_8, {"width":440.516357421875,"height":48.74565505981445,"relativeTransform":[[1,0,0],[0,1,273.3554382324219]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Table standing row
const root_child_1_child_1_child_9 = figma.createFrame();
root_child_1_child_1_child_9.name = "Table standing row";
root_child_1_child_1_child_9.visible = true;
root_child_1_child_1_child_9.opacity = 1;
root_child_1_child_1_child_9.locked = false;
if ("blendMode" in root_child_1_child_1_child_9) root_child_1_child_1_child_9.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_9) {
    root_child_1_child_1_child_9.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_9.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_9.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_9.itemSpacing = 0;
    root_child_1_child_1_child_9.paddingTop = 0;
    root_child_1_child_1_child_9.paddingRight = 0;
    root_child_1_child_1_child_9.paddingBottom = 0;
    root_child_1_child_1_child_9.paddingLeft = 0;
}
root_child_1_child_1_child_9.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9.strokeAlign = "INSIDE";
root_child_1_child_1_child_9.effects = [{"type":"LAYER_BLUR","visible":true,"radius":11.373985290527344,"boundVariables":{},"blurType":"NORMAL"}];
if ("cornerRadius" in root_child_1_child_1_child_9) root_child_1_child_1_child_9.cornerRadius = 0;

// Start Child: Content
const root_child_1_child_1_child_9_child_0 = figma.createFrame();
root_child_1_child_1_child_9_child_0.name = "Content";
root_child_1_child_1_child_9_child_0.visible = true;
root_child_1_child_1_child_9_child_0.opacity = 1;
root_child_1_child_1_child_9_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0) root_child_1_child_1_child_9_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_9_child_0) {
    root_child_1_child_1_child_9_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_9_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_9_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_9_child_0.itemSpacing = 0;
    root_child_1_child_1_child_9_child_0.paddingTop = 0;
    root_child_1_child_1_child_9_child_0.paddingRight = 0;
    root_child_1_child_1_child_9_child_0.paddingBottom = 0;
    root_child_1_child_1_child_9_child_0.paddingLeft = 0;
}
root_child_1_child_1_child_9_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":0.10000000149011612,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:e4272c5b50925900063c785683e2cc7483ed7dcd/3505:272"}}}]);
root_child_1_child_1_child_9_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_9_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0) root_child_1_child_1_child_9_child_0.cornerRadius = 0;

// Start Child: Country
const root_child_1_child_1_child_9_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_9_child_0_child_0.name = "Country";
root_child_1_child_1_child_9_child_0_child_0.visible = true;
root_child_1_child_1_child_9_child_0_child_0.opacity = 1;
root_child_1_child_1_child_9_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_0) root_child_1_child_1_child_9_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_9_child_0_child_0) {
    root_child_1_child_1_child_9_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_9_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9_child_0_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_9_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_9_child_0_child_0.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_0.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_0.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_0.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_0.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_9_child_0_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_9_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0_child_0) root_child_1_child_1_child_9_child_0_child_0.cornerRadius = 0;

// Start Child: Arrow_down
const root_child_1_child_1_child_9_child_0_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_9_child_0_child_0_child_0.name = "Arrow_down";
root_child_1_child_1_child_9_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_9_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_9_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_0_child_0) root_child_1_child_1_child_9_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_9_child_0_child_0_child_0) {
    root_child_1_child_1_child_9_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_9_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_9_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0_child_0_child_0) root_child_1_child_1_child_9_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: Icon
const root_child_1_child_1_child_9_child_0_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Icon_4748_25425_svg);
const root_child_1_child_1_child_9_child_0_child_0_child_0_child_0 = figma.flatten([root_child_1_child_1_child_9_child_0_child_0_child_0_child_0_svgContainer]);
root_child_1_child_1_child_9_child_0_child_0_child_0_child_0.name = "Icon";
root_child_1_child_1_child_9_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_9_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_9_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_0_child_0_child_0) root_child_1_child_1_child_9_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_9_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.23137255012989044,"b":0.23137255012989044},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_0_child_0_child_0.strokeWeight = 1.4443155527114868;
root_child_1_child_1_child_9_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
root_child_1_child_1_child_9_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0_child_0_child_0_child_0) root_child_1_child_1_child_9_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_9_child_0_child_0_child_0.appendChild(root_child_1_child_1_child_9_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_0_child_0_child_0, {"relativeTransform":[[1,0,3.0112881660461426],[0,1,3.010889768600464]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_9_child_0_child_0.appendChild(root_child_1_child_1_child_9_child_0_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_0_child_0, {"width":14.443157196044922,"height":14.443157196044922,"relativeTransform":[[1,0,7.221578598022461],[0,1,12.637760162353516]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: 26
const root_child_1_child_1_child_9_child_0_child_0_child_1 = figma.createText();
root_child_1_child_1_child_9_child_0_child_0_child_1.name = "26";
root_child_1_child_1_child_9_child_0_child_0_child_1.visible = true;
root_child_1_child_1_child_9_child_0_child_0_child_1.opacity = 1;
root_child_1_child_1_child_9_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_0_child_1) root_child_1_child_1_child_9_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_9_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_9_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_9_child_0_child_0_child_1.characters = "26";
root_child_1_child_1_child_9_child_0_child_0_child_1.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_0_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_0_child_1.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_0_child_1.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_0_child_1.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_9_child_0_child_0.appendChild(root_child_1_child_1_child_9_child_0_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_0_child_1, {"width":25.27552604675293,"height":23,"relativeTransform":[[1,0,28.886314392089844],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_9_child_0_child_0_child_2 = figma.createFrame();
root_child_1_child_1_child_9_child_0_child_0_child_2.name = "Team";
root_child_1_child_1_child_9_child_0_child_0_child_2.visible = true;
root_child_1_child_1_child_9_child_0_child_0_child_2.opacity = 1;
root_child_1_child_1_child_9_child_0_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_0_child_2) root_child_1_child_1_child_9_child_0_child_0_child_2.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_9_child_0_child_0_child_2) {
    root_child_1_child_1_child_9_child_0_child_0_child_2.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_9_child_0_child_0_child_2.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_9_child_0_child_0_child_2.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_9_child_0_child_0_child_2.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_9_child_0_child_0_child_2.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_9_child_0_child_0_child_2.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_0_child_2.paddingTop = 0;
    root_child_1_child_1_child_9_child_0_child_0_child_2.paddingRight = 0;
    root_child_1_child_1_child_9_child_0_child_0_child_2.paddingBottom = 0;
    root_child_1_child_1_child_9_child_0_child_0_child_2.paddingLeft = 0;
}
root_child_1_child_1_child_9_child_0_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_9_child_0_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0_child_0_child_2) root_child_1_child_1_child_9_child_0_child_0_child_2.cornerRadius = 0;

// Start Child: Pafos
const root_child_1_child_1_child_9_child_0_child_0_child_2_child_0 = figma.createFrame();
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.name = "Pafos";
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.visible = true;
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.opacity = 1;
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_0_child_2_child_0) root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_9_child_0_child_0_child_2_child_0) {
    root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0_child_0_child_2_child_0) root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.cornerRadius = 0;

// Start Child: image
const root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0 = figma.createRectangle();
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0.name = "image";
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0.visible = true;
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0.opacity = 1;
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"786b40912465f6eaa8266fdaa250595ec301bbe3","assetRef":IMG_img_9_bin}]);
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0) root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.appendChild(root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_0_child_2_child_0_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_9_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_9_child_0_child_0_child_2_child_0);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_0_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_0_child_2_child_0, {"width":28.886314392089844,"height":28.886314392089844,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Team
const root_child_1_child_1_child_9_child_0_child_0_child_2_child_1 = figma.createText();
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.name = "Team";
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.visible = true;
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.opacity = 1;
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_0_child_2_child_1) root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.characters = "Pafos";
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.fontSize = 18.05394744873047;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.setRangeFontName(0, 5, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.setRangeFills(0, 5, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.setRangeFontSize(0, 5, 18.05394744873047);
root_child_1_child_1_child_9_child_0_child_0_child_2.appendChild(root_child_1_child_1_child_9_child_0_child_0_child_2_child_1);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_0_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_0_child_2_child_1, {"width":42,"height":23,"relativeTransform":[[1,0,36.10789489746094],[0,1,2.943157196044922]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_9_child_0_child_0.appendChild(root_child_1_child_1_child_9_child_0_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_0_child_2, {"width":78.10789489746094,"height":28.886314392089844,"relativeTransform":[[1,0,61.383419036865234],[0,1,5.416181564331055]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_9_child_0.appendChild(root_child_1_child_1_child_9_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_0, {"width":200.39877319335938,"height":39.71867752075195,"relativeTransform":[[1,0,0.00006103515625],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: P
const root_child_1_child_1_child_9_child_0_child_1 = figma.createFrame();
root_child_1_child_1_child_9_child_0_child_1.name = "P";
root_child_1_child_1_child_9_child_0_child_1.visible = true;
root_child_1_child_1_child_9_child_0_child_1.opacity = 1;
root_child_1_child_1_child_9_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_1) root_child_1_child_1_child_9_child_0_child_1.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_9_child_0_child_1) {
    root_child_1_child_1_child_9_child_0_child_1.layoutMode = "VERTICAL";
    root_child_1_child_1_child_9_child_0_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9_child_0_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9_child_0_child_1.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_9_child_0_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_9_child_0_child_1.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_1.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_1.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_1.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_1.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_9_child_0_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_1.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_1.strokeAlign = "INSIDE";
root_child_1_child_1_child_9_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0_child_1) root_child_1_child_1_child_9_child_0_child_1.cornerRadius = 0;

// Start Child: 6
const root_child_1_child_1_child_9_child_0_child_1_child_0 = figma.createText();
root_child_1_child_1_child_9_child_0_child_1_child_0.name = "6";
root_child_1_child_1_child_9_child_0_child_1_child_0.visible = true;
root_child_1_child_1_child_9_child_0_child_1_child_0.opacity = 1;
root_child_1_child_1_child_9_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_1_child_0) root_child_1_child_1_child_9_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_9_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_1_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_1_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_9_child_0_child_1_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_9_child_0_child_1_child_0.characters = "6";
root_child_1_child_1_child_9_child_0_child_1_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_1_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_1_child_0.setRangeFontName(0, 1, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_1_child_0.setRangeFills(0, 1, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_1_child_0.setRangeFontSize(0, 1, 18.053945541381836);
root_child_1_child_1_child_9_child_0_child_1.appendChild(root_child_1_child_1_child_9_child_0_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_1_child_0, {"width":10,"height":23,"relativeTransform":[[1,0,34.71867752075195],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_9_child_0.appendChild(root_child_1_child_1_child_9_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_1, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,200.39889526367188],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_9_child_0_child_2 = figma.createRectangle();
root_child_1_child_1_child_9_child_0_child_2.name = "Separator";
root_child_1_child_1_child_9_child_0_child_2.visible = true;
root_child_1_child_1_child_9_child_0_child_2.opacity = 1;
root_child_1_child_1_child_9_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_2) root_child_1_child_1_child_9_child_0_child_2.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_9_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_2.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_2.strokeAlign = "INSIDE";
root_child_1_child_1_child_9_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0_child_2) root_child_1_child_1_child_9_child_0_child_2.cornerRadius = 0;
root_child_1_child_1_child_9_child_0.appendChild(root_child_1_child_1_child_9_child_0_child_2);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_2, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,279.83624267578125],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Pts
const root_child_1_child_1_child_9_child_0_child_3 = figma.createFrame();
root_child_1_child_1_child_9_child_0_child_3.name = "Pts";
root_child_1_child_1_child_9_child_0_child_3.visible = true;
root_child_1_child_1_child_9_child_0_child_3.opacity = 1;
root_child_1_child_1_child_9_child_0_child_3.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_3) root_child_1_child_1_child_9_child_0_child_3.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_9_child_0_child_3) {
    root_child_1_child_1_child_9_child_0_child_3.layoutMode = "VERTICAL";
    root_child_1_child_1_child_9_child_0_child_3.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9_child_0_child_3.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9_child_0_child_3.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_9_child_0_child_3.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_9_child_0_child_3.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_3.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_3.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_3.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_3.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_9_child_0_child_3.fills = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_3.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_3.strokeAlign = "INSIDE";
root_child_1_child_1_child_9_child_0_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0_child_3) root_child_1_child_1_child_9_child_0_child_3.cornerRadius = 0;

// Start Child: -5
const root_child_1_child_1_child_9_child_0_child_3_child_0 = figma.createText();
root_child_1_child_1_child_9_child_0_child_3_child_0.name = "-5";
root_child_1_child_1_child_9_child_0_child_3_child_0.visible = true;
root_child_1_child_1_child_9_child_0_child_3_child_0.opacity = 1;
root_child_1_child_1_child_9_child_0_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_3_child_0) root_child_1_child_1_child_9_child_0_child_3_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_9_child_0_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_3_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_3_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_9_child_0_child_3_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_9_child_0_child_3_child_0.characters = "-5";
root_child_1_child_1_child_9_child_0_child_3_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_3_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_3_child_0.setRangeFontName(0, 2, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_3_child_0.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_3_child_0.setRangeFontSize(0, 2, 18.053945541381836);
root_child_1_child_1_child_9_child_0_child_3.appendChild(root_child_1_child_1_child_9_child_0_child_3_child_0);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_3_child_0, {"width":16,"height":23,"relativeTransform":[[1,0,31.718677520751953],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_9_child_0.appendChild(root_child_1_child_1_child_9_child_0_child_3);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_3.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_3, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,280.73895263671875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Separator
const root_child_1_child_1_child_9_child_0_child_4 = figma.createRectangle();
root_child_1_child_1_child_9_child_0_child_4.name = "Separator";
root_child_1_child_1_child_9_child_0_child_4.visible = true;
root_child_1_child_1_child_9_child_0_child_4.opacity = 1;
root_child_1_child_1_child_9_child_0_child_4.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_4) root_child_1_child_1_child_9_child_0_child_4.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_9_child_0_child_4.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_4.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_4.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_4.strokeAlign = "INSIDE";
root_child_1_child_1_child_9_child_0_child_4.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0_child_4) root_child_1_child_1_child_9_child_0_child_4.cornerRadius = 0;
root_child_1_child_1_child_9_child_0.appendChild(root_child_1_child_1_child_9_child_0_child_4);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_4.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_4, {"width":0.9026973247528076,"height":48.74565505981445,"relativeTransform":[[1,0,360.1763000488281],[0,1,-4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Pts
const root_child_1_child_1_child_9_child_0_child_5 = figma.createFrame();
root_child_1_child_1_child_9_child_0_child_5.name = "Pts";
root_child_1_child_1_child_9_child_0_child_5.visible = true;
root_child_1_child_1_child_9_child_0_child_5.opacity = 1;
root_child_1_child_1_child_9_child_0_child_5.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_5) root_child_1_child_1_child_9_child_0_child_5.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_1_child_1_child_9_child_0_child_5) {
    root_child_1_child_1_child_9_child_0_child_5.layoutMode = "VERTICAL";
    root_child_1_child_1_child_9_child_0_child_5.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9_child_0_child_5.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_9_child_0_child_5.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_9_child_0_child_5.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_9_child_0_child_5.itemSpacing = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_5.paddingTop = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_5.paddingRight = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_5.paddingBottom = 7.221578598022461;
    root_child_1_child_1_child_9_child_0_child_5.paddingLeft = 7.221578598022461;
}
root_child_1_child_1_child_9_child_0_child_5.fills = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_5.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_5.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_5.strokeAlign = "INSIDE";
root_child_1_child_1_child_9_child_0_child_5.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_9_child_0_child_5) root_child_1_child_1_child_9_child_0_child_5.cornerRadius = 0;

// Start Child: 4
const root_child_1_child_1_child_9_child_0_child_5_child_0 = figma.createText();
root_child_1_child_1_child_9_child_0_child_5_child_0.name = "4";
root_child_1_child_1_child_9_child_0_child_5_child_0.visible = true;
root_child_1_child_1_child_9_child_0_child_5_child_0.opacity = 1;
root_child_1_child_1_child_9_child_0_child_5_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_9_child_0_child_5_child_0) root_child_1_child_1_child_9_child_0_child_5_child_0.blendMode = "PASS_THROUGH";
root_child_1_child_1_child_9_child_0_child_5_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_5_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_9_child_0_child_5_child_0.strokeWeight = 0.9026973247528076;
root_child_1_child_1_child_9_child_0_child_5_child_0.strokeAlign = "OUTSIDE";
root_child_1_child_1_child_9_child_0_child_5_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_9_child_0_child_5_child_0.characters = "4";
root_child_1_child_1_child_9_child_0_child_5_child_0.fontSize = 18.053945541381836;
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_5_child_0.fontName = {"family":"Champions","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_5_child_0.setRangeFontName(0, 1, {"family":"Champions","style":"Bold"});
root_child_1_child_1_child_9_child_0_child_5_child_0.setRangeFills(0, 1, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_9_child_0_child_5_child_0.setRangeFontSize(0, 1, 18.053945541381836);
root_child_1_child_1_child_9_child_0_child_5.appendChild(root_child_1_child_1_child_9_child_0_child_5_child_0);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_5_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_5_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_5_child_0, {"width":10,"height":23,"relativeTransform":[[1,0,34.71867752075195],[0,1,8.359338760375977]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_9_child_0.appendChild(root_child_1_child_1_child_9_child_0_child_5);
// Child Layout Props
root_child_1_child_1_child_9_child_0_child_5.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0_child_5.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9_child_0_child_5, {"width":79.4373550415039,"height":39.71867752075195,"relativeTransform":[[1,0,361.0790100097656],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_9.appendChild(root_child_1_child_1_child_9_child_0);
// Child Layout Props
root_child_1_child_1_child_9_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_9_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_9_child_0, {"width":440.516357421875,"height":39.71867752075195,"relativeTransform":[[1,0,0],[0,1,4.51348876953125]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_9);
// Child Layout Props
root_child_1_child_1_child_9.layoutAlign = "STRETCH";
root_child_1_child_1_child_9.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_9, {"width":440.516357421875,"height":48.74565505981445,"relativeTransform":[[1,0,0],[0,1,322.1011047363281]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: opacity_orange
const root_child_1_child_1_child_10 = figma.createRectangle();
root_child_1_child_1_child_10.name = "opacity_orange";
root_child_1_child_1_child_10.visible = true;
root_child_1_child_1_child_10.opacity = 0.699999988079071;
root_child_1_child_1_child_10.locked = false;
if ("blendMode" in root_child_1_child_1_child_10) root_child_1_child_1_child_10.blendMode = "COLOR_DODGE";
root_child_1_child_1_child_10.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0.875,"g":0.6659722328186035,"b":0.09114587306976318,"a":1},"position":0,"boundVariables":{}},{"color":{"r":0.4749999940395355,"g":0.2203478068113327,"b":0.04947918653488159,"a":0},"position":1,"boundVariables":{}}],"gradientTransform":[[6.123234262925839e-17,1,0],[-1,0,1]]}]);
root_child_1_child_1_child_10.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_10.strokeWeight = 0.976881206035614;
root_child_1_child_1_child_10.strokeAlign = "INSIDE";
root_child_1_child_1_child_10.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_10) root_child_1_child_1_child_10.cornerRadius = 0;
root_child_1_child_1.appendChild(root_child_1_child_1_child_10);
// Child Layout Props
root_child_1_child_1_child_10.layoutPositioning = "ABSOLUTE";
root_child_1_child_1_child_10.layoutAlign = "INHERIT";
root_child_1_child_1_child_10.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_10, {"width":440.573486328125,"height":96.71125030517578,"relativeTransform":[[1,0,-0.013730241917073727],[0,1,149.79678344726562]],"parentIsAutoLayout":true,"layoutPositioning":"ABSOLUTE"});

// Start Child: opacity_red
const root_child_1_child_1_child_11 = figma.createRectangle();
root_child_1_child_1_child_11.name = "opacity_red";
root_child_1_child_1_child_11.visible = true;
root_child_1_child_1_child_11.opacity = 0.6600000262260437;
root_child_1_child_1_child_11.locked = false;
if ("blendMode" in root_child_1_child_1_child_11) root_child_1_child_1_child_11.blendMode = "COLOR_DODGE";
root_child_1_child_1_child_11.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0.9231119751930237,"g":0.24563732743263245,"b":0.32576873898506165,"a":1},"position":0,"boundVariables":{}},{"color":{"r":0.5231119990348816,"g":0.13919852674007416,"b":0.1846076399087906,"a":0},"position":1,"boundVariables":{}}],"gradientTransform":[[6.123234262925839e-17,1,0],[-1,0,1]]}]);
root_child_1_child_1_child_11.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_11.strokeWeight = 0.976881206035614;
root_child_1_child_1_child_11.strokeAlign = "INSIDE";
root_child_1_child_1_child_11.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_11) root_child_1_child_1_child_11.cornerRadius = 0;
root_child_1_child_1.appendChild(root_child_1_child_1_child_11);
// Child Layout Props
root_child_1_child_1_child_11.layoutPositioning = "ABSOLUTE";
root_child_1_child_1_child_11.layoutAlign = "INHERIT";
root_child_1_child_1_child_11.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_11, {"width":440.573486328125,"height":79.12738037109375,"relativeTransform":[[1,0,-0.013671875],[0,1,266.0390625]],"parentIsAutoLayout":true,"layoutPositioning":"ABSOLUTE"});
root_child_1.appendChild(root_child_1_child_1);
// Child Layout Props
root_child_1_child_1.layoutAlign = "STRETCH";
root_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1, {"width":440.516357421875,"height":370.84674072265625,"relativeTransform":[[1,0,10.83233642578125],[0,1,32.05394744873047]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_1);
applySizeAndTransform(root_child_1, {"width":462.1810302734375,"height":413.7330627441406,"relativeTransform":[[1,0,70.5],[0,1,103]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});

// Start Child: opacity
const root_child_2 = figma.createFrame();
root_child_2.name = "opacity";
root_child_2.visible = true;
root_child_2.opacity = 1;
root_child_2.locked = false;
if ("blendMode" in root_child_2) root_child_2.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_2) {
    root_child_2.layoutMode = "NONE";
}
root_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_2.strokes = await this.hydratePaints([]);
root_child_2.strokeWeight = 1.005000114440918;
root_child_2.strokeAlign = "INSIDE";
root_child_2.effects = [];
if ("cornerRadius" in root_child_2) root_child_2.cornerRadius = 0;

// Start Child: opacity
const root_child_2_child_0 = figma.createRectangle();
root_child_2_child_0.name = "opacity";
root_child_2_child_0.visible = true;
root_child_2_child_0.opacity = 1;
root_child_2_child_0.locked = false;
if ("blendMode" in root_child_2_child_0) root_child_2_child_0.blendMode = "PASS_THROUGH";
root_child_2_child_0.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":0.8999999761581421,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0,"g":0,"b":0,"a":0},"position":0.06926402449607849,"boundVariables":{}},{"color":{"r":0,"g":0,"b":0,"a":0.4699999988079071},"position":0.507688581943512,"boundVariables":{}},{"color":{"r":0,"g":0,"b":0,"a":1},"position":1,"boundVariables":{}}],"gradientTransform":[[4.563296851500809e-9,1.4345513582229614,-0.35438522696495056],[-4.1392741203308105,-3.1086244689504383e-15,2.4483015537261963]]}]);
root_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_0.strokeWeight = 0.8780456781387329;
root_child_2_child_0.strokeAlign = "INSIDE";
root_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_2_child_0) root_child_2_child_0.cornerRadius = 0;
root_child_2.appendChild(root_child_2_child_0);
applySizeAndTransform(root_child_2_child_0, {"width":603,"height":435.9999694824219,"relativeTransform":[[-1,0,603.0000610351562],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root.appendChild(root_child_2);
applySizeAndTransform(root_child_2, {"width":603,"height":435.9999694824219,"relativeTransform":[[1,0,0.5],[0,1,222]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});

// Start Child: deco_comps
const root_child_3 = figma.createFrame();
root_child_3.name = "deco_comps";
root_child_3.visible = true;
root_child_3.opacity = 1;
root_child_3.locked = false;
if ("blendMode" in root_child_3) root_child_3.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_3) {
    root_child_3.layoutMode = "NONE";
}
root_child_3.fills = await this.hydratePaints([]);
root_child_3.strokes = await this.hydratePaints([]);
root_child_3.strokeWeight = 1.0049999952316284;
root_child_3.strokeAlign = "INSIDE";
root_child_3.effects = [];
if ("cornerRadius" in root_child_3) root_child_3.cornerRadius = 0;

// Start Child: deco
const root_child_3_child_0 = figma.createFrame();
root_child_3_child_0.name = "deco";
root_child_3_child_0.visible = true;
root_child_3_child_0.opacity = 1;
root_child_3_child_0.locked = false;
if ("blendMode" in root_child_3_child_0) root_child_3_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_3_child_0) {
    root_child_3_child_0.layoutMode = "NONE";
}
root_child_3_child_0.fills = await this.hydratePaints([]);
root_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_0.strokeWeight = 1.0049999952316284;
root_child_3_child_0.strokeAlign = "INSIDE";
root_child_3_child_0.effects = [];
if ("cornerRadius" in root_child_3_child_0) root_child_3_child_0.cornerRadius = 0;

// Start Child: glass
const root_child_3_child_0_child_0 = figma.createRectangle();
root_child_3_child_0_child_0.name = "glass";
root_child_3_child_0_child_0.visible = true;
root_child_3_child_0_child_0.opacity = 1;
root_child_3_child_0_child_0.locked = false;
if ("blendMode" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_3_child_0_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"CROP","imageTransform":[[0.9999999403953552,-1.6957199401893446e-23,7.993605777301127e-15],[0,0.5457569360733032,1.0155599028394136e-7]],"scalingFactor":0.5,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"d1b5a429f1fc88dd6f5a3f7ab73d0a07c23dd34f","assetRef":IMG_img_3_opt_bin}]);
root_child_3_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_0_child_0.strokeWeight = 1.0049999952316284;
root_child_3_child_0_child_0.strokeAlign = "INSIDE";
root_child_3_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.cornerRadius = 0;
root_child_3_child_0.appendChild(root_child_3_child_0_child_0);
applySizeAndTransform(root_child_3_child_0_child_0, {"width":673.834716796875,"height":366.7171325683594,"relativeTransform":[[-0.9999493956565857,0.010058796964585781,609.9486083984375],[-0.010058796964585781,-0.9999493956565857,359.4145812988281]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});

// Start Child: image 
const root_child_3_child_0_child_1 = figma.createRectangle();
root_child_3_child_0_child_1.name = "image ";
root_child_3_child_0_child_1.visible = true;
root_child_3_child_0_child_1.opacity = 1;
root_child_3_child_0_child_1.locked = false;
if ("blendMode" in root_child_3_child_0_child_1) root_child_3_child_0_child_1.blendMode = "PASS_THROUGH";
root_child_3_child_0_child_1.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0.003921568859368563,"g":0,"b":0.33725491166114807,"a":0},"position":0,"boundVariables":{}},{"color":{"r":0,"g":0,"b":0.250980406999588,"a":1},"position":1,"boundVariables":{}}],"gradientTransform":[[0.538985550403595,1.1702684164047241,-0.4097590148448944],[-1.308580994606018,0.0028142016381025314,1.0786352157592773]]}]);
root_child_3_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_3_child_0_child_1.strokeWeight = 0.8780454993247986;
root_child_3_child_0_child_1.strokeAlign = "INSIDE";
root_child_3_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_3_child_0_child_1) root_child_3_child_0_child_1.cornerRadius = 0;
root_child_3_child_0.appendChild(root_child_3_child_0_child_1);
applySizeAndTransform(root_child_3_child_0_child_1, {"width":603,"height":41.204891204833984,"relativeTransform":[[1,-1.7484555314695172e-7,0],[1.7484555314695172e-7,1,23.114999771118164]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_3.appendChild(root_child_3_child_0);
applySizeAndTransform(root_child_3_child_0, {"width":603,"height":64.31999969482422,"relativeTransform":[[1,0,0.5000014305114746],[0,1,178.67999267578125]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root.appendChild(root_child_3);
applySizeAndTransform(root_child_3, {"width":603,"height":243.20999145507812,"relativeTransform":[[1,0,-3.637978807091713e-12],[0,1,456.2702331542969]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});

// Start Child: Top bar
const root_child_4 = figma.createFrame();
root_child_4.name = "Top bar";
root_child_4.visible = true;
root_child_4.opacity = 1;
root_child_4.locked = false;
if ("blendMode" in root_child_4) root_child_4.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_4) {
    root_child_4.layoutMode = "HORIZONTAL";
    root_child_4.primaryAxisSizingMode = "FIXED";
    root_child_4.counterAxisSizingMode = "AUTO";
    root_child_4.primaryAxisAlignItems = "CENTER";
    root_child_4.counterAxisAlignItems = "MIN";
    root_child_4.itemSpacing = 0;
    root_child_4.paddingTop = 16.079999923706055;
    root_child_4.paddingRight = 24.119998931884766;
    root_child_4.paddingBottom = 16.079999923706055;
    root_child_4.paddingLeft = 24.119998931884766;
}
root_child_4.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0,"g":0,"b":0,"a":0.6000000238418579},"position":0,"boundVariables":{}},{"color":{"r":0,"g":0,"b":0,"a":0},"position":1,"boundVariables":{}}],"gradientTransform":[[0.02390393055975437,0.7961031198501587,-7.733614096339103e-16],[-18.639245986938477,0.010453303344547749,0.5]]}]);
root_child_4.strokes = await this.hydratePaints([]);
root_child_4.strokeWeight = 0.8780454993247986;
root_child_4.strokeAlign = "INSIDE";
root_child_4.effects = [];
if ("cornerRadius" in root_child_4) root_child_4.cornerRadius = 0;

// Start Child: Logos container
const root_child_4_child_0 = figma.createFrame();
root_child_4_child_0.name = "Logos container";
root_child_4_child_0.visible = true;
root_child_4_child_0.opacity = 1;
root_child_4_child_0.locked = false;
if ("blendMode" in root_child_4_child_0) root_child_4_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_4_child_0) {
    root_child_4_child_0.layoutMode = "HORIZONTAL";
    root_child_4_child_0.primaryAxisSizingMode = "AUTO";
    root_child_4_child_0.counterAxisSizingMode = "AUTO";
    root_child_4_child_0.primaryAxisAlignItems = "MIN";
    root_child_4_child_0.counterAxisAlignItems = "CENTER";
    root_child_4_child_0.itemSpacing = 8.039999961853027;
    root_child_4_child_0.paddingTop = 0;
    root_child_4_child_0.paddingRight = 0;
    root_child_4_child_0.paddingBottom = 0;
    root_child_4_child_0.paddingLeft = 0;
}
root_child_4_child_0.fills = await this.hydratePaints([]);
root_child_4_child_0.strokes = await this.hydratePaints([]);
root_child_4_child_0.strokeWeight = 1.0049999952316284;
root_child_4_child_0.strokeAlign = "INSIDE";
root_child_4_child_0.effects = [];
if ("cornerRadius" in root_child_4_child_0) root_child_4_child_0.cornerRadius = 0;

// Start Child: ucl and divider
const root_child_4_child_0_child_0 = figma.createFrame();
root_child_4_child_0_child_0.name = "ucl and divider";
root_child_4_child_0_child_0.visible = true;
root_child_4_child_0_child_0.opacity = 1;
root_child_4_child_0_child_0.locked = false;
if ("blendMode" in root_child_4_child_0_child_0) root_child_4_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_4_child_0_child_0) {
    root_child_4_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_4_child_0_child_0.primaryAxisSizingMode = "AUTO";
    root_child_4_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_4_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_4_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_4_child_0_child_0.itemSpacing = 12.059999465942383;
    root_child_4_child_0_child_0.paddingTop = 0;
    root_child_4_child_0_child_0.paddingRight = 0;
    root_child_4_child_0_child_0.paddingBottom = 0;
    root_child_4_child_0_child_0.paddingLeft = 0;
}
root_child_4_child_0_child_0.fills = await this.hydratePaints([]);
root_child_4_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_4_child_0_child_0.strokeWeight = 1.0049999952316284;
root_child_4_child_0_child_0.strokeAlign = "INSIDE";
root_child_4_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_4_child_0_child_0) root_child_4_child_0_child_0.cornerRadius = 0;

// Start Child: UCL LOGO
const root_child_4_child_0_child_0_child_0 = figma.createFrame();
root_child_4_child_0_child_0_child_0.name = "UCL LOGO";
root_child_4_child_0_child_0_child_0.visible = true;
root_child_4_child_0_child_0_child_0.opacity = 1;
root_child_4_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_4_child_0_child_0_child_0) root_child_4_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_4_child_0_child_0_child_0) {
    root_child_4_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_4_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_4_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_4_child_0_child_0_child_0.strokeWeight = 0.9968346357345581;
root_child_4_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_4_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_4_child_0_child_0_child_0) root_child_4_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: Logo
const root_child_4_child_0_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Logo_I4748_25440_2662_14597_svg);
const root_child_4_child_0_child_0_child_0_child_0 = figma.flatten([root_child_4_child_0_child_0_child_0_child_0_svgContainer]);
root_child_4_child_0_child_0_child_0_child_0.name = "Logo";
root_child_4_child_0_child_0_child_0_child_0.visible = true;
root_child_4_child_0_child_0_child_0_child_0.opacity = 1;
root_child_4_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_4_child_0_child_0_child_0_child_0) root_child_4_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_4_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_4_child_0_child_0_child_0_child_0.strokeWeight = 5.02555513381958;
root_child_4_child_0_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_4_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_4_child_0_child_0_child_0_child_0) root_child_4_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_4_child_0_child_0_child_0.appendChild(root_child_4_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_4_child_0_child_0_child_0_child_0, {"relativeTransform":[[1,0,0],[0,1,1.0468860864639282]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_4_child_0_child_0.appendChild(root_child_4_child_0_child_0_child_0);
// Child Layout Props
root_child_4_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_4_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_4_child_0_child_0_child_0, {"width":50.25,"height":50.25,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_4_child_0.appendChild(root_child_4_child_0_child_0);
// Child Layout Props
root_child_4_child_0_child_0.layoutAlign = "INHERIT";
root_child_4_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_4_child_0_child_0, {"width":50.25,"height":50.25,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_4.appendChild(root_child_4_child_0);
// Child Layout Props
root_child_4_child_0.layoutAlign = "INHERIT";
root_child_4_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_4_child_0, {"width":50.25,"height":50.25,"relativeTransform":[[1,0,276.375],[0,1,16.079999923706055]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_4);
applySizeAndTransform(root_child_4, {"width":603,"height":82.40999603271484,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});

// Start Child: WHO WILL QUALIFY?
const root_child_5 = figma.createText();
root_child_5.name = "WHO WILL QUALIFY?";
root_child_5.visible = true;
root_child_5.opacity = 1;
root_child_5.locked = false;
if ("blendMode" in root_child_5) root_child_5.blendMode = "PASS_THROUGH";
root_child_5.strokes = await this.hydratePaints([]);
root_child_5.strokeWeight = 0.5542081594467163;
root_child_5.strokeAlign = "OUTSIDE";
root_child_5.effects = [{"type":"DROP_SHADOW","visible":true,"radius":29.34461212158203,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.25},"offset":{"x":0,"y":4.44615364074707},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":false}];
// Text Properties
root_child_5.characters = "WHO WILL QUALIFY?";
root_child_5.fontSize = 91.9985580444336;
await figma.loadFontAsync({"family":"Champions","style":"Display"});
root_child_5.fontName = {"family":"Champions","style":"Display"};
// Styled Segments
await figma.loadFontAsync({"family":"Champions","style":"Display"});
root_child_5.setRangeFontName(0, 9, {"family":"Champions","style":"Display"});
root_child_5.setRangeFills(0, 9, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_5.setRangeFontSize(0, 9, 91.9985580444336);
await figma.loadFontAsync({"family":"Champions","style":"Display"});
root_child_5.setRangeFontName(9, 17, {"family":"Champions","style":"Display"});
root_child_5.setRangeFills(9, 17, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8196630477905273,"g":0.5446940064430237,"b":1},"boundVariables":{}}]);
root_child_5.setRangeFontSize(9, 17, 91.9985580444336);
root.appendChild(root_child_5);
applySizeAndTransform(root_child_5, {"width":462,"height":110,"relativeTransform":[[1,0,70.5],[0,1,441]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});

// Start Child: divider-ball-1-desktop
const root_child_6 = figma.createFrame();
root_child_6.name = "divider-ball-1-desktop";
root_child_6.visible = true;
root_child_6.opacity = 1;
root_child_6.locked = false;
if ("blendMode" in root_child_6) root_child_6.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_6) {
    root_child_6.layoutMode = "NONE";
}
root_child_6.fills = await this.hydratePaints([]);
root_child_6.strokes = await this.hydratePaints([]);
root_child_6.strokeWeight = 0.46476900577545166;
root_child_6.strokeAlign = "INSIDE";
root_child_6.effects = [];
if ("cornerRadius" in root_child_6) root_child_6.cornerRadius = 0;

// Start Child: Rectangle
const root_child_6_child_0 = figma.createRectangle();
root_child_6_child_0.name = "Rectangle";
root_child_6_child_0.visible = true;
root_child_6_child_0.opacity = 1;
root_child_6_child_0.locked = false;
if ("blendMode" in root_child_6_child_0) root_child_6_child_0.blendMode = "PASS_THROUGH";
root_child_6_child_0.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0.7568627595901489,"g":0.7607843279838562,"b":0.8352941274642944,"a":0},"position":0,"boundVariables":{}},{"color":{"r":0.658823549747467,"g":0.12156862765550613,"b":0.8470588326454163,"a":1},"position":0.13810230791568756,"boundVariables":{}},{"color":{"r":1,"g":0.8235294222831726,"b":0,"a":1},"position":0.3229166567325592,"boundVariables":{}},{"color":{"r":0.8274509906768799,"g":0.46666666865348816,"b":0.43529412150382996,"a":1},"position":0.5317864418029785,"boundVariables":{}},{"color":{"r":0.6980392336845398,"g":0.1921568661928177,"b":0.7686274647712708,"a":1},"position":0.703125,"boundVariables":{}},{"color":{"r":0.33725491166114807,"g":0.07450980693101883,"b":0.9921568632125854,"a":1},"position":0.8570077419281006,"boundVariables":{}},{"color":{"r":0.7568627595901489,"g":0.7607843279838562,"b":0.8352941274642944,"a":0},"position":1,"boundVariables":{}}],"gradientTransform":[[0.9999884963035583,0.00001147754392150091,9.992007221626409e-16],[-0.00001147754392150091,0.000011490817996673286,0.5]]}]);
root_child_6_child_0.strokes = await this.hydratePaints([]);
root_child_6_child_0.strokeWeight = 0;
root_child_6_child_0.strokeAlign = "CENTER";
root_child_6_child_0.effects = [];
if ("cornerRadius" in root_child_6_child_0) root_child_6_child_0.cornerRadius = 0;
root_child_6.appendChild(root_child_6_child_0);
applySizeAndTransform(root_child_6_child_0, {"width":325.6199951171875,"height":1.0049999952316284,"relativeTransform":[[1,0,34.17041015625],[0,1,0.015625]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root.appendChild(root_child_6);
applySizeAndTransform(root_child_6, {"width":393.1341247558594,"height":11.39519214630127,"relativeTransform":[[1,0,104.52001953125],[0,1,561.8046875]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});

// Start Child: Buttons
const root_child_7 = figma.createFrame();
root_child_7.name = "Buttons";
root_child_7.visible = true;
root_child_7.opacity = 1;
root_child_7.locked = false;
if ("blendMode" in root_child_7) root_child_7.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_7) {
    root_child_7.layoutMode = "HORIZONTAL";
    root_child_7.primaryAxisSizingMode = "FIXED";
    root_child_7.counterAxisSizingMode = "AUTO";
    root_child_7.primaryAxisAlignItems = "CENTER";
    root_child_7.counterAxisAlignItems = "CENTER";
    root_child_7.itemSpacing = 24.119998931884766;
    root_child_7.paddingTop = 0;
    root_child_7.paddingRight = 0;
    root_child_7.paddingBottom = 0;
    root_child_7.paddingLeft = 0;
}
root_child_7.fills = await this.hydratePaints([]);
root_child_7.strokes = await this.hydratePaints([]);
root_child_7.strokeWeight = 1.0049999952316284;
root_child_7.strokeAlign = "INSIDE";
root_child_7.effects = [];
if ("cornerRadius" in root_child_7) root_child_7.cornerRadius = 0;

// Start Child: pk-button
const root_child_7_child_0 = figma.createFrame();
root_child_7_child_0.name = "pk-button";
root_child_7_child_0.visible = true;
root_child_7_child_0.opacity = 1;
root_child_7_child_0.locked = false;
if ("blendMode" in root_child_7_child_0) root_child_7_child_0.blendMode = "PASS_THROUGH";
if ("layoutMode" in root_child_7_child_0) {
    root_child_7_child_0.layoutMode = "VERTICAL";
    root_child_7_child_0.primaryAxisSizingMode = "AUTO";
    root_child_7_child_0.counterAxisSizingMode = "FIXED";
    root_child_7_child_0.primaryAxisAlignItems = "MIN";
    root_child_7_child_0.counterAxisAlignItems = "CENTER";
    root_child_7_child_0.itemSpacing = 8.039999961853027;
    root_child_7_child_0.paddingTop = 14.069999694824219;
    root_child_7_child_0.paddingRight = 16.079999923706055;
    root_child_7_child_0.paddingBottom = 14.069999694824219;
    root_child_7_child_0.paddingLeft = 16.079999923706055;
}
root_child_7_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.9333333373069763,"b":1},"boundVariables":{}}]);
root_child_7_child_0.strokes = await this.hydratePaints([]);
root_child_7_child_0.strokeWeight = 1.0049999952316284;
root_child_7_child_0.strokeAlign = "INSIDE";
root_child_7_child_0.effects = [];
if ("cornerRadius" in root_child_7_child_0) root_child_7_child_0.cornerRadius = 8.039999961853027;

// Start Child: Label
const root_child_7_child_0_child_0 = figma.createText();
root_child_7_child_0_child_0.name = "Label";
root_child_7_child_0_child_0.visible = true;
root_child_7_child_0_child_0.opacity = 1;
root_child_7_child_0_child_0.locked = false;
if ("blendMode" in root_child_7_child_0_child_0) root_child_7_child_0_child_0.blendMode = "PASS_THROUGH";
root_child_7_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.003921568859368563,"g":0.003921568859368563,"b":0.19607843458652496},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:5ad177f4d325933a231fd45acd9a89c96629eba0/3505:249"}}}]);
root_child_7_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_7_child_0_child_0.strokeWeight = 0;
root_child_7_child_0_child_0.strokeAlign = "CENTER";
root_child_7_child_0_child_0.effects = [];
// Text Properties
root_child_7_child_0_child_0.characters = "Simulate standings";
root_child_7_child_0_child_0.fontSize = 20.100000381469727;
await figma.loadFontAsync({"family":"Manrope","style":"SemiBold"});
root_child_7_child_0_child_0.fontName = {"family":"Manrope","style":"SemiBold"};
// Styled Segments
await figma.loadFontAsync({"family":"Manrope","style":"SemiBold"});
root_child_7_child_0_child_0.setRangeFontName(0, 18, {"family":"Manrope","style":"SemiBold"});
root_child_7_child_0_child_0.setRangeFills(0, 18, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.003921568859368563,"g":0.003921568859368563,"b":0.19607843458652496},"boundVariables":{"color":{"type":"VARIABLE_ALIAS","id":"VariableID:5ad177f4d325933a231fd45acd9a89c96629eba0/3505:249"}}}]);
root_child_7_child_0_child_0.setRangeFontSize(0, 18, 20.100000381469727);
root_child_7_child_0.appendChild(root_child_7_child_0_child_0);
// Child Layout Props
root_child_7_child_0_child_0.layoutAlign = "STRETCH";
root_child_7_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_7_child_0_child_0, {"width":265.32000732421875,"height":20,"relativeTransform":[[1,0,16.079999923706055],[0,1,14.069999694824219]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_7.appendChild(root_child_7_child_0);
// Child Layout Props
root_child_7_child_0.layoutAlign = "INHERIT";
root_child_7_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_7_child_0, {"width":297.4800109863281,"height":48.13999938964844,"relativeTransform":[[1,0,108.54000091552734],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_7);
applySizeAndTransform(root_child_7, {"width":514.5599365234375,"height":48.13999938964844,"relativeTransform":[[1,0,42.513427734375],[0,1,580.8984375]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});


        applySizeAndTransform(root, {"width":603,"height":699.47998046875,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}
