"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcidSlime_S_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class AcidSlime_S_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "AcidSlime_S";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2)
            return Mathf_1.Mathf.RandomRange(9, 13);
        else
            return Mathf_1.Mathf.RandomRange(8, 12);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/slimeS/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeS/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeS/skeleton.png"));
    }
    get Name() {
        return "酸液史莱姆（小）";
    }
}
exports.AcidSlime_S_Model = AcidSlime_S_Model;
//# sourceMappingURL=AcidSlime_S_Model.js.map