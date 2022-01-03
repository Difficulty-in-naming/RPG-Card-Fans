"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lagavulin_Model = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class Lagavulin_Model extends MonsterInfo_1.MonsterInfo {
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(112, 115);
        else
            return Mathf_1.Mathf.RandomRange(109, 111);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/lagavulin/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/lagavulin/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/lagavulin/skeleton.png"));
    }
    get Name() {
        return "乐加维林";
    }
}
exports.Lagavulin_Model = Lagavulin_Model;
Lagavulin_Model.Id = "Lagavulin";
//# sourceMappingURL=Lagavulin_Model.js.map