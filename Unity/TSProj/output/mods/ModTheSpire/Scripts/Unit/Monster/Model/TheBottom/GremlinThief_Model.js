"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinThief_Model = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class GremlinThief_Model extends MonsterInfo_1.MonsterInfo {
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(11, 15);
        else
            return Mathf_1.Mathf.RandomRange(10, 14);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/thiefGremlin/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/thiefGremlin/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/thiefGremlin/skeleton.png"));
    }
    get Name() {
        return "卑鄙地精";
    }
}
exports.GremlinThief_Model = GremlinThief_Model;
GremlinThief_Model.Id = "GremlinThief";
//# sourceMappingURL=GremlinThief_Model.js.map