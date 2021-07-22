import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {OnPreBattleMessage} from "mods/ModTheSpire/Scripts/Events/OnPreBattleMessage";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {ModeShiftPower} from "mods/ModTheSpire/Scripts/Power/ModeShiftPower";
import {DoFuncAction} from "mods/ModTheSpire/Scripts/Action/Common/DoFuncAction";
import {SoundMaster} from "mods/ModTheSpire/Scripts/Audio/SoundMaster";
import GainBlockAction from "mods/ModTheSpire/Scripts/Action/Common/GainBlockAction";
import {Spine} from "csharp";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {Rect} from "Core/Define/Rect";

export class TheGuardian_ViewModel extends AbstractMonster{
    private _DmgThreshold:number;
    private _DmgThresholdIncrease:number = 10;
    private _DefensiveAmount = 20;
    private _AnimationState:Spine.AnimationState;
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 19) {
            this._DmgThreshold = 40;
        } else if(DungeonManager.Inst.AdvanceLevel >= 9) {
            this._DmgThreshold = 35;
        } else {
            this._DmgThreshold = 30;
        }
        if(DungeonManager.Inst.AdvanceLevel >= 4){
            this.DamageInfo.push(new DamageInfo(this,36));
            this.DamageInfo.push(new DamageInfo(this,10));
        } else {
            this.DamageInfo.push(new DamageInfo(this,32));
            this.DamageInfo.push(new DamageInfo(this,9));
        }
        this.DamageInfo.push(new DamageInfo(this,4));
        this.DamageInfo.push(new DamageInfo(this,8));
        this.SetAnimation("idle", true);
        let animation = <Spine.Unity.SkeletonAnimation>this.DisplayObject.Self;
        this._AnimationState = animation.AnimationState;
        let data = animation.skeletonDataAsset.GetAnimationStateData();
        data.SetMix("idle","transition",0.1);
        data.SetMix("defensive","idle",0.2);
    }
    
    PreBattleAction(msg: OnPreBattleMessage) {
        this.AddToBot(new ApplyPowerAction(this,this,new ModeShiftPower(),this._DmgThreshold));
        this.AddToBot(new DoFuncAction(this.DefensiveMode));
    }

    DefensiveMode(){
        SoundMaster.PlayVoice("GUARDIAN_ROLL_UP");
        this.AddToBot(new GainBlockAction(this,this._DefensiveAmount));
        this._AnimationState.TimeScale = 2;
        this.SetAnimation("transition");
        this.AddAnimation("defensive",true);
        this._DmgThreshold += this._DmgThresholdIncrease;
        this.SetMove(1,Intent.BUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")})
        this.SetHitBox(new Rect(0,95,440,250));
        this.
    }
    
    GetMove(num: number) {
    }

    TakeTurn() {
    }
}