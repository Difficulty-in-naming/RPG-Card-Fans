import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import { AnimateSlowAttackAction } from "../../../../Action/Animations/AnimateSlowAttackAction";
import { ShakeScreenAction } from "../../../../Action/Animations/ShakeScreenAction";
import { ShoutAction } from "../../../../Action/Animations/ShoutAction";
import VFXAction from "../../../../Action/Animations/VFXAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { DoFuncAction } from "../../../../Action/Common/DoFuncAction";
import { MakeTempCardInDiscardAction } from "../../../../Action/Common/MakeTempCardInDiscardAction";
import { SetMoveAction } from "../../../../Action/Common/SetMoveAction";
import { SpawnMonsterAction } from "../../../../Action/Common/SpawnMonsterAction";
import { SuicideAction } from "../../../../Action/Common/SuicideAction";
import { HideHealthBarAction } from "../../../../Action/Utility/HideHealthBarAction";
import { SFXAction } from "../../../../Action/Utility/SFXAction";
import { TextAboveCreatureAction, TextType } from "../../../../Action/Utility/TextAboveCreatureAction";
import { WaitAction } from "../../../../Action/Utility/WaitAction";
import { SoundMaster } from "../../../../Audio/SoundMaster";
import { Slimed } from "../../../../Cards/Status/Slimed";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import Color from "../../../../DataDefine/Color";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { WeightyImpactEffect } from "../../../../Effect/Combat/WeightyImpactEffect";
import { ShakeIntensity, ShakeDur } from "../../../../Effect/ShakeScreen";
import { LocalizationProperty } from "../../../../Gen/DB/Localization";
import { AbstractMonster } from "../../AbstractMonster";
import { Intent } from "../../Intent";
import { AcidSlime_L_Model } from "../../Model/TheBottom/AcidSlime_L_Model";
import { SpikeSlime_L_Model } from "../../Model/TheBottom/SpikeSlime_L_Model";
import { AcidSlime_L_ViewModel } from "./AcidSlime_L_ViewModel";

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