"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinNob_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class GremlinNob_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "GremlinNob";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(85, 90);
        else
            return Mathf_1.Mathf.RandomRange(82, 86);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/nobGremlin/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/nobGremlin/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/nobGremlin/skeleton.png"));
    }
    get Name() {
        return "地精大块头";
    }
}
exports.GremlinNob_Model = GremlinNob_Model;
//# sourceMappingURL=GremlinNob_Model.js.map