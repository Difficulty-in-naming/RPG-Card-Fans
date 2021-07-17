import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {FlashAtkImgEffect} from "mods/ModTheSpire/Scripts/Effect/FlashAtkImgEffect";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import Async from "Core/Async";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

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