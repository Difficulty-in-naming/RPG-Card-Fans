"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slimed = void 0;
const FileHelper_1 = require("../../FileHelper");
const Localization_1 = require("../../Gen/DB/Localization");
const AbstractCard_1 = require("../AbstractCard");
class Slimed extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.COLORLESS;
    Desc = Localization_1.LocalizationProperty.Read("黏液描述");
    Icon = FileHelper_1.default.FormatPath("cards/status/slimed.png");
    Name = Localization_1.LocalizationProperty.Read("黏液");
    Rarity = AbstractCard_1.CardRarity.COMMON;
    Target = AbstractCard_1.CardTarget.SELF;
    Type = AbstractCard_1.CardType.STATUS;
    Exhaust = true;
}
exports.Slimed = Slimed;
//# sourceMappingURL=Slimed.js.map