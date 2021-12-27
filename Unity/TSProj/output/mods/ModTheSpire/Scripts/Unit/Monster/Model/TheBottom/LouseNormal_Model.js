"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LouseNormal_Model = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class LouseNormal_Model extends MonsterInfo_1.MonsterInfo {
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
LouseNormal_Model.Id = "LouseNormal";
//# sourceMappingURL=LouseNormal_Model.js.map