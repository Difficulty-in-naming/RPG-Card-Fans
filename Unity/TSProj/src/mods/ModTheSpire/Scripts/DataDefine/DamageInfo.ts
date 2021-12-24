import AbstractCreature from "../Unit/AbstractCreature";
import {DamageType} from "./DamageType";
export class WrapDamage{
    public readonly Source : any;
    public readonly Damage : number;
    public readonly Type : DamageType;

    constructor(Source: any, Damage: number, Type?: DamageType) {
        this.Source = Source;
        this.Damage = Damage;
        this.Type = Type;
    }
}
export class DamageModification{
    public Damage:WrapDamage;

    constructor(Damage: WrapDamage) {
        this.Damage = Damage;
    }
}
export default class DamageInfo
{
    //伤害来源单位
    public readonly Unit : AbstractCreature;
    //原始伤害
    public readonly Origin : WrapDamage;
    //伤害修改列表
    public Modify = new Array<DamageModification>();
    //伤害类型
    public get DamageType() : DamageType{
        return this.Modify.last().Damage.Type;
    }
    //最终伤害
    public get TotalDamage(){
        let num:number = 0;
        this.Modify.forEach(t1=>num += t1.Damage.Damage);
        return num;
    }
    public constructor(unit:AbstractCreature, damage:number, type:DamageType = DamageType.NORMAL)
    {
        this.Unit = unit;
        this.Origin = new WrapDamage(unit,damage,type);
        this.Modify.push(new DamageModification(this.Origin));
    }
    
    public AddModify(damage:WrapDamage){
        this.Modify.push(new DamageModification(damage))
    }
}