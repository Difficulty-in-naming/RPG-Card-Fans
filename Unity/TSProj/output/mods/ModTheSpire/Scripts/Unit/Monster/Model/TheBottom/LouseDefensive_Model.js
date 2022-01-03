"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LouseDefensive_Model = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class LouseDefensive_Model extends MonsterInfo_1.MonsterInfo {
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(12, 18);
        else
            return Mathf_1.Mathf.RandomRange(11, 17);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/louseGreen/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/louseGreen/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/louseGreen/skeleton.png"));
    }
    get Name() {
        return "防御型虱虫";
    }
}
exports.LouseDefensive_Model = LouseDefensive_Model;
LouseDefensive_Model.Id = "LouseDefensive";
//# sourceMappingURL=LouseDefensive_Model.js.map