"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscapeAction = void 0;
var Async_1 = require("../../../../../Core/Async");
var AbstractGameAction_1 = require("../AbstractGameAction");
class EscapeAction extends AbstractGameAction_1.default {
    constructor(enemy) {
        super();
        this.enemy = enemy;
        this.Type = AbstractGameAction_1.ActionType.TEXT;
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