import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


// SVG Assets
import SVG_Mallorca_assets_icon_path3_I190_21135_635_138_svg_45_447105407714844x59_99999237060547 from "./assets/Mallorca_assets_icon_path3_I190_21135_635_138_svg_45_447105407714844x59_99999237060547.svg";
import SVG_Mallorca_assets_icon_path5_I190_21135_635_139_svg_1_4870529174804688x6_578917980194092 from "./assets/Mallorca_assets_icon_path5_I190_21135_635_139_svg_1_4870529174804688x6_578917980194092.svg";
import SVG_Mallorca_assets_icon_path7_I190_21135_635_140_svg_18_120132446289062x2_1782360076904297 from "./assets/Mallorca_assets_icon_path7_I190_21135_635_140_svg_18_120132446289062x2_1782360076904297.svg";
import SVG_Mallorca_assets_icon_path9_I190_21135_635_141_svg_1_3531341552734375x6_50557804107666 from "./assets/Mallorca_assets_icon_path9_I190_21135_635_141_svg_1_3531341552734375x6_50557804107666.svg";
import SVG_Mallorca_assets_icon_path11_I190_21135_635_142_svg_1_2118949890136719x5_234951019287109 from "./assets/Mallorca_assets_icon_path11_I190_21135_635_142_svg_1_2118949890136719x5_234951019287109.svg";
import SVG_Mallorca_assets_icon_path13_I190_21135_635_143_svg_1_2118911743164062x5_501650333404541 from "./assets/Mallorca_assets_icon_path13_I190_21135_635_143_svg_1_2118911743164062x5_501650333404541.svg";
import SVG_Mallorca_assets_icon_path15_I190_21135_635_144_svg_24_59953498840332x5_255697250366211 from "./assets/Mallorca_assets_icon_path15_I190_21135_635_144_svg_24_59953498840332x5_255697250366211.svg";
import SVG_Mallorca_assets_icon_path17_I190_21135_635_145_svg_0_8686809539794922x0_8763022422790527 from "./assets/Mallorca_assets_icon_path17_I190_21135_635_145_svg_0_8686809539794922x0_8763022422790527.svg";
import SVG_Mallorca_assets_icon_path19_I190_21135_635_146_svg_4_225465774536133x5_078804016113281 from "./assets/Mallorca_assets_icon_path19_I190_21135_635_146_svg_4_225465774536133x5_078804016113281.svg";
import SVG_Mallorca_assets_icon_path21_I190_21135_635_147_svg_4_580776214599609x5_148834228515625 from "./assets/Mallorca_assets_icon_path21_I190_21135_635_147_svg_4_580776214599609x5_148834228515625.svg";
import SVG_Mallorca_assets_icon_path23_I190_21135_635_148_svg_34_25959014892578x34_25959014892578 from "./assets/Mallorca_assets_icon_path23_I190_21135_635_148_svg_34_25959014892578x34_25959014892578.svg";
import SVG_Mallorca_assets_icon_path25_I190_21135_635_149_svg_3_7868881225585938x3_67535400390625 from "./assets/Mallorca_assets_icon_path25_I190_21135_635_149_svg_3_7868881225585938x3_67535400390625.svg";
import SVG_Mallorca_assets_icon_path27_I190_21135_635_150_svg_29_931419372558594x29_83998680114746 from "./assets/Mallorca_assets_icon_path27_I190_21135_635_150_svg_29_931419372558594x29_83998680114746.svg";
import SVG_Mallorca_assets_icon_path29_I190_21135_635_151_svg_3_417034149169922x3_2285690307617188 from "./assets/Mallorca_assets_icon_path29_I190_21135_635_151_svg_3_417034149169922x3_2285690307617188.svg";
import SVG_Mallorca_assets_icon_path31_I190_21135_635_152_svg_1_865762710571289x0_9585494995117188 from "./assets/Mallorca_assets_icon_path31_I190_21135_635_152_svg_1_865762710571289x0_9585494995117188.svg";
import SVG_Mallorca_assets_icon_path33_I190_21135_635_153_svg_3_270465850830078x1_6724929809570312 from "./assets/Mallorca_assets_icon_path33_I190_21135_635_153_svg_3_270465850830078x1_6724929809570312.svg";
import SVG_Mallorca_assets_icon_path35_I190_21135_635_154_svg_3_0932140350341797x4_222709655761719 from "./assets/Mallorca_assets_icon_path35_I190_21135_635_154_svg_3_0932140350341797x4_222709655761719.svg";
import SVG_Mallorca_assets_icon_path37_I190_21135_635_155_svg_3_062986373901367x2_941253662109375 from "./assets/Mallorca_assets_icon_path37_I190_21135_635_155_svg_3_062986373901367x2_941253662109375.svg";
import SVG_Mallorca_assets_icon_path39_I190_21135_635_156_svg_2_6955318450927734x0_8156623840332031 from "./assets/Mallorca_assets_icon_path39_I190_21135_635_156_svg_2_6955318450927734x0_8156623840332031.svg";
import SVG_Mallorca_assets_icon_path41_I190_21135_635_157_svg_10_084259033203125x8_310379028320312 from "./assets/Mallorca_assets_icon_path41_I190_21135_635_157_svg_10_084259033203125x8_310379028320312.svg";
import SVG_Mallorca_assets_icon_path43_I190_21135_635_158_svg_7_488122940063477x5_733165740966797 from "./assets/Mallorca_assets_icon_path43_I190_21135_635_158_svg_7_488122940063477x5_733165740966797.svg";
import SVG_Mallorca_assets_icon_path45_I190_21135_635_159_svg_3_2105636596679688x3_079395294189453 from "./assets/Mallorca_assets_icon_path45_I190_21135_635_159_svg_3_2105636596679688x3_079395294189453.svg";
import SVG_Mallorca_assets_icon_path47_I190_21135_635_160_svg_1_2819976806640625x1_9549598693847656 from "./assets/Mallorca_assets_icon_path47_I190_21135_635_160_svg_1_2819976806640625x1_9549598693847656.svg";
import SVG_Mallorca_assets_icon_path49_I190_21135_635_161_svg_1_7769088745117188x2_40020751953125 from "./assets/Mallorca_assets_icon_path49_I190_21135_635_161_svg_1_7769088745117188x2_40020751953125.svg";
import SVG_Mallorca_assets_icon_path51_I190_21135_635_162_svg_2_0305824279785156x2_5067291259765625 from "./assets/Mallorca_assets_icon_path51_I190_21135_635_162_svg_2_0305824279785156x2_5067291259765625.svg";
import SVG_Mallorca_assets_icon_path53_I190_21135_635_163_svg_2_5419979095458984x2_8949546813964844 from "./assets/Mallorca_assets_icon_path53_I190_21135_635_163_svg_2_5419979095458984x2_8949546813964844.svg";
import SVG_Mallorca_assets_icon_path55_I190_21135_635_164_svg_36_89095687866211x14_05130386352539 from "./assets/Mallorca_assets_icon_path55_I190_21135_635_164_svg_36_89095687866211x14_05130386352539.svg";
import SVG_Mallorca_assets_icon_path57_I190_21135_635_165_svg_6_125520706176758x6_294286727905273 from "./assets/Mallorca_assets_icon_path57_I190_21135_635_165_svg_6_125520706176758x6_294286727905273.svg";
import SVG_Mallorca_assets_icon_path59_I190_21135_635_166_svg_7_4371337890625x1_8701801300048828 from "./assets/Mallorca_assets_icon_path59_I190_21135_635_166_svg_7_4371337890625x1_8701801300048828.svg";
import SVG_Mallorca_assets_icon_path61_I190_21135_635_167_svg_6_128898620605469x6_294286727905273 from "./assets/Mallorca_assets_icon_path61_I190_21135_635_167_svg_6_128898620605469x6_294286727905273.svg";
import SVG_Mallorca_assets_icon_path63_I190_21135_635_168_svg_5_705657958984375x1_87042236328125 from "./assets/Mallorca_assets_icon_path63_I190_21135_635_168_svg_5_705657958984375x1_87042236328125.svg";
import SVG_Mallorca_assets_icon_path65_I190_21135_635_169_svg_4_335787773132324x4_3967437744140625 from "./assets/Mallorca_assets_icon_path65_I190_21135_635_169_svg_4_335787773132324x4_3967437744140625.svg";
import SVG_Mallorca_assets_icon_path67_I190_21135_635_170_svg_0_19050073623657227x0_26670074462890625 from "./assets/Mallorca_assets_icon_path67_I190_21135_635_170_svg_0_19050073623657227x0_26670074462890625.svg";
import SVG_Mallorca_assets_icon_path69_I190_21135_635_171_svg_1_790703296661377x3_0937232971191406 from "./assets/Mallorca_assets_icon_path69_I190_21135_635_171_svg_1_790703296661377x3_0937232971191406.svg";
import SVG_Mallorca_assets_icon_path71_I190_21135_635_172_svg_4_358648300170898x2_1756515502929688 from "./assets/Mallorca_assets_icon_path71_I190_21135_635_172_svg_4_358648300170898x2_1756515502929688.svg";
import SVG_Mallorca_assets_icon_path73_I190_21135_635_173_svg_4_983489990234375x3_6957054138183594 from "./assets/Mallorca_assets_icon_path73_I190_21135_635_173_svg_4_983489990234375x3_6957054138183594.svg";
import SVG_Mallorca_assets_icon_path75_I190_21135_635_174_svg_0_38774728775024414x0_28597259521484375 from "./assets/Mallorca_assets_icon_path75_I190_21135_635_174_svg_0_38774728775024414x0_28597259521484375.svg";
import SVG_Mallorca_assets_icon_path77_I190_21135_635_175_svg_0_29909610748291016x0_3698387145996094 from "./assets/Mallorca_assets_icon_path77_I190_21135_635_175_svg_0_29909610748291016x0_3698387145996094.svg";
import SVG_Mallorca_assets_icon_path79_I190_21135_635_176_svg_2_2610044479370117x3_9090652465820312 from "./assets/Mallorca_assets_icon_path79_I190_21135_635_176_svg_2_2610044479370117x3_9090652465820312.svg";
import SVG_Mallorca_assets_icon_path81_I190_21135_635_177_svg_1_417208194732666x3_3909072875976562 from "./assets/Mallorca_assets_icon_path81_I190_21135_635_177_svg_1_417208194732666x3_3909072875976562.svg";
import SVG_Mallorca_assets_icon_path83_I190_21135_635_178_svg_1_3858938217163086x5_8369293212890625 from "./assets/Mallorca_assets_icon_path83_I190_21135_635_178_svg_1_3858938217163086x5_8369293212890625.svg";
import SVG_Mallorca_assets_icon_path85_I190_21135_635_179_svg_3_9401230812072754x5_113029479980469 from "./assets/Mallorca_assets_icon_path85_I190_21135_635_179_svg_3_9401230812072754x5_113029479980469.svg";
import SVG_Mallorca_assets_icon_path87_I190_21135_635_180_svg_0_5061826705932617x0_4738121032714844 from "./assets/Mallorca_assets_icon_path87_I190_21135_635_180_svg_0_5061826705932617x0_4738121032714844.svg";
import SVG_Mallorca_assets_icon_path89_I190_21135_635_181_svg_0_5974091291427612x0_6943817138671875 from "./assets/Mallorca_assets_icon_path89_I190_21135_635_181_svg_0_5974091291427612x0_6943817138671875.svg";
import SVG_Mallorca_assets_icon_path91_I190_21135_635_182_svg_1_7969712018966675x5_295906066894531 from "./assets/Mallorca_assets_icon_path91_I190_21135_635_182_svg_1_7969712018966675x5_295906066894531.svg";
import SVG_Mallorca_assets_icon_path93_I190_21135_635_183_svg_1_7681798934936523x5_859794616699219 from "./assets/Mallorca_assets_icon_path93_I190_21135_635_183_svg_1_7681798934936523x5_859794616699219.svg";
import SVG_Mallorca_assets_icon_path95_I190_21135_635_184_svg_1_9284303188323975x4_1986236572265625 from "./assets/Mallorca_assets_icon_path95_I190_21135_635_184_svg_1_9284303188323975x4_1986236572265625.svg";
import SVG_Mallorca_assets_icon_path97_I190_21135_635_185_svg_1_4102661609649658x6_347471237182617 from "./assets/Mallorca_assets_icon_path97_I190_21135_635_185_svg_1_4102661609649658x6_347471237182617.svg";
import SVG_Mallorca_assets_icon_path99_I190_21135_635_186_svg_0_4724409580230713x0_4267158508300781 from "./assets/Mallorca_assets_icon_path99_I190_21135_635_186_svg_0_4724409580230713x0_4267158508300781.svg";
import SVG_Mallorca_assets_icon_path101_I190_21135_635_187_svg_1_3346364498138428x1_927072525024414 from "./assets/Mallorca_assets_icon_path101_I190_21135_635_187_svg_1_3346364498138428x1_927072525024414.svg";
import SVG_Mallorca_assets_icon_path103_I190_21135_635_188_svg_2_001614570617676x3_764284133911133 from "./assets/Mallorca_assets_icon_path103_I190_21135_635_188_svg_2_001614570617676x3_764284133911133.svg";
import SVG_Mallorca_assets_icon_path105_I190_21135_635_189_svg_0_5791211128234863x0_6009731292724609 from "./assets/Mallorca_assets_icon_path105_I190_21135_635_189_svg_0_5791211128234863x0_6009731292724609.svg";
import SVG_Mallorca_assets_icon_path107_I190_21135_635_190_svg_0_994985818862915x2_049783706665039 from "./assets/Mallorca_assets_icon_path107_I190_21135_635_190_svg_0_994985818862915x2_049783706665039.svg";
import SVG_Mallorca_assets_icon_path109_I190_21135_635_191_svg_1_0045452117919922x4_213874816894531 from "./assets/Mallorca_assets_icon_path109_I190_21135_635_191_svg_1_0045452117919922x4_213874816894531.svg";
import SVG_Mallorca_assets_icon_path111_I190_21135_635_192_svg_0_5791215896606445x2_491741180419922 from "./assets/Mallorca_assets_icon_path111_I190_21135_635_192_svg_0_5791215896606445x2_491741180419922.svg";
import SVG_Mallorca_assets_icon_path113_I190_21135_635_193_svg_0_3581409454345703x1_2573127746582031 from "./assets/Mallorca_assets_icon_path113_I190_21135_635_193_svg_0_3581409454345703x1_2573127746582031.svg";
import SVG_Mallorca_assets_icon_path115_I190_21135_635_194_svg_3_459484100341797x4_198631286621094 from "./assets/Mallorca_assets_icon_path115_I190_21135_635_194_svg_3_459484100341797x4_198631286621094.svg";
import SVG_Mallorca_assets_icon_path117_I190_21135_635_195_svg_2_0513038635253906x4_236728668212891 from "./assets/Mallorca_assets_icon_path117_I190_21135_635_195_svg_2_0513038635253906x4_236728668212891.svg";
import SVG_Mallorca_assets_icon_path119_I190_21135_635_196_svg_2_941326141357422x5_151130676269531 from "./assets/Mallorca_assets_icon_path119_I190_21135_635_196_svg_2_941326141357422x5_151130676269531.svg";
import SVG_Mallorca_assets_icon_path121_I190_21135_635_197_svg_0_5066452026367188x0_6277103424072266 from "./assets/Mallorca_assets_icon_path121_I190_21135_635_197_svg_0_5066452026367188x0_6277103424072266.svg";
import SVG_Mallorca_assets_icon_path123_I190_21135_635_198_svg_1_4253005981445312x2_5755691528320312 from "./assets/Mallorca_assets_icon_path123_I190_21135_635_198_svg_1_4253005981445312x2_5755691528320312.svg";
import SVG_Mallorca_assets_icon_path125_I190_21135_635_199_svg_1_8468437194824219x4_8234710693359375 from "./assets/Mallorca_assets_icon_path125_I190_21135_635_199_svg_1_8468437194824219x4_8234710693359375.svg";
import SVG_Mallorca_assets_icon_path127_I190_21135_635_200_svg_2_2402877807617188x3_1106529235839844 from "./assets/Mallorca_assets_icon_path127_I190_21135_635_200_svg_2_2402877807617188x3_1106529235839844.svg";
import SVG_Mallorca_assets_icon_path129_I190_21135_635_201_svg_2_349811553955078x4_686305999755859 from "./assets/Mallorca_assets_icon_path129_I190_21135_635_201_svg_2_349811553955078x4_686305999755859.svg";
import SVG_Mallorca_assets_icon_path131_I190_21135_635_202_svg_0_5835227966308594x0_49530792236328125 from "./assets/Mallorca_assets_icon_path131_I190_21135_635_202_svg_0_5835227966308594x0_49530792236328125.svg";
import SVG_Mallorca_assets_icon_path133_I190_21135_635_203_svg_2_010955810546875x5_105403900146484 from "./assets/Mallorca_assets_icon_path133_I190_21135_635_203_svg_2_010955810546875x5_105403900146484.svg";
import SVG_Mallorca_assets_icon_path135_I190_21135_635_204_svg_4_305309295654297x3_1548004150390625 from "./assets/Mallorca_assets_icon_path135_I190_21135_635_204_svg_4_305309295654297x3_1548004150390625.svg";
import SVG_Mallorca_assets_icon_path137_I190_21135_635_205_svg_0_5317192077636719x0_4652366638183594 from "./assets/Mallorca_assets_icon_path137_I190_21135_635_205_svg_0_5317192077636719x0_4652366638183594.svg";
import SVG_Mallorca_assets_icon_path139_I190_21135_635_206_svg_0_4038658142089844x0_5172309875488281 from "./assets/Mallorca_assets_icon_path139_I190_21135_635_206_svg_0_4038658142089844x0_5172309875488281.svg";
import SVG_Mallorca_assets_icon_path141_I190_21135_635_207_svg_2_0567398071289062x6_042671203613281 from "./assets/Mallorca_assets_icon_path141_I190_21135_635_207_svg_2_0567398071289062x6_042671203613281.svg";
import SVG_Mallorca_assets_icon_path143_I190_21135_635_208_svg_3_8785934448242188x4_792987823486328 from "./assets/Mallorca_assets_icon_path143_I190_21135_635_208_svg_3_8785934448242188x4_792987823486328.svg";
import SVG_Mallorca_assets_icon_path145_I190_21135_635_209_svg_0_396240234375x0_5257835388183594 from "./assets/Mallorca_assets_icon_path145_I190_21135_635_209_svg_0_396240234375x0_5257835388183594.svg";
import SVG_Mallorca_assets_icon_path147_I190_21135_635_210_svg_0_6279106140136719x0_43206024169921875 from "./assets/Mallorca_assets_icon_path147_I190_21135_635_210_svg_0_6279106140136719x0_43206024169921875.svg";
import SVG_Mallorca_assets_icon_path149_I190_21135_635_211_svg_4_549144744873047x2_0966033935546875 from "./assets/Mallorca_assets_icon_path149_I190_21135_635_211_svg_4_549144744873047x2_0966033935546875.svg";
import SVG_Mallorca_assets_icon_path151_I190_21135_635_212_svg_2_0193099975585938x0_4005584716796875 from "./assets/Mallorca_assets_icon_path151_I190_21135_635_212_svg_2_0193099975585938x0_4005584716796875.svg";
import SVG_Mallorca_assets_icon_path153_I190_21135_635_213_svg_1_5329132080078125x3_9700279235839844 from "./assets/Mallorca_assets_icon_path153_I190_21135_635_213_svg_1_5329132080078125x3_9700279235839844.svg";
import SVG_Mallorca_assets_icon_path155_I190_21135_635_214_svg_1_2344436645507812x1_226822853088379 from "./assets/Mallorca_assets_icon_path155_I190_21135_635_214_svg_1_2344436645507812x1_226822853088379.svg";
import SVG_Mallorca_assets_icon_path157_I190_21135_635_215_svg_0_7010421752929688x0_4572010040283203 from "./assets/Mallorca_assets_icon_path157_I190_21135_635_215_svg_0_7010421752929688x0_4572010040283203.svg";
import SVG_Mallorca_assets_icon_path159_I190_21135_635_216_svg_0_7010421752929688x0_3809995651245117 from "./assets/Mallorca_assets_icon_path159_I190_21135_635_216_svg_0_7010421752929688x0_3809995651245117.svg";
import SVG_Mallorca_assets_icon_path161_I190_21135_635_217_svg_20_18410873413086x2_2629966735839844 from "./assets/Mallorca_assets_icon_path161_I190_21135_635_217_svg_20_18410873413086x2_2629966735839844.svg";
import SVG_Mallorca_assets_icon_path163_I190_21135_635_218_svg_2_057403564453125x0_6353120803833008 from "./assets/Mallorca_assets_icon_path163_I190_21135_635_218_svg_2_057403564453125x0_6353120803833008.svg";
import SVG_Mallorca_assets_icon_path165_I190_21135_635_219_svg_0_7010421752929688x0_36576175689697266 from "./assets/Mallorca_assets_icon_path165_I190_21135_635_219_svg_0_7010421752929688x0_36576175689697266.svg";
import SVG_Mallorca_assets_icon_path167_I190_21135_635_220_svg_0_6858043670654297x0_42672061920166016 from "./assets/Mallorca_assets_icon_path167_I190_21135_635_220_svg_0_6858043670654297x0_42672061920166016.svg";
import SVG_Mallorca_assets_icon_path169_I190_21135_635_221_svg_0_6705636978149414x0_44196319580078125 from "./assets/Mallorca_assets_icon_path169_I190_21135_635_221_svg_0_6705636978149414x0_44196319580078125.svg";
import SVG_Mallorca_assets_icon_path171_I190_21135_635_222_svg_1_3868427276611328x0_34095191955566406 from "./assets/Mallorca_assets_icon_path171_I190_21135_635_222_svg_1_3868427276611328x0_34095191955566406.svg";
import SVG_Mallorca_assets_icon_path173_I190_21135_635_223_svg_2_0574073791503906x0_6353120803833008 from "./assets/Mallorca_assets_icon_path173_I190_21135_635_223_svg_2_0574073791503906x0_6353120803833008.svg";
import SVG_Mallorca_assets_icon_path175_I190_21135_635_224_svg_0_7010402679443359x0_36576175689697266 from "./assets/Mallorca_assets_icon_path175_I190_21135_635_224_svg_0_7010402679443359x0_36576175689697266.svg";
import SVG_Mallorca_assets_icon_path177_I190_21135_635_225_svg_0_6857967376708984x0_42672061920166016 from "./assets/Mallorca_assets_icon_path177_I190_21135_635_225_svg_0_6857967376708984x0_42672061920166016.svg";
import SVG_Mallorca_assets_icon_path179_I190_21135_635_226_svg_0_670562744140625x0_44196319580078125 from "./assets/Mallorca_assets_icon_path179_I190_21135_635_226_svg_0_670562744140625x0_44196319580078125.svg";
import SVG_Mallorca_assets_icon_path181_I190_21135_635_227_svg_1_3868408203125x0_34095191955566406 from "./assets/Mallorca_assets_icon_path181_I190_21135_635_227_svg_1_3868408203125x0_34095191955566406.svg";
import SVG_Mallorca_assets_icon_path183_I190_21135_635_228_svg_1_5087661743164062x0_8382015228271484 from "./assets/Mallorca_assets_icon_path183_I190_21135_635_228_svg_1_5087661743164062x0_8382015228271484.svg";
import SVG_Mallorca_assets_icon_path185_I190_21135_635_229_svg_0_6324634552001953x0_6324615478515625 from "./assets/Mallorca_assets_icon_path185_I190_21135_635_229_svg_0_6324634552001953x0_6324615478515625.svg";
import SVG_Mallorca_assets_icon_path187_I190_21135_635_230_svg_1_5087623596191406x0_8382015228271484 from "./assets/Mallorca_assets_icon_path187_I190_21135_635_230_svg_1_5087623596191406x0_8382015228271484.svg";
import SVG_Mallorca_assets_icon_path189_I190_21135_635_231_svg_0_7772407531738281x0_7848606109619141 from "./assets/Mallorca_assets_icon_path189_I190_21135_635_231_svg_0_7772407531738281x0_7848606109619141.svg";
import SVG_Mallorca_assets_icon_path191_I190_21135_635_232_svg_0_9601211547851562x0_9677419662475586 from "./assets/Mallorca_assets_icon_path191_I190_21135_635_232_svg_0_9601211547851562x0_9677419662475586.svg";
import SVG_Mallorca_assets_icon_path193_I190_21135_635_233_svg_0_8839244842529297x0_8915419578552246 from "./assets/Mallorca_assets_icon_path193_I190_21135_635_233_svg_0_8839244842529297x0_8915419578552246.svg";
import SVG_Mallorca_assets_icon_path195_I190_21135_635_234_svg_0_9296398162841797x0_9372611045837402 from "./assets/Mallorca_assets_icon_path195_I190_21135_635_234_svg_0_9296398162841797x0_9372611045837402.svg";
import SVG_Mallorca_assets_icon_path197_I190_21135_635_235_svg_1_9050025939941406x1_920243263244629 from "./assets/Mallorca_assets_icon_path197_I190_21135_635_235_svg_1_9050025939941406x1_920243263244629.svg";
import SVG_Mallorca_assets_icon_path199_I190_21135_635_236_svg_0_8305797576904297x0_8305797576904297 from "./assets/Mallorca_assets_icon_path199_I190_21135_635_236_svg_0_8305797576904297x0_8305797576904297.svg";
import SVG_Mallorca_assets_icon_path201_I190_21135_635_237_svg_0_914398193359375x0_9144024848937988 from "./assets/Mallorca_assets_icon_path201_I190_21135_635_237_svg_0_914398193359375x0_9144024848937988.svg";
import SVG_Mallorca_assets_icon_path203_I190_21135_635_238_svg_0_8763046264648438x0_8763017654418945 from "./assets/Mallorca_assets_icon_path203_I190_21135_635_238_svg_0_8763046264648438x0_8763017654418945.svg";
import SVG_Mallorca_assets_icon_path205_I190_21135_635_239_svg_0_9067802429199219x0_9067816734313965 from "./assets/Mallorca_assets_icon_path205_I190_21135_635_239_svg_0_9067802429199219x0_9067816734313965.svg";
import SVG_Mallorca_assets_icon_path207_I190_21135_635_240_svg_0_9296436309814453x0_9296412467956543 from "./assets/Mallorca_assets_icon_path207_I190_21135_635_240_svg_0_9296436309814453x0_9296412467956543.svg";
import SVG_Mallorca_assets_icon_path209_I190_21135_635_241_svg_0_9220199584960938x0_9220213890075684 from "./assets/Mallorca_assets_icon_path209_I190_21135_635_241_svg_0_9220199584960938x0_9220213890075684.svg";
import SVG_Mallorca_assets_icon_path211_I190_21135_635_242_svg_0_9220199584960938x0_9296414852142334 from "./assets/Mallorca_assets_icon_path211_I190_21135_635_242_svg_0_9220199584960938x0_9296414852142334.svg";
import SVG_Mallorca_assets_icon_path213_I190_21135_635_243_svg_0_9144039154052734x0_9067816734313965 from "./assets/Mallorca_assets_icon_path213_I190_21135_635_243_svg_0_9144039154052734x0_9067816734313965.svg";
import SVG_Mallorca_assets_icon_path215_I190_21135_635_244_svg_0_868682861328125x0_8686823844909668 from "./assets/Mallorca_assets_icon_path215_I190_21135_635_244_svg_0_868682861328125x0_8686823844909668.svg";
import SVG_Mallorca_assets_icon_path217_I190_21135_635_245_svg_0_8686847686767578x0_8686819076538086 from "./assets/Mallorca_assets_icon_path217_I190_21135_635_245_svg_0_8686847686767578x0_8686819076538086.svg";
import SVG_Mallorca_assets_icon_path219_I190_21135_635_246_svg_0_8610591888427734x0_8534419536590576 from "./assets/Mallorca_assets_icon_path219_I190_21135_635_246_svg_0_8610591888427734x0_8534419536590576.svg";
import SVG_Mallorca_assets_icon_path221_I190_21135_635_247_svg_0_8153362274169922x0_807722806930542 from "./assets/Mallorca_assets_icon_path221_I190_21135_635_247_svg_0_8153362274169922x0_807722806930542.svg";
import SVG_Mallorca_assets_icon_path223_I190_21135_635_248_svg_0_9601211547851562x0_9601221084594727 from "./assets/Mallorca_assets_icon_path223_I190_21135_635_248_svg_0_9601211547851562x0_9601221084594727.svg";
import SVG_Mallorca_assets_icon_path225_I190_21135_635_249_svg_0_9601249694824219x0_9601211547851562 from "./assets/Mallorca_assets_icon_path225_I190_21135_635_249_svg_0_9601249694824219x0_9601211547851562.svg";
import SVG_Mallorca_assets_icon_path227_I190_21135_635_250_svg_1_1125221252441406x1_1125216484069824 from "./assets/Mallorca_assets_icon_path227_I190_21135_635_250_svg_1_1125221252441406x1_1125216484069824.svg";
import SVG_Mallorca_assets_icon_path229_I190_21135_635_251_svg_1_1734771728515625x1_173482894897461 from "./assets/Mallorca_assets_icon_path229_I190_21135_635_251_svg_1_1734771728515625x1_173482894897461.svg";
import SVG_Mallorca_assets_icon_path231_I190_21135_635_252_svg_1_2115898132324219x1_2115826606750488 from "./assets/Mallorca_assets_icon_path231_I190_21135_635_252_svg_1_2115898132324219x1_2115826606750488.svg";
import SVG_Mallorca_assets_icon_path233_I190_21135_635_253_svg_1_1658668518066406x1_173482894897461 from "./assets/Mallorca_assets_icon_path233_I190_21135_635_253_svg_1_1658668518066406x1_173482894897461.svg";
import SVG_Mallorca_assets_icon_path235_I190_21135_635_254_svg_1_0287055969238281x1_0363216400146484 from "./assets/Mallorca_assets_icon_path235_I190_21135_635_254_svg_1_0287055969238281x1_0363216400146484.svg";
import SVG_Mallorca_assets_icon_path237_I190_21135_635_255_svg_0_8991584777832031x0_8991622924804688 from "./assets/Mallorca_assets_icon_path237_I190_21135_635_255_svg_0_8991584777832031x0_8991622924804688.svg";
import SVG_Mallorca_assets_icon_path239_I190_21135_635_256_svg_0_9067840576171875x0_9067821502685547 from "./assets/Mallorca_assets_icon_path239_I190_21135_635_256_svg_0_9067840576171875x0_9067821502685547.svg";
import SVG_Mallorca_assets_icon_path241_I190_21135_635_257_svg_2_2136573791503906x5_823864459991455 from "./assets/Mallorca_assets_icon_path241_I190_21135_635_257_svg_2_2136573791503906x5_823864459991455.svg";
import SVG_Mallorca_assets_icon_path243_I190_21135_635_258_svg_1_7347736358642578x5_0064191818237305 from "./assets/Mallorca_assets_icon_path243_I190_21135_635_258_svg_1_7347736358642578x5_0064191818237305.svg";
import SVG_Mallorca_assets_icon_path245_I190_21135_635_259_svg_0_8305826187133789x0_8305797576904297 from "./assets/Mallorca_assets_icon_path245_I190_21135_635_259_svg_0_8305826187133789x0_8305797576904297.svg";
import SVG_Mallorca_assets_icon_path247_I190_21135_635_260_svg_0_9144001007080078x0_9144024848937988 from "./assets/Mallorca_assets_icon_path247_I190_21135_635_260_svg_0_9144001007080078x0_9144024848937988.svg";
import SVG_Mallorca_assets_icon_path249_I190_21135_635_261_svg_0_8763027191162109x0_8763017654418945 from "./assets/Mallorca_assets_icon_path249_I190_21135_635_261_svg_0_8763027191162109x0_8763017654418945.svg";
import SVG_Mallorca_assets_icon_path251_I190_21135_635_262_svg_0_9067802429199219x0_9067816734313965 from "./assets/Mallorca_assets_icon_path251_I190_21135_635_262_svg_0_9067802429199219x0_9067816734313965.svg";
import SVG_Mallorca_assets_icon_path253_I190_21135_635_263_svg_0_9296398162841797x0_9296412467956543 from "./assets/Mallorca_assets_icon_path253_I190_21135_635_263_svg_0_9296398162841797x0_9296412467956543.svg";
import SVG_Mallorca_assets_icon_path255_I190_21135_635_264_svg_0_9220209121704102x0_9220213890075684 from "./assets/Mallorca_assets_icon_path255_I190_21135_635_264_svg_0_9220209121704102x0_9220213890075684.svg";
import SVG_Mallorca_assets_icon_path257_I190_21135_635_265_svg_0_9220218658447266x0_9296414852142334 from "./assets/Mallorca_assets_icon_path257_I190_21135_635_265_svg_0_9220218658447266x0_9296414852142334.svg";
import SVG_Mallorca_assets_icon_path259_I190_21135_635_266_svg_0_914402961730957x0_9067816734313965 from "./assets/Mallorca_assets_icon_path259_I190_21135_635_266_svg_0_914402961730957x0_9067816734313965.svg";
import SVG_Mallorca_assets_icon_path261_I190_21135_635_267_svg_0_868682861328125x0_8686823844909668 from "./assets/Mallorca_assets_icon_path261_I190_21135_635_267_svg_0_868682861328125x0_8686823844909668.svg";
import SVG_Mallorca_assets_icon_path263_I190_21135_635_268_svg_0_868682861328125x0_8686819076538086 from "./assets/Mallorca_assets_icon_path263_I190_21135_635_268_svg_0_868682861328125x0_8686819076538086.svg";
import SVG_Mallorca_assets_icon_path265_I190_21135_635_269_svg_0_8610630035400391x0_8534419536590576 from "./assets/Mallorca_assets_icon_path265_I190_21135_635_269_svg_0_8610630035400391x0_8534419536590576.svg";
import SVG_Mallorca_assets_icon_path267_I190_21135_635_270_svg_0_8153419494628906x0_807722806930542 from "./assets/Mallorca_assets_icon_path267_I190_21135_635_270_svg_0_8153419494628906x0_807722806930542.svg";
import SVG_Mallorca_assets_icon_path269_I190_21135_635_271_svg_0_9601211547851562x0_9601221084594727 from "./assets/Mallorca_assets_icon_path269_I190_21135_635_271_svg_0_9601211547851562x0_9601221084594727.svg";
import SVG_Mallorca_assets_icon_path271_I190_21135_635_272_svg_0_9601221084594727x0_9601211547851562 from "./assets/Mallorca_assets_icon_path271_I190_21135_635_272_svg_0_9601221084594727x0_9601211547851562.svg";
import SVG_Mallorca_assets_icon_path273_I190_21135_635_273_svg_1_1125202178955078x1_1125216484069824 from "./assets/Mallorca_assets_icon_path273_I190_21135_635_273_svg_1_1125202178955078x1_1125216484069824.svg";
import SVG_Mallorca_assets_icon_path275_I190_21135_635_274_svg_1_1734838485717773x1_173482894897461 from "./assets/Mallorca_assets_icon_path275_I190_21135_635_274_svg_1_1734838485717773x1_173482894897461.svg";
import SVG_Mallorca_assets_icon_path277_I190_21135_635_275_svg_1_211583137512207x1_2115826606750488 from "./assets/Mallorca_assets_icon_path277_I190_21135_635_275_svg_1_211583137512207x1_2115826606750488.svg";
import SVG_Mallorca_assets_icon_path279_I190_21135_635_276_svg_1_1658616065979004x1_173482894897461 from "./assets/Mallorca_assets_icon_path279_I190_21135_635_276_svg_1_1658616065979004x1_173482894897461.svg";
import SVG_Mallorca_assets_icon_path281_I190_21135_635_277_svg_1_028700828552246x1_0363216400146484 from "./assets/Mallorca_assets_icon_path281_I190_21135_635_277_svg_1_028700828552246x1_0363216400146484.svg";
import SVG_Mallorca_assets_icon_path283_I190_21135_635_278_svg_0_8991613388061523x0_8991622924804688 from "./assets/Mallorca_assets_icon_path283_I190_21135_635_278_svg_0_8991613388061523x0_8991622924804688.svg";
import SVG_Mallorca_assets_icon_path285_I190_21135_635_279_svg_0_9067831039428711x0_9067821502685547 from "./assets/Mallorca_assets_icon_path285_I190_21135_635_279_svg_0_9067831039428711x0_9067821502685547.svg";
import SVG_Mallorca_assets_icon_path287_I190_21135_635_280_svg_2_2136611938476562x5_823864459991455 from "./assets/Mallorca_assets_icon_path287_I190_21135_635_280_svg_2_2136611938476562x5_823864459991455.svg";
import SVG_Mallorca_assets_icon_path289_I190_21135_635_281_svg_1_7347755432128906x5_0064191818237305 from "./assets/Mallorca_assets_icon_path289_I190_21135_635_281_svg_1_7347755432128906x5_0064191818237305.svg";
import SVG_Mallorca_assets_icon_path291_I190_21135_635_282_svg_1_8023853302001953x5_361440658569336 from "./assets/Mallorca_assets_icon_path291_I190_21135_635_282_svg_1_8023853302001953x5_361440658569336.svg";
import SVG_Mallorca_assets_icon_path293_I190_21135_635_283_svg_0_7681808471679688x0_6091880798339844 from "./assets/Mallorca_assets_icon_path293_I190_21135_635_283_svg_0_7681808471679688x0_6091880798339844.svg";
import SVG_Mallorca_assets_icon_path295_I190_21135_635_284_svg_2_232868194580078x6_624499320983887 from "./assets/Mallorca_assets_icon_path295_I190_21135_635_284_svg_2_232868194580078x6_624499320983887.svg";
import SVG_Mallorca_assets_icon_path297_I190_21135_635_285_svg_3_704324722290039x3_0602211952209473 from "./assets/Mallorca_assets_icon_path297_I190_21135_635_285_svg_3_704324722290039x3_0602211952209473.svg";
import SVG_Mallorca_assets_icon_path299_I190_21135_635_286_svg_3_2825775146484375x3_0124473571777344 from "./assets/Mallorca_assets_icon_path299_I190_21135_635_286_svg_3_2825775146484375x3_0124473571777344.svg";
import SVG_Mallorca_assets_icon_path301_I190_21135_635_287_svg_2_4326915740966797x2_105168342590332 from "./assets/Mallorca_assets_icon_path301_I190_21135_635_287_svg_2_4326915740966797x2_105168342590332.svg";
import SVG_Mallorca_assets_icon_path303_I190_21135_635_288_svg_4_667604446411133x2_3318519592285156 from "./assets/Mallorca_assets_icon_path303_I190_21135_635_288_svg_4_667604446411133x2_3318519592285156.svg";
import SVG_Mallorca_assets_icon_path305_I190_21135_635_289_svg_12_905706405639648x3_208026885986328 from "./assets/Mallorca_assets_icon_path305_I190_21135_635_289_svg_12_905706405639648x3_208026885986328.svg";


export class Mallorca extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Mallorca",
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
              "name": "Rcd_mallorca 1",
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
                "width": 45.447109, "height": 60,
                "relativeTransform": [[1, 0, 7], [0, 1, 0]],
                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path3",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 0.000003, "y": 0.000007,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 45.447105, "height": 59.999992,
                    "relativeTransform": [[1, 0, 0.000003], [0, 1, 0.000007]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path3_I190_21135_635_138_svg_45_447105407714844x59_99999237060547
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path5",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 23.272891, "y": 3.601437,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.487052, "height": 6.578917,
                    "relativeTransform": [[1, 0, 23.272891], [0, 1, 3.601437]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path5_I190_21135_635_139_svg_1_4870529174804688x6_578917980194092
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path7",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 14.509451, "y": 13.106430,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 18.120132, "height": 2.178236,
                    "relativeTransform": [[1, 0, 14.509451], [0, 1, 13.106430]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path7_I190_21135_635_140_svg_18_120132446289062x2_1782360076904297
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path9",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 20.688531, "y": 3.674776,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.353134, "height": 6.505578,
                    "relativeTransform": [[1, 0, 20.688531], [0, 1, 3.674776]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path9_I190_21135_635_141_svg_1_3531341552734375x6_50557804107666
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path11",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.481874, "y": 4.808226,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.211894, "height": 5.234951,
                    "relativeTransform": [[1, 0, 21.481874], [0, 1, 4.808226]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path11_I190_21135_635_142_svg_1_2118949890136719x5_234951019287109
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path13",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.754665, "y": 4.549163,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.211891, "height": 5.501650,
                    "relativeTransform": [[1, 0, 22.754665], [0, 1, 4.549163]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path13_I190_21135_635_143_svg_1_2118911743164062x5_501650333404541
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path15",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 9.313001, "y": 9.692770,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 24.599534, "height": 5.255697,
                    "relativeTransform": [[1, 0, 9.313001], [0, 1, 9.692770]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path15_I190_21135_635_144_svg_24_59953498840332x5_255697250366211
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path17",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.289876, "y": 4.229113,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.868680, "height": 0.876302,
                    "relativeTransform": [[1, 0, 22.289876], [0, 1, 4.229113]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path17_I190_21135_635_145_svg_0_8686809539794922x0_8763022422790527
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path19",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 16.421339, "y": 54.406440,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.225465, "height": 5.078804,
                    "relativeTransform": [[1, 0, 16.421339], [0, 1, 54.406440]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path19_I190_21135_635_146_svg_4_225465774536133x5_078804016113281
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path21",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 24.446323, "y": 54.336410,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.580776, "height": 5.148834,
                    "relativeTransform": [[1, 0, 24.446323], [0, 1, 54.336410]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path21_I190_21135_635_147_svg_4_580776214599609x5_148834228515625
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path23",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 5.594446, "y": 19.591077,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 34.259590, "height": 34.259590,
                    "relativeTransform": [[1, 0, 5.594446], [0, 1, 19.591077]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path23_I190_21135_635_148_svg_34_25959014892578x34_25959014892578
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path25",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 24.248210, "y": 54.734573,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.786888, "height": 3.675354,
                    "relativeTransform": [[1, 0, 24.248210], [0, 1, 54.734573]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path25_I190_21135_635_149_svg_3_7868881225585938x3_67535400390625
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path27",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 7.758545, "y": 21.823740,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 29.931419, "height": 29.839986,
                    "relativeTransform": [[1, 0, 7.758545], [0, 1, 21.823740]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path27_I190_21135_635_150_svg_29_931419372558594x29_83998680114746
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path29",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.779323, "y": 55.212543,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.417034, "height": 3.228569,
                    "relativeTransform": [[1, 0, 21.779323], [0, 1, 55.212543]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path29_I190_21135_635_151_svg_3_417034149169922x3_2285690307617188
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path31",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.798019, "y": 54.452636,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.865762, "height": 0.958549,
                    "relativeTransform": [[1, 0, 22.798019], [0, 1, 54.452636]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path31_I190_21135_635_152_svg_1_865762710571289x0_9585494995117188
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path33",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.223089, "y": 58.175109,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.270465, "height": 1.672492,
                    "relativeTransform": [[1, 0, 21.223089], [0, 1, 58.175109]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path33_I190_21135_635_153_svg_3_270465850830078x1_6724929809570312
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path35",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 19.996225, "y": 54.590065,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.093214, "height": 4.222709,
                    "relativeTransform": [[1, 0, 19.996225], [0, 1, 54.590065]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path35_I190_21135_635_154_svg_3_0932140350341797x4_222709655761719
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path37",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 17.413356, "y": 55.374637,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.062986, "height": 2.941253,
                    "relativeTransform": [[1, 0, 17.413356], [0, 1, 55.374637]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path37_I190_21135_635_155_svg_3_062986373901367x2_941253662109375
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path39",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.827032, "y": 53.842685,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.695531, "height": 0.815662,
                    "relativeTransform": [[1, 0, 21.827032], [0, 1, 53.842685]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path39_I190_21135_635_156_svg_2_6955318450927734x0_8156623840332031
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path41",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 9.998878, "y": 49.316719,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 10.084259, "height": 8.310379,
                    "relativeTransform": [[1, 0, 9.998878], [0, 1, 49.316719]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path41_I190_21135_635_157_svg_10_084259033203125x8_310379028320312
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path43",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 25.154989, "y": 52.486656,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.488122, "height": 5.733165,
                    "relativeTransform": [[1, 0, 25.154989], [0, 1, 52.486656]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path43_I190_21135_635_158_svg_7_488122940063477x5_733165740966797
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path45",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.139152, "y": 51.930416,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.210563, "height": 3.079395,
                    "relativeTransform": [[1, 0, 30.139152], [0, 1, 51.930416]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path45_I190_21135_635_159_svg_3_2105636596679688x3_079395294189453
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path47",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 33.750003, "y": 50.078754,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.281997, "height": 1.954959,
                    "relativeTransform": [[1, 0, 33.750003], [0, 1, 50.078754]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path47_I190_21135_635_160_svg_1_2819976806640625x1_9549598693847656
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path49",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 33.093620, "y": 50.596092,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.776908, "height": 2.400207,
                    "relativeTransform": [[1, 0, 33.093620], [0, 1, 50.596092]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path49_I190_21135_635_161_svg_1_7769088745117188x2_40020751953125
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path51",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 32.405899, "y": 51.093051,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.030582, "height": 2.506729,
                    "relativeTransform": [[1, 0, 32.405899], [0, 1, 51.093051]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path51_I190_21135_635_162_svg_2_0305824279785156x2_5067291259765625
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path53",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 31.299848, "y": 51.412876,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.541997, "height": 2.894954,
                    "relativeTransform": [[1, 0, 31.299848], [0, 1, 51.412876]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path53_I190_21135_635_163_svg_2_5419979095458984x2_8949546813964844
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path55",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 4.278727, "y": 18.242313,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 36.890956, "height": 14.051303,
                    "relativeTransform": [[1, 0, 4.278727], [0, 1, 18.242313]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path55_I190_21135_635_164_svg_36_89095687866211x14_05130386352539
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path57",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 31.071386, "y": 16.832050,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.125520, "height": 6.294286,
                    "relativeTransform": [[1, 0, 31.071386], [0, 1, 16.832050]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path57_I190_21135_635_165_svg_6_125520706176758x6_294286727905273
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path59",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 24.255859, "y": 17.061203,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 7.437133, "height": 1.870180,
                    "relativeTransform": [[1, 0, 24.255859], [0, 1, 17.061203]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path59_I190_21135_635_166_svg_7_4371337890625x1_8701801300048828
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path61",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 8.251557, "y": 16.832050,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.128898, "height": 6.294286,
                    "relativeTransform": [[1, 0, 8.251557], [0, 1, 16.832050]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path61_I190_21135_635_167_svg_6_128898620605469x6_294286727905273
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path63",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.755453, "y": 17.061203,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 5.705657, "height": 1.870422,
                    "relativeTransform": [[1, 0, 13.755453], [0, 1, 17.061203]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path63_I190_21135_635_168_svg_5_705657958984375x1_87042236328125
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path65",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 5.304888, "y": 46.824989,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.335787, "height": 4.396743,
                    "relativeTransform": [[1, 0, 5.304888], [0, 1, 46.824989]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path65_I190_21135_635_169_svg_4_335787773132324x4_3967437744140625
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path67",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 4.459024, "y": 28.536954,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.190500, "height": 0.266700,
                    "relativeTransform": [[1, 0, 4.459024], [0, 1, 28.536954]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path67_I190_21135_635_170_svg_0_19050073623657227x0_26670074462890625
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path69",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 3.796118, "y": 29.497074,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.790703, "height": 3.093723,
                    "relativeTransform": [[1, 0, 3.796118], [0, 1, 29.497074]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path69_I190_21135_635_171_svg_1_790703296661377x3_0937232971191406
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path71",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 5.365803, "y": 50.082656,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.358648, "height": 2.175651,
                    "relativeTransform": [[1, 0, 5.365803], [0, 1, 50.082656]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path71_I190_21135_635_172_svg_4_358648300170898x2_1756515502929688
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path73",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 1.235790, "y": 43.129276,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.983489, "height": 3.695705,
                    "relativeTransform": [[1, 0, 1.235790], [0, 1, 43.129276]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path73_I190_21135_635_173_svg_4_983489990234375x3_6957054138183594
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path75",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 4.406161, "y": 48.282211,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.387747, "height": 0.285972,
                    "relativeTransform": [[1, 0, 4.406161], [0, 1, 48.282211]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path75_I190_21135_635_174_svg_0_38774728775024414x0_28597259521484375
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path77",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 7.761590, "y": 46.431385,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.299096, "height": 0.369838,
                    "relativeTransform": [[1, 0, 7.761590], [0, 1, 46.431385]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path77_I190_21135_635_175_svg_0_29909610748291016x0_3698387145996094
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path79",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 2.401668, "y": 40.073665,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.261004, "height": 3.909065,
                    "relativeTransform": [[1, 0, 2.401668], [0, 1, 40.073665]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path79_I190_21135_635_176_svg_2_2610044479370117x3_9090652465820312
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path81",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 4.459024, "y": 42.031997,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.417208, "height": 3.390907,
                    "relativeTransform": [[1, 0, 4.459024], [0, 1, 42.031997]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path81_I190_21135_635_177_svg_1_417208194732666x3_3909072875976562
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path83",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 5.274360, "y": 40.302268,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.385893, "height": 5.836929,
                    "relativeTransform": [[1, 0, 5.274360], [0, 1, 40.302268]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path83_I190_21135_635_178_svg_1_3858938217163086x5_8369293212890625
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path85",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 0.152123, "y": 35.783611,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.940123, "height": 5.113029,
                    "relativeTransform": [[1, 0, 0.152123], [0, 1, 35.783611]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path85_I190_21135_635_179_svg_3_9401230812072754x5_113029479980469
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path87",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 4.586369, "y": 40.507259,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.506182, "height": 0.473812,
                    "relativeTransform": [[1, 0, 4.586369], [0, 1, 40.507259]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path87_I190_21135_635_180_svg_0_5061826705932617x0_4738121032714844
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path89",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 1.571033, "y": 41.620502,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.597409, "height": 0.694381,
                    "relativeTransform": [[1, 0, 1.571033], [0, 1, 41.620502]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path89_I190_21135_635_181_svg_0_5974091291427612x0_6943817138671875
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path91",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 1.968637, "y": 33.642356,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.796971, "height": 5.295906,
                    "relativeTransform": [[1, 0, 1.968637], [0, 1, 33.642356]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path91_I190_21135_635_182_svg_1_7969712018966675x5_295906066894531
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path93",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 3.833849, "y": 34.739662,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.768179, "height": 5.859794,
                    "relativeTransform": [[1, 0, 3.833849], [0, 1, 34.739662]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path93_I190_21135_635_183_svg_1_7681798934936523x5_859794616699219
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path95",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 0.800884, "y": 29.855236,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.928430, "height": 4.198623,
                    "relativeTransform": [[1, 0, 0.800884], [0, 1, 29.855236]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path95_I190_21135_635_184_svg_1_9284303188323975x4_1986236572265625
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path97",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 2.411093, "y": 28.811285,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.410266, "height": 6.347471,
                    "relativeTransform": [[1, 0, 2.411093], [0, 1, 28.811285]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path97_I190_21135_635_185_svg_1_4102661609649658x6_347471237182617
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path99",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 0.504247, "y": 34.495796,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.472440, "height": 0.426715,
                    "relativeTransform": [[1, 0, 0.504247], [0, 1, 34.495796]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path99_I190_21135_635_186_svg_0_4724409580230713x0_4267158508300781
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path101",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 3.528298, "y": 28.911128,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.334636, "height": 1.927072,
                    "relativeTransform": [[1, 0, 3.528298], [0, 1, 28.911128]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path101_I190_21135_635_187_svg_1_3346364498138428x1_927072525024414
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path103",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 3.651339, "y": 31.173471,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.001614, "height": 3.764284,
                    "relativeTransform": [[1, 0, 3.651339], [0, 1, 31.173471]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path103_I190_21135_635_188_svg_2_001614570617676x3_764284133911133
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path105",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 1.060554, "y": 28.794670,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.579121, "height": 0.600973,
                    "relativeTransform": [[1, 0, 1.060554], [0, 1, 28.794670]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path105_I190_21135_635_189_svg_0_5791211128234863x0_6009731292724609
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path107",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 3.403496, "y": 27.553966,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.994985, "height": 2.049783,
                    "relativeTransform": [[1, 0, 3.403496], [0, 1, 27.553966]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path107_I190_21135_635_190_svg_0_994985818862915x2_049783706665039
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path109",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 9.203101, "y": 47.213603,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.004545, "height": 4.213874,
                    "relativeTransform": [[1, 0, 9.203101], [0, 1, 47.213603]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path109_I190_21135_635_191_svg_1_0045452117919922x4_213874816894531
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path111",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 9.975908, "y": 48.135650,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.579121, "height": 2.491741,
                    "relativeTransform": [[1, 0, 9.975908], [0, 1, 48.135650]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path111_I190_21135_635_192_svg_0_5791215896606445x2_491741180419922
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path113",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 10.654114, "y": 48.890022,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.358140, "height": 1.257312,
                    "relativeTransform": [[1, 0, 10.654114], [0, 1, 48.890022]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path113_I190_21135_635_193_svg_0_3581409454345703x1_2573127746582031
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path115",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 41.759044, "y": 36.728462,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.459484, "height": 4.198631,
                    "relativeTransform": [[1, 0, 41.759044], [0, 1, 36.728462]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path115_I190_21135_635_194_svg_3_459484100341797x4_198631286621094
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path117",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 41.818470, "y": 34.305290,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.051303, "height": 4.236728,
                    "relativeTransform": [[1, 0, 41.818470], [0, 1, 34.305290]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path117_I190_21135_635_195_svg_2_0513038635253906x4_236728668212891
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path119",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 39.846397, "y": 40.652774,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.941326, "height": 5.151130,
                    "relativeTransform": [[1, 0, 39.846397], [0, 1, 40.652774]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path119_I190_21135_635_196_svg_2_941326141357422x5_151130676269531
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path121",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 43.384014, "y": 30.146667,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.506645, "height": 0.627710,
                    "relativeTransform": [[1, 0, 43.384014], [0, 1, 30.146667]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path121_I190_21135_635_197_svg_0_5066452026367188x0_6277103424072266
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path123",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 40.082263, "y": 29.626625,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.425300, "height": 2.575569,
                    "relativeTransform": [[1, 0, 40.082263], [0, 1, 29.626625]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path123_I190_21135_635_198_svg_1_4253005981445312x2_5755691528320312
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path125",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 41.079006, "y": 29.451354,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.846843, "height": 4.823471,
                    "relativeTransform": [[1, 0, 41.079006], [0, 1, 29.451354]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path125_I190_21135_635_199_svg_1_8468437194824219x4_8234710693359375
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path127",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 39.518737, "y": 32.078575,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.240287, "height": 3.110652,
                    "relativeTransform": [[1, 0, 39.518737], [0, 1, 32.078575]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path127_I190_21135_635_200_svg_2_2402877807617188x3_1106529235839844
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path129",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 41.779056, "y": 31.623062,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.349811, "height": 4.686305,
                    "relativeTransform": [[1, 0, 41.779056], [0, 1, 31.623062]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path129_I190_21135_635_201_svg_2_349811553955078x4_686305999755859
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path131",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 44.608924, "y": 34.815837,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.583522, "height": 0.495307,
                    "relativeTransform": [[1, 0, 44.608924], [0, 1, 34.815837]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path131_I190_21135_635_202_svg_0_5835227966308594x0_49530792236328125
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path133",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 40.145591, "y": 35.943618,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.010955, "height": 5.105403,
                    "relativeTransform": [[1, 0, 40.145591], [0, 1, 35.943618]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path133_I190_21135_635_203_svg_2_010955810546875x5_105403900146484
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path135",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 39.549190, "y": 43.814960,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.305309, "height": 3.154800,
                    "relativeTransform": [[1, 0, 39.549190], [0, 1, 43.814960]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path135_I190_21135_635_204_svg_4_305309295654297x3_1548004150390625
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path137",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 43.339633, "y": 42.134670,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.531719, "height": 0.465236,
                    "relativeTransform": [[1, 0, 43.339633], [0, 1, 42.134670]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path137_I190_21135_635_205_svg_0_5317192077636719x0_4652366638183594
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path139",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 39.998821, "y": 40.728988,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.403865, "height": 0.517230,
                    "relativeTransform": [[1, 0, 39.998821], [0, 1, 40.728988]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path139_I190_21135_635_206_svg_0_4038658142089844x0_5172309875488281
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path141",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 38.146415, "y": 40.797557,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.056739, "height": 6.042671,
                    "relativeTransform": [[1, 0, 38.146415], [0, 1, 40.797557]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path141_I190_21135_635_207_svg_2_0567398071289062x6_042671203613281
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path143",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 35.670627, "y": 46.870716,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.878593, "height": 4.792987,
                    "relativeTransform": [[1, 0, 35.670627], [0, 1, 46.870716]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path143_I190_21135_635_208_svg_3_8785934448242188x4_792987823486328
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path145",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 36.805976, "y": 46.840248,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.396240, "height": 0.525783,
                    "relativeTransform": [[1, 0, 36.805976], [0, 1, 46.840248]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path145_I190_21135_635_209_svg_0_396240234375x0_5257835388183594
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path147",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 40.145076, "y": 48.630474,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.627910, "height": 0.432060,
                    "relativeTransform": [[1, 0, 40.145076], [0, 1, 48.630474]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path147_I190_21135_635_210_svg_0_6279106140136719x0_43206024169921875
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path149",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 35.144855, "y": 50.504341,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.549144, "height": 2.096603,
                    "relativeTransform": [[1, 0, 35.144855], [0, 1, 50.504341]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path149_I190_21135_635_211_svg_4_549144744873047x2_0966033935546875
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path151",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 35.190601, "y": 52.440929,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.019309, "height": 0.400558,
                    "relativeTransform": [[1, 0, 35.190601], [0, 1, 52.440929]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path151_I190_21135_635_212_svg_2_0193099975585938x0_4005584716796875
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path153",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 34.641948, "y": 47.632709,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.532913, "height": 3.970027,
                    "relativeTransform": [[1, 0, 34.641948], [0, 1, 47.632709]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path153_I190_21135_635_213_svg_1_5329132080078125x3_9700279235839844
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path155",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 33.117950, "y": 12.862593,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.234443, "height": 1.226822,
                    "relativeTransform": [[1, 0, 33.117950], [0, 1, 12.862593]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path155_I190_21135_635_214_svg_1_2344436645507812x1_226822853088379
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path157",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.373737, "y": 13.350265,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.701042, "height": 0.457201,
                    "relativeTransform": [[1, 0, 22.373737], [0, 1, 13.350265]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path157_I190_21135_635_215_svg_0_7010421752929688x0_4572010040283203
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path159",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.373737, "y": 12.077716,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.701042, "height": 0.380999,
                    "relativeTransform": [[1, 0, 22.373737], [0, 1, 12.077716]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path159_I190_21135_635_216_svg_0_7010421752929688x0_3809995651245117
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path161",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 12.632136, "y": 14.325643,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 20.184108, "height": 2.262996,
                    "relativeTransform": [[1, 0, 12.632136], [0, 1, 14.325643]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path161_I190_21135_635_217_svg_20_18410873413086x2_2629966735839844
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path163",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 16.239564, "y": 13.859727,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.057403, "height": 0.635312,
                    "relativeTransform": [[1, 0, 16.239564], [0, 1, 13.859727]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path163_I190_21135_635_218_svg_2_057403564453125x0_6353120803833008
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path165",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 19.584768, "y": 12.291091,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.701042, "height": 0.365761,
                    "relativeTransform": [[1, 0, 19.584768], [0, 1, 12.291091]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path165_I190_21135_635_219_svg_0_7010421752929688x0_36576175689697266
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path167",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 16.673898, "y": 12.641600,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.685804, "height": 0.426720,
                    "relativeTransform": [[1, 0, 16.673898], [0, 1, 12.641600]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path167_I190_21135_635_220_svg_0_6858043670654297x0_42672061920166016
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path169",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.534457, "y": 13.472201,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.670563, "height": 0.441963,
                    "relativeTransform": [[1, 0, 13.534457], [0, 1, 13.472201]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path169_I190_21135_635_221_svg_0_6705636978149414x0_44196319580078125
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path171",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 16.582523, "y": 14.008377,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.386842, "height": 0.340951,
                    "relativeTransform": [[1, 0, 16.582523], [0, 1, 14.008377]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path171_I190_21135_635_222_svg_1_3868427276611328x0_34095191955566406
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path173",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 27.151430, "y": 13.859727,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.057407, "height": 0.635312,
                    "relativeTransform": [[1, 0, 27.151430], [0, 1, 13.859727]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path173_I190_21135_635_223_svg_2_0574073791503906x0_6353120803833008
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path175",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 25.162641, "y": 12.291091,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.701040, "height": 0.365761,
                    "relativeTransform": [[1, 0, 25.162641], [0, 1, 12.291091]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path175_I190_21135_635_224_svg_0_7010402679443359x0_36576175689697266
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path177",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 28.088745, "y": 12.641600,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.685796, "height": 0.426720,
                    "relativeTransform": [[1, 0, 28.088745], [0, 1, 12.641600]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path177_I190_21135_635_225_svg_0_6857967376708984x0_42672061920166016
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path179",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 31.243402, "y": 13.472201,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.670562, "height": 0.441963,
                    "relativeTransform": [[1, 0, 31.243402], [0, 1, 13.472201]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path179_I190_21135_635_226_svg_0_670562744140625x0_44196319580078125
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path181",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 27.479095, "y": 14.008377,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.386840, "height": 0.340951,
                    "relativeTransform": [[1, 0, 27.479095], [0, 1, 14.008377]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path181_I190_21135_635_227_svg_1_3868408203125x0_34095191955566406
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path183",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 28.020103, "y": 10.949979,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.508766, "height": 0.838201,
                    "relativeTransform": [[1, 0, 28.020103], [0, 1, 10.949979]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path183_I190_21135_635_228_svg_1_5087661743164062x0_8382015228271484
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path185",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.497415, "y": 11.414772,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.632463, "height": 0.632461,
                    "relativeTransform": [[1, 0, 21.497415], [0, 1, 11.414772]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path185_I190_21135_635_229_svg_0_6324634552001953x0_6324615478515625
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path187",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 15.919548, "y": 10.949979,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.508762, "height": 0.838201,
                    "relativeTransform": [[1, 0, 15.919548], [0, 1, 10.949979]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path187_I190_21135_635_230_svg_1_5087623596191406x0_8382015228271484
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path189",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.335632, "y": 9.044947,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.777240, "height": 0.784860,
                    "relativeTransform": [[1, 0, 22.335632], [0, 1, 9.044947]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path189_I190_21135_635_231_svg_0_7772407531738281x0_7848606109619141
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path191",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.244190, "y": 6.568447,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.960121, "height": 0.967741,
                    "relativeTransform": [[1, 0, 22.244190], [0, 1, 6.568447]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path191_I190_21135_635_232_svg_0_9601211547851562x0_9677419662475586
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path193",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.282295, "y": 5.379725,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.883924, "height": 0.891541,
                    "relativeTransform": [[1, 0, 22.282295], [0, 1, 5.379725]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path193_I190_21135_635_233_svg_0_8839244842529297x0_8915419578552246
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path195",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.259414, "y": 7.833382,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.929639, "height": 0.937261,
                    "relativeTransform": [[1, 0, 22.259414], [0, 1, 7.833382]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path195_I190_21135_635_234_svg_0_9296398162841797x0_9372611045837402
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path197",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 21.771745, "y": 1.790720,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.905002, "height": 1.920243,
                    "relativeTransform": [[1, 0, 21.771745], [0, 1, 1.790720]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path197_I190_21135_635_235_svg_1_9050025939941406x1_920243263244629
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path199",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 29.742288, "y": 9.685046,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.830579, "height": 0.830579,
                    "relativeTransform": [[1, 0, 29.742288], [0, 1, 9.685046]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path199_I190_21135_635_236_svg_0_8305797576904297x0_8305797576904297
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path201",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.755739, "y": 7.604776,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.914398, "height": 0.914402,
                    "relativeTransform": [[1, 0, 30.755739], [0, 1, 7.604776]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path201_I190_21135_635_237_svg_0_914398193359375x0_9144024848937988
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path203",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.328981, "y": 8.694439,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.876304, "height": 0.876301,
                    "relativeTransform": [[1, 0, 30.328981], [0, 1, 8.694439]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path203_I190_21135_635_238_svg_0_8763046264648438x0_8763017654418945
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path205",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.847183, "y": 6.515112,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.906780, "height": 0.906781,
                    "relativeTransform": [[1, 0, 30.847183], [0, 1, 6.515112]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path205_I190_21135_635_239_svg_0_9067802429199219x0_9067816734313965
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path207",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.748085, "y": 5.341619,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.929643, "height": 0.929641,
                    "relativeTransform": [[1, 0, 30.748085], [0, 1, 5.341619]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path207_I190_21135_635_240_svg_0_9296436309814453x0_9296412467956543
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path209",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.862401, "y": 4.152899,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.922019, "height": 0.922021,
                    "relativeTransform": [[1, 0, 30.862401], [0, 1, 4.152899]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path209_I190_21135_635_241_svg_0_9220199584960938x0_9220213890075684
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path211",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 29.696527, "y": 3.817620,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.922019, "height": 0.929641,
                    "relativeTransform": [[1, 0, 29.696527], [0, 1, 3.817620]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path211_I190_21135_635_242_svg_0_9220199584960938x0_9296414852142334
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path213",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 28.660202, "y": 3.429006,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.914403, "height": 0.906781,
                    "relativeTransform": [[1, 0, 28.660202], [0, 1, 3.429006]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path213_I190_21135_635_243_svg_0_9144039154052734x0_9067816734313965
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path215",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 27.509624, "y": 3.284227,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.868682, "height": 0.868682,
                    "relativeTransform": [[1, 0, 27.509624], [0, 1, 3.284227]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path215_I190_21135_635_244_svg_0_868682861328125x0_8686823844909668
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path217",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 26.412305, "y": 3.124220,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.868684, "height": 0.868681,
                    "relativeTransform": [[1, 0, 26.412305], [0, 1, 3.124220]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path217_I190_21135_635_245_svg_0_8686847686767578x0_8686819076538086
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path219",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 25.337875, "y": 2.964178,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.861059, "height": 0.853441,
                    "relativeTransform": [[1, 0, 25.337875], [0, 1, 2.964178]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path219_I190_21135_635_246_svg_0_8610591888427734x0_8534419536590576
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path221",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 24.347305, "y": 2.887998,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.815336, "height": 0.807722,
                    "relativeTransform": [[1, 0, 24.347305], [0, 1, 2.887998]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path221_I190_21135_635_247_svg_0_8153362274169922x0_807722806930542
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path223",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 31.936843, "y": 4.564392,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.960121, "height": 0.960122,
                    "relativeTransform": [[1, 0, 31.936843], [0, 1, 4.564392]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path223_I190_21135_635_248_svg_0_9601211547851562x0_9601221084594727
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path225",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 33.034084, "y": 4.770120,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.960124, "height": 0.960121,
                    "relativeTransform": [[1, 0, 33.034084], [0, 1, 4.770120]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path225_I190_21135_635_249_svg_0_9601249694824219x0_9601211547851562
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path227",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 34.123748, "y": 5.013955,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.112522, "height": 1.112521,
                    "relativeTransform": [[1, 0, 34.123748], [0, 1, 5.013955]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path227_I190_21135_635_250_svg_1_1125221252441406x1_1125216484069824
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path229",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 35.243873, "y": 5.608333,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.173477, "height": 1.173482,
                    "relativeTransform": [[1, 0, 35.243873], [0, 1, 5.608333]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path229_I190_21135_635_251_svg_1_1734771728515625x1_173482894897461
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path231",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 36.204055, "y": 6.667504,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.211589, "height": 1.211582,
                    "relativeTransform": [[1, 0, 36.204055], [0, 1, 6.667504]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path231_I190_21135_635_252_svg_1_2115898132324219x1_2115826606750488
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path233",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 36.767940, "y": 8.061990,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.165866, "height": 1.173482,
                    "relativeTransform": [[1, 0, 36.767940], [0, 1, 8.061990]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path233_I190_21135_635_253_svg_1_1658668518066406x1_173482894897461
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path235",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 36.790748, "y": 9.494544,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.028705, "height": 1.036321,
                    "relativeTransform": [[1, 0, 36.790748], [0, 1, 9.494544]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path235_I190_21135_635_254_svg_1_0287055969238281x1_0363216400146484
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path237",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 36.524070, "y": 10.675653,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.899158, "height": 0.899162,
                    "relativeTransform": [[1, 0, 36.524070], [0, 1, 10.675653]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path237_I190_21135_635_255_svg_0_8991584777832031x0_8991622924804688
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path239",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 36.059272, "y": 11.673873,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.906784, "height": 0.906782,
                    "relativeTransform": [[1, 0, 36.059272], [0, 1, 11.673873]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path239_I190_21135_635_256_svg_0_9067840576171875x0_9067821502685547
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path241",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.114490, "y": 5.539171,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.213657, "height": 5.823864,
                    "relativeTransform": [[1, 0, 30.114490], [0, 1, 5.539171]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path241_I190_21135_635_257_svg_2_2136573791503906x5_823864459991455
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path243",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 28.951129, "y": 5.097784,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.734773, "height": 5.006419,
                    "relativeTransform": [[1, 0, 28.951129], [0, 1, 5.097784]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path243_I190_21135_635_258_svg_1_7347736358642578x5_0064191818237305
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path245",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 14.875641, "y": 9.685046,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.830582, "height": 0.830579,
                    "relativeTransform": [[1, 0, 14.875641], [0, 1, 9.685046]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path245_I190_21135_635_259_svg_0_8305826187133789x0_8305797576904297
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path247",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.778326, "y": 7.604776,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.914400, "height": 0.914402,
                    "relativeTransform": [[1, 0, 13.778326], [0, 1, 7.604776]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path247_I190_21135_635_260_svg_0_9144001007080078x0_9144024848937988
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path249",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 14.243120, "y": 8.694439,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.876302, "height": 0.876301,
                    "relativeTransform": [[1, 0, 14.243120], [0, 1, 8.694439]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path249_I190_21135_635_261_svg_0_8763027191162109x0_8763017654418945
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path251",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.694535, "y": 6.515112,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.906780, "height": 0.906781,
                    "relativeTransform": [[1, 0, 13.694535], [0, 1, 6.515112]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path251_I190_21135_635_262_svg_0_9067802429199219x0_9067816734313965
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path253",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.770677, "y": 5.341619,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.929639, "height": 0.929641,
                    "relativeTransform": [[1, 0, 13.770677], [0, 1, 5.341619]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path253_I190_21135_635_263_svg_0_9296398162841797x0_9296412467956543
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path255",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.664006, "y": 4.152899,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.922020, "height": 0.922021,
                    "relativeTransform": [[1, 0, 13.664006], [0, 1, 4.152899]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path255_I190_21135_635_264_svg_0_9220209121704102x0_9220213890075684
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path257",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 14.829883, "y": 3.817620,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.922021, "height": 0.929641,
                    "relativeTransform": [[1, 0, 14.829883], [0, 1, 3.817620]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path257_I190_21135_635_265_svg_0_9220218658447266x0_9296414852142334
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path259",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 15.873860, "y": 3.429006,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.914402, "height": 0.906781,
                    "relativeTransform": [[1, 0, 15.873860], [0, 1, 3.429006]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path259_I190_21135_635_266_svg_0_914402961730957x0_9067816734313965
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path261",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 17.070196, "y": 3.284227,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.868682, "height": 0.868682,
                    "relativeTransform": [[1, 0, 17.070196], [0, 1, 3.284227]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path261_I190_21135_635_267_svg_0_868682861328125x0_8686823844909668
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path263",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 18.167438, "y": 3.124220,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.868682, "height": 0.868681,
                    "relativeTransform": [[1, 0, 18.167438], [0, 1, 3.124220]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path263_I190_21135_635_268_svg_0_868682861328125x0_8686819076538086
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path265",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 19.249525, "y": 2.964178,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.861063, "height": 0.853441,
                    "relativeTransform": [[1, 0, 19.249525], [0, 1, 2.964178]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path265_I190_21135_635_269_svg_0_8610630035400391x0_8534419536590576
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path267",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 20.285783, "y": 2.887998,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.815341, "height": 0.807722,
                    "relativeTransform": [[1, 0, 20.285783], [0, 1, 2.887998]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path267_I190_21135_635_270_svg_0_8153419494628906x0_807722806930542
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path269",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 12.551536, "y": 4.564392,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.960121, "height": 0.960122,
                    "relativeTransform": [[1, 0, 12.551536], [0, 1, 4.564392]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path269_I190_21135_635_271_svg_0_9601211547851562x0_9601221084594727
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path271",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 11.454222, "y": 4.770120,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.960122, "height": 0.960121,
                    "relativeTransform": [[1, 0, 11.454222], [0, 1, 4.770120]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path271_I190_21135_635_272_svg_0_9601221084594727x0_9601211547851562
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path273",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 10.212130, "y": 5.013955,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.112520, "height": 1.112521,
                    "relativeTransform": [[1, 0, 10.212130], [0, 1, 5.013955]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path273_I190_21135_635_273_svg_1_1125202178955078x1_1125216484069824
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path275",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 9.031023, "y": 5.608333,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.173483, "height": 1.173482,
                    "relativeTransform": [[1, 0, 9.031023], [0, 1, 5.608333]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path275_I190_21135_635_274_svg_1_1734838485717773x1_173482894897461
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path277",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 8.032802, "y": 6.667504,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.211583, "height": 1.211582,
                    "relativeTransform": [[1, 0, 8.032802], [0, 1, 6.667504]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path277_I190_21135_635_275_svg_1_211583137512207x1_2115826606750488
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path279",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 7.514673, "y": 8.061990,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.165861, "height": 1.173482,
                    "relativeTransform": [[1, 0, 7.514673], [0, 1, 8.061990]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path279_I190_21135_635_276_svg_1_1658616065979004x1_173482894897461
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path281",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 7.628996, "y": 9.494544,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.028700, "height": 1.036321,
                    "relativeTransform": [[1, 0, 7.628996], [0, 1, 9.494544]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path281_I190_21135_635_277_svg_1_028700828552246x1_0363216400146484
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path283",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 8.025223, "y": 10.675653,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.899161, "height": 0.899162,
                    "relativeTransform": [[1, 0, 8.025223], [0, 1, 10.675653]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path283_I190_21135_635_278_svg_0_8991613388061523x0_8991622924804688
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path285",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 8.482437, "y": 11.673873,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.906783, "height": 0.906782,
                    "relativeTransform": [[1, 0, 8.482437], [0, 1, 11.673873]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path285_I190_21135_635_279_svg_0_9067831039428711x0_9067821502685547
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path287",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 13.120279, "y": 5.539171,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.213661, "height": 5.823864,
                    "relativeTransform": [[1, 0, 13.120279], [0, 1, 5.539171]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path287_I190_21135_635_280_svg_2_2136611938476562x5_823864459991455
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path289",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 14.762500, "y": 5.097784,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.734775, "height": 5.006419,
                    "relativeTransform": [[1, 0, 14.762500], [0, 1, 5.097784]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path289_I190_21135_635_281_svg_1_7347755432128906x5_0064191818237305
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path291",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 8.752397, "y": 7.223777,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.802385, "height": 5.361440,
                    "relativeTransform": [[1, 0, 8.752397], [0, 1, 7.223777]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path291_I190_21135_635_282_svg_1_8023853302001953x5_361440658569336
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path293",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 34.319755, "y": 6.253275,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.768180, "height": 0.609188,
                    "relativeTransform": [[1, 0, 34.319755], [0, 1, 6.253275]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path293_I190_21135_635_283_svg_0_7681808471679688x0_6091880798339844
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path295",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 34.450046, "y": 6.801980,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.232868, "height": 6.624499,
                    "relativeTransform": [[1, 0, 34.450046], [0, 1, 6.801980]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path295_I190_21135_635_284_svg_2_232868194580078x6_624499320983887
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path297",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 16.475286, "y": 7.174735,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.704324, "height": 3.060221,
                    "relativeTransform": [[1, 0, 16.475286], [0, 1, 7.174735]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path297_I190_21135_635_285_svg_3_704324722290039x3_0602211952209473
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path299",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 25.687311, "y": 6.492478,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.282577, "height": 3.012447,
                    "relativeTransform": [[1, 0, 25.687311], [0, 1, 6.492478]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path299_I190_21135_635_286_svg_3_2825775146484375x3_0124473571777344
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path301",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 31.768415, "y": 10.064955,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.432691, "height": 2.105168,
                    "relativeTransform": [[1, 0, 31.768415], [0, 1, 10.064955]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path301_I190_21135_635_287_svg_2_4326915740966797x2_105168342590332
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path303",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 9.671123, "y": 9.472606,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.667604, "height": 2.331851,
                    "relativeTransform": [[1, 0, 9.671123], [0, 1, 9.472606]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path303_I190_21135_635_288_svg_4_667604446411133x2_3318519592285156
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "path305",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.251633, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 16.583223, "y": 15.079994,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 12.905706, "height": 3.208026,
                    "relativeTransform": [[1, 0, 16.583223], [0, 1, 15.079994]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Mallorca_assets_icon_path305_I190_21135_635_289_svg_12_905706405639648x3_208026885986328
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
