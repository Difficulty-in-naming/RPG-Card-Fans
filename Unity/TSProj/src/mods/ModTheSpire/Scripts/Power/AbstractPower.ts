﻿import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import EffectKit from "mods/ModTheSpire/Scripts/Effect/EffectKit";
import {GainPowerEffect} from "mods/ModTheSpire/Scripts/Effect/GainPowerEffect";
import {FlashPowerEffect} from "mods/ModTheSpire/Scripts/Effect/FlashPowerEffect";
import QueueMessageKit, {IGameAction} from "Core/QueueMessageKit";
import {ObserverMessageKit} from "Core/ObserverMessageKit";
import {OnHurtBefore} from "mods/ModTheSpire/Scripts/Events/OnHurtBefore";
import {OnHurtAfter} from "mods/ModTheSpire/Scripts/Events/OnHurtAfter";
import {OnHurt} from "mods/ModTheSpire/Scripts/Events/OnHurt";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {AtEndOfTurnMessage} from "mods/ModTheSpire/Scripts/Events/AtEndOfTurnMessage";
import {AtStartOfTurnMessage} from "mods/ModTheSpire/Scripts/Events/AtStartOfTurnMessage";
import {PowerModifiedAmountMessage} from "mods/ModTheSpire/Scripts/Events/PowerModifiedAmountMessage";
import {CalcDamageValueMessage} from "mods/ModTheSpire/Scripts/Events/CalcDamageValueMessage";
import {OnDamageBefore} from "mods/ModTheSpire/Scripts/Events/OnDamageBefore";
import {OnDamageAfter} from "mods/ModTheSpire/Scripts/Events/OnDamageAfter";
import {CalcFinalDamageValueMessage} from "mods/ModTheSpire/Scripts/Events/CalcFinalDamageValueMessage";
import {RemoveSpecificPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/RemoveSpecificPowerAction";
import {OnDeathMessage} from "mods/ModTheSpire/Scripts/Events/OnDeathMessage";
import {CalcHurtValueMessage} from "mods/ModTheSpire/Scripts/Events/CalcHurtValueMessage";
import {CalcFinalHurtValueMessage} from "mods/ModTheSpire/Scripts/Events/CalcFinalHurtValueMessage";
import {PreApplyPowerMessage} from "mods/ModTheSpire/Scripts/Events/PreApplyPowerMessage";
import {AtEndOfTurnPreEndTurnCardsMessage} from "mods/ModTheSpire/Scripts/Events/AtEndOfTurnPreEndTurnCardsMessage";
import {PreModifyBlockMessage} from "mods/ModTheSpire/Scripts/Events/PreModifyBlockMessage";
import {OnPreUseCardMessage} from "mods/ModTheSpire/Scripts/Events/OnPreUseCardMessage";

export abstract class AbstractPower {

    public abstract Id:string;
    public abstract Name: string;
    //获得描述
    public abstract GetDescription(...args: any[]): string;
    //图标
    public abstract Icon:string;
    //层数
    private _Amount : number;
    //可否叠加
    public CanStack:boolean;
    //可否驱散
    public CanRemove : boolean;
    //结算优先级
    public Priority : number;
    //该Buff的拥有者
    public Owner: AbstractCreature;
    //该Buff的施法来源
    public Source: AbstractCreature;
    //能力类型(Buff,Debuff)
    public get Type() : PowerType {return PowerType.Buff;}
    get Amount(): number {
        return this._Amount;
    }

    set Amount(value: number) {
        let preAmount = this._Amount;
        this._Amount = value;
        this.OnModified(preAmount,value);
        DungeonManager.MessageManager.Send(PowerModifiedAmountMessage.Id,new PowerModifiedAmountMessage(this,preAmount,value));
    }

    //重载该方法需要调用super.OnInit();
    public OnInit() {
        DungeonManager.MessageManager.Add(OnHurtBefore.Id,this.OnHurtBefore)
        DungeonManager.MessageManager.Add(OnHurt.Id,this.OnHurt)
        DungeonManager.MessageManager.Add(OnHurtAfter.Id,this.OnHurtAfter)
        DungeonManager.MessageManager.Add(AtEndOfTurnMessage.Id,this.AtEndOfTurn);
        DungeonManager.MessageManager.Add(AtStartOfTurnMessage.Id,this.AtStartOfTurn);
        DungeonManager.MessageManager.Add(CalcDamageValueMessage.Id,this.CalcDamageValue);
        DungeonManager.MessageManager.Add(OnDamageBefore.Id,this.OnDamageBefore);
        DungeonManager.MessageManager.Add(OnDamageAfter.Id,this.OnDamageAfter);
        DungeonManager.MessageManager.Add(CalcFinalDamageValueMessage.Id,this.CalcFinalDamageValue);
        DungeonManager.MessageManager.Add(CalcHurtValueMessage.Id,this.CalcHurtValue);
        DungeonManager.MessageManager.Add(CalcFinalHurtValueMessage.Id,this.CalcFinalHurtValue);
        DungeonManager.MessageManager.Add(OnDeathMessage.Id,this.OnDeath);
        DungeonManager.MessageManager.Add(AtEndOfTurnPreEndTurnCardsMessage.Id,this.AtEndOfTurnPreEndTurnCards);
        DungeonManager.MessageManager.Add(PreModifyBlockMessage.Id,this.PreModifyBlock);
    }
    
    //重载该方法需要调用super.OnRemove();
    public OnRemove(){
        DungeonManager.MessageManager.Remove(OnHurtBefore.Id,this.OnHurtBefore)
        DungeonManager.MessageManager.Remove(OnHurt.Id,this.OnHurt)
        DungeonManager.MessageManager.Remove(OnHurtAfter.Id,this.OnHurtAfter)
        DungeonManager.MessageManager.Remove(AtEndOfTurnMessage.Id,this.AtEndOfTurn);
        DungeonManager.MessageManager.Remove(AtStartOfTurnMessage.Id,this.AtStartOfTurn);
        DungeonManager.MessageManager.Remove(CalcDamageValueMessage.Id,this.CalcDamageValue);
        DungeonManager.MessageManager.Remove(OnDamageBefore.Id,this.OnDamageBefore);
        DungeonManager.MessageManager.Remove(OnDamageAfter.Id,this.OnDamageAfter);
        DungeonManager.MessageManager.Remove(CalcFinalDamageValueMessage.Id,this.CalcFinalDamageValue);
        DungeonManager.MessageManager.Remove(OnDamageAfter.Id,this.OnDamageAfter);
        DungeonManager.MessageManager.Remove(CalcFinalDamageValueMessage.Id,this.CalcFinalDamageValue);
        DungeonManager.MessageManager.Remove(CalcHurtValueMessage.Id,this.CalcHurtValue);
        DungeonManager.MessageManager.Remove(CalcFinalHurtValueMessage.Id,this.CalcFinalHurtValue);
        DungeonManager.MessageManager.Remove(OnDeathMessage.Id,this.OnDeath);
        DungeonManager.MessageManager.Remove(AtEndOfTurnPreEndTurnCardsMessage.Id,this.AtEndOfTurnPreEndTurnCards);
        DungeonManager.MessageManager.Remove(PreModifyBlockMessage.Id,this.PreModifyBlock);
    }
    
    public PlayApplyPowerSfx(){}
    protected AddToBot(action : IGameAction){DungeonManager.ActionManager.AddToBottom(action);}
    protected AddToTop(action : IGameAction){DungeonManager.ActionManager.AddToTop(action);}
    public Flash(silent:boolean = true){
        EffectKit.Inst().Play(new GainPowerEffect(this,silent));
        EffectKit.Inst().Play(new FlashPowerEffect(this));
    }
    //该方法仅用于计算伤害.最终伤害由OnHurt结算.
    protected CalcHurtValue(msg:CalcDamageValueMessage){}
    //该方法仅用于计算伤害.最终伤害由OnHurt结算.
    protected CalcFinalHurtValue(msg:CalcDamageValueMessage){}
    //当玩家受到伤害之前
    protected OnHurtBefore(msg:OnHurtBefore){}
    //当玩家受到伤害时
    protected OnHurt(msg:OnHurtBefore){}
    //当玩家受到伤害后
    protected OnHurtAfter(msg:OnHurtBefore){}
    //该方法仅用于计算伤害.最终伤害由OnDamage结算.
    protected CalcDamageValue(msg:CalcDamageValueMessage){}
    //该方法仅用于计算伤害.最终伤害由OnDamage结算.
    protected CalcFinalDamageValue(msg:CalcFinalDamageValueMessage){}
    //造成伤害前
    protected OnDamageBefore(msg:OnDamageBefore){}
    //造成伤害后
    protected OnDamageAfter(msg:OnDamageAfter){}
    //回合结束时
    protected AtEndOfTurn(msg:AtEndOfTurnMessage){}
    //回合开始时
    protected AtStartOfTurn(msg:AtStartOfTurnMessage){}
    //死亡时
    protected OnDeath(msg:OnDeathMessage){}
    //回合结束和弃牌结束之间,怪物也会触发该函数
    AtEndOfTurnPreEndTurnCards(msg: AtEndOfTurnPreEndTurnCardsMessage) {}
    PreModifyBlock(msg:PreModifyBlockMessage) {}
    //
    PreUseCard(msg:OnPreUseCardMessage) {}

    protected OnModified(before:number,after:number){
        if(after == 0){
            this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
        }
    }
}

export enum PowerType{
    Buff,
    Debuff
}