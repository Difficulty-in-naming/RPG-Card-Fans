import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {AbstractPower} from "mods/ModTheSpire/Scripts/Power/AbstractPower";

export abstract class MonsterInfo{
    abstract get Loader() : ILoader;
    abstract get MaxHealth():number;
    abstract get Name():string
    
    get InitPower():Array<AbstractPower>{
        return new Array<AbstractPower>();
    }
    constructor(public X:number,public Y:number) {
    }
    
    toString(){
        return this.Name;
    }
}