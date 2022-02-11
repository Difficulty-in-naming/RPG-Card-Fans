import { AttackEffect } from "../../DataDefine/AttackEffect";
import DamageInfo from "../../DataDefine/DamageInfo";
import { DamageType } from "../../DataDefine/DamageType";
import DungeonManager from "../../DungeonManager";
import { FlashAtkImgEffect } from "../../Effect/FlashAtkImgEffect";
import { GameSettings } from "../../Game/GameSettings";
import AbstractCreature from "../../Unit/AbstractCreature";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";
import { WaitAction } from "../Utility/WaitAction";

export default class LoseHPAction extends AbstractGameAction
{
    Type = ActionType.DAMAGE;
    public constructor(private target : AbstractCreature,private source: AbstractCreature,private amount : number,private effect:AttackEffect = AttackEffect.NONE) {
        super();
    }
    
    async Update(){
        if(this.Duration >= 0.33 && this.target.Health > 0)
        {
            var hitbox = this.target.DisplayObject.GetHitBox();
            DungeonManager.EffectManager.Play(new FlashAtkImgEffect(hitbox.CX,hitbox.CY,this.effect));
            this.target.Damage(new DamageInfo(this.source, this.amount, DamageType.HP_LOSS));
            if (DungeonManager.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead()) {
                DungeonManager.ActionManager.ClearPostCombatActions();
            }
            if (!GameSettings.FastMode) {
                this.AddToTop(new WaitAction(0.1));
            }
            return true;
        }
        return false;
    }
}
