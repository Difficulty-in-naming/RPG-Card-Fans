"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetMoveAction = void 0;
var AbstractGameAction_1 = require("../AbstractGameAction");
class SetMoveAction extends AbstractGameAction_1.default {
    constructor(monster, moveIndex, intent, options) {
        super();
        this.monster = monster;
        this.moveIndex = moveIndex;
        this.intent = intent;
        this.options = options;
    }
    async Update() {
        this.monster.SetMove(this.moveIndex, this.intent, this.options);
        return true;
    }
}
exports.SetMoveAction = SetMoveAction;
//# sourceMappingURL=SetMoveAction.js.map