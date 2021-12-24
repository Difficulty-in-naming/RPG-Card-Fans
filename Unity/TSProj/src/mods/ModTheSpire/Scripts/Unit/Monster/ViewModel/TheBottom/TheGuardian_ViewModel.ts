import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {OnPreBattleMessage} from "mods/ModTheSpire/Scripts/Events/OnPreBattleMessage";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {ModeShiftPower} from "mods/ModTheSpire/Scripts/Power/ModeShiftPower";
import {SoundMaster} from "mods/ModTheSpire/Scripts/Audio/SoundMaster";
import GainBlockAction from "mods/ModTheSpire/Scripts/Action/Common/GainBlockAction";
import {Spine} from "csharp";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import LoseBlockAction from "mods/ModTheSpire/Scripts/Action/Utility/LoseBlockAction";
import {TextAboveCreatureAction} from "mods/ModTheSpire/Scripts/Action/Utility/TextAboveCreatureAction";
import {SharpHidePower} from "mods/ModTheSpire/Scripts/Power/SharpHidePower";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {WeakPower} from "mods/ModTheSpire/Scripts/Power/WeakPower";
import {VulnerablePower} from "mods/ModTheSpire/Scripts/Power/VulnerablePower";
import {DoFuncAction} from "mods/ModTheSpire/Scripts/Action/Common/DoFuncAction";
import {RemoveSpecificPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/RemoveSpecificPowerAction";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import VFXAction from "mods/ModTheSpire/Scripts/Action/Animations/VFXAction";
import {CleaveEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/CleaveEffect";
import {TalkAction} from "mods/ModTheSpire/Scripts/Action/Animations/TalkAction";
import {IntenseZoomEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/IntenseZoomEffect";

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