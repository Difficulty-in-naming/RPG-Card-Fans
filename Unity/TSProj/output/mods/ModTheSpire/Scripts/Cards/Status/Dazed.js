"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dazed = void 0;
var FileHelper_1 = require("../../FileHelper");
var Localization_1 = require("../../Gen/DB/Localization");
var AbstractCard_1 = require("../AbstractCard");
class Dazed extends AbstractCard_1.default {
    constructor() {
        super(...arguments);
        this.Color = AbstractCard_1.CardColor.COLORLESS;
        this.Desc = Localization_1.LocalizationProperty.Read("卡牌-晕眩描述");
        this.Icon = FileHelper_1.default.FormatPath("cards/status/dazed.png");
        this.Name = Localization_1.LocalizationProperty.Read("卡牌-晕眩");
        this.Rarity = AbstractCard_1.CardRarity.COMMON;
        this.Target = AbstractCard_1.CardTarget.NONE;
        this.Type = AbstractCard_1.CardType.STATUS;
        this.Ethereal = true;
    }
}
exports.Dazed = Dazed;
//# sourceMappingURL=Dazed.js.map