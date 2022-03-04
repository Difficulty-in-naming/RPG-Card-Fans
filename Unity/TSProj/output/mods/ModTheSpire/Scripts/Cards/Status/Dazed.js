"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dazed = void 0;
const FileHelper_1 = require("../../FileHelper");
const Localization_1 = require("../../Gen/DB/Localization");
const AbstractCard_1 = require("../AbstractCard");
class Dazed extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.COLORLESS;
    Desc = Localization_1.LocalizationProperty.Read("卡牌-晕眩描述");
    Icon = FileHelper_1.default.FormatPath("cards/status/dazed.png");
    Name = Localization_1.LocalizationProperty.Read("卡牌-晕眩");
    Rarity = AbstractCard_1.CardRarity.COMMON;
    Target = AbstractCard_1.CardTarget.NONE;
    Type = AbstractCard_1.CardType.STATUS;
    Ethereal = true;
}
exports.Dazed = Dazed;
//# sourceMappingURL=Dazed.js.map