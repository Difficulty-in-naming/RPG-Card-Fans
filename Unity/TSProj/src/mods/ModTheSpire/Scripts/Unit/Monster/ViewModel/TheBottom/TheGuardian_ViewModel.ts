import { Spine } from "csharp";
import { AnimateSlowAttackAction } from "../../../../Action/Animations/AnimateSlowAttackAction";
import { TalkAction } from "../../../../Action/Animations/TalkAction";
import VFXAction from "../../../../Action/Animations/VFXAction";
import { ApplyPowerAction } from "../../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { DoFuncAction } from "../../../../Action/Common/DoFuncAction";
import GainBlockAction from "../../../../Action/Common/GainBlockAction";
import { RemoveSpecificPowerAction } from "../../../../Action/Common/RemoveSpecificPowerAction";
import LoseBlockAction from "../../../../Action/Utility/LoseBlockAction";
import { SFXAction } from "../../../../Action/Utility/SFXAction";
import { TextAboveCreatureAction } from "../../../../Action/Utility/TextAboveCreatureAction";
import { SoundMaster } from "../../../../Audio/SoundMaster";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { CleaveEffect } from "../../../../Effect/Combat/CleaveEffect";
import { IntenseZoomEffect } from "../../../../Effect/Combat/IntenseZoomEffect";
import { OnPreBattleMessage } from "../../../../Events/OnPreBattleMessage";
import { LocalizationProperty } from "../../../../Gen/DB/Localization";
import { ModeShiftPower } from "../../../../Power/ModeShiftPower";
import { SharpHidePower } from "../../../../Power/SharpHidePower";
import { VulnerablePower } from "../../../../Power/VulnerablePower";
import { WeakPower } from "../../../../Power/WeakPower";
import { AbstractMonster } from "../../AbstractMonster";
import { Intent } from "../../Intent";

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
        this.AddToBot(new ApplyPowerAction(this,this,new ModeShiftPower(this.ShiftFunc),this._DmgThreshold));
    }

    DefensiveMode(){
        SoundMaster.PlayVoice("GUARDIAN_ROLL_UP");
        this.AddToBot(new GainBlockAction(this,this._DefensiveAmount));
        this._AnimationState.TimeScale = 2;
        this.SetAnimation("transition");
        this.AddAnimation("defensive",true);
        this._DmgThreshold += this._DmgThresholdIncrease;
        this.SetMove(1,Intent.BUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")})
        this.SetHitBox(0,95,440,250);
    }
    
    OffensiveMode(){
        this.AddToBot(new ApplyPowerAction(this,this,new ModeShiftPower(this.ShiftFunc),this._DmgThreshold));
        if(this.Block != 0)
            this.AddToBot(new LoseBlockAction(this,this.Block));
        this._AnimationState.TimeScale = 1;
        this.SetHitBox(0,95,440,350);
    }
    
    GetMove(num: number) {
        this.SetMove(3,Intent.ATTACK,{damage:this.DamageInfo[1]});
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 1:{
                this.AddToBot(new TextAboveCreatureAction(this,LocalizationProperty.Read(this.Info.Name + "对话2")));
                if(DungeonManager.Inst.AdvanceLevel >= 19){
                    this.AddToBot(new ApplyPowerAction(this,this,new SharpHidePower(),4));
                } else {
                    this.AddToBot(new ApplyPowerAction(this,this,new SharpHidePower(),3));
                }
                this.SetMove(3,Intent.ATTACK,{damage:this.DamageInfo[1]});
                break;
            }
            case 2:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY));
                this.SetMove(7,Intent.STRONG_DEBUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动7")})
                break;
            }
            case 7:{
                this.AddToBot(new ApplyPowerAction(this,this,new WeakPower(),2));
                this.AddToBot(new ApplyPowerAction(this,this,new VulnerablePower(),2));
                this.SetMove(5,Intent.ATTACK,{damage:this.DamageInfo[2],multiplier:4,moveName:LocalizationProperty.Read(this.Info.Name + "行动5")})
                break;
            }
            case 3:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[1],AttackEffect.BLUNT_HEAVY));
                this.SetMove(4,Intent.ATTACK_BUFF,{damage:this.DamageInfo[3],multiplier:2,moveName:LocalizationProperty.Read(this.Info.Name + "行动4")})
                break;
            }
            case 4:{
                this.AddToBot(new DoFuncAction(this.OffensiveMode))
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[3],AttackEffect.SLASH_HEAVY));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[3],AttackEffect.SLASH_HEAVY));
                this.AddToBot(new RemoveSpecificPowerAction(this,this,SharpHidePower.Id));
                this.SetMove(5,Intent.ATTACK,{damage:new DamageInfo(this,5),multiplier:4,moveName:LocalizationProperty.Read(this.Info.Name + "行动5")})
                break;
            }
            case 5:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new SFXAction("ATTACK_WHIRLWIND"))
                let hb = DungeonManager.Inst.Player.GetHitBox();
                for (let i = 0; i < 4; i++) {
                    this.AddToBot(new SFXAction("ATTACK_HEAVY"))
                    this.AddToBot(new VFXAction(new CleaveEffect(hb.CX,hb.CY)));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[2],AttackEffect.BLUNT_HEAVY));
                }
                break;
            }
            case 6:{
                let hb = DungeonManager.Inst.Player.GetHitBox();
                this.AddToBot(new GainBlockAction(this,9));
                this.AddToBot(new SFXAction("MONSTER_GUARDIAN_DESTROY"));
                this.AddToBot(new TalkAction(hb.CX,hb.CY +200,LocalizationProperty.Read(this.Info.Name + "对话3"),false,1,2.5));
                this.SetMove(3,Intent.ATTACK,{damage:this.DamageInfo[1]})
                break;
            }
        }
    }
    
    ShiftFunc(){
        let hb = this.GetHitBox();
        this.AddToBot(new VFXAction(new IntenseZoomEffect(hb.CX,hb.CY,false),0.05));
        this.DefensiveMode();
    }
}