"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheGuardian_Model = void 0;
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class TheGuardian_Model extends MonsterInfo_1.MonsterInfo {
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 9)
            return 250;
        else
            return 240;
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/boss/guardian/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/boss/guardian/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/boss/guardian/skeleton.png"));
    }
    get Name() {
        return "怪物-守护者";
    }
}
exports.TheGuardian_Model = TheGuardian_Model;
TheGuardian_Model.Id = "TheGuardian";
//# sourceMappingURL=TheGuardian_Model.js.map