import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Mathf} from "Core/Module/Math/Mathf";
import {Spine} from "csharp";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {WeakPower} from "mods/ModTheSpire/Scripts/Power/WeakPower";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

export class BlueSlaver_ViewModel extends AbstractMonster{
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel) {
            this.DamageInfo.push(new DamageInfo(this,13));//Stab
            this.DamageInfo.push(new DamageInfo(this,8));//Rake
        } else {
            this.DamageInfo.push(new DamageInfo(this,12));//Stab
            this.DamageInfo.push(new DamageInfo(this,7));//Rake
        }
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }
    
    GetMove(num: number) {
        if(num >= 40 && !this.LastTwoMoves(1)){
            this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]});
            return;
        }
        if(DungeonManager.Inst.AdvanceLevel >= 17){
            if(this.LastMove(4)){
                this.SetMove(4,Intent.ATTACK_DEBUFF,{damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1")});
            }else{
                this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]})
            }
        }else{
            if(!this.LastMove(4)){
                this.SetMove(4,Intent.ATTACK_DEBUFF,{damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1")});
            }
            this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]})
        }
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 1:{
                this.PlaySfx();
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.SLASH_HORIZONTAL));
                break;
            }
            case 4:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[1],AttackEffect.SLASH_DIAGONAL));
                if(DungeonManager.Inst.AdvanceLevel >= 17)
                {
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new WeakPower(),2));
                }
                else{
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new WeakPower(),1));
                }
                break;
            }
        }
        this.AddToBot(new RollMoveAction(this));
    }
    
    private PlaySfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,2));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_SLAVERBLUE_1A"));
        } else {
            this.AddToBot(new SFXAction("VO_SLAVERBLUE_1B"));
        }
    }
    
    private PlayDeathSfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,2));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_SLAVERBLUE_2A"));
        } else {
            this.AddToBot(new SFXAction("VO_SLAVERBLUE_2B"));
        }
    }
    
    Die(){
        super.Die();
        this.PlayDeathSfx();
    }
}