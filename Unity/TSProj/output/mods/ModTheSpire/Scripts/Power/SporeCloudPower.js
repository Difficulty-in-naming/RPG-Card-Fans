"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SporeCloudPower = void 0;
var ApplyPowerAction_1 = require("../Action/Common/ApplyPowerAction");
var SoundMaster_1 = require("../Audio/SoundMaster");
var DungeonManager_1 = require("../DungeonManager");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var StringHelper_1 = require("../StringHelper");
var AbstractPower_1 = require("./AbstractPower");
var VulnerablePower_1 = require("./VulnerablePower");
class SporeCloudPower extends AbstractPower_1.AbstractPower {
    constructor(amt) {
        super();
        this.amt = amt;
        this.Icon = FileHelper_1.default.FormatPath("Powers/sporeCloud.png");
        this.Id = "Spore Cloud";
        this.Name = Localization_1.LocalizationProperty.Read("能力-孢子云");
    }
    get Type() {
        return AbstractPower_1.PowerType.Buff;
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-孢子云描述")).format(this.Amount);
    }
    OnDeath(msg) {
        super.OnDeath(msg);
        if (DungeonManager_1.default.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead())
            return;
        SoundMaster_1.SoundMaster.PlayVoice("SPORE_CLOUD_RELEASE");
        this.Flash(true);
        this.AddToTop(new ApplyPowerAction_1.ApplyPowerAction(msg.source, this.Owner, new VulnerablePower_1.VulnerablePower(), this.amt));
    }
}
exports.SporeCloudPower = SporeCloudPower;
//# sourceMappingURL=SporeCloudPower.js.map