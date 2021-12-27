"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeShiftPower = void 0;
var ReducePowerAction_1 = require("../Action/Common/ReducePowerAction");
var RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
var DamageType_1 = require("../DataDefine/DamageType");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var StringHelper_1 = require("../StringHelper");
var AbstractPower_1 = require("./AbstractPower");
class ModeShiftPower extends AbstractPower_1.AbstractPower {
    constructor(shiftFunc) {
        super();
        this.Icon = FileHelper_1.default.FormatPath("Powers/modeShift.png");
        this.Id = "ModeShift";
        this.Name = Localization_1.LocalizationProperty.Read("能力-形态转换");
        this.CanRemove = false;
    }
    get Type() {
        return AbstractPower_1.PowerType.Special;
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-形态转换描述")).format(this.Amount);
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
ModeShiftPower.Id = "ModeShift";
//# sourceMappingURL=ModeShiftPower.js.map