"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpikeSlime_L_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class SpikeSlime_L_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "SpikeSlime_L";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(67, 73);
        else
            return Mathf_1.Mathf.RandomRange(64, 70);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/slimeAltL/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeAltL/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeAltL/skeleton.png"));
    }
    get Name() {
        return "尖刺史莱姆（大）";
    }
}
exports.SpikeSlime_L_Model = SpikeSlime_L_Model;
//# sourceMappingURL=SpikeSlime_L_Model.js.map