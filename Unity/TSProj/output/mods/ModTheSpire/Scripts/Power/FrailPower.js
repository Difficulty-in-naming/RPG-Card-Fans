"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrailPower = void 0;
const ReducePowerAction_1 = require("../Action/Common/ReducePowerAction");
const RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
const DungeonManager_1 = require("../DungeonManager");
const PreModifyBlockMessage_1 = require("../Events/PreModifyBlockMessage");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
class FrailPower extends AbstractPower_1.AbstractPower {
    Icon = FileHelper_1.default.FormatPath("Powers/frail.png");
    Id = "Frail";
    Name = Localization_1.LocalizationProperty.Read("能力-脆弱");
    get Type() {
        return AbstractPower_1.PowerType.Debuff;
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-脆弱描述")).format(this.Amount);
    }
    OnInit() {
        super.OnInit();
        DungeonManager_1.default.MessageManager.Add(PreModifyBlockMessage_1.PreModifyBlockMessage.Id, this.PreModifyBlock);
    }
    OnRemove() {
        super.OnRemove();
        DungeonManager_1.default.MessageManager.Remove(PreModifyBlockMessage_1.PreModifyBlockMessage.Id, this.PreModifyBlock);
    }
    PreModifyBlock(msg) {
        msg.block *= 0.75;
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
}
exports.FrailPower = FrailPower;
//# sourceMappingURL=FrailPower.js.map