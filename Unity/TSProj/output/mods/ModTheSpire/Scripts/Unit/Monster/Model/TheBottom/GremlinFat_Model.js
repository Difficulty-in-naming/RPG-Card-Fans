"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinFat_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class GremlinFat_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "GremlinFat";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(14, 18);
        else
            return Mathf_1.Mathf.RandomRange(13, 17);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/fatGremlin/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/fatGremlin/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/fatGremlin/skeleton.png"));
    }
    get Name() {
        return "胖地精";
    }
}
exports.GremlinFat_Model = GremlinFat_Model;
//# sourceMappingURL=GremlinFat_Model.js.map