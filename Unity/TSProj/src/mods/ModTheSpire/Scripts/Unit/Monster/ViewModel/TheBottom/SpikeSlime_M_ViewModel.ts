import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Spine} from "csharp";
import {Mathf} from "Core/Module/Math/Mathf";
import {SlimeAnimListener} from "mods/ModTheSpire/Scripts/Unit/Monster/Helpers/SlimeAnimListener";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {WeakPower} from "mods/ModTheSpire/Scripts/Power/WeakPower";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {MakeTempCardInDiscardAction} from "mods/ModTheSpire/Scripts/Action/Common/MakeTempCardInDiscardAction";
import {Slimed} from "mods/ModTheSpire/Scripts/Cards/Status/Slimed";
import {FrailPower} from "mods/ModTheSpire/Scripts/Power/FrailPower";
import {HideHealthBarAction} from "mods/ModTheSpire/Scripts/Action/Utility/HideHealthBarAction";
import {SuicideAction} from "mods/ModTheSpire/Scripts/Action/Common/SuicideAction";
import {WaitAction} from "mods/ModTheSpire/Scripts/Action/Utility/WaitAction";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import {SpawnMonsterAction} from "mods/ModTheSpire/Scripts/Action/Common/SpawnMonsterAction";
import {AcidSlime_M_ViewModel} from "mods/ModTheSpire/Scripts/Unit/Monster/ViewModel/TheBottom/AcidSlime_M_ViewModel";
import {AcidSlime_M_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/AcidSlime_M_Model";

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