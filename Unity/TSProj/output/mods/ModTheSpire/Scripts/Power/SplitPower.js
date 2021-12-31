"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitPower = void 0;
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPower_1 = require("./AbstractPower");
class SplitPower extends AbstractPower_1.AbstractPower {
    static PowerID = "SplitPower";
    Name = Localization_1.LocalizationProperty.Read("能力-分裂");
    Icon = FileHelper_1.default.FormatPath("Powers/split.png");
    get Type() {
        return AbstractPower_1.PowerType.Buff;
    }
    Id = SplitPower.PowerID;
    GetDescription(...args) {
        return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-分裂描述")).format(this.Owner.Health);
    }
}
exports.SplitPower = SplitPower;
//# sourceMappingURL=SplitPower.js.map