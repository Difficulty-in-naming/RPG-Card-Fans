import AbstractCreature from "../Unit/AbstractCreature";
import {DamageType} from "./DamageType";
export class WrapDamage{
    public readonly Source : AbstractCreature;
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
    //原始伤害
    public readonly Origin : WrapDamage;
    //伤害修改列表
    public Modify = new Array<DamageModification>();
    public get TotalDamage(){
        let num:number = 0;
        this.Modify.forEach(t1=>num += t1.Damage.Damage);
        return num;
    }
    public constructor(source:any, damage:number, type:DamageType = DamageType.NORMAL)
    {
        this.Origin = new WrapDamage(source,damage,type);
        this.Modify.push(new DamageModification(this.Origin));
    }
    
    public AddModify(damage:WrapDamage){
        this.Modify.push(new DamageModification(damage))
    }
}