import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Spine} from "csharp";
import {Mathf} from "Core/Module/Math/Mathf";
import {SlimeAnimListener} from "mods/ModTheSpire/Scripts/Unit/Monster/Helpers/SlimeAnimListener";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";

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