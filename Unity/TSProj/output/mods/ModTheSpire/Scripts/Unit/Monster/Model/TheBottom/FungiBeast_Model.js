"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungiBeast_Model = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../../../DungeonManager");
var FileHelper_1 = require("../../../../FileHelper");
var SpineLoader_1 = require("../../../../Loader/SpineLoader");
var MonsterInfo_1 = require("../../MonsterInfo");
class FungiBeast_Model extends MonsterInfo_1.MonsterInfo {
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(24, 28);
        else
            return Mathf_1.Mathf.RandomRange(22, 28);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/fungi/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/fungi/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/fungi/skeleton.png"));
    }
    get Name() {
        return "真菌兽";
    }
}
exports.FungiBeast_Model = FungiBeast_Model;
FungiBeast_Model.Id = "FungiBeast";
//# sourceMappingURL=FungiBeast_Model.js.map