"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinWizard_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class GremlinWizard_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "GremlinWizard";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(22, 26);
        else
            return Mathf_1.Mathf.RandomRange(21, 25);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/wizardGremlin/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/wizardGremlin/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/wizardGremlin/skeleton.png"));
    }
    get Name() {
        return "地精法师";
    }
}
exports.GremlinWizard_Model = GremlinWizard_Model;
//# sourceMappingURL=GremlinWizard_Model.js.map