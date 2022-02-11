"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LouseNormal_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class LouseNormal_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "LouseNormal";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(11, 16);
        else
            return Mathf_1.Mathf.RandomRange(10, 15);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/louseRed/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/louseRed/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/louseRed/skeleton.png"));
    }
    get Name() {
        return "普通型虱虫";
    }
}
exports.LouseNormal_Model = LouseNormal_Model;
//# sourceMappingURL=LouseNormal_Model.js.map