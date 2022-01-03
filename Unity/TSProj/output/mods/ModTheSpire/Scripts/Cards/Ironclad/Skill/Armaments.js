"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defend = void 0;
var GainBlockAction_1 = require("../../../Action/Common/GainBlockAction");
var ArmamentsAction_1 = require("../../../Action/Unique/ArmamentsAction");
var FileHelper_1 = require("../../../FileHelper");
var Localization_1 = require("../../../Gen/DB/Localization");
var AbstractCard_1 = require("../../AbstractCard");
class Defend extends AbstractCard_1.default {
    constructor() {
        super(...arguments);
        this.Color = AbstractCard_1.CardColor.RED;
        this.Desc = Localization_1.LocalizationProperty.Read("武装描述");
        this.Icon = FileHelper_1.default.FormatPath("cards/red/skill/armaments.png");
        this.Name = Localization_1.LocalizationProperty.Read("武装");
        this.Rarity = AbstractCard_1.CardRarity.COMMON;
        this.Target = AbstractCard_1.CardTarget.SELF;
        this.Type = AbstractCard_1.CardType.SKILL;
        this.Tags = AbstractCard_1.CardTags.STARTER_DEFEND;
        this.Block = 5;
        this.Energy = 1;
    }
    Use(player, monster) {
        super.Use(player, monster);
        this.AddToBot(new GainBlockAction_1.default(player, this.Block));
        this.AddToBot(new ArmamentsAction_1.ArmamentsAction(player));
    }
    Upgrade() {
        if (!this.IsUpgraded()) {
            this.Name += "+";
            this.Block += 3;
        }
    }
}
exports.Defend = Defend;
//# sourceMappingURL=Armaments.js.map