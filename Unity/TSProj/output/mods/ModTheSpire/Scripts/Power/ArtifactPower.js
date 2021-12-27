"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactPower = void 0;
var ReducePowerAction_1 = require("../Action/Common/ReducePowerAction");
var RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
var DungeonManager_1 = require("../DungeonManager");
var PreApplyPowerMessage_1 = require("../Events/PreApplyPowerMessage");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var StringHelper_1 = require("../StringHelper");
var AbstractPower_1 = require("./AbstractPower");
class ArtifactPower extends AbstractPower_1.AbstractPower {
    constructor() {
        super(...arguments);
        this.Name = Localization_1.LocalizationProperty.Read("能力-人工制品");
        this.Icon = FileHelper_1.default.FormatPath("Powers/artifact.png");
        this.Id = ArtifactPower.PowerID;
    }
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
ArtifactPower.PowerID = "Artifact";
//# sourceMappingURL=ArtifactPower.js.map