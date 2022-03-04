"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueSlaver_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class BlueSlaver_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "BlueSlaver";
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
//# sourceMappingURL=BlueSlaver_Model.js.map