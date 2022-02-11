"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetAnimationAction = void 0;
const AbstractGameAction_1 = require("../AbstractGameAction");
class SetAnimationAction extends AbstractGameAction_1.default {
    Owner;
    AnimationName;
    Type = AbstractGameAction_1.ActionType.WAIT;
    constructor(Owner, AnimationName) {
        super();
        this.Owner = Owner;
        this.AnimationName = AnimationName;
    }
    async Update() {
        this.Owner.SetAnimation(this.AnimationName, false);
        this.Owner.AddAnimation("idle", true);
        return super.Update();
    }
}
exports.SetAnimationAction = SetAnimationAction;
//# sourceMappingURL=SetAnimationAction.js.map