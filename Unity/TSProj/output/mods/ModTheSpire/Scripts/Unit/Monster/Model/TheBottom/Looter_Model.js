"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Looter_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class Looter_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "Looter";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(46, 50);
        else
            return Mathf_1.Mathf.RandomRange(44, 48);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/looter/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/looter/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/looter/skeleton.png"));
    }
    get Name() {
        return "抢劫的";
    }
}
exports.Looter_Model = Looter_Model;
//# sourceMappingURL=Looter_Model.js.map