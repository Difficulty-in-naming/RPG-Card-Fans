"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetAnimationAction = void 0;
var AbstractGameAction_1 = require("../AbstractGameAction");
class SetAnimationAction extends AbstractGameAction_1.default {
    constructor(Owner, AnimationName) {
        super();
        this.Owner = Owner;
        this.AnimationName = AnimationName;
        this.Type = AbstractGameAction_1.ActionType.WAIT;
    }
    async Update() {
        this.Owner.SetAnimation(this.AnimationName, false);
        this.Owner.AddAnimation("idle", true);
        return super.Update();
    }
}
exports.SetAnimationAction = SetAnimationAction;
//# sourceMappingURL=SetAnimationAction.js.map