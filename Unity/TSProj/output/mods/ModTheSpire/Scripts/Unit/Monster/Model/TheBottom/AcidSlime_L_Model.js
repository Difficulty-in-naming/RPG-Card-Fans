"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcidSlime_L_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const SplitPower_1 = require("../../../../Power/SplitPower");
const MonsterInfo_1 = require("../../MonsterInfo");
class AcidSlime_L_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "AcidSlime_L";
    loader;
    get InitPower() {
        return new Array(new SplitPower_1.SplitPower());
    }
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(68, 72);
        else
            return Mathf_1.Mathf.RandomRange(65, 69);
    }
    get Loader() {
        return this.loader ?? (this.loader = new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/slimeL/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeL/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/slimeL/skeleton.png")));
    }
    get Name() {
        return "酸液史莱姆（大）";
    }
}
exports.AcidSlime_L_Model = AcidSlime_L_Model;
//# sourceMappingURL=AcidSlime_L_Model.js.map