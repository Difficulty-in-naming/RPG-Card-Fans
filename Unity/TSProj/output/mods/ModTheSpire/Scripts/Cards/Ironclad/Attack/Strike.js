"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DamageAction_1 = require("../../../Action/Common/DamageAction");
const AttackEffect_1 = require("../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../DataDefine/DamageInfo");
const FileHelper_1 = require("../../../FileHelper");
const Localization_1 = require("../../../Gen/DB/Localization");
const AbstractCard_1 = require("../../AbstractCard");
class Strike extends AbstractCard_1.default {
    Color = AbstractCard_1.CardColor.RED;
    Desc = Localization_1.LocalizationProperty.Read("打击描述");
    Icon = FileHelper_1.default.FormatPath("cards/red/attack/strike.png");
    Name = Localization_1.LocalizationProperty.Read("打击");
    Rarity = AbstractCard_1.CardRarity.BASIC;
    Target = AbstractCard_1.CardTarget.ENEMY;
    Type = AbstractCard_1.CardType.ATTACK;
    Tags = AbstractCard_1.CardTags.STRIKE | AbstractCard_1.CardTags.STARTER_STRIKE;
    Damage = 6;
    Energy = 1;
    Use(player, monster) {
        super.Use(player, monster);
        this.AddToBot(new DamageAction_1.default(monster, new DamageInfo_1.default(player, this.Damage), AttackEffect_1.AttackEffect.SLASH_DIAGONAL));
    }
    Upgrade() {
        if (!this.IsUpgraded()) {
            this.Name += "+";
            this.Damage += 3;
        }
    }
}
exports.default = Strike;
//# sourceMappingURL=Strike.js.map