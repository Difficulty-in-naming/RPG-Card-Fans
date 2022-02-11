"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DamageAction_1 = require("../../../Action/Common/DamageAction");
const AttackEffect_1 = require("../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../DataDefine/DamageInfo");
const FileHelper_1 = require("../../../FileHelper");
const Localization_1 = require("../../../Gen/DB/Localization");
const AbstractCard_1 = require("../../AbstractCard");
class Anger extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.RED;
    Desc = Localization_1.LocalizationProperty.Read("愤怒描述");
    Icon = FileHelper_1.default.FormatPath("cards/red/attack/anger.png");
    Name = Localization_1.LocalizationProperty.Read("愤怒");
    Rarity = AbstractCard_1.CardRarity.COMMON;
    Target = AbstractCard_1.CardTarget.ENEMY;
    Type = AbstractCard_1.CardType.ATTACK;
    Damage = 6;
    Energy = 0;
    Use(player, monster) {
        super.Use(player, monster);
        this.AddToBot(new DamageAction_1.default(monster, new DamageInfo_1.default(player, this.Damage), AttackEffect_1.AttackEffect.BLUNT_HEAVY));
        //this.AddToBot(new VFXAction(player,new VerticalAuraParticleEffect(Color.FireBrick,player.)))
    }
    Upgrade() {
        if (!this.IsUpgraded()) {
            this.UpgradeName();
            this.UpgradeDamage(3);
            this.UpgradeTimes++;
        }
    }
    CanUpgrade() {
        return this.IsUpgraded();
    }
}
exports.default = Anger;
//# sourceMappingURL=Anger.js.map