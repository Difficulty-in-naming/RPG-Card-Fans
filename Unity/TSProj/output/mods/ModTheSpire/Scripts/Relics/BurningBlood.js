"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var AbstractRelic_1 = require("./AbstractRelic");
class BurningBlood extends AbstractRelic_1.default {
    constructor() {
        super(...arguments);
        this.Name = Localization_1.LocalizationProperty.Read("燃烧之血");
        this.Desc = Localization_1.LocalizationProperty.Read("燃烧之血描述");
        this.Icon = FileHelper_1.default.FormatPath("Relics/burningBlood.png");
    }
    OnLose() {
    }
    OnObtain() {
    }
}
exports.default = BurningBlood;
//# sourceMappingURL=BurningBlood.js.map