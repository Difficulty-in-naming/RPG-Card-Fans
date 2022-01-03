"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperCrane = void 0;
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var AbstractRelic_1 = require("./AbstractRelic");
class PaperCrane extends AbstractRelic_1.default {
    constructor() {
        super(...arguments);
        this.Desc = Localization_1.LocalizationProperty.Read("纸鹤-效果描述");
        this.Flavor = Localization_1.LocalizationProperty.Read("纸鹤-特殊描述");
        this.Icon = FileHelper_1.default.FormatPath("Relics/paperCrane.png");
        this.Id = "PaperCrane";
        this.Name = Localization_1.LocalizationProperty.Read("纸鹤");
    }
    OnLose() {
    }
    OnObtain() {
    }
}
exports.PaperCrane = PaperCrane;
PaperCrane.Id = "PaperCrane";
//# sourceMappingURL=PaperCrane.js.map