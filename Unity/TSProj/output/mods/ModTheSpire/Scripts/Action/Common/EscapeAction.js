"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscapeAction = void 0;
const Async_1 = require("../../../../../Core/Async");
const AbstractGameAction_1 = require("../AbstractGameAction");
class EscapeAction extends AbstractGameAction_1.default {
    enemy;
    Type = AbstractGameAction_1.ActionType.TEXT;
    constructor(enemy) {
        super();
        this.enemy = enemy;
    }
    async Update() {
        if (this.Duration == 0) {
            this.enemy.Escape();
        }
        await Async_1.default.Delay(500);
        return super.Update();
    }
}
exports.EscapeAction = EscapeAction;
//# sourceMappingURL=EscapeAction.js.map