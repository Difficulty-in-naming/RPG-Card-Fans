"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplyPowerAction_1 = require("../../../Action/Common/ApplyPowerAction");
const DamageAction_1 = require("../../../Action/Common/DamageAction");
const AttackEffect_1 = require("../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../DataDefine/DamageInfo");
const FileHelper_1 = require("../../../FileHelper");
const Localization_1 = require("../../../Gen/DB/Localization");
const VulnerablePower_1 = require("../../../Power/VulnerablePower");
const AbstractCard_1 = require("../../AbstractCard");
class Bash extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.RED;
    Desc = Localization_1.LocalizationProperty.Read("痛击描述");
    Icon = FileHelper_1.default.FormatPath("cards/red/attack/bash.png");
    Name = Localization_1.LocalizationProperty.Read("痛击");
    Rarity = AbstractCard_1.CardRarity.BASIC;
    Target = AbstractCard_1.CardTarget.ENEMY;
    Type = AbstractCard_1.CardType.ATTACK;
    Damage = 8;
    Energy = 0;
    Magic = 2;
    Use(player, monster) {
        super.Use(player, monster);
        this.AddToBot(new DamageAction_1.default(monster, new DamageInfo_1.default(player, this.Damage), AttackEffect_1.AttackEffect.BLUNT_HEAVY));
        this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(monster, player, new VulnerablePower_1.VulnerablePower(), this.Magic));
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
exports.default = Bash;
//# sourceMappingURL=Bash.js.map