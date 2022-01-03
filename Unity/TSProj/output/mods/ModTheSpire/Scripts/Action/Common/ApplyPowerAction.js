"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyPowerAction = void 0;
var Async_1 = require("../../../../../Core/Async");
var DungeonManager_1 = require("../../DungeonManager");
var PowerBuffEffect_1 = require("../../Effect/Combat/PowerBuffEffect");
var PowerDeBuffEffect_1 = require("../../Effect/Combat/PowerDeBuffEffect");
var FlashAtkImgEffect_1 = require("../../Effect/FlashAtkImgEffect");
var PostApplyPowerMessage_1 = require("../../Events/PostApplyPowerMessage");
var PreApplyPowerMessage_1 = require("../../Events/PreApplyPowerMessage");
var AbstractPower_1 = require("../../Power/AbstractPower");
var AbstractMonster_1 = require("../../Unit/Monster/AbstractMonster");
var AbstractGameAction_1 = require("../AbstractGameAction");
class ApplyPowerAction extends AbstractGameAction_1.default {
    constructor(Target, Source, Power, StackAmount = 1, Effect) {
        super();
        this.Target = Target;
        this.Source = Source;
        this.Power = Power;
        this.StackAmount = StackAmount;
        this.Effect = Effect;
        this.Interval = 0.25;
        let msg = new PreApplyPowerMessage_1.PreApplyPowerMessage(Power, Target, Source, this.StackAmount);
        DungeonManager_1.default.MessageManager.Send(PreApplyPowerMessage_1.PreApplyPowerMessage.Id, msg);
        this.StackAmount = msg.StackAmount;
        Power.Amount += this.StackAmount;
        this.Type = AbstractGameAction_1.ActionType.POWER;
    }
    async Update() {
        if (this.Target == null || this.Target.IsDeadOrEscaped) {
            return true;
        }
        if (this.StackAmount == 0)
            return true;
        if (this.Duration == 0) {
            if (this.Target.GetPower(this.Power.Id) && !this.Power.CanStack) {
                return true;
            }
        }
        if (!DungeonManager_1.default.Inst.CurrentRoom.Monsters || DungeonManager_1.default.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead()) {
            return true;
        }
        if (this.Target instanceof AbstractMonster_1.AbstractMonster && this.Target.IsDeadOrEscaped) {
            return true;
        }
        DungeonManager_1.default.EffectManager.Play(new FlashAtkImgEffect_1.FlashAtkImgEffect(this.Target.Bounds.x, this.Target.Bounds.y, this.Effect));
        let hasBuffAlready = false;
        this.Target.Powers.forEach(t1 => {
            if (t1.Id == this.Power.Id) {
                t1.Amount += this.StackAmount;
                t1.Flash();
                if (t1.Type == AbstractPower_1.PowerType.Buff) {
                    DungeonManager_1.default.EffectManager.Play(new PowerBuffEffect_1.PowerBuffEffect(this.Target.Bounds.x, this.Target.Bounds.height, `+ ${this.StackAmount} ${this.Power.Name}`));
                }
                else if (t1.Type == AbstractPower_1.PowerType.Debuff) {
                    DungeonManager_1.default.EffectManager.Play(new PowerDeBuffEffect_1.PowerDebuffEffect(this.Target.Bounds.x, this.Target.Bounds.height, `- ${this.StackAmount} ${this.Power.Name}`));
                }
                hasBuffAlready = true;
                DungeonManager_1.default.MessageManager.Send(PostApplyPowerMessage_1.PostApplyPowerMessage.Id, new PostApplyPowerMessage_1.PostApplyPowerMessage(this.Power, this.Target, this.Source));
            }
        });
        if (this.Power.Type == AbstractPower_1.PowerType.Debuff) {
            this.Target.PlayFastShake(0.5);
        }
        if (!hasBuffAlready) {
            this.Target.AddPower(this.Power, this.Source);
            this.Power.OnInit();
            this.Power.Flash();
            if (this.Power.Type == AbstractPower_1.PowerType.Buff) {
                DungeonManager_1.default.EffectManager.Play(new PowerBuffEffect_1.PowerBuffEffect(this.Target.Bounds.x, this.Target.Bounds.height, `+ ${this.StackAmount} ${this.Power.Name}`));
            }
            else if (this.Power.Type == AbstractPower_1.PowerType.Debuff) {
                DungeonManager_1.default.EffectManager.Play(new PowerDeBuffEffect_1.PowerDebuffEffect(this.Target.Bounds.x, this.Target.Bounds.height, `- ${this.StackAmount} ${this.Power.Name}`));
            }
            DungeonManager_1.default.MessageManager.Send(PostApplyPowerMessage_1.PostApplyPowerMessage.Id, new PostApplyPowerMessage_1.PostApplyPowerMessage(this.Power, this.Target, this.Source));
        }
        await Async_1.default.Delay(this.Interval);
        return true;
    }
}
exports.ApplyPowerAction = ApplyPowerAction;
//# sourceMappingURL=ApplyPowerAction.js.map