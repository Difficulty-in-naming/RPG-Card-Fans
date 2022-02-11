"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeShiftPower = void 0;
const ReducePowerAction_1 = require("../Action/Common/ReducePowerAction");
const RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
const DamageType_1 = require("../DataDefine/DamageType");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
class ModeShiftPower extends AbstractPower_1.AbstractPower {
    static Id = "ModeShift";
    Icon = FileHelper_1.default.FormatPath("Powers/modeShift.png");
    Id = "ModeShift";
    Name = Localization_1.LocalizationProperty.Read("能力-形态转换");
    CanRemove = false;
    get Type() {
        return AbstractPower_1.PowerType.Special;
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-形态转换描述")).format(this.Amount);
    }
    constructor(shiftFunc) {
        super();
    }
    OnDamageAfter(msg) {
        super.OnDamageAfter(msg);
        if (msg.info.DamageType != DamageType_1.DamageType.THORNS) {
            if (this.Amount - msg.info.TotalDamage <= 0) {
                this.AddToBot(new RemoveSpecificPowerAction_1.RemoveSpecificPowerAction(this.Owner, this.Owner, this));
            }
            else {
                this.AddToBot(new ReducePowerAction_1.ReducePowerAction(this.Owner, this.Owner, this, msg.info.TotalDamage));
            }
        }
    }
}
exports.ModeShiftPower = ModeShiftPower;
//# sourceMappingURL=ModeShiftPower.js.map