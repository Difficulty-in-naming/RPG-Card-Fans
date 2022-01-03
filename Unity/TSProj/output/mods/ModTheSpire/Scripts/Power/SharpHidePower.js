"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharpHidePower = void 0;
var DamageAction_1 = require("../Action/Common/DamageAction");
var AbstractCard_1 = require("../Cards/AbstractCard");
var AttackEffect_1 = require("../DataDefine/AttackEffect");
var DamageInfo_1 = require("../DataDefine/DamageInfo");
var DamageType_1 = require("../DataDefine/DamageType");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var StringHelper_1 = require("../StringHelper");
var AbstractPower_1 = require("./AbstractPower");
class SharpHidePower extends AbstractPower_1.AbstractPower {
    constructor() {
        super(...arguments);
        this.Icon = FileHelper_1.default.FormatPath("Powers/sharpHide.png");
        this.Id = "Sharp Hide";
        this.Name = Localization_1.LocalizationProperty.Read("能力-锋利外壳");
    }
    get Type() {
        return AbstractPower_1.PowerType.Buff;
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-锋利外壳描述").format(this.Amount));
    }
    OnHurtAfter(msg) {
        super.OnHurtAfter(msg);
        if (this.Owner.IsDeadOrEscaped || this.Owner.IsDying) {
            return;
        }
        if (msg.Damage.Modify[0].Damage.Source instanceof AbstractCard_1.default) {
            let card = msg.Damage.Modify[0].Damage.Source;
            if (card.Type == AbstractCard_1.CardType.ATTACK) {
                this.Flash();
                this.AddToBot(new DamageAction_1.default(msg.Damage.Unit, new DamageInfo_1.default(this.Owner, this.Amount, DamageType_1.DamageType.THORNS), AttackEffect_1.AttackEffect.SLASH_HORIZONTAL));
            }
        }
    }
}
exports.SharpHidePower = SharpHidePower;
SharpHidePower.Id = "Sharp Hide";
//# sourceMappingURL=SharpHidePower.js.map