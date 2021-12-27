import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import { AnimateSlowAttackAction } from "../../../../Action/Animations/AnimateSlowAttackAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { RollMoveAction } from "../../../../Action/Common/RollMoveAction";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { AbstractMonster } from "../../AbstractMonster";
import { SlimeAnimListener } from "../../Helpers/SlimeAnimListener";
import { Intent } from "../../Intent";

export class SpikeSlime_S_ViewModel extends AbstractMonster{
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo(this,6));
        }else{
            this.DamageInfo.push(new DamageInfo(this,5));
        }

        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
        trackEntry.add_Event(SlimeAnimListener);
    }

    GetMove(num:number) {
        this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]});
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 1:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
        }
    }
}