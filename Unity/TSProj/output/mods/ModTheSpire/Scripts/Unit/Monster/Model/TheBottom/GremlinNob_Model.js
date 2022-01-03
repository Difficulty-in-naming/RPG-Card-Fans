"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinNob_Model = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class GremlinNob_Model extends MonsterInfo_1.MonsterInfo {
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
GremlinNob_Model.Id = "GremlinNob";
//# sourceMappingURL=GremlinNob_Model.js.map