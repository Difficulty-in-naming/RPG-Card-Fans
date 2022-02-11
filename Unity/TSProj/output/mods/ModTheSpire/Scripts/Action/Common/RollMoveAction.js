"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RollMoveAction = void 0;
const AbstractGameAction_1 = require("../AbstractGameAction");
class RollMoveAction extends AbstractGameAction_1.default {
    enemy;
    constructor(enemy) {
        super();
        this.enemy = enemy;
    }
    async Update() {
        if (this.enemy) {
            this.enemy.RollMove();
        }
        return true;
    }
}
exports.RollMoveAction = RollMoveAction;
//# sourceMappingURL=RollMoveAction.js.map