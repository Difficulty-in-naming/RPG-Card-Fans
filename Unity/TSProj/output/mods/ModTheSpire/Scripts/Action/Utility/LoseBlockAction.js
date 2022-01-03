"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csharp_1 = require("csharp");
var Async_1 = require("../../../../../Core/Async");
var DungeonManager_1 = require("../../DungeonManager");
var HpBlockBrokenEffect_1 = require("../../Events/HpBlockBrokenEffect");
var AbstractGameAction_1 = require("../AbstractGameAction");
class LoseBlockAction extends AbstractGameAction_1.default {
    constructor(target, amount, noAnimation = false, source = null) {
        super();
        this.Type = AbstractGameAction_1.ActionType.BLOCK;
        this.Target = target;
        this.NoAnimation = noAnimation;
        if (!source)
            this.Source = source;
        else
            this.Source = target;
        this.Amount = amount;
    }
    async Update() {
        if (this.Target && !this.Target.IsDying && !this.Target.IsDead) {
            return true;
        }
        if (this.Amount == 0)
            return true;
        if (this.Target.Block == 0)
            return true;
        this.Target.Block -= this.Amount;
        if (this.Target.Block < 0)
            this.Target.Block = 0;
        if (this.Target.Block == 0) {
            if (!this.NoAnimation) {
                let hitbox = this.Target.GetHitBox();
                DungeonManager_1.default.EffectManager.Play(new HpBlockBrokenEffect_1.HpBlockBrokenEffect(hitbox.CX, hitbox.CY));
            }
        }
        else {
            let blockCom = this.Target.HealthComponent.GetChild("Block");
            blockCom.SetScale(5, 5);
            blockCom.TweenScale(csharp_1.UnityEngine.Vector2.one, 0.7).SetDelay(0.3);
        }
        await Async_1.default.Delay(500);
        return true;
    }
}
exports.default = LoseBlockAction;
//# sourceMappingURL=LoseBlockAction.js.map