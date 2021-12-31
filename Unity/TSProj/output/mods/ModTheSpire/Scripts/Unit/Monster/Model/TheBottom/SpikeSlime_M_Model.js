"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpikeSlime_M_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class SpikeSlime_M_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "SpikeSlime_M";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(29, 34);
        else
            return Mathf_1.Mathf.RandomRange(28, 32);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/slimeAltM/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeAltM/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeAltM/skeleton.png"));
    }
    get Name() {
        return "尖刺史莱姆（小）";
    }
}
exports.SpikeSlime_M_Model = SpikeSlime_M_Model;
//# sourceMappingURL=SpikeSlime_M_Model.js.map