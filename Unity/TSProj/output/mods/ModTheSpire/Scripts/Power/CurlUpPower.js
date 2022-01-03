"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurlUpPower = void 0;
var GainBlockAction_1 = require("../Action/Common/GainBlockAction");
var RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
var DamageType_1 = require("../DataDefine/DamageType");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var StringHelper_1 = require("../StringHelper");
var AbstractPower_1 = require("./AbstractPower");
class CurlUpPower extends AbstractPower_1.AbstractPower {
    constructor() {
        super(...arguments);
        this.Icon = FileHelper_1.default.FormatPath("Powers/minion.png");
        this.Id = "Curl Up";
        this.Name = Localization_1.LocalizationProperty.Read("能力-蜷身");
        this.Triggered = false;
    }
    get Type() {
        return AbstractPower_1.PowerType.Buff;
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-蜷身描述")).format(this.Amount);
    }
    OnDamageAfter(msg) {
        super.OnDamageAfter(msg);
        if (!this.Triggered && msg.info.TotalDamage < this.Owner.Health && msg.info.TotalDamage > 0 && msg.info.DamageType == DamageType_1.DamageType.NORMAL) {
            this.Flash();
            this.Triggered = true;
            this.AddToBot(new GainBlockAction_1.default(this.Owner, this.Amount));
            this.AddToBot(new RemoveSpecificPowerAction_1.RemoveSpecificPowerAction(this.Owner, this.Owner, this));
        }
    }
}
exports.CurlUpPower = CurlUpPower;
CurlUpPower.Id = "Curl Up";
//# sourceMappingURL=CurlUpPower.js.map