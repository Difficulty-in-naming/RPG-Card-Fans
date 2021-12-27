import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import { AnimateSlowAttackAction } from "../../../../Action/Animations/AnimateSlowAttackAction";
import { ApplyPowerAction } from "../../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { RollMoveAction } from "../../../../Action/Common/RollMoveAction";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { WeakPower } from "../../../../Power/WeakPower";
import { AbstractMonster } from "../../AbstractMonster";
import { SlimeAnimListener } from "../../Helpers/SlimeAnimListener";
import { Intent } from "../../Intent";

export class AcidSlime_S_ViewModel extends AbstractMonster{
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo(this,4));
        }else{
            this.DamageInfo.push(new DamageInfo(this,3));
        }

        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
        trackEntry.add_Event(SlimeAnimListener);
    }

    GetMove(num:number) {
        if(DungeonManager.Inst.AdvanceLevel >= 17){
            if(this.LastTwoMoves(1)){
                this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]});
            }else{
                this.SetMove(2,Intent.DEBUFF);
            }             
        } else if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.5) {
            this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]});
        }
        else{
            this.SetMove(2,Intent.DEBUFF);
        }
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 1:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 2:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new WeakPower(),2));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
        }
    }
}