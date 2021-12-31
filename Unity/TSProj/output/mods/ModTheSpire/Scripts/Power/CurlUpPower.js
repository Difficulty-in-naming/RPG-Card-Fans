"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurlUpPower = void 0;
const GainBlockAction_1 = require("../Action/Common/GainBlockAction");
const RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
const DamageType_1 = require("../DataDefine/DamageType");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
class CurlUpPower extends AbstractPower_1.AbstractPower {
    static Id = "Curl Up";
    Icon = FileHelper_1.default.FormatPath("Powers/minion.png");
    Id = "Curl Up";
    Name = Localization_1.LocalizationProperty.Read("能力-蜷身");
    Triggered = false;
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
//# sourceMappingURL=CurlUpPower.js.map