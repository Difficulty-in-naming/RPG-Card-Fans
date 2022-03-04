"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractGameAction_1 = require("../AbstractGameAction");
class HealAction extends AbstractGameAction_1.default {
    target;
    source;
    amount;
    Type = AbstractGameAction_1.ActionType.HEAL;
    constructor(target, source, amount) {
        super();
        this.target = target;
        this.source = source;
        this.amount = amount;
    }
    async Update() {
        if (this.Duration >= 0.2) {
            this.target.Heal(this.amount);
            return true;
        }
    }
}
exports.default = HealAction;
//# sourceMappingURL=HealAction.js.map