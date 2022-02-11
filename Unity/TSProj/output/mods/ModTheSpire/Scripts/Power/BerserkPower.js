"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerserkPower = void 0;
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
const GainEnergyAction_1 = require("../Action/Common/GainEnergyAction");
class BerserkPower extends AbstractPower_1.AbstractPower {
    static PowerID = "Barricade";
    Id = BerserkPower.PowerID;
    Name = Localization_1.LocalizationProperty.Read("能力-狂暴");
    Icon = FileHelper_1.default.FormatPath("Powers/berserkPower.png");
    get Type() { return AbstractPower_1.PowerType.Buff; }
    Energy;
    constructor(energy) {
        super();
        this.Energy = energy;
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-狂暴描述"));
    }
    AtStartOfTurn(msg) {
        this.AddToBot(new GainEnergyAction_1.default(this.Energy));
    }
}
exports.BerserkPower = BerserkPower;
//# sourceMappingURL=BerserkPower.js.map