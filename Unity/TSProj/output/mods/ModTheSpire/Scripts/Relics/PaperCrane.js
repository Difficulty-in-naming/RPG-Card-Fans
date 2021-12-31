"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperCrane = void 0;
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const AbstractRelic_1 = require("./AbstractRelic");
class PaperCrane extends AbstractRelic_1.default {
    static Id = "PaperCrane";
    Desc = Localization_1.LocalizationProperty.Read("纸鹤-效果描述");
    Flavor = Localization_1.LocalizationProperty.Read("纸鹤-特殊描述");
    Icon = FileHelper_1.default.FormatPath("Relics/paperCrane.png");
    Id = "PaperCrane";
    Name = Localization_1.LocalizationProperty.Read("纸鹤");
    OnLose() {
    }
    OnObtain() {
    }
}
exports.PaperCrane = PaperCrane;
//# sourceMappingURL=PaperCrane.js.map