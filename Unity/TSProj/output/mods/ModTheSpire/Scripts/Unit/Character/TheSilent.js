"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileHelper_1 = require("../../FileHelper");
const Localization_1 = require("../../Gen/DB/Localization");
const BurningBlood_1 = require("../../Relics/BurningBlood");
class TheSilent {
    ////////////以下变量必须重载///////////
    Name = Localization_1.LocalizationProperty.Read("铁甲战士");
    Description = Localization_1.LocalizationProperty.Read("铁甲战士描述");
    Shoulder = FileHelper_1.default.FormatPath("Characters/ironclad/shoulder.png");
    Shoulder2 = FileHelper_1.default.FormatPath("Characters/ironclad/shoulder2.png");
    //选择角色时显示的大图
    Portrait = FileHelper_1.default.FormatPath("Characters/ironclad/ironcladPortrait.jpg");
    //选择角色按钮图片
    CharSelectButton = FileHelper_1.default.FormatPath("Characters/ironclad/ironcladButton.png");
    //有能量时显示图片
    EnergyOrb = [
        FileHelper_1.default.FormatPath("Characters/ironclad/red/layer1.png"),
        FileHelper_1.default.FormatPath("Characters/ironclad/red/layer2.png"),
        FileHelper_1.default.FormatPath("Characters/ironclad/red/layer3.png"),
        FileHelper_1.default.FormatPath("Characters/ironclad/red/layer4.png"),
        FileHelper_1.default.FormatPath("Characters/ironclad/red/layer5.png"),
    ];
    //无能量时显示图片
    EmptyEnergyOrb = [
        FileHelper_1.default.FormatPath("Characters/ironclad/red/layer1d.png"),
        FileHelper_1.default.FormatPath("Characters/ironclad/red/layer2d.png"),
        FileHelper_1.default.FormatPath("Characters/ironclad/red/layer3d.png"),
        FileHelper_1.default.FormatPath("Characters/ironclad/red/layer4d.png"),
        FileHelper_1.default.FormatPath("Characters/ironclad/red/layer5d.png"),
    ];
    Health = 75;
    Gold = 99;
    InitRelic = [new BurningBlood_1.default()];
    CardFrame;
    InitCard;
    Loader;
}
exports.default = TheSilent;
//# sourceMappingURL=TheSilent.js.map