"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuicideAction = void 0;
const AbstractGameAction_1 = require("../AbstractGameAction");
class SuicideAction extends AbstractGameAction_1.default {
    Monster;
    TriggerRelics;
    Type = AbstractGameAction_1.ActionType.DAMAGE;
    constructor(Monster, TriggerRelics = true) {
        super();
        this.Monster = Monster;
        this.TriggerRelics = TriggerRelics;
    }
    async Update() {
        this.Monster.Gold = 0;
        this.Monster.Health = 0;
        this.Monster.Die();
        return true;
    }
}
exports.SuicideAction = SuicideAction;
//# sourceMappingURL=SuicideAction.js.map