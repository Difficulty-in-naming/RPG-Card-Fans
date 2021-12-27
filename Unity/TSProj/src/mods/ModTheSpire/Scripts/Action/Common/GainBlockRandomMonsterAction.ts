import Async from "../../../../../Core/Async";
import { AttackEffect } from "../../DataDefine/AttackEffect";
import DungeonManager from "../../DungeonManager";
import { FlashAtkImgEffect } from "../../Effect/FlashAtkImgEffect";
import AbstractCreature from "../../Unit/AbstractCreature";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

export class GainBlockRandomMonsterAction extends AbstractGameAction{
    Type = ActionType.BLOCK
    public constructor(public Source:AbstractCreature,public Amount:number) {
        super();
    }
    
    public async Update(): Promise<boolean> {
        if(this.Duration == 0){
            let target = DungeonManager.Inst.CurrentRoom.Monsters.Random();
            if(target){
                DungeonManager.EffectManager.Play(new FlashAtkImgEffect(target.X,target.Y,AttackEffect.SHIELD));
                target.Block += this.Amount;
            }
        }
        await Async.Delay(500);
        return true;
    }
}