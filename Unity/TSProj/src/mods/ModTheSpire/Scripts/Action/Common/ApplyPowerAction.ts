﻿import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {PreApplyPowerMessage} from "mods/ModTheSpire/Scripts/Events/PreApplyPowerMessage";
import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import {FlashAtkImgEffect} from "mods/ModTheSpire/Scripts/Effect/FlashAtkImgEffect";
import {PowerBuffEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/PowerBuffEffect";
import {PowerDebuffEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/PowerDeBuffEffect";
import {PostApplyPowerMessage} from "mods/ModTheSpire/Scripts/Events/PostApplyPowerMessage";
import Async from "Core/Async";

export class ApplyPowerAction extends AbstractGameAction{
    private Interval = 0.25;
    public constructor(public Target:AbstractCreature, public Source:AbstractCreature, public Power:AbstractPower, public StackAmount?:number, public Effect?:AttackEffect) {
        super();
        let msg = new PreApplyPowerMessage(Power,Target,Source,this.StackAmount)
        DungeonManager.MessageManager.Send(PreApplyPowerMessage.Id,msg);
        this.StackAmount = msg.StackAmount;
        Power.Amount += this.StackAmount;
        this.Type = ActionType.POWER;
    }

    async Update(): Promise<boolean> {
        if(this.Target == null || this.Target.IsDeadOrEscaped){
            return true;
        }
        if(this.StackAmount == 0)
            return true;
        if(this.Duration == 0){
            if(this.Target.GetPower(this.Power.Id) && !this.Power.CanStack){
                return true;
            }
        }

        if(!DungeonManager.Inst.CurrentRoom.Monsters || DungeonManager.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead()){
            return true;
        }
        if(this.Target instanceof AbstractMonster && this.Target.IsDeadOrEscaped) {
            return true;
        }
        DungeonManager.EffectManager.Play(new FlashAtkImgEffect(this.Target.Bounds.x,this.Target.Bounds.y,this.Effect));
        let hasBuffAlready = false;
        this.Target.Powers.forEach(t1=>{
            if(t1.Id == this.Power.Id){
                t1.Amount += this.StackAmount;
                t1.Flash();
                if(t1.Type == PowerType.Buff){
                    DungeonManager.EffectManager.Play(new PowerBuffEffect(this.Target.Bounds.x,this.Target.Bounds.height,`+ ${this.StackAmount} ${this.Power.Name}`))
                }
                else if(t1.Type == PowerType.Debuff){
                    DungeonManager.EffectManager.Play(new PowerDebuffEffect(this.Target.Bounds.x,this.Target.Bounds.height,`- ${this.StackAmount} ${this.Power.Name}`))
                }
                hasBuffAlready = true;
                DungeonManager.MessageManager.Send(PostApplyPowerMessage.Id,new PostApplyPowerMessage(this.Power,this.Target,this.Source));
            }
        })
        if(this.Power.Type == PowerType.Debuff){
            this.Target.PlayFastShake(0.5);
        }
        if(!hasBuffAlready){
            this.Target.AddPower(this.Power,this.Source);
            this.Power.OnInit();
            this.Power.Flash();
            if(this.Power.Type == PowerType.Buff){
                DungeonManager.EffectManager.Play(new PowerBuffEffect(this.Target.Bounds.x,this.Target.Bounds.height,`+ ${this.StackAmount} ${this.Power.Name}`))
            }
            else if(this.Power.Type == PowerType.Debuff){
                DungeonManager.EffectManager.Play(new PowerDebuffEffect(this.Target.Bounds.x,this.Target.Bounds.height,`- ${this.StackAmount} ${this.Power.Name}`))
            }
            DungeonManager.MessageManager.Send(PostApplyPowerMessage.Id,new PostApplyPowerMessage(this.Power,this.Target,this.Source));
        }
        await Async.Delay(this.Interval);
        return true;
    }
}