import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


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
                "width": 46.064411, "height": 60,
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
                    "x": -0.000680, "y": 0,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 46.064422, "height": 59.998916,
                    "relativeTransform": [[1, 0, -0.000680], [0, 1, 0]],
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
                    "x": 1.123117, "y": 1.670365,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 43.816555, "height": 28.273881,
                    "relativeTransform": [[1, 0, 1.123117], [0, 1, 1.670365]],
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
                    "x": 2.247361, "y": 30.549392,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 41.558864, "height": 28.312852,
                    "relativeTransform": [[1, 0, 2.247361], [0, 1, 30.549392]],
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
                    "x": 7.165359, "y": 35.207580,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.350472, "height": 7.044111,
                    "relativeTransform": [[1, 0, 7.165359], [0, 1, 35.207580]],
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
                    "x": 14.123951, "y": 35.076587,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.610284, "height": 7.302844,
                    "relativeTransform": [[1, 0, 14.123951], [0, 1, 35.076587]],
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
                    "x": 21.456022, "y": 35.076587,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 9.620569, "height": 7.191342,
                    "relativeTransform": [[1, 0, 21.456022], [0, 1, 35.076587]],
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
                    "x": 30.897972, "y": 35.078754,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.665493, "height": 7.172934,
                    "relativeTransform": [[1, 0, 30.897972], [0, 1, 35.078754]],
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
                    "x": 7.411096, "y": 34.999729,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.350473, "height": 7.041947,
                    "relativeTransform": [[1, 0, 7.411096], [0, 1, 34.999729]],
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
                    "x": 14.369689, "y": 34.869823,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.610282, "height": 7.301760,
                    "relativeTransform": [[1, 0, 14.369689], [0, 1, 34.869823]],
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
                    "x": 21.701759, "y": 34.868743,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 9.621651, "height": 7.190255,
                    "relativeTransform": [[1, 0, 21.701759], [0, 1, 34.868743]],
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
                    "x": 31.143709, "y": 34.870906,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.665493, "height": 7.171854,
                    "relativeTransform": [[1, 0, 31.143709], [0, 1, 34.870906]],
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
                    "x": 19.715290, "y": 46.473609,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.571042, "height": 4.037890,
                    "relativeTransform": [[1, 0, 19.715290], [0, 1, 46.473609]],
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
                    "x": 16.990528, "y": 46.471446,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.985385, "height": 3.936131,
                    "relativeTransform": [[1, 0, 16.990528], [0, 1, 46.471446]],
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
                    "x": 22.737752, "y": 46.470363,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.640324, "height": 3.922058,
                    "relativeTransform": [[1, 0, 22.737752], [0, 1, 46.470363]],
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
                    "x": 25.931259, "y": 46.509338,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.550475, "height": 3.969686,
                    "relativeTransform": [[1, 0, 25.931259], [0, 1, 46.509338]],
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
                    "x": 19.874423, "y": 46.325302,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.572125, "height": 4.037890,
                    "relativeTransform": [[1, 0, 19.874423], [0, 1, 46.325302]],
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
                    "x": 17.150743, "y": 46.324222,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.984303, "height": 3.935044,
                    "relativeTransform": [[1, 0, 17.150743], [0, 1, 46.324222]],
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
                    "x": 22.895805, "y": 46.324222,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.641406, "height": 3.920974,
                    "relativeTransform": [[1, 0, 22.895805], [0, 1, 46.324222]],
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
                    "x": 26.090393, "y": 46.362110,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.550475, "height": 3.969690,
                    "relativeTransform": [[1, 0, 26.090393], [0, 1, 46.362110]],
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
                    "x": 5.251668, "y": 11.749932,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 35.347229, "height": 20.893098,
                    "relativeTransform": [[1, 0, 5.251668], [0, 1, 11.749932]],
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
                    "x": 16.430276, "y": 31.665954,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.152894, "height": 0.147458,
                    "relativeTransform": [[1, 0, 16.430276], [0, 1, 31.665954]],
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
                    "x": 30.437891, "y": 23.007307,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.126655, "height": 0.064953,
                    "relativeTransform": [[1, 0, 30.437891], [0, 1, 23.007307]],
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
                    "x": 30.007038, "y": 22.880649,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.289037, "height": 0.184032,
                    "relativeTransform": [[1, 0, 30.007038], [0, 1, 22.880649]],
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
                    "x": 29.617321, "y": 22.851421,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.219756, "height": 0.088769,
                    "relativeTransform": [[1, 0, 29.617321], [0, 1, 22.851421]],
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
                    "x": 29.642221, "y": 22.867103,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.168876, "height": 0.055766,
                    "relativeTransform": [[1, 0, 29.642221], [0, 1, 22.867103]],
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
                    "x": 25.823265, "y": 22.453044,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.753381, "height": 8.876860,
                    "relativeTransform": [[1, 0, 25.823265], [0, 1, 22.453044]],
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
                    "x": 26.182415, "y": 22.778890,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.100195, "height": 8.217993,
                    "relativeTransform": [[1, 0, 26.182415], [0, 1, 22.778890]],
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
                    "x": 30.758184, "y": 23.919893,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.268606, "height": 0.150473,
                    "relativeTransform": [[1, 0, 30.758184], [0, 1, 23.919893]],
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
                    "x": 20.761613, "y": 24.308525,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.384698, "height": 8.060623,
                    "relativeTransform": [[1, 0, 20.761613], [0, 1, 24.308525]],
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
                    "x": 21.065137, "y": 24.619199,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.779384, "height": 7.446833,
                    "relativeTransform": [[1, 0, 21.065137], [0, 1, 24.619199]],
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
                    "x": 28.617567, "y": 20.943979,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.728326, "height": 2.066576,
                    "relativeTransform": [[1, 0, 28.617567], [0, 1, 20.943979]],
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
                    "x": 6.214791, "y": 14.307728,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.094274, "height": 5.156924,
                    "relativeTransform": [[1, 0, 6.214791], [0, 1, 14.307728]],
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
                    "x": 37.073524, "y": 31.030042,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.630303, "height": 1.063526,
                    "relativeTransform": [[1, 0, 37.073524], [0, 1, 31.030042]],
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
                    "x": 20.600759, "y": 22.500511,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.855690, "height": 1.415091,
                    "relativeTransform": [[1, 0, 20.600759], [0, 1, 22.500511]],
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
                    "x": 30.056074, "y": 14.512227,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 10.088794, "height": 17.591098,
                    "relativeTransform": [[1, 0, 30.056074], [0, 1, 14.512227]],
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
                    "x": 6.905548, "y": 12.887686,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.826065, "height": 1.522056,
                    "relativeTransform": [[1, 0, 6.905548], [0, 1, 12.887686]],
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
                    "x": 33.769962, "y": 30.588735,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.655952, "height": 0.574857,
                    "relativeTransform": [[1, 0, 33.769962], [0, 1, 30.588735]],
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
                    "x": 33.325706, "y": 30.420568,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.450410, "height": 0.624454,
                    "relativeTransform": [[1, 0, 33.325706], [0, 1, 30.420568]],
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
                    "x": 5.895852, "y": 16.695550,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.495889, "height": 0.457425,
                    "relativeTransform": [[1, 0, 5.895852], [0, 1, 16.695550]],
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
                    "x": 14.369443, "y": 31.397924,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.620854, "height": 0.791709,
                    "relativeTransform": [[1, 0, 14.369443], [0, 1, 31.397924]],
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
                    "x": 35.315525, "y": 26.906747,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.291407, "height": 3.722213,
                    "relativeTransform": [[1, 0, 35.315525], [0, 1, 26.906747]],
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
                    "x": 6.670636, "y": 12.242959,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 11.438159, "height": 7.759206,
                    "relativeTransform": [[1, 0, 6.670636], [0, 1, 12.242959]],
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
                    "x": 26.260398, "y": 21.572227,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.112839, "height": 1.793116,
                    "relativeTransform": [[1, 0, 26.260398], [0, 1, 21.572227]],
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
                    "x": 23.404550, "y": 21.688367,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.202757, "height": 1.665369,
                    "relativeTransform": [[1, 0, 23.404550], [0, 1, 21.688367]],
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
                    "x": 14.864192, "y": 14.483031,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 16.518758, "height": 17.782571,
                    "relativeTransform": [[1, 0, 14.864192], [0, 1, 14.483031]],
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
                    "x": 28.890684, "y": 21.196504,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.196459, "height": 1.548318,
                    "relativeTransform": [[1, 0, 28.890684], [0, 1, 21.196504]],
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
                    "x": 21.505493, "y": 17.906360,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.156484, "height": 2.682543,
                    "relativeTransform": [[1, 0, 21.505493], [0, 1, 17.906360]],
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
                    "x": 29.366712, "y": 29.516492,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.796161, "height": 0.636855,
                    "relativeTransform": [[1, 0, 29.366712], [0, 1, 29.516492]],
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
                    "x": 8.153721, "y": 14.679025,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.015954, "height": 0.992848,
                    "relativeTransform": [[1, 0, 8.153721], [0, 1, 14.679025]],
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
                    "x": 8.376725, "y": 14.771715,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.510839, "height": 0.947907,
                    "relativeTransform": [[1, 0, 8.376725], [0, 1, 14.771715]],
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
                    "x": 12.800000, "y": 17.014343,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.733964, "height": 0.848714,
                    "relativeTransform": [[1, 0, 12.800000], [0, 1, 17.014343]],
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
                    "x": 13.303382, "y": 17.485250,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.774018, "height": 0.844384,
                    "relativeTransform": [[1, 0, 13.303382], [0, 1, 17.485250]],
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
                    "x": 12.143979, "y": 18.146684,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.674372, "height": 0.965629,
                    "relativeTransform": [[1, 0, 12.143979], [0, 1, 18.146684]],
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
                    "x": 12.764276, "y": 17.810014,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.640865, "height": 1.045736,
                    "relativeTransform": [[1, 0, 12.764276], [0, 1, 17.810014]],
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
                    "x": 13.267659, "y": 18.146684,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.633913, "height": 0.889851,
                    "relativeTransform": [[1, 0, 13.267659], [0, 1, 18.146684]],
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
                    "x": 13.404059, "y": 16.580244,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.771853, "height": 0.933152,
                    "relativeTransform": [[1, 0, 13.404059], [0, 1, 16.580244]],
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
                    "x": 13.011096, "y": 16.122325,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.637618, "height": 0.894182,
                    "relativeTransform": [[1, 0, 13.011096], [0, 1, 16.122325]],
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
                    "x": 13.816509, "y": 15.983760,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.523951, "height": 0.726387,
                    "relativeTransform": [[1, 0, 13.816509], [0, 1, 15.983760]],
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
                    "x": 14.425344, "y": 15.586467,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.441232, "height": 0.680921,
                    "relativeTransform": [[1, 0, 14.425344], [0, 1, 15.586467]],
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
                    "x": 15.011470, "y": 15.116643,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.433183, "height": 0.651318,
                    "relativeTransform": [[1, 0, 15.011470], [0, 1, 15.116643]],
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
                    "x": 12.273883, "y": 17.418132,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.597564, "height": 0.644114,
                    "relativeTransform": [[1, 0, 12.273883], [0, 1, 17.418132]],
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
                    "x": 13.532660, "y": 15.633017,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.440817, "height": 0.716643,
                    "relativeTransform": [[1, 0, 13.532660], [0, 1, 15.633017]],
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
                    "x": 18.654399, "y": 14.478734,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.583447, "height": 1.928300,
                    "relativeTransform": [[1, 0, 18.654399], [0, 1, 14.478734]],
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
                    "x": 8.940730, "y": 13.632841,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.410588, "height": 2.743884,
                    "relativeTransform": [[1, 0, 8.940730], [0, 1, 13.632841]],
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
                    "x": 31.622190, "y": 29.670364,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.284185, "height": 1.178892,
                    "relativeTransform": [[1, 0, 31.622190], [0, 1, 29.670364]],
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
                    "x": 30.160757, "y": 22.854339,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.988015, "height": 1.666391,
                    "relativeTransform": [[1, 0, 30.160757], [0, 1, 22.854339]],
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
                    "x": 29.482267, "y": 23.533361,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.311688, "height": 0.170205,
                    "relativeTransform": [[1, 0, 29.482267], [0, 1, 23.533361]],
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
                    "x": 30.107713, "y": 23.318342,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.240324, "height": 0.125230,
                    "relativeTransform": [[1, 0, 30.107713], [0, 1, 23.318342]],
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
                    "x": 29.765628, "y": 24.124963,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.126201, "height": 3.570840,
                    "relativeTransform": [[1, 0, 29.765628], [0, 1, 24.124963]],
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
                    "x": 28.759948, "y": 27.643842,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.040323, "height": 1.767794,
                    "relativeTransform": [[1, 0, 28.759948], [0, 1, 27.643842]],
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
                    "x": 30.318811, "y": 28.253244,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.064139, "height": 1.122666,
                    "relativeTransform": [[1, 0, 30.318811], [0, 1, 28.253244]],
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
                    "x": 28.291683, "y": 25.709337,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.213422, "height": 0.970416,
                    "relativeTransform": [[1, 0, 28.291683], [0, 1, 25.709337]],
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
                    "x": 28.684167, "y": 25.008932,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.370231, "height": 1.685520,
                    "relativeTransform": [[1, 0, 28.684167], [0, 1, 25.008932]],
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
                    "x": 28.389663, "y": 28.375642,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.008986, "height": 0.959135,
                    "relativeTransform": [[1, 0, 28.389663], [0, 1, 28.375642]],
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
                    "x": 29.041587, "y": 24.864952,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.602204, "height": 0.349661,
                    "relativeTransform": [[1, 0, 29.041587], [0, 1, 24.864952]],
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
                    "x": 21.339107, "y": 27.291435,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.554164, "height": 0.207348,
                    "relativeTransform": [[1, 0, 21.339107], [0, 1, 27.291435]],
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
                    "x": 22.896469, "y": 24.858676,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.547949, "height": 1.276883,
                    "relativeTransform": [[1, 0, 22.896469], [0, 1, 24.858676]],
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
                    "x": 21.738565, "y": 29.178491,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.595670, "height": 1.623048,
                    "relativeTransform": [[1, 0, 21.738565], [0, 1, 29.178491]],
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
                    "x": 22.411699, "y": 26.520162,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.801289, "height": 1.493911,
                    "relativeTransform": [[1, 0, 22.411699], [0, 1, 26.520162]],
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
                    "x": 22.287416, "y": 28.854127,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.393233, "height": 1.961569,
                    "relativeTransform": [[1, 0, 22.287416], [0, 1, 28.854127]],
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
                    "x": 24.083356, "y": 29.482002,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.719891, "height": 1.266421,
                    "relativeTransform": [[1, 0, 24.083356], [0, 1, 29.482002]],
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
                    "x": 26.883897, "y": 30.520160,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.177947, "height": 0.750202,
                    "relativeTransform": [[1, 0, 26.883897], [0, 1, 30.520160]],
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
                    "x": 24.165628, "y": 26.507171,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.844384, "height": 1.150744,
                    "relativeTransform": [[1, 0, 24.165628], [0, 1, 26.507171]],
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
                    "x": 22.471448, "y": 26.236536,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.168064, "height": 0.177788,
                    "relativeTransform": [[1, 0, 22.471448], [0, 1, 26.236536]],
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
                    "x": 23.732637, "y": 26.218132,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.107419, "height": 0.191833,
                    "relativeTransform": [[1, 0, 23.732637], [0, 1, 26.218132]],
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
                    "x": 25.046819, "y": 26.368606,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.783762, "height": 0.813668,
                    "relativeTransform": [[1, 0, 25.046819], [0, 1, 26.368606]],
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
                    "x": 22.241949, "y": 30.652057,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.701488, "height": 0.428861,
                    "relativeTransform": [[1, 0, 22.241949], [0, 1, 30.652057]],
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
                    "x": 21.440902, "y": 27.277942,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.972624, "height": 1.210285,
                    "relativeTransform": [[1, 0, 21.440902], [0, 1, 27.277942]],
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
