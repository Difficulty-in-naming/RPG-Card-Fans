"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetallicizePower = void 0;
var GainBlockAction_1 = require("../Action/Common/GainBlockAction");
var SoundMaster_1 = require("../Audio/SoundMaster");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var StringHelper_1 = require("../StringHelper");
var AbstractPower_1 = require("./AbstractPower");
class MetallicizePower extends AbstractPower_1.AbstractPower {
    constructor() {
        super(...arguments);
        this.Icon = FileHelper_1.default.FormatPath("Powers/armor.png");
        this.Id = "Metallicize";
        this.Name = Localization_1.LocalizationProperty.Read("能力-金属化");
    }
    get Type() {
        return AbstractPower_1.PowerType.Buff;
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-金属化描述")).format(this.Amount);
    }
    PlayApplyPowerSfx() {
        super.PlayApplyPowerSfx();
        SoundMaster_1.SoundMaster.PlayVoice("POWER_METALLICIZE", 0.05);
    }
    AtEndOfTurnPreEndTurnCards(msg) {
        super.AtEndOfTurnPreEndTurnCards(msg);
        this.Flash();
        this.AddToBot(new GainBlockAction_1.default(this.Owner, this.Amount));
    }
}
exports.MetallicizePower = MetallicizePower;
MetallicizePower.Id = "Metallicize";
//# sourceMappingURL=MetallicizePower.js.map