"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplyPowerAction_1 = require("../../../Action/Common/ApplyPowerAction");
const DrawCardAction_1 = require("../../../Action/Common/DrawCardAction");
const FileHelper_1 = require("../../../FileHelper");
const Localization_1 = require("../../../Gen/DB/Localization");
const NoDrawPower_1 = require("../../../Power/NoDrawPower");
const AbstractCard_1 = require("../../AbstractCard");
class BattleTrance extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.RED;
    Desc = Localization_1.LocalizationProperty.Read("战斗专注描述");
    Icon = FileHelper_1.default.FormatPath("cards/red/skill/battle_trance.png");
    Name = Localization_1.LocalizationProperty.Read("战斗专注");
    Rarity = AbstractCard_1.CardRarity.UNCOMMON;
    Target = AbstractCard_1.CardTarget.SELF;
    Type = AbstractCard_1.CardType.SKILL;
    Magic = 3;
    Use(player, monster) {
        super.Use(player, monster);
        this.AddToBot(new DrawCardAction_1.DrawCardAction(this.Magic, player));
        this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(player, player, new NoDrawPower_1.NoDrawPower(player)));
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
exports.default = BattleTrance;
//# sourceMappingURL=BattleTrance.js.map