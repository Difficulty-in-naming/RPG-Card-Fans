import AbstractGameAction from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";

export class SetMoveAction extends  AbstractGameAction{
    public constructor(private monster:AbstractMonster,private moveIndex:number,private intent:Intent,private options?:{damage?:DamageInfo,multiplier?:number,moveName?:string}) {
        super();
    }

    async Update(): Promise<boolean> {
        this.monster.SetMove(this.moveIndex,this.intent,this.options);
        return true;
    }
}