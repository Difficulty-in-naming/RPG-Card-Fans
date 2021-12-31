"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const AbstractRelic_1 = require("./AbstractRelic");
class BurningBlood extends AbstractRelic_1.default {
    Name = Localization_1.LocalizationProperty.Read("燃烧之血");
    Desc = Localization_1.LocalizationProperty.Read("燃烧之血描述");
    Icon = FileHelper_1.default.FormatPath("Relics/burningBlood.png");
    Flavor;
    Id;
    OnLose() {
    }
    OnObtain() {
    }
}
exports.default = BurningBlood;
//# sourceMappingURL=BurningBlood.js.map