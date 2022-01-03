"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcidSlime_M_Model = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class AcidSlime_M_Model extends MonsterInfo_1.MonsterInfo {
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(29, 34);
        else
            return Mathf_1.Mathf.RandomRange(28, 32);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/slimeM/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeM/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeM/skeleton.png"));
    }
    get Name() {
        return "酸液史莱姆（中）";
    }
}
exports.AcidSlime_M_Model = AcidSlime_M_Model;
AcidSlime_M_Model.Id = "AcidSlime_M";
//# sourceMappingURL=AcidSlime_M_Model.js.map