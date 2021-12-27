import { IGameAction } from "../../../../Core/Module/Event/IGameAction";
import { RemoveSpecificPowerAction } from "../Action/Common/RemoveSpecificPowerAction";
import DungeonManager from "../DungeonManager";
import EffectKit from "../Effect/EffectKit";
import { FlashPowerEffect } from "../Effect/FlashPowerEffect";
import { GainPowerEffect } from "../Effect/GainPowerEffect";
import { AtEndOfTurnMessage } from "../Events/AtEndOfTurnMessage";
import { AtEndOfTurnPreEndTurnCardsMessage } from "../Events/AtEndOfTurnPreEndTurnCardsMessage";
import { AtStartOfTurnMessage } from "../Events/AtStartOfTurnMessage";
import { CalcDamageValueMessage } from "../Events/CalcDamageValueMessage";
import { CalcFinalDamageValueMessage } from "../Events/CalcFinalDamageValueMessage";
import { CalcFinalHurtValueMessage } from "../Events/CalcFinalHurtValueMessage";
import { CalcHurtValueMessage } from "../Events/CalcHurtValueMessage";
import { OnDamageAfter } from "../Events/OnDamageAfter";
import { OnDamageBefore } from "../Events/OnDamageBefore";
import { OnDeathMessage } from "../Events/OnDeathMessage";
import { OnHurt } from "../Events/OnHurt";
import { OnHurtAfter } from "../Events/OnHurtAfter";
import { OnHurtBefore } from "../Events/OnHurtBefore";
import { OnPreUseCardMessage } from "../Events/OnPreUseCardMessage";
import { PowerModifiedAmountMessage } from "../Events/PowerModifiedAmountMessage";
import { PreModifyBlockMessage } from "../Events/PreModifyBlockMessage";
import AbstractCreature from "../Unit/AbstractCreature";


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
    public abstract get Type() : PowerType;
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
    Debuff,
    Special
}