"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueSlaver_Model = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class BlueSlaver_Model extends MonsterInfo_1.MonsterInfo {
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(48, 52);
        else
            return Mathf_1.Mathf.RandomRange(46, 50);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/blueSlaver/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/blueSlaver/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/blueSlaver/skeleton.png"));
    }
    get Name() {
        return "蓝色奴隶贩子";
    }
}
exports.BlueSlaver_Model = BlueSlaver_Model;
BlueSlaver_Model.Id = "BlueSlaver";
//# sourceMappingURL=BlueSlaver_Model.js.map