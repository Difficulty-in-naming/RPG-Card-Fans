"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedSlaver_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class RedSlaver_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "RedSlaver";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(48, 52);
        else
            return Mathf_1.Mathf.RandomRange(46, 50);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/redSlaver/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/redSlaver/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/redSlaver/skeleton.png"));
    }
    get Name() {
        return "奴隶贩子";
    }
}
exports.RedSlaver_Model = RedSlaver_Model;
//# sourceMappingURL=RedSlaver_Model.js.map