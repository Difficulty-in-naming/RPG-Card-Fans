"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GainEnergyAction_1 = require("../../../Action/Common/GainEnergyAction");
const LoseHPAction_1 = require("../../../Action/Common/LoseHPAction");
const FileHelper_1 = require("../../../FileHelper");
const Localization_1 = require("../../../Gen/DB/Localization");
const AbstractCard_1 = require("../../AbstractCard");
class Bloodletting extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.RED;
    Desc = Localization_1.LocalizationProperty.Read("放血描述");
    Icon = FileHelper_1.default.FormatPath("cards/red/skill/bloodletting.png");
    Name = Localization_1.LocalizationProperty.Read("放血");
    Rarity = AbstractCard_1.CardRarity.UNCOMMON;
    Target = AbstractCard_1.CardTarget.SELF;
    Type = AbstractCard_1.CardType.SKILL;
    Magic = 2;
    Use(p, monster) {
        this.AddToBot(new LoseHPAction_1.default(p, p, 3));
        this.AddToBot(new GainEnergyAction_1.default(this.Magic));
    }
    Upgrade() {
        if (!this.IsUpgraded()) {
            this.UpgradeName();
            this.UpgradeDamage(2);
            this.UpgradeMagic(1);
            this.UpgradeTimes++;
        }
    }
    CanUpgrade() {
        return this.IsUpgraded();
    }
}
exports.default = Bloodletting;
//# sourceMappingURL=Bloodletting.js.map