"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hexaghost_Model = void 0;
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class Hexaghost_Model extends MonsterInfo_1.MonsterInfo {
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 9)
            return 264;
        else
            return 250;
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/boss/guardian/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/boss/guardian/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/boss/guardian/skeleton.png"));
    }
    get Name() {
        return "怪物-六火亡魂";
    }
}
exports.Hexaghost_Model = Hexaghost_Model;
Hexaghost_Model.Id = "Hexaghost";
//# sourceMappingURL=Hexaghost_Model.js.map