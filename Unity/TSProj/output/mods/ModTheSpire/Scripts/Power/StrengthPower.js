"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrengthPower = void 0;
const DamageInfo_1 = require("../DataDefine/DamageInfo");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
class StrengthPower extends AbstractPower_1.AbstractPower {
    Name = Localization_1.LocalizationProperty.Read("能力-力量");
    Icon = FileHelper_1.default.FormatPath("Powers/strength.png");
    Id = "Strength";
    get Type() { return this.Amount >= 0 ? AbstractPower_1.PowerType.Buff : AbstractPower_1.PowerType.Debuff; }
    GetDescription(...args) {
        if (this.Amount >= 0) {
            return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-力量(提升)")).format(this.Amount);
        }
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-力量(下降)")).format(this.Amount);
    }
    //TODO
    CalcDamageValue(msg) {
        super.CalcDamageValue(msg);
        msg.info.AddModify(new DamageInfo_1.WrapDamage(this, this.Amount));
    }
    OnDamageBefore(msg) {
        super.OnDamageBefore(msg);
        msg.info.AddModify(new DamageInfo_1.WrapDamage(this, this.Amount));
    }
}
exports.StrengthPower = StrengthPower;
//# sourceMappingURL=StrengthPower.js.map