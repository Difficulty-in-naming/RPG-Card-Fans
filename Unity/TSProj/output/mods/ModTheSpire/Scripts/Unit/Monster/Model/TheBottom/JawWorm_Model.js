"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JawWorm_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class JawWorm_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "JawWorm";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(42, 46);
        else
            return Mathf_1.Mathf.RandomRange(40, 44);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/jawWorm/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/jawWorm/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/jawWorm/skeleton.png"));
    }
    get Name() {
        return "大颚虫";
    }
}
exports.JawWorm_Model = JawWorm_Model;
//# sourceMappingURL=JawWorm_Model.js.map