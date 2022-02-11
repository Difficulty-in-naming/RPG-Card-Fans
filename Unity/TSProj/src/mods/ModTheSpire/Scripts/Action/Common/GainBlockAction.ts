import Async from "../../../../../Core/Async";
import { AttackEffect } from "../../DataDefine/AttackEffect";
import DungeonManager from "../../DungeonManager";
import { FlashAtkImgEffect } from "../../Effect/FlashAtkImgEffect";
import AbstractCreature from "../../Unit/AbstractCreature";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

export default class GainBlockAction extends AbstractGameAction
{
    private Target:AbstractCreature;
    private Source:AbstractCreature;
    private Amount:number;
    Type = ActionType.BLOCK;
    public constructor(target : AbstractCreature, amount : number, source: AbstractCreature = null) {
        super();
        this.Target = target;
        if(!source)
            this.Source = source;
        else
            this.Source = target;
        this.Amount = amount;
    }
    
    async Update(){
        if(this.Target && !this.Target.IsDying && !this.Target.IsDead){
            var hitbox = this.Target.GetHitBox();
            DungeonManager.EffectManager.Play(new FlashAtkImgEffect(hitbox.CX,hitbox.CY,AttackEffect.SHIELD))
            this.Target.Block += this.Amount;
            return true;
        }
        await Async.Delay(250);
        return true;
    }
}
