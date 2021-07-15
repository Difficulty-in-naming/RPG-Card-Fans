import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Spine} from "csharp";
import {Mathf} from "Core/Module/Math/Mathf";
import {SlimeAnimListener} from "mods/ModTheSpire/Scripts/Unit/Monster/Helpers/SlimeAnimListener";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import {TextAboveCreatureAction, TextType} from "mods/ModTheSpire/Scripts/Action/Utility/TextAboveCreatureAction";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {WeakPower} from "mods/ModTheSpire/Scripts/Power/WeakPower";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {MakeTempCardInDiscardAction} from "mods/ModTheSpire/Scripts/Action/Common/MakeTempCardInDiscardAction";
import {Slimed} from "mods/ModTheSpire/Scripts/Cards/Status/Slimed";

export class AcidSlime_L_ViewModel extends AbstractMonster{
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 17) {
            this.DamageInfo.push(new DamageInfo(this,12));
            this.DamageInfo.push(new DamageInfo(this,18));
        }else{
            this.DamageInfo.push(new DamageInfo(this,11));
            this.DamageInfo.push(new DamageInfo(this,16));
        }
        
        let trackEntry = <Spine.TrackEntry>this.PlayAnimation("Idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
        trackEntry.add_Event(SlimeAnimListener);
    }
    
    Damage(info: DamageInfo) {
        if(!this.IsDying && this.Health <= this.MaxHealth / 2 && this.MoveIndex != 3){
            this.SetMove(3,Intent.UNKNOWN, {moveName:"分裂"});
            this.AddToBot(new TextAboveCreatureAction(this, TextType.INTERRUPTED));
        }
    }

    GetMove(num:number) {
        if(num < 40){
            if(this.LastTwoMoves(1)){
                if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.6){
                    this.SetMove(2,Intent.ATTACK,{damage:this.DamageInfo[1].Origin.Damage});
                }else{
                    this.SetMove(4,Intent.DEBUFF,{moveName:"舔舔"});
                }
                this.SetMove(1,Intent.ATTACK_DEBUFF, {moveName:"腐蚀喷吐",damage:this.DamageInfo[1].Origin.Damage});
            }
        }else if(num<70){
            if(this.LastTwoMoves(2)){
                if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.6){
                    this.SetMove(1,Intent.ATTACK_DEBUFF,{damage:this.DamageInfo[0].Origin.Damage});
                }else{
                    this.SetMove(4,Intent.DEBUFF,{moveName:"舔舔"});
                }
                this.SetMove(2,Intent.ATTACK, {damage:this.DamageInfo[1].Origin.Damage});
            }
        } else if(this.LastMove(4)){
            if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.4){
                this.SetMove(1,Intent.ATTACK_DEBUFF,{moveName:"腐蚀喷吐",damage:this.DamageInfo[1].Origin.Damage});
            }else{
                this.SetMove(2,Intent.ATTACK,{damage:this.DamageInfo[1].Origin.Damage});
            }
        }else{
            this.SetMove(4,Intent.DEBUFF,{moveName:"舔舔"});
        }
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 1:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new WeakPower(),2));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 2:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new SFXAction("MONSTER_SLIME_ATTACK"));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY))
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new WeakPower(),2));
                this.AddToBot(new MakeTempCardInDiscardAction(new Slimed(), 2));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 3:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY))
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 4:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                
            }
        }
    }
}