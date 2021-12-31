"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThieveryPower = void 0;
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const DungeonManager_1 = require("../DungeonManager");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const AbstractPower_1 = require("./AbstractPower");
class ThieveryPower extends AbstractPower_1.AbstractPower {
    static Id = "Thievery";
    Icon = FileHelper_1.default.FormatPath("Powers/thievery.png");
    Id = "Thievery";
    Name = Localization_1.LocalizationProperty.Read("能力-偷窃");
    get Type() {
        return AbstractPower_1.PowerType.Buff;
    }
    GetDescription(...args) {
        return Localization_1.LocalizationProperty.Read("能力-偷窃描述");
    }
    OnDeath(msg) {
        super.OnDeath(msg);
        DungeonManager_1.default.Inst.CurrentRoom.AddReward(Mathf_1.Mathf.Clamp(this.Amount, 0, Number.MAX_SAFE_INTEGER));
    }
}
exports.ThieveryPower = ThieveryPower;
//# sourceMappingURL=ThieveryPower.js.map