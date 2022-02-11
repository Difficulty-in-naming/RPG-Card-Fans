"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RitualPower = void 0;
const ApplyPowerAction_1 = require("../Action/Common/ApplyPowerAction");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
const StrengthPower_1 = require("./StrengthPower");
class RitualPower extends AbstractPower_1.AbstractPower {
    skipFirst;
    Icon = FileHelper_1.default.FormatPath("Powers/ritual.png");
    Id = "Ritual";
    Name = Localization_1.LocalizationProperty.Read("能力-仪式");
    get Type() {
        return AbstractPower_1.PowerType.Buff;
    }
    constructor(skipFirst) {
        super();
        this.skipFirst = skipFirst;
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-仪式描述")).format(this.Amount);
    }
    AtEndOfTurn(msg) {
        super.AtEndOfTurn(msg);
        if (this.skipFirst) {
            this.skipFirst = false;
            return;
        }
        this.Flash();
        this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this.Owner, this.Owner, new StrengthPower_1.StrengthPower(), this.Amount));
    }
}
exports.RitualPower = RitualPower;
//# sourceMappingURL=RitualPower.js.map