"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DungeonManager_1 = require("../../DungeonManager");
const AbstractGameAction_1 = require("../AbstractGameAction");
class GainEnergyAction extends AbstractGameAction_1.default {
    Amount;
    constructor(Amount) {
        super();
        this.Amount = Amount;
    }
    async Update() {
        DungeonManager_1.default.Inst.Player.GainEnergy(this.Amount);
        if (this.Duration >= 0.2)
            return true;
        return false;
    }
}
exports.default = GainEnergyAction;
//# sourceMappingURL=GainEnergyAction.js.map