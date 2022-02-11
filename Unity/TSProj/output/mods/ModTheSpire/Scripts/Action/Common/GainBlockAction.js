"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Async_1 = require("../../../../../Core/Async");
const AttackEffect_1 = require("../../DataDefine/AttackEffect");
const DungeonManager_1 = require("../../DungeonManager");
const FlashAtkImgEffect_1 = require("../../Effect/FlashAtkImgEffect");
const AbstractGameAction_1 = require("../AbstractGameAction");
class GainBlockAction extends AbstractGameAction_1.default {
    Target;
    Source;
    Amount;
    Type = AbstractGameAction_1.ActionType.BLOCK;
    constructor(target, amount, source = null) {
        super();
        this.Target = target;
        if (!source)
            this.Source = source;
        else
            this.Source = target;
        this.Amount = amount;
    }
    async Update() {
        if (this.Target && !this.Target.IsDying && !this.Target.IsDead) {
            var hitbox = this.Target.GetHitBox();
            DungeonManager_1.default.EffectManager.Play(new FlashAtkImgEffect_1.FlashAtkImgEffect(hitbox.CX, hitbox.CY, AttackEffect_1.AttackEffect.SHIELD));
            this.Target.Block += this.Amount;
            return true;
        }
        await Async_1.default.Delay(250);
        return true;
    }
}
exports.default = GainBlockAction;
//# sourceMappingURL=GainBlockAction.js.map