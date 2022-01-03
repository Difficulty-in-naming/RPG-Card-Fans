"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateSlowAttackAction = void 0;
var AbstractGameAction_1 = require("../../../../../mods/ModTheSpire/Scripts/Action/AbstractGameAction");
var Async_1 = require("../../../../../Core/Async");
class AnimateSlowAttackAction extends AbstractGameAction_1.default {
    constructor(owner) {
        super();
        this.owner = owner;
        this.Type = AbstractGameAction_1.ActionType.WAIT;
    }
    async Update() {
        this.owner.PlaySlowAttack();
        await Async_1.default.Delay(500);
        return true;
    }
}
exports.AnimateSlowAttackAction = AnimateSlowAttackAction;
//# sourceMappingURL=AnimateSlowAttackAction.js.map