"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinTsundere_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class GremlinTsundere_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "GremlinTsundere";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(13, 17);
        else
            return Mathf_1.Mathf.RandomRange(12, 15);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.png"));
    }
    get Name() {
        return "持盾地精";
    }
}
exports.GremlinTsundere_Model = GremlinTsundere_Model;
//# sourceMappingURL=GremlinTsundere_Model.js.map