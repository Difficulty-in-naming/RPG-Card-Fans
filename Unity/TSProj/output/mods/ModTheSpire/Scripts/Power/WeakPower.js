"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeakPower = void 0;
var ReducePowerAction_1 = require("../Action/Common/ReducePowerAction");
var RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
var DamageInfo_1 = require("../DataDefine/DamageInfo");
var DungeonManager_1 = require("../DungeonManager");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var PaperCrane_1 = require("../Relics/PaperCrane");
var StringHelper_1 = require("../StringHelper");
var AbstractPower_1 = require("./AbstractPower");
class WeakPower extends AbstractPower_1.AbstractPower {
    constructor() {
        super(...arguments);
        this.Icon = FileHelper_1.default.FormatPath("Powers/weak.png");
        this.Id = "Weak";
        this.Name = Localization_1.LocalizationProperty.Read("能力-虚弱");
    }
    get Type() {
        return AbstractPower_1.PowerType.Debuff;
    }
    GetDescription(...args) {
        let effect = 25;
        if (DungeonManager_1.default.Inst.Player.HasRelic(PaperCrane_1.PaperCrane.Id))
            effect = 40;
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-虚弱描述")).format(effect, this.Amount);
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
    CalcFinalDamageValue(msg) {
        super.CalcFinalDamageValue(msg);
        let effect = 0.25;
        if (DungeonManager_1.default.Inst.Player.HasRelic(PaperCrane_1.PaperCrane.Id))
            effect = 0.40;
        msg.info.AddModify(new DamageInfo_1.WrapDamage(this, -msg.info.TotalDamage * effect));
    }
    OnDamageAfter(msg) {
        super.OnDamageAfter(msg);
        let effect = 0.25;
        if (DungeonManager_1.default.Inst.Player.HasRelic(PaperCrane_1.PaperCrane.Id))
            effect = 0.40;
        msg.info.AddModify(new DamageInfo_1.WrapDamage(this, -msg.info.TotalDamage * effect));
    }
}
exports.WeakPower = WeakPower;
//# sourceMappingURL=WeakPower.js.map