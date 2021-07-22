import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Spine} from "csharp";
import {Mathf} from "Core/Module/Math/Mathf";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import {TextAboveCreatureAction, TextType} from "mods/ModTheSpire/Scripts/Action/Utility/TextAboveCreatureAction";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {MakeTempCardInDiscardAction} from "mods/ModTheSpire/Scripts/Action/Common/MakeTempCardInDiscardAction";
import {Slimed} from "mods/ModTheSpire/Scripts/Cards/Status/Slimed";
import {HideHealthBarAction} from "mods/ModTheSpire/Scripts/Action/Utility/HideHealthBarAction";
import {SuicideAction} from "mods/ModTheSpire/Scripts/Action/Common/SuicideAction";
import {WaitAction} from "mods/ModTheSpire/Scripts/Action/Utility/WaitAction";
import {SpawnMonsterAction} from "mods/ModTheSpire/Scripts/Action/Common/SpawnMonsterAction";
import {SetMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/SetMoveAction";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {ShoutAction} from "mods/ModTheSpire/Scripts/Action/Animations/ShoutAction";
import {ShakeScreenAction} from "mods/ModTheSpire/Scripts/Action/Animations/ShakeScreenAction";
import {ShakeDur, ShakeIntensity} from "mods/ModTheSpire/Scripts/Effect/ShakeScreen";
import {DoFuncAction} from "mods/ModTheSpire/Scripts/Action/Common/DoFuncAction";
import VFXAction from "mods/ModTheSpire/Scripts/Action/Animations/VFXAction";
import {WeightyImpactEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/WeightyImpactEffect";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import {AcidSlime_L_ViewModel} from "mods/ModTheSpire/Scripts/Unit/Monster/ViewModel/TheBottom/AcidSlime_L_ViewModel";
import {SpikeSlime_L_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/SpikeSlime_L_Model";
import {AcidSlime_L_Model} from "mods/ModTheSpire/Scripts/Unit/Monster/Model/TheBottom/AcidSlime_L_Model";
import {SoundMaster} from "mods/ModTheSpire/Scripts/Audio/SoundMaster";

export class SpikeSlime_L_ViewModel extends AbstractMonster {
    Initialize() {
        if (DungeonManager.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo(this, 10));
            this.DamageInfo.push(new DamageInfo(this, 38));
        } else {
            this.DamageInfo.push(new DamageInfo(this, 9));
            this.DamageInfo.push(new DamageInfo(this, 35));
        }

        this.SetAnimation("Idle", true);
    }

    Damage(info: DamageInfo) {
        if (!this.IsDying && this.Health <= this.MaxHealth / 2 && this.MoveIndex != 3) {
            this.SetMove(3, Intent.UNKNOWN, {moveName: "分裂"});
            this.AddToBot(new TextAboveCreatureAction(this, TextType.INTERRUPTED));
        }
    }

    GetMove(num: number) {
        if(DungeonManager.Inst.CurrentRoom.Round == 1){
            this.SetMove(4,Intent.STRONG_DEBUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动4")});
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
                this.AddToBot(new ShoutAction(this,LocalizationProperty.Read(this.Info.Name + "对话1"),1,2))
                this.AddToBot(new ShakeScreenAction(0.3,ShakeIntensity.LOW, ShakeDur.LONG,{Horizontal: true,Vertical: false}));
                this.SetMove(1,Intent.ATTACK,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1"),damage:this.DamageInfo[0]});
                break;
            }
            case 1: {
                this.AddToBot(new DoFuncAction(this.PlayJump,0.25));
                let playerHitBox = DungeonManager.Inst.Player.GetHitBox();
                this.AddToBot(new VFXAction(new WeightyImpactEffect(playerHitBox.CX,playerHitBox.CY,new Color(25,25,25,255)),0.8));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player, this.DamageInfo[1], AttackEffect.POISON));
                this.SetMove(4,Intent.STRONG_DEBUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动4")});
                break;
            }
            case 3: {
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new HideHealthBarAction());
                this.AddToBot(new SuicideAction(this, false));
                this.AddToBot(new WaitAction(1000));
                this.AddToBot(new SFXAction("SLIME_SPLIT"));
                this.AddToBot(new SpawnMonsterAction(new AcidSlime_L_ViewModel(new AcidSlime_L_Model(this.X - 134, this.Y + Mathf.RandomRange(-4, 4))), false));
                this.AddToBot(new SpawnMonsterAction(new SpikeSlime_L_ViewModel(new SpikeSlime_L_Model(this.X + 134, this.Y + Mathf.RandomRange(-4, 4))), false));
                this.SetMove(3, Intent.UNKNOWN, {moveName: "分裂"});
            }
        }
    }


    Die() {
        super.Die();
        SoundMaster.PlayVoice("VO_SLIMEBOSS_2A");
        if(this.Health <= 0){
            this.PlayFastShake(5);
        }
    }
}