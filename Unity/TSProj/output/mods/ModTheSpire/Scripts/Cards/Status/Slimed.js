"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slimed = void 0;
var FileHelper_1 = require("../../FileHelper");
var Localization_1 = require("../../Gen/DB/Localization");
var AbstractCard_1 = require("../AbstractCard");
class Slimed extends AbstractCard_1.default {
    constructor() {
        super(...arguments);
        this.Color = AbstractCard_1.CardColor.COLORLESS;
        this.Desc = Localization_1.LocalizationProperty.Read("黏液描述");
        this.Icon = FileHelper_1.default.FormatPath("cards/status/slimed.png");
        this.Name = Localization_1.LocalizationProperty.Read("黏液");
        this.Rarity = AbstractCard_1.CardRarity.COMMON;
        this.Target = AbstractCard_1.CardTarget.SELF;
        this.Type = AbstractCard_1.CardType.STATUS;
        this.Exhaust = true;
    }
}
exports.Slimed = Slimed;
//# sourceMappingURL=Slimed.js.map