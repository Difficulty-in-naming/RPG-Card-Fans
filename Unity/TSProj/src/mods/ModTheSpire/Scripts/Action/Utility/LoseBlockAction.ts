import { FairyGUI, UnityEngine } from "csharp";
import Async from "../../../../../Core/Async";
import DungeonManager from "../../DungeonManager";
import { HpBlockBrokenEffect } from "../../Effect/HpBlockBrokenEffect";
import AbstractCreature from "../../Unit/AbstractCreature";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

export default class LoseBlockAction extends AbstractGameAction
{
    private Target:AbstractCreature;
    private Source:AbstractCreature;
    private Amount:number;
    private NoAnimation:boolean;
    Type = ActionType.BLOCK;
    public constructor(target : AbstractCreature, amount : number,noAnimation:boolean = false, source: AbstractCreature = null) {
        super();
        this.Target = target;
        this.NoAnimation = noAnimation;
        if(!source)
            this.Source = source;
        else
            this.Source = target;
        this.Amount = amount;
    }

    async Update(){
        if(this.Target && !this.Target.IsDying && !this.Target.IsDead){
            return true;
        }
        if(this.Amount == 0)
            return true;
        if(this.Target.Block == 0)
            return true;
        this.Target.Block -= this.Amount;
        if(this.Target.Block < 0)
            this.Target.Block = 0;
        if(this.Target.Block == 0){
            if(!this.NoAnimation){
                let hitbox = this.Target.GetHitBox();
                DungeonManager.EffectManager.Play(new HpBlockBrokenEffect(hitbox.CX,hitbox.CY))
            }
        } else {
            let blockCom = <FairyGUI.GComponent>this.Target.HealthComponent.GetChild("Block");
            blockCom.SetScale(5,5);
            blockCom.TweenScale(UnityEngine.Vector2.one,0.7).SetDelay(0.3);
        }
        await Async.Delay(500);
        return true;
    }
}
