import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import { AnimateSlowAttackAction } from "../../../../Action/Animations/AnimateSlowAttackAction";
import { ApplyPowerAction } from "../../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { MakeTempCardInDiscardAction } from "../../../../Action/Common/MakeTempCardInDiscardAction";
import { RollMoveAction } from "../../../../Action/Common/RollMoveAction";
import { Slimed } from "../../../../Cards/Status/Slimed";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { FrailPower } from "../../../../Power/FrailPower";
import { AbstractMonster } from "../../AbstractMonster";
import { SlimeAnimListener } from "../../Helpers/SlimeAnimListener";
import { Intent } from "../../Intent";


export class SpikeSlime_M_ViewModel extends AbstractMonster{
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo(this,10));
        }else{
            this.DamageInfo.push(new DamageInfo(this,8));
        }

        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
        trackEntry.add_Event(SlimeAnimListener);
    }
    
    GetMove(num:number) {
        if (DungeonManager.Inst.AdvanceLevel >= 17) {
            if (num < 30) {
                if (this.LastTwoMoves(1)) {
                    this.SetMove(4, Intent.DEBUFF, {moveName: "舔舔"});
                } else {
                    this.SetMove(1, Intent.ATTACK_DEBUFF, {damage: this.DamageInfo[0]});
                }
            } else if (this.LastMove(4)) {
                this.SetMove(1, Intent.ATTACK_DEBUFF, {damage: this.DamageInfo[0]});
            } else {
                this.SetMove(4, Intent.DEBUFF, {moveName: "舔舔"});
            }
        } else if (num < 30) {
            if (this.LastTwoMoves(1)) {
                this.SetMove(4, Intent.DEBUFF, {moveName: "舔舔"});
            } else {
                this.SetMove(1, Intent.ATTACK_DEBUFF, {damage: this.DamageInfo[0]});
            }
        }
        if (this.LastTwoMoves(4)) {
            this.SetMove(1, Intent.ATTACK_DEBUFF, {damage: this.DamageInfo[0]});

        } else {
            this.SetMove(4, Intent.DEBUFF, {moveName: "舔舔"});
        }
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 4: {
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player, this, new FrailPower(), 1));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 1: {
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player, this.DamageInfo[0], AttackEffect.BLUNT_HEAVY))
                this.AddToBot(new MakeTempCardInDiscardAction(new Slimed(),1));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
        }
    }
}