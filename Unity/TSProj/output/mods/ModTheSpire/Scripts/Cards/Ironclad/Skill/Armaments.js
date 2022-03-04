"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armaments = void 0;
const GainBlockAction_1 = require("../../../Action/Common/GainBlockAction");
const ArmamentsAction_1 = require("../../../Action/Unique/ArmamentsAction");
const FileHelper_1 = require("../../../FileHelper");
const Localization_1 = require("../../../Gen/DB/Localization");
const AbstractCard_1 = require("../../AbstractCard");
class Armaments extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.RED;
    Desc = Localization_1.LocalizationProperty.Read("武装描述");
    Icon = FileHelper_1.default.FormatPath("cards/red/skill/armaments.png");
    Name = Localization_1.LocalizationProperty.Read("武装");
    Rarity = AbstractCard_1.CardRarity.COMMON;
    Target = AbstractCard_1.CardTarget.SELF;
    Type = AbstractCard_1.CardType.SKILL;
    Block = 5;
    Energy = 1;
    Use(player, monster) {
        super.Use(player, monster);
        this.AddToBot(new GainBlockAction_1.default(player, this.Block));
        this.AddToBot(new ArmamentsAction_1.ArmamentsAction(this.IsUpgraded())); //TODO UI未完成
    }
    Upgrade() {
        if (!this.IsUpgraded()) {
            this.UpgradeName();
            this.UpgradeBlock(3);
        }
    }
}
exports.Armaments = Armaments;
//# sourceMappingURL=Armaments.js.map