"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitPower = void 0;
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var StringHelper_1 = require("../StringHelper");
var AbstractPower_1 = require("./AbstractPower");
class SplitPower extends AbstractPower_1.AbstractPower {
    constructor() {
        super(...arguments);
        this.Name = Localization_1.LocalizationProperty.Read("能力-分裂");
        this.Icon = FileHelper_1.default.FormatPath("Powers/split.png");
        this.Id = SplitPower.PowerID;
    }
    get Type() {
        return AbstractPower_1.PowerType.Buff;
    }
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-分裂描述")).format(this.Owner.Health);
    }
}
exports.SplitPower = SplitPower;
SplitPower.PowerID = "SplitPower";
//# sourceMappingURL=SplitPower.js.map