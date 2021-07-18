﻿import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Spine} from "csharp";
import {Mathf} from "Core/Module/Math/Mathf";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import {TextAboveCreatureAction, TextType} from "mods/ModTheSpire/Scripts/Action/Utility/TextAboveCreatureAction";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {MakeTempCardInDiscardAction} from "mods/ModTheSpire/Scripts/Action/Common/MakeTempCardInDiscardAction";
import {Slimed} from "mods/ModTheSpire/Scripts/Cards/Status/Slimed";
import {HideHealthBarAction} from "mods/ModTheSpire/Scripts/Action/Utility/HideHealthBarAction";
import {SuicideAction} from "mods/ModTheSpire/Scripts/Action/Common/SuicideAction";
import {WaitAction} from "mods/ModTheSpire/Scripts/Action/Utility/WaitAction";
import {SpawnMonsterAction} from "mods/ModTheSpire/Scripts/Action/Common/SpawnMonsterAction";
import {AcidSlime_M_ViewModel} from "mods/ModTheSpire/Scripts/Unit/Monster/ViewModel/TheBottom/AcidSlime_M_ViewModel";
import {AcidSlime_M_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/AcidSlime_M_Model";
import {SetMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/SetMoveAction";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

export class SpikeSlime_L_ViewModel extends AbstractMonster {
    Initialize() {
        if (DungeonManager.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo(this, 10));
            this.DamageInfo.push(new DamageInfo(this, 38));
        } else {
            this.DamageInfo.push(new DamageInfo(this, 9));
            this.DamageInfo.push(new DamageInfo(this, 35));
        }

        let trackEntry = <Spine.TrackEntry>this.SetAnimation("Idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }

    Damage(info: DamageInfo) {
        if (!this.IsDying && this.Health <= this.MaxHealth / 2 && this.MoveIndex != 3) {
            this.SetMove(3, Intent.UNKNOWN, {moveName: "分裂"});
            this.AddToBot(new TextAboveCreatureAction(this, TextType.INTERRUPTED));
        }
    }

    GetMove(num: number) {
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

    private PlaySfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,2));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_SLIMEBOSS_1A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_SLIMEBOSS_1B"));
        } 
    }

    TakeTurn() {
        switch (this.MoveIndex) {
            case 4: {
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new SFXAction("MONSTER_SLIME_ATTACK"));
                if(DungeonManager.Inst.AdvanceLevel >= 19)
                    this.AddToBot(new MakeTempCardInDiscardAction(new Slimed(),5));
                else
                    this.AddToBot(new MakeTempCardInDiscardAction(new Slimed(),3));
                this.AddToBot(new SetMoveAction(this,2,Intent.UNKNOWN,{moveName:LocalizationProperty.Read(this.Info.Name + "行动2")}));
                break;
            }
            case 2:{
                this.PlaySfx();
                this.AddToBot(new ShoutAction)
            }
            case 1: {
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player, this.DamageInfo[0], AttackEffect.BLUNT_HEAVY))
                this.AddToBot(new MakeTempCardInDiscardAction(new Slimed(),2));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 3: {
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new HideHealthBarAction());
                this.AddToBot(new SuicideAction(this, false));
                this.AddToBot(new WaitAction(1000));
                this.AddToBot(new SFXAction("SLIME_SPLIT"));
                this.AddToBot(new SpawnMonsterAction(new AcidSlime_M_ViewModel(new AcidSlime_M_Model(this.X - 134, this.Y + Mathf.RandomRange(-4, 4))), false));
                this.AddToBot(new SpawnMonsterAction(new AcidSlime_M_ViewModel(new AcidSlime_M_Model(this.X + 134, this.Y + Mathf.RandomRange(-4, 4))), false));
                this.SetMove(3, Intent.UNKNOWN, {moveName: "分裂"});
            }
        }
    }
}