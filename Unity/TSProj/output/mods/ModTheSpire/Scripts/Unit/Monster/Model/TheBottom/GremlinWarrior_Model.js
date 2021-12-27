"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinWarrior_Model = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class GremlinWarrior_Model extends MonsterInfo_1.MonsterInfo {
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(21, 25);
        else
            return Mathf_1.Mathf.RandomRange(20, 24);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/angryGremlin/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/angryGremlin/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/angryGremlin/skeleton.png"));
    }
    get Name() {
        return "火大地精";
    }
}
exports.GremlinWarrior_Model = GremlinWarrior_Model;
GremlinWarrior_Model.Id = "GremlinWarrior";
//# sourceMappingURL=GremlinWarrior_Model.js.map