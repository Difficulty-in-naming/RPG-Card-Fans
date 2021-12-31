"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactPower = void 0;
const ReducePowerAction_1 = require("../Action/Common/ReducePowerAction");
const RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
const DungeonManager_1 = require("../DungeonManager");
const PreApplyPowerMessage_1 = require("../Events/PreApplyPowerMessage");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
class ArtifactPower extends AbstractPower_1.AbstractPower {
    static PowerID = "Artifact";
    Name = Localization_1.LocalizationProperty.Read("能力-人工制品");
    Icon = FileHelper_1.default.FormatPath("Powers/artifact.png");
    Id = ArtifactPower.PowerID;
    get Type() { return AbstractPower_1.PowerType.Buff; }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-人工制品描述")).format(this.Amount);
    }
    OnInit() {
        super.OnInit();
        DungeonManager_1.default.MessageManager.Add(PreApplyPowerMessage_1.PreApplyPowerMessage.Id, this.PreApplyPower);
    }
    OnRemove() {
        super.OnRemove();
        DungeonManager_1.default.MessageManager.Remove(PreApplyPowerMessage_1.PreApplyPowerMessage.Id, this.PreApplyPower);
    }
    PreApplyPower(msg) {
        msg.StackAmount = 0;
        if (this.Amount == 0) {
            this.AddToBot(new RemoveSpecificPowerAction_1.RemoveSpecificPowerAction(this.Owner, this.Owner, this));
        }
        else {
            this.AddToBot(new ReducePowerAction_1.ReducePowerAction(this.Owner, this.Owner, this, 1));
        }
    }
}
exports.ArtifactPower = ArtifactPower;
//# sourceMappingURL=ArtifactPower.js.map