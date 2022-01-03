"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlimeBoss_Model = void 0;
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class SlimeBoss_Model extends MonsterInfo_1.MonsterInfo {
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 9)
            return 150;
        else
            return 140;
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/boss/slime/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/boss/slime/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/boss/slime/skeleton.png"));
    }
    get Name() {
        return "怪物-史莱姆老大";
    }
}
exports.SlimeBoss_Model = SlimeBoss_Model;
SlimeBoss_Model.Id = "SlimeBoss";
//# sourceMappingURL=SlimeBoss_Model.js.map