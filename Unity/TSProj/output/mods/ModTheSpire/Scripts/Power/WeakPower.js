"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeakPower = void 0;
const ReducePowerAction_1 = require("../Action/Common/ReducePowerAction");
const RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
const DamageInfo_1 = require("../DataDefine/DamageInfo");
const DungeonManager_1 = require("../DungeonManager");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const PaperCrane_1 = require("../Relics/PaperCrane");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
class WeakPower extends AbstractPower_1.AbstractPower {
    Icon = FileHelper_1.default.FormatPath("Powers/weak.png");
    Id = "Weak";
    Name = Localization_1.LocalizationProperty.Read("能力-虚弱");
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