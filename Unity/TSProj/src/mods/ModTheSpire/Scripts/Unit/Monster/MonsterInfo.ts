import { ILoader } from "../../Loader/ILoader";
import { AbstractPower } from "../../Power/AbstractPower";

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