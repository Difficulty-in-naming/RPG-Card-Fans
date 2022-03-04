"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinionPower = void 0;
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const AbstractPower_1 = require("./AbstractPower");
class MinionPower extends AbstractPower_1.AbstractPower {
    Icon = FileHelper_1.default.FormatPath("Powers/minion.png");
    Id = "Minion";
    Name = Localization_1.LocalizationProperty.Read("能力-爪牙");
    get Type() {
        return AbstractPower_1.PowerType.Buff;
    }
    GetDescription(...args) {
        return Localization_1.LocalizationProperty.Read("能力-爪牙描述");
    }
}
exports.MinionPower = MinionPower;
//# sourceMappingURL=MinionPower.js.map