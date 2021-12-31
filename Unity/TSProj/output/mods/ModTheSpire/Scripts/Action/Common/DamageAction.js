"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Async_1 = require("../../../../../Core/Async");
const AttackEffect_1 = require("../../DataDefine/AttackEffect");
const AbstractGameAction_1 = require("../AbstractGameAction");
class DamageAction extends AbstractGameAction_1.default {
    Target;
    Info;
    Effect;
    //target:目标,damageInfo:伤害数据,effect:伤害特效
    constructor(target, info, effect) {
        super();
        this.Target = target;
        this.Info = info;
        this.Effect = effect;
    }
    async Update() {
        if (!this.Target.IsDying) {
            return true;
        }
        if (this.Effect == AttackEffect_1.AttackEffect.POISON) {
        }
        await Async_1.default.Delay(250);
    }
}
exports.default = DamageAction;
//# sourceMappingURL=DamageAction.js.map