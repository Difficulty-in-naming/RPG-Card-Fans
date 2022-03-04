"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sentry_Model = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../../../../DungeonManager");
const FileHelper_1 = require("../../../../FileHelper");
const SpineLoader_1 = require("../../../../Loader/SpineLoader");
const MonsterInfo_1 = require("../../MonsterInfo");
class Sentry_Model extends MonsterInfo_1.MonsterInfo {
    static Id = "Sentry";
    get MaxHealth() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7)
            return Mathf_1.Mathf.RandomRange(39, 45);
        else
            return Mathf_1.Mathf.RandomRange(38, 42);
    }
    get Loader() {
        return new SpineLoader_1.SpineLoader(FileHelper_1.default.FormatPath("Monsters/theBottom/sentry/skeleton.atlas"), FileHelper_1.default.FormatPath("Monsters/theBottom/sentry/skeleton.json"), FileHelper_1.default.FormatPath("Monsters/theBottom/sentry/skeleton.png"));
    }
    get Name() {
        return "哨卫";
    }
}
exports.Sentry_Model = Sentry_Model;
//# sourceMappingURL=Sentry_Model.js.map