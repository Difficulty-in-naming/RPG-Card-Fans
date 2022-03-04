"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DexterityPower = void 0;
const SoundMaster_1 = require("../Audio/SoundMaster");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
class DexterityPower extends AbstractPower_1.AbstractPower {
    Name = Localization_1.LocalizationProperty.Read("能力-敏捷");
    Icon = FileHelper_1.default.FormatPath("Powers/strength.png");
    Id = "Strength";
    get Type() { return this.Amount >= 0 ? AbstractPower_1.PowerType.Buff : AbstractPower_1.PowerType.Debuff; }
    GetDescription(...args) {
        if (this.Amount >= 0) {
            return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-敏捷(提升)")).format(this.Amount);
        }
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-敏捷(下降)")).format(this.Amount);
    }
    PlayApplyPowerSfx() {
        SoundMaster_1.SoundMaster.PlayVoice("POWER_DEXTERITY", 0.05);
    }
    PreModifyBlock(msg) {
        msg.block += this.Amount;
    }
}
exports.DexterityPower = DexterityPower;
//# sourceMappingURL=DexterityPower.js.map