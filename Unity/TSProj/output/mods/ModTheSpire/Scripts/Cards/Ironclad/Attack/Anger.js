"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DamageAction_1 = require("../../../Action/Common/DamageAction");
var AttackEffect_1 = require("../../../DataDefine/AttackEffect");
var DamageInfo_1 = require("../../../DataDefine/DamageInfo");
var FileHelper_1 = require("../../../FileHelper");
var Localization_1 = require("../../../Gen/DB/Localization");
var AbstractCard_1 = require("../../AbstractCard");
class Strike extends AbstractCard_1.default {
    constructor() {
        super(...arguments);
        this.Color = AbstractCard_1.CardColor.RED;
        this.Desc = Localization_1.LocalizationProperty.Read("愤怒描述");
        this.Icon = FileHelper_1.default.FormatPath("cards/red/attack/anger.png");
        this.Name = Localization_1.LocalizationProperty.Read("愤怒");
        this.Rarity = AbstractCard_1.CardRarity.COMMON;
        this.Target = AbstractCard_1.CardTarget.ENEMY;
        this.Type = AbstractCard_1.CardType.ATTACK;
        this.Tags = AbstractCard_1.CardTags.STRIKE;
        this.Damage = 6;
        this.Energy = 0;
    }
    Use(player, monster) {
        super.Use(player, monster);
        this.AddToBot(new DamageAction_1.default(monster, new DamageInfo_1.default(player, this.Damage), AttackEffect_1.AttackEffect.BLUNT_HEAVY));
        //this.AddToBot(new VFXAction(player,new VerticalAuraParticleEffect(Color.FireBrick,player.)))
    }
    Upgrade() {
        if (!this.IsUpgraded()) {
            this.Name += "+";
            this.Damage += 3;
        }
    }
    CanUpgrade() {
        return this.IsUpgraded();
    }
}
exports.default = Strike;
//# sourceMappingURL=Anger.js.map