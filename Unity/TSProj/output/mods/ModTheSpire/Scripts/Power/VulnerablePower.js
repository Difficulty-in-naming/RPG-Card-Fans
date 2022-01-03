"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VulnerablePower = void 0;
var ReducePowerAction_1 = require("../Action/Common/ReducePowerAction");
var RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
var DamageInfo_1 = require("../DataDefine/DamageInfo");
var DamageType_1 = require("../DataDefine/DamageType");
var DungeonManager_1 = require("../DungeonManager");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var PaperCrane_1 = require("../Relics/PaperCrane");
var StringHelper_1 = require("../StringHelper");
var AbstractPower_1 = require("./AbstractPower");
class VulnerablePower extends AbstractPower_1.AbstractPower {
    constructor() {
        super(...arguments);
        this.Icon = FileHelper_1.default.FormatPath("Powers/vulnerable.png");
        this.Id = "Vulnerable";
        this.Name = Localization_1.LocalizationProperty.Read("能力-易伤");
    }
    get Type() {
        return AbstractPower_1.PowerType.Debuff;
    }
    GetDescription(...args) {
        let effect = 25;
        if (DungeonManager_1.default.Inst.Player.HasRelic(PaperCrane_1.PaperCrane.Id))
            effect = 40;
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-易伤描述")).format(effect, this.Amount);
    }
    AtEndOfTurn(msg) {
        super.AtEndOfTurn(msg);
        if (this.Amount == 0) {
            this.AddToBot(new RemoveSpecificPowerAction_1.RemoveSpecificPowerAction(this.Owner, this.Owner, this));
        }
        else {
            this.AddToBot(new ReducePowerAction_1.ReducePowerAction(this.Owner, this.Owner, this, 1));
        }
        return;
    }
    CalcFinalHurtValue(msg) {
        super.CalcFinalHurtValue(msg);
        if (msg.info.DamageType == DamageType_1.DamageType.NORMAL) {
            let player = this.Owner;
            if (player) {
                if (player.HasRelic("Odd Mushroom")) {
                    msg.info.AddModify(new DamageInfo_1.WrapDamage(this, msg.info.TotalDamage * 0.25));
                    return;
                }
            }
        }
        msg.info.AddModify(new DamageInfo_1.WrapDamage(this, msg.info.TotalDamage * 0.5));
    }
}
exports.VulnerablePower = VulnerablePower;
//# sourceMappingURL=VulnerablePower.js.map