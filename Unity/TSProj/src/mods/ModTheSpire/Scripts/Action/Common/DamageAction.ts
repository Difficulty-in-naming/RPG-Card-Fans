import Async from "../../../../../Core/Async";
import { AttackEffect } from "../../DataDefine/AttackEffect";
import DamageInfo from "../../DataDefine/DamageInfo";
import AbstractCreature from "../../Unit/AbstractCreature";
import AbstractGameAction from "../AbstractGameAction";

export default class DamageAction extends AbstractGameAction
{
    private Target: AbstractCreature;
    private Info : DamageInfo;
    private Effect : AttackEffect
    //target:目标,damageInfo:伤害数据,effect:伤害特效
    constructor(target: AbstractCreature, info: DamageInfo,effect: AttackEffect) 
    {
        super();
        this.Target = target;
        this.Info = info;
        this.Effect = effect;
    }
    
    async Update(): Promise<boolean> {
        if(!this.Target.IsDying){
            return true;
        }
        if(this.Effect == AttackEffect.POISON){
            
        }
        await Async.Delay(250);
    }
}