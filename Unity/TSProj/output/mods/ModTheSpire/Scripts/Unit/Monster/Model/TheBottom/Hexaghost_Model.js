"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hexaghost_Model = void 0;
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class Hexaghost_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "Hexaghost";
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
//# sourceMappingURL=Hexaghost_Model.js.map