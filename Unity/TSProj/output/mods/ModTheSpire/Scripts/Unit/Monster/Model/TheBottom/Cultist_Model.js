"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cultist_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class Cultist_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "Cultist";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(50, 56);
        else
            return Mathf_1.Mathf.RandomRange(48, 54);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/cultist/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/cultist/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/cultist/skeleton.png"));
    }
    get Name() {
        return "异教徒";
    }
}
exports.Cultist_Model = Cultist_Model;
//# sourceMappingURL=Cultist_Model.js.map