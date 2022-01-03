"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileHelper_1 = require("../../FileHelper");
var Localization_1 = require("../../Gen/DB/Localization");
var BurningBlood_1 = require("../../Relics/BurningBlood");
class TheSilent {
    constructor() {
        ////////////以下变量必须重载///////////
        this.Name = Localization_1.LocalizationProperty.Read("铁甲战士");
        this.Description = Localization_1.LocalizationProperty.Read("铁甲战士描述");
        this.Shoulder = FileHelper_1.default.FormatPath("Characters/ironclad/shoulder.png");
        this.Shoulder2 = FileHelper_1.default.FormatPath("Characters/ironclad/shoulder2.png");
        //选择角色时显示的大图
        this.Portrait = FileHelper_1.default.FormatPath("Characters/ironclad/ironcladPortrait.jpg");
        //选择角色按钮图片
        this.CharSelectButton = FileHelper_1.default.FormatPath("Characters/ironclad/ironcladButton.png");
        //有能量时显示图片
        this.EnergyOrb = [
            FileHelper_1.default.FormatPath("Characters/ironclad/red/layer1.png"),
            FileHelper_1.default.FormatPath("Characters/ironclad/red/layer2.png"),
            FileHelper_1.default.FormatPath("Characters/ironclad/red/layer3.png"),
            FileHelper_1.default.FormatPath("Characters/ironclad/red/layer4.png"),
            FileHelper_1.default.FormatPath("Characters/ironclad/red/layer5.png"),
        ];
        //无能量时显示图片
        this.EmptyEnergyOrb = [
            FileHelper_1.default.FormatPath("Characters/ironclad/red/layer1d.png"),
            FileHelper_1.default.FormatPath("Characters/ironclad/red/layer2d.png"),
            FileHelper_1.default.FormatPath("Characters/ironclad/red/layer3d.png"),
            FileHelper_1.default.FormatPath("Characters/ironclad/red/layer4d.png"),
            FileHelper_1.default.FormatPath("Characters/ironclad/red/layer5d.png"),
        ];
        this.Health = 75;
        this.Gold = 99;
        this.InitRelic = [new BurningBlood_1.default()];
        ///////////////////////////////
    }
}
exports.default = TheSilent;
//# sourceMappingURL=TheSilent.js.map