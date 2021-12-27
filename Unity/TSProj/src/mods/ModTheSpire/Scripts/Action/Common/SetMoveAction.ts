import DamageInfo from "../../DataDefine/DamageInfo";
import { AbstractMonster } from "../../Unit/Monster/AbstractMonster";
import { Intent } from "../../Unit/Monster/Intent";
import AbstractGameAction from "../AbstractGameAction";

export class SetMoveAction extends  AbstractGameAction{
    public constructor(private monster:AbstractMonster,private moveIndex:number,private intent:Intent,private options?:{damage?:DamageInfo,multiplier?:number,moveName?:string}) {
        super();
    }

    async Update(): Promise<boolean> {
        this.monster.SetMove(this.moveIndex,this.intent,this.options);
        return true;
    }
}