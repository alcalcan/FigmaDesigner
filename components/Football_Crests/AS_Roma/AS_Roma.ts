import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_11_svg_46_064422607421875x59_99891662597656 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_11_svg_46_064422607421875x59_99891662597656.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_12_svg_43_81655502319336x28_273881912231445 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_12_svg_43_81655502319336x28_273881912231445.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_13_svg_41_55886459350586x28_31285285949707 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_13_svg_41_55886459350586x28_31285285949707.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_14_svg_7_350472927093506x7_044111251831055 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_14_svg_7_350472927093506x7_044111251831055.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_15_svg_7_610284805297852x7_302844047546387 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_15_svg_7_610284805297852x7_302844047546387.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_16_svg_9_620569229125977x7_191342353820801 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_16_svg_9_620569229125977x7_191342353820801.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_17_svg_7_665493965148926x7_172934055328369 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_17_svg_7_665493965148926x7_172934055328369.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_18_svg_7_350473880767822x7_041947364807129 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_18_svg_7_350473880767822x7_041947364807129.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_19_svg_7_610282897949219x7_301760673522949 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_19_svg_7_610282897949219x7_301760673522949.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_20_svg_9_621651649475098x7_190255165100098 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_20_svg_9_621651649475098x7_190255165100098.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_21_svg_7_665493965148926x7_171854019165039 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_21_svg_7_665493965148926x7_171854019165039.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_22_svg_2_571042060852051x4_037890911102295 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_22_svg_2_571042060852051x4_037890911102295.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_23_svg_1_9853852987289429x3_936131715774536 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_23_svg_1_9853852987289429x3_936131715774536.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_24_svg_2_640324831008911x3_92205810546875 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_24_svg_2_640324831008911x3_92205810546875.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_25_svg_2_5504751205444336x3_969686985015869 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_25_svg_2_5504751205444336x3_969686985015869.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_26_svg_2_5721256732940674x4_037890911102295 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_26_svg_2_5721256732940674x4_037890911102295.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_27_svg_1_98430335521698x3_935044765472412 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_27_svg_1_98430335521698x3_935044765472412.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_28_svg_2_641406774520874x3_9209744930267334 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_28_svg_2_641406774520874x3_9209744930267334.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_29_svg_2_5504751205444336x3_9696903228759766 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_29_svg_2_5504751205444336x3_9696903228759766.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_30_svg_35_34722900390625x20_893098831176758 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_30_svg_35_34722900390625x20_893098831176758.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_31_svg_0_15289458632469177x0_14745813608169556 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_31_svg_0_15289458632469177x0_14745813608169556.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_32_svg_0_12665580213069916x0_06495329737663269 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_32_svg_0_12665580213069916x0_06495329737663269.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_33_svg_0_28903740644454956x0_184032142162323 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_33_svg_0_28903740644454956x0_184032142162323.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_34_svg_0_21975630521774292x0_08876939862966537 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_34_svg_0_21975630521774292x0_08876939862966537.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_35_svg_0_16887660324573517x0_05576625466346741 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_35_svg_0_16887660324573517x0_05576625466346741.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_36_svg_6_753381729125977x8_876860618591309 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_36_svg_6_753381729125977x8_876860618591309.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_37_svg_6_100195407867432x8_21799373626709 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_37_svg_6_100195407867432x8_21799373626709.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_38_svg_0_2686062753200531x0_15047354996204376 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_38_svg_0_2686062753200531x0_15047354996204376.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_39_svg_7_384698867797852x8_060623168945312 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_39_svg_7_384698867797852x8_060623168945312.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_40_svg_6_779384136199951x7_44683313369751 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_40_svg_6_779384136199951x7_44683313369751.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_41_svg_1_7283265590667725x2_0665760040283203 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_41_svg_1_7283265590667725x2_0665760040283203.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_42_svg_4_094274997711182x5_156924247741699 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_42_svg_4_094274997711182x5_156924247741699.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_43_svg_0_6303039193153381x1_0635267496109009 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_43_svg_0_6303039193153381x1_0635267496109009.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_44_svg_0_8556903004646301x1_4150919914245605 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_44_svg_0_8556903004646301x1_4150919914245605.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_45_svg_10_088794708251953x17_59109878540039 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_45_svg_10_088794708251953x17_59109878540039.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_46_svg_0_8260655999183655x1_5220565795898438 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_46_svg_0_8260655999183655x1_5220565795898438.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_47_svg_0_6559528112411499x0_5748573541641235 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_47_svg_0_6559528112411499x0_5748573541641235.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_48_svg_0_450410395860672x0_6244547963142395 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_48_svg_0_450410395860672x0_6244547963142395.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_49_svg_0_49588969349861145x0_45742544531822205 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_49_svg_0_49588969349861145x0_45742544531822205.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_50_svg_0_6208548545837402x0_7917090058326721 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_50_svg_0_6208548545837402x0_7917090058326721.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_51_svg_1_2914073467254639x3_7222132682800293 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_51_svg_1_2914073467254639x3_7222132682800293.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_52_svg_11_438159942626953x7_759206771850586 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_52_svg_11_438159942626953x7_759206771850586.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_53_svg_1_1128394603729248x1_7931169271469116 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_53_svg_1_1128394603729248x1_7931169271469116.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_54_svg_1_2027579545974731x1_6653696298599243 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_54_svg_1_2027579545974731x1_6653696298599243.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_55_svg_16_51875877380371x17_78257179260254 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_55_svg_16_51875877380371x17_78257179260254.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_56_svg_1_1964592933654785x1_548318862915039 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_56_svg_1_1964592933654785x1_548318862915039.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_57_svg_1_1564841270446777x2_6825437545776367 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_57_svg_1_1564841270446777x2_6825437545776367.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_58_svg_0_796161949634552x0_6368552446365356 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_58_svg_0_796161949634552x0_6368552446365356.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_59_svg_2_0159547328948975x0_9928483963012695 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_59_svg_2_0159547328948975x0_9928483963012695.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_60_svg_1_5108399391174316x0_947907030582428 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_60_svg_1_5108399391174316x0_947907030582428.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_61_svg_0_7339646816253662x0_8487140536308289 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_61_svg_0_7339646816253662x0_8487140536308289.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_62_svg_0_7740182876586914x0_8443846106529236 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_62_svg_0_7740182876586914x0_8443846106529236.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_63_svg_0_6743728518486023x0_9656290411949158 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_63_svg_0_6743728518486023x0_9656290411949158.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_64_svg_0_6408658623695374x1_0457361936569214 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_64_svg_0_6408658623695374x1_0457361936569214.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_65_svg_0_633913516998291x0_8898512721061707 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_65_svg_0_633913516998291x0_8898512721061707.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_66_svg_0_7718535661697388x0_9331523776054382 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_66_svg_0_7718535661697388x0_9331523776054382.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_67_svg_0_637618362903595x0_8941823840141296 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_67_svg_0_637618362903595x0_8941823840141296.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_68_svg_0_5239517092704773x0_7263877391815186 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_68_svg_0_5239517092704773x0_7263877391815186.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_69_svg_0_44123220443725586x0_6809210777282715 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_69_svg_0_44123220443725586x0_6809210777282715.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_70_svg_0_4331839084625244x0_6513183116912842 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_70_svg_0_4331839084625244x0_6513183116912842.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_71_svg_0_5975647568702698x0_6441149711608887 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_71_svg_0_5975647568702698x0_6441149711608887.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_72_svg_0_44081729650497437x0_7166435718536377 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_72_svg_0_44081729650497437x0_7166435718536377.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_73_svg_1_5834475755691528x1_9283004999160767 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_73_svg_1_5834475755691528x1_9283004999160767.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_74_svg_2_410588026046753x2_7438840866088867 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_74_svg_2_410588026046753x2_7438840866088867.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_75_svg_0_2841854691505432x1_1788920164108276 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_75_svg_0_2841854691505432x1_1788920164108276.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_76_svg_0_9880154132843018x1_6663919687271118 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_76_svg_0_9880154132843018x1_6663919687271118.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_77_svg_0_31168827414512634x0_17020589113235474 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_77_svg_0_31168827414512634x0_17020589113235474.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_78_svg_0_24032489955425262x0_12523064017295837 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_78_svg_0_24032489955425262x0_12523064017295837.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_79_svg_2_1262013912200928x3_570840358734131 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_79_svg_2_1262013912200928x3_570840358734131.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_80_svg_1_040323257446289x1_7677944898605347 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_80_svg_1_040323257446289x1_7677944898605347.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_81_svg_1_0641392469406128x1_1226662397384644 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_81_svg_1_0641392469406128x1_1226662397384644.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_82_svg_0_2134227603673935x0_9704169631004333 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_82_svg_0_2134227603673935x0_9704169631004333.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_83_svg_0_3702315092086792x1_6855201721191406 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_83_svg_0_3702315092086792x1_6855201721191406.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_84_svg_1_0089861154556274x0_9591357111930847 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_84_svg_1_0089861154556274x0_9591357111930847.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_85_svg_0_602204442024231x0_3496612310409546 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_85_svg_0_602204442024231x0_3496612310409546.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_86_svg_0_5541649460792542x0_20734818279743195 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_86_svg_0_5541649460792542x0_20734818279743195.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_87_svg_1_547949194908142x1_276883602142334 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_87_svg_1_547949194908142x1_276883602142334.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_88_svg_1_595670461654663x1_6230485439300537 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_88_svg_1_595670461654663x1_6230485439300537.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_89_svg_0_801289975643158x1_4939110279083252 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_89_svg_0_801289975643158x1_4939110279083252.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_90_svg_1_3932336568832397x1_9615691900253296 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_90_svg_1_3932336568832397x1_9615691900253296.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_91_svg_0_7198910713195801x1_266421914100647 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_91_svg_0_7198910713195801x1_266421914100647.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_92_svg_0_1779470294713974x0_7502021789550781 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_92_svg_0_1779470294713974x0_7502021789550781.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_93_svg_0_8443846702575684x1_1507447957992554 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_93_svg_0_8443846702575684x1_1507447957992554.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_94_svg_1_1680642366409302x0_17778876423835754 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_94_svg_1_1680642366409302x0_17778876423835754.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_95_svg_1_1074196100234985x0_19183331727981567 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_95_svg_1_1074196100234985x0_19183331727981567.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_96_svg_0_7837624549865723x0_8136681318283081 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_96_svg_0_7837624549865723x0_8136681318283081.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_97_svg_0_7014880776405334x0_42886117100715637 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_97_svg_0_7014880776405334x0_42886117100715637.svg";
import SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_98_svg_0_9726243615150452x1_2102850675582886 from "./assets/AS_Roma_assets_icon_Vector_I190_21075_2936_98_svg_0_9726243615150452x1_2102850675582886.svg";


export class AS_Roma extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "AS Roma",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
          "layoutProps": { "width": 60, "height": 60, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "FRAME",
              "name": "Crest",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 7, "y": 0,
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
                "width": 46.06441116333008, "height": 60,
                "relativeTransform": [[1, 0, 7], [0, 1, 0]],
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
                    "x": -0.0006809980259276927, "y": 0,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 46.064422607421875, "height": 59.99891662597656,
                    "relativeTransform": [[1, 0, -0.0006809980259276927], [0, 1, 0]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_11_svg_46_064422607421875x59_99891662597656
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 1.1231176853179932, "y": 1.670365333557129,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 43.81655502319336, "height": 28.273881912231445,
                    "relativeTransform": [[1, 0, 1.1231176853179932], [0, 1, 1.670365333557129]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_12_svg_43_81655502319336x28_273881912231445
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 2.247361421585083, "y": 30.549392700195312,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 41.55886459350586, "height": 28.31285285949707,
                    "relativeTransform": [[1, 0, 2.247361421585083], [0, 1, 30.549392700195312]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_13_svg_41_55886459350586x28_31285285949707
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 7.165359020233154, "y": 35.20758056640625,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.350472927093506, "height": 7.044111251831055,
                    "relativeTransform": [[1, 0, 7.165359020233154], [0, 1, 35.20758056640625]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_14_svg_7_350472927093506x7_044111251831055
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 14.12395191192627, "y": 35.07658767700195,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.610284805297852, "height": 7.302844047546387,
                    "relativeTransform": [[1, 0, 14.12395191192627], [0, 1, 35.07658767700195]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_15_svg_7_610284805297852x7_302844047546387
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.456022262573242, "y": 35.07658767700195,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 9.620569229125977, "height": 7.191342353820801,
                    "relativeTransform": [[1, 0, 21.456022262573242], [0, 1, 35.07658767700195]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_16_svg_9_620569229125977x7_191342353820801
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.897972106933594, "y": 35.07875442504883,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.665493965148926, "height": 7.172934055328369,
                    "relativeTransform": [[1, 0, 30.897972106933594], [0, 1, 35.07875442504883]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_17_svg_7_665493965148926x7_172934055328369
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 7.411096096038818, "y": 34.99972915649414,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.350473880767822, "height": 7.041947364807129,
                    "relativeTransform": [[1, 0, 7.411096096038818], [0, 1, 34.99972915649414]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_18_svg_7_350473880767822x7_041947364807129
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 14.36968994140625, "y": 34.86982345581055,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.610282897949219, "height": 7.301760673522949,
                    "relativeTransform": [[1, 0, 14.36968994140625], [0, 1, 34.86982345581055]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_19_svg_7_610282897949219x7_301760673522949
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.701759338378906, "y": 34.868743896484375,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 9.621651649475098, "height": 7.190255165100098,
                    "relativeTransform": [[1, 0, 21.701759338378906], [0, 1, 34.868743896484375]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_20_svg_9_621651649475098x7_190255165100098
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 31.143709182739258, "y": 34.870906829833984,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.665493965148926, "height": 7.171854019165039,
                    "relativeTransform": [[1, 0, 31.143709182739258], [0, 1, 34.870906829833984]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_21_svg_7_665493965148926x7_171854019165039
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 19.715290069580078, "y": 46.473609924316406,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.571042060852051, "height": 4.037890911102295,
                    "relativeTransform": [[1, 0, 19.715290069580078], [0, 1, 46.473609924316406]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_22_svg_2_571042060852051x4_037890911102295
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 16.990528106689453, "y": 46.4714469909668,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.9853852987289429, "height": 3.936131715774536,
                    "relativeTransform": [[1, 0, 16.990528106689453], [0, 1, 46.4714469909668]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_23_svg_1_9853852987289429x3_936131715774536
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.73775291442871, "y": 46.47036361694336,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.640324831008911, "height": 3.92205810546875,
                    "relativeTransform": [[1, 0, 22.73775291442871], [0, 1, 46.47036361694336]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_24_svg_2_640324831008911x3_92205810546875
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 25.931259155273438, "y": 46.50933837890625,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.5504751205444336, "height": 3.969686985015869,
                    "relativeTransform": [[1, 0, 25.931259155273438], [0, 1, 46.50933837890625]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_25_svg_2_5504751205444336x3_969686985015869
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 19.87442398071289, "y": 46.32530212402344,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.5721256732940674, "height": 4.037890911102295,
                    "relativeTransform": [[1, 0, 19.87442398071289], [0, 1, 46.32530212402344]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_26_svg_2_5721256732940674x4_037890911102295
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 17.15074348449707, "y": 46.324222564697266,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.98430335521698, "height": 3.935044765472412,
                    "relativeTransform": [[1, 0, 17.15074348449707], [0, 1, 46.324222564697266]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_27_svg_1_98430335521698x3_935044765472412
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.89580535888672, "y": 46.324222564697266,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.641406774520874, "height": 3.9209744930267334,
                    "relativeTransform": [[1, 0, 22.89580535888672], [0, 1, 46.324222564697266]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_28_svg_2_641406774520874x3_9209744930267334
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 26.09039306640625, "y": 46.36211013793945,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.5504751205444336, "height": 3.9696903228759766,
                    "relativeTransform": [[1, 0, 26.09039306640625], [0, 1, 46.36211013793945]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_29_svg_2_5504751205444336x3_9696903228759766
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 5.251668930053711, "y": 11.749932289123535,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 35.34722900390625, "height": 20.893098831176758,
                    "relativeTransform": [[1, 0, 5.251668930053711], [0, 1, 11.749932289123535]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_30_svg_35_34722900390625x20_893098831176758
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 16.43027687072754, "y": 31.66595458984375,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.15289458632469177, "height": 0.14745813608169556,
                    "relativeTransform": [[1, 0, 16.43027687072754], [0, 1, 31.66595458984375]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_31_svg_0_15289458632469177x0_14745813608169556
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.437891006469727, "y": 23.007307052612305,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.12665580213069916, "height": 0.06495329737663269,
                    "relativeTransform": [[1, 0, 30.437891006469727], [0, 1, 23.007307052612305]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_32_svg_0_12665580213069916x0_06495329737663269
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.007038116455078, "y": 22.88064956665039,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.28903740644454956, "height": 0.184032142162323,
                    "relativeTransform": [[1, 0, 30.007038116455078], [0, 1, 22.88064956665039]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_33_svg_0_28903740644454956x0_184032142162323
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 29.617321014404297, "y": 22.851421356201172,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.21975630521774292, "height": 0.08876939862966537,
                    "relativeTransform": [[1, 0, 29.617321014404297], [0, 1, 22.851421356201172]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_34_svg_0_21975630521774292x0_08876939862966537
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 29.642221450805664, "y": 22.867103576660156,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.16887660324573517, "height": 0.05576625466346741,
                    "relativeTransform": [[1, 0, 29.642221450805664], [0, 1, 22.867103576660156]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_35_svg_0_16887660324573517x0_05576625466346741
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 25.823265075683594, "y": 22.453044891357422,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.753381729125977, "height": 8.876860618591309,
                    "relativeTransform": [[1, 0, 25.823265075683594], [0, 1, 22.453044891357422]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_36_svg_6_753381729125977x8_876860618591309
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 26.182415008544922, "y": 22.77889060974121,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.100195407867432, "height": 8.21799373626709,
                    "relativeTransform": [[1, 0, 26.182415008544922], [0, 1, 22.77889060974121]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_37_svg_6_100195407867432x8_21799373626709
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.7581844329834, "y": 23.919893264770508,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.2686062753200531, "height": 0.15047354996204376,
                    "relativeTransform": [[1, 0, 30.7581844329834], [0, 1, 23.919893264770508]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_38_svg_0_2686062753200531x0_15047354996204376
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 20.761613845825195, "y": 24.30852508544922,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.384698867797852, "height": 8.060623168945312,
                    "relativeTransform": [[1, 0, 20.761613845825195], [0, 1, 24.30852508544922]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_39_svg_7_384698867797852x8_060623168945312
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.06513786315918, "y": 24.619199752807617,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.779384136199951, "height": 7.44683313369751,
                    "relativeTransform": [[1, 0, 21.06513786315918], [0, 1, 24.619199752807617]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_40_svg_6_779384136199951x7_44683313369751
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 28.61756706237793, "y": 20.943979263305664,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.7283265590667725, "height": 2.0665760040283203,
                    "relativeTransform": [[1, 0, 28.61756706237793], [0, 1, 20.943979263305664]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_41_svg_1_7283265590667725x2_0665760040283203
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 6.214791774749756, "y": 14.30772876739502,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.094274997711182, "height": 5.156924247741699,
                    "relativeTransform": [[1, 0, 6.214791774749756], [0, 1, 14.30772876739502]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_42_svg_4_094274997711182x5_156924247741699
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 37.073524475097656, "y": 31.03004264831543,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.6303039193153381, "height": 1.0635267496109009,
                    "relativeTransform": [[1, 0, 37.073524475097656], [0, 1, 31.03004264831543]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_43_svg_0_6303039193153381x1_0635267496109009
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 20.600759506225586, "y": 22.500511169433594,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.8556903004646301, "height": 1.4150919914245605,
                    "relativeTransform": [[1, 0, 20.600759506225586], [0, 1, 22.500511169433594]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_44_svg_0_8556903004646301x1_4150919914245605
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.056074142456055, "y": 14.512227058410645,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 10.088794708251953, "height": 17.59109878540039,
                    "relativeTransform": [[1, 0, 30.056074142456055], [0, 1, 14.512227058410645]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_45_svg_10_088794708251953x17_59109878540039
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 6.905548095703125, "y": 12.887686729431152,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.8260655999183655, "height": 1.5220565795898438,
                    "relativeTransform": [[1, 0, 6.905548095703125], [0, 1, 12.887686729431152]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_46_svg_0_8260655999183655x1_5220565795898438
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 33.769962310791016, "y": 30.588735580444336,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.6559528112411499, "height": 0.5748573541641235,
                    "relativeTransform": [[1, 0, 33.769962310791016], [0, 1, 30.588735580444336]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_47_svg_0_6559528112411499x0_5748573541641235
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 33.325706481933594, "y": 30.420568466186523,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.450410395860672, "height": 0.6244547963142395,
                    "relativeTransform": [[1, 0, 33.325706481933594], [0, 1, 30.420568466186523]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_48_svg_0_450410395860672x0_6244547963142395
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 5.895852565765381, "y": 16.6955509185791,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.49588969349861145, "height": 0.45742544531822205,
                    "relativeTransform": [[1, 0, 5.895852565765381], [0, 1, 16.6955509185791]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_49_svg_0_49588969349861145x0_45742544531822205
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 14.369443893432617, "y": 31.397924423217773,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.6208548545837402, "height": 0.7917090058326721,
                    "relativeTransform": [[1, 0, 14.369443893432617], [0, 1, 31.397924423217773]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_50_svg_0_6208548545837402x0_7917090058326721
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 35.31552505493164, "y": 26.906747817993164,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.2914073467254639, "height": 3.7222132682800293,
                    "relativeTransform": [[1, 0, 35.31552505493164], [0, 1, 26.906747817993164]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_51_svg_1_2914073467254639x3_7222132682800293
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 6.670636177062988, "y": 12.242959022521973,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 11.438159942626953, "height": 7.759206771850586,
                    "relativeTransform": [[1, 0, 6.670636177062988], [0, 1, 12.242959022521973]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_52_svg_11_438159942626953x7_759206771850586
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 26.260398864746094, "y": 21.572227478027344,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.1128394603729248, "height": 1.7931169271469116,
                    "relativeTransform": [[1, 0, 26.260398864746094], [0, 1, 21.572227478027344]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_53_svg_1_1128394603729248x1_7931169271469116
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 23.404550552368164, "y": 21.68836784362793,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.2027579545974731, "height": 1.6653696298599243,
                    "relativeTransform": [[1, 0, 23.404550552368164], [0, 1, 21.68836784362793]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_54_svg_1_2027579545974731x1_6653696298599243
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 14.864192008972168, "y": 14.483031272888184,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 16.51875877380371, "height": 17.78257179260254,
                    "relativeTransform": [[1, 0, 14.864192008972168], [0, 1, 14.483031272888184]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_55_svg_16_51875877380371x17_78257179260254
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 28.890684127807617, "y": 21.196504592895508,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.1964592933654785, "height": 1.548318862915039,
                    "relativeTransform": [[1, 0, 28.890684127807617], [0, 1, 21.196504592895508]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_56_svg_1_1964592933654785x1_548318862915039
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.5054931640625, "y": 17.906360626220703,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.1564841270446777, "height": 2.6825437545776367,
                    "relativeTransform": [[1, 0, 21.5054931640625], [0, 1, 17.906360626220703]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_57_svg_1_1564841270446777x2_6825437545776367
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 29.36671257019043, "y": 29.51649284362793,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.796161949634552, "height": 0.6368552446365356,
                    "relativeTransform": [[1, 0, 29.36671257019043], [0, 1, 29.51649284362793]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_58_svg_0_796161949634552x0_6368552446365356
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 8.153721809387207, "y": 14.679025650024414,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.0159547328948975, "height": 0.9928483963012695,
                    "relativeTransform": [[1, 0, 8.153721809387207], [0, 1, 14.679025650024414]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_59_svg_2_0159547328948975x0_9928483963012695
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 8.376725196838379, "y": 14.77171516418457,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.5108399391174316, "height": 0.947907030582428,
                    "relativeTransform": [[1, 0, 8.376725196838379], [0, 1, 14.77171516418457]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_60_svg_1_5108399391174316x0_947907030582428
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 12.800000190734863, "y": 17.01434326171875,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.7339646816253662, "height": 0.8487140536308289,
                    "relativeTransform": [[1, 0, 12.800000190734863], [0, 1, 17.01434326171875]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_61_svg_0_7339646816253662x0_8487140536308289
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.303382873535156, "y": 17.48525047302246,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.7740182876586914, "height": 0.8443846106529236,
                    "relativeTransform": [[1, 0, 13.303382873535156], [0, 1, 17.48525047302246]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_62_svg_0_7740182876586914x0_8443846106529236
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 12.1439790725708, "y": 18.146684646606445,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.6743728518486023, "height": 0.9656290411949158,
                    "relativeTransform": [[1, 0, 12.1439790725708], [0, 1, 18.146684646606445]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_63_svg_0_6743728518486023x0_9656290411949158
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 12.764276504516602, "y": 17.810014724731445,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.6408658623695374, "height": 1.0457361936569214,
                    "relativeTransform": [[1, 0, 12.764276504516602], [0, 1, 17.810014724731445]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_64_svg_0_6408658623695374x1_0457361936569214
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.267659187316895, "y": 18.146684646606445,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.633913516998291, "height": 0.8898512721061707,
                    "relativeTransform": [[1, 0, 13.267659187316895], [0, 1, 18.146684646606445]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_65_svg_0_633913516998291x0_8898512721061707
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.404059410095215, "y": 16.580244064331055,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.7718535661697388, "height": 0.9331523776054382,
                    "relativeTransform": [[1, 0, 13.404059410095215], [0, 1, 16.580244064331055]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_66_svg_0_7718535661697388x0_9331523776054382
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.011096954345703, "y": 16.122325897216797,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.637618362903595, "height": 0.8941823840141296,
                    "relativeTransform": [[1, 0, 13.011096954345703], [0, 1, 16.122325897216797]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_67_svg_0_637618362903595x0_8941823840141296
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.816509246826172, "y": 15.983760833740234,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.5239517092704773, "height": 0.7263877391815186,
                    "relativeTransform": [[1, 0, 13.816509246826172], [0, 1, 15.983760833740234]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_68_svg_0_5239517092704773x0_7263877391815186
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 14.425344467163086, "y": 15.586467742919922,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.44123220443725586, "height": 0.6809210777282715,
                    "relativeTransform": [[1, 0, 14.425344467163086], [0, 1, 15.586467742919922]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_69_svg_0_44123220443725586x0_6809210777282715
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 15.011470794677734, "y": 15.116643905639648,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.4331839084625244, "height": 0.6513183116912842,
                    "relativeTransform": [[1, 0, 15.011470794677734], [0, 1, 15.116643905639648]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_70_svg_0_4331839084625244x0_6513183116912842
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 12.273883819580078, "y": 17.418132781982422,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.5975647568702698, "height": 0.6441149711608887,
                    "relativeTransform": [[1, 0, 12.273883819580078], [0, 1, 17.418132781982422]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_71_svg_0_5975647568702698x0_6441149711608887
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.532660484313965, "y": 15.633017539978027,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.44081729650497437, "height": 0.7166435718536377,
                    "relativeTransform": [[1, 0, 13.532660484313965], [0, 1, 15.633017539978027]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_72_svg_0_44081729650497437x0_7166435718536377
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 18.654399871826172, "y": 14.478734970092773,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.5834475755691528, "height": 1.9283004999160767,
                    "relativeTransform": [[1, 0, 18.654399871826172], [0, 1, 14.478734970092773]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_73_svg_1_5834475755691528x1_9283004999160767
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 8.940730094909668, "y": 13.632841110229492,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.410588026046753, "height": 2.7438840866088867,
                    "relativeTransform": [[1, 0, 8.940730094909668], [0, 1, 13.632841110229492]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_74_svg_2_410588026046753x2_7438840866088867
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 31.622190475463867, "y": 29.670364379882812,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.2841854691505432, "height": 1.1788920164108276,
                    "relativeTransform": [[1, 0, 31.622190475463867], [0, 1, 29.670364379882812]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_75_svg_0_2841854691505432x1_1788920164108276
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.160757064819336, "y": 22.854339599609375,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.9880154132843018, "height": 1.6663919687271118,
                    "relativeTransform": [[1, 0, 30.160757064819336], [0, 1, 22.854339599609375]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_76_svg_0_9880154132843018x1_6663919687271118
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 29.482267379760742, "y": 23.533361434936523,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.31168827414512634, "height": 0.17020589113235474,
                    "relativeTransform": [[1, 0, 29.482267379760742], [0, 1, 23.533361434936523]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_77_svg_0_31168827414512634x0_17020589113235474
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.10771369934082, "y": 23.318342208862305,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.24032489955425262, "height": 0.12523064017295837,
                    "relativeTransform": [[1, 0, 30.10771369934082], [0, 1, 23.318342208862305]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_78_svg_0_24032489955425262x0_12523064017295837
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 29.765628814697266, "y": 24.124963760375977,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.1262013912200928, "height": 3.570840358734131,
                    "relativeTransform": [[1, 0, 29.765628814697266], [0, 1, 24.124963760375977]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_79_svg_2_1262013912200928x3_570840358734131
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 28.75994873046875, "y": 27.643842697143555,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.040323257446289, "height": 1.7677944898605347,
                    "relativeTransform": [[1, 0, 28.75994873046875], [0, 1, 27.643842697143555]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_80_svg_1_040323257446289x1_7677944898605347
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.318811416625977, "y": 28.253244400024414,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.0641392469406128, "height": 1.1226662397384644,
                    "relativeTransform": [[1, 0, 30.318811416625977], [0, 1, 28.253244400024414]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_81_svg_1_0641392469406128x1_1226662397384644
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 28.291683197021484, "y": 25.70933723449707,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.2134227603673935, "height": 0.9704169631004333,
                    "relativeTransform": [[1, 0, 28.291683197021484], [0, 1, 25.70933723449707]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_82_svg_0_2134227603673935x0_9704169631004333
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 28.684167861938477, "y": 25.00893211364746,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.3702315092086792, "height": 1.6855201721191406,
                    "relativeTransform": [[1, 0, 28.684167861938477], [0, 1, 25.00893211364746]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_83_svg_0_3702315092086792x1_6855201721191406
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 28.389663696289062, "y": 28.375642776489258,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.0089861154556274, "height": 0.9591357111930847,
                    "relativeTransform": [[1, 0, 28.389663696289062], [0, 1, 28.375642776489258]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_84_svg_1_0089861154556274x0_9591357111930847
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 29.041587829589844, "y": 24.864952087402344,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.602204442024231, "height": 0.3496612310409546,
                    "relativeTransform": [[1, 0, 29.041587829589844], [0, 1, 24.864952087402344]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_85_svg_0_602204442024231x0_3496612310409546
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.339107513427734, "y": 27.29143524169922,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.5541649460792542, "height": 0.20734818279743195,
                    "relativeTransform": [[1, 0, 21.339107513427734], [0, 1, 27.29143524169922]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_86_svg_0_5541649460792542x0_20734818279743195
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.896469116210938, "y": 24.85867691040039,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.547949194908142, "height": 1.276883602142334,
                    "relativeTransform": [[1, 0, 22.896469116210938], [0, 1, 24.85867691040039]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_87_svg_1_547949194908142x1_276883602142334
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.73856544494629, "y": 29.178491592407227,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.595670461654663, "height": 1.6230485439300537,
                    "relativeTransform": [[1, 0, 21.73856544494629], [0, 1, 29.178491592407227]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_88_svg_1_595670461654663x1_6230485439300537
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.411699295043945, "y": 26.52016258239746,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.801289975643158, "height": 1.4939110279083252,
                    "relativeTransform": [[1, 0, 22.411699295043945], [0, 1, 26.52016258239746]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_89_svg_0_801289975643158x1_4939110279083252
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.287416458129883, "y": 28.854127883911133,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.3932336568832397, "height": 1.9615691900253296,
                    "relativeTransform": [[1, 0, 22.287416458129883], [0, 1, 28.854127883911133]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_90_svg_1_3932336568832397x1_9615691900253296
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 24.083356857299805, "y": 29.48200225830078,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.7198910713195801, "height": 1.266421914100647,
                    "relativeTransform": [[1, 0, 24.083356857299805], [0, 1, 29.48200225830078]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_91_svg_0_7198910713195801x1_266421914100647
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 26.88389778137207, "y": 30.520160675048828,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.1779470294713974, "height": 0.7502021789550781,
                    "relativeTransform": [[1, 0, 26.88389778137207], [0, 1, 30.520160675048828]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_92_svg_0_1779470294713974x0_7502021789550781
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 24.16562843322754, "y": 26.507171630859375,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.8443846702575684, "height": 1.1507447957992554,
                    "relativeTransform": [[1, 0, 24.16562843322754], [0, 1, 26.507171630859375]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_93_svg_0_8443846702575684x1_1507447957992554
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.47144889831543, "y": 26.236536026000977,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.1680642366409302, "height": 0.17778876423835754,
                    "relativeTransform": [[1, 0, 22.47144889831543], [0, 1, 26.236536026000977]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_94_svg_1_1680642366409302x0_17778876423835754
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 23.732637405395508, "y": 26.21813201904297,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.1074196100234985, "height": 0.19183331727981567,
                    "relativeTransform": [[1, 0, 23.732637405395508], [0, 1, 26.21813201904297]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_95_svg_1_1074196100234985x0_19183331727981567
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 25.04681968688965, "y": 26.368606567382812,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.7837624549865723, "height": 0.8136681318283081,
                    "relativeTransform": [[1, 0, 25.04681968688965], [0, 1, 26.368606567382812]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_96_svg_0_7837624549865723x0_8136681318283081
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.2419490814209, "y": 30.652057647705078,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.7014880776405334, "height": 0.42886117100715637,
                    "relativeTransform": [[1, 0, 22.2419490814209], [0, 1, 30.652057647705078]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_97_svg_0_7014880776405334x0_42886117100715637
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.440902709960938, "y": 27.277942657470703,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.9726243615150452, "height": 1.2102850675582886,
                    "relativeTransform": [[1, 0, 21.440902709960938], [0, 1, 27.277942657470703]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_AS_Roma_assets_icon_Vector_I190_21075_2936_98_svg_0_9726243615150452x1_2102850675582886
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
