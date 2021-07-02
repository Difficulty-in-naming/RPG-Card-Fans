import AbstractCreature from "../AbstractCreature";
import {DamageType} from "./DamageType";

export default class DamageInfo
{
    private Source : AbstractCreature;
    private Damage : number;
    private Type : DamageType;
    public constructor(source:AbstractCreature, damage:number, type:DamageType = DamageType.NORMAL)
    {
        this.Source = source
        this.Damage = damage;
        this.Type = type;
    }
}