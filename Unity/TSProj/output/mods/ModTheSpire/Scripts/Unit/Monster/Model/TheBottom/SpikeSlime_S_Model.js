"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpikeSlime_S_Model = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class SpikeSlime_S_Model extends MonsterInfo_1.MonsterInfo {
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(11, 15);
        else
            return Mathf_1.Mathf.RandomRange(10, 14);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/slimeAltS/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeAltS/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeAltS/skeleton.png"));
    }
    get Name() {
        return "尖刺史莱姆（大）";
    }
}
exports.SpikeSlime_S_Model = SpikeSlime_S_Model;
SpikeSlime_S_Model.Id = "SpikeSlime_S";
//# sourceMappingURL=SpikeSlime_S_Model.js.map