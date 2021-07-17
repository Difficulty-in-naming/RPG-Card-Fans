﻿import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
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

export class AcidSlime_M_ViewModel extends AbstractMonster{
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo(this,8));
            this.DamageInfo.push(new DamageInfo(this,12));
        }else{
            this.DamageInfo.push(new DamageInfo(this,7));
            this.DamageInfo.push(new DamageInfo(this,10));
        }

        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
        trackEntry.add_Event(SlimeAnimListener);
    }
    
    GetMove(num:number) {
        if(DungeonManager.Inst.AdvanceLevel>=17){
            if(num < 40){
                if(this.LastTwoMoves(1)){
                    if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.5){
                        this.SetMove(2,Intent.ATTACK,{damage:this.DamageInfo[1]});
                    }else{
                        this.SetMove(4,Intent.DEBUFF,{moveName:"舔舔"});
                    }
                }else{
                    this.SetMove(1,Intent.ATTACK_DEBUFF, {moveName:"腐蚀喷吐",damage:this.DamageInfo[1]});
                }
            }else if(num<80){
                if(this.LastTwoMoves(2)){
                    if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.5){
                        this.SetMove(1,Intent.ATTACK_DEBUFF,{damage:this.DamageInfo[0]});
                    }else{
                        this.SetMove(4,Intent.DEBUFF,{moveName:"舔舔"});
                    }
                }else{
                    this.SetMove(2,Intent.ATTACK, {damage:this.DamageInfo[1]});
                }
            } else if(this.LastMove(4)){
                if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.4){
                    this.SetMove(1,Intent.ATTACK_DEBUFF,{moveName:"腐蚀喷吐",damage:this.DamageInfo[1]});
                }else{
                    this.SetMove(2,Intent.ATTACK,{damage:this.DamageInfo[1]});
                }
            }else{
                this.SetMove(4,Intent.DEBUFF,{moveName:"舔舔"});
            }
        }else if(num<30){
            if(this.LastTwoMoves(1)){
                if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.5){
                    this.SetMove(2,Intent.ATTACK,{damage:this.DamageInfo[1]});
                }else{
                    this.SetMove(4,Intent.DEBUFF,{moveName:"舔舔"});
                }
                this.SetMove(1,Intent.ATTACK_DEBUFF, {moveName:"腐蚀喷吐",damage:this.DamageInfo[1]});
            }else{
                this.SetMove(1,Intent.ATTACK_DEBUFF, {moveName:"腐蚀喷吐",damage:this.DamageInfo[1]});
            }
        } else if(num<70){
            if(this.LastTwoMoves(2)){
                if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.5){
                    this.SetMove(1,Intent.ATTACK_DEBUFF,{damage:this.DamageInfo[0]});
                }else{
                    this.SetMove(4,Intent.DEBUFF,{moveName:"舔舔"});
                }
                this.SetMove(2,Intent.ATTACK, {damage:this.DamageInfo[1]});
            }
            else{
                this.SetMove(2,Intent.ATTACK,{damage:this.DamageInfo[1]});
            }
        }else if(this.LastMove(4)){
            if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.4){
                this.SetMove(1,Intent.ATTACK_DEBUFF,{moveName:"腐蚀喷吐",damage:this.DamageInfo[1]});
            }else{
                this.SetMove(2,Intent.ATTACK,{damage:this.DamageInfo[1]});
            }
        }else{
            this.SetMove(4,Intent.DEBUFF,{moveName:"舔舔"});
        }
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 1:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY))
                this.AddToBot(new MakeTempCardInDiscardAction(new Slimed(), 2));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 2:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY))
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 4:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new WeakPower(),2));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
        }
    }
}