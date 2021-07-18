import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {Spine} from "csharp";
import {Mathf} from "Core/Module/Math/Mathf";
import {OnPreBattleMessage} from "mods/ModTheSpire/Scripts/Events/OnPreBattleMessage";
import GainBlockAction from "mods/ModTheSpire/Scripts/Action/Common/GainBlockAction";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {MetallicizePower} from "mods/ModTheSpire/Scripts/Power/MetallicizePower";
import {MusicMaster} from "mods/ModTheSpire/Scripts/Audio/MusicMaster";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {DoFuncAction} from "mods/ModTheSpire/Scripts/Action/Common/DoFuncAction";
import {DexterityPower} from "mods/ModTheSpire/Scripts/Power/DexterityPower";
import {StrengthPower} from "mods/ModTheSpire/Scripts/Power/StrengthPower";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {SetMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/SetMoveAction";
import {TalkAction} from "mods/ModTheSpire/Scripts/Action/Animations/TalkAction";
import {TextAboveCreatureAction, TextType} from "mods/ModTheSpire/Scripts/Action/Utility/TextAboveCreatureAction";
import {ReducePowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ReducePowerAction";
import {DamageType} from "mods/ModTheSpire/Scripts/DataDefine/DamageType";

export class Lagavulin_ViewModel extends AbstractMonster{
    private DebuffAmount:number;
    private IsOut = false;
    private DebuffTurnCount = 0;
    private IdleCount = 0;

    public constructor(info:MonsterInfo,private Asleep:boolean) {
        super(info);
    }
    
    Initialize() {
        this.DebuffAmount = DungeonManager.Inst.AdvanceLevel >= 18 ? -2 : -1;
        this.DamageInfo.push(new DamageInfo(this,DungeonManager.Inst.AdvanceLevel >= 3 ? 20 : 18));
        let trackEntry:Spine.TrackEntry;
        if(!this.Asleep){
            this.IsOut = true;
            trackEntry = <Spine.TrackEntry>this.SetAnimation("Idle_2",true);
            this.SetHitBox({X:0,Y:-25,Width:320,Height:370});
        } else {
            trackEntry = <Spine.TrackEntry>this.SetAnimation("Idle_1",true);
        }
        let animation = <Spine.Unity.SkeletonAnimation>this.DisplayObject.Self;
        let data = animation.SkeletonDataAsset.GetAnimationStateData();
        data.SetMix("Attack","Idle_2",0.25);
        data.SetMix("Hit","Idle_2",0.25);
        data.SetMix("Idle_1","Idle_2",0.5);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random();
    }


    PreBattleAction(msg: OnPreBattleMessage) {
        super.PreBattleAction(msg);
        if(this.Asleep){
            this.AddToBot(new GainBlockAction(this,8));
            this.AddToBot(new ApplyPowerAction(this,this,new MetallicizePower(),8));
        }else{
            MusicMaster.Play("ELITE")
            this.SetMove(1,Intent.STRONG_DEBUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")})
        }
    }

    GetMove(num: number) {
        if(this.IsOut){
            if(this.DebuffTurnCount < 2){
                if(this.LastTwoMoves(3)){
                    this.SetMove(1,Intent.STRONG_DEBUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")})
                }else{
                    this.SetMove(3,Intent.ATTACK,{damage:this.DamageInfo[0]});
                }
            } else{
                this.SetMove(1,Intent.STRONG_DEBUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")})
            }
        }else{
            this.SetMove(5,Intent.SLEEP);
        }
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 1:{
                this.DebuffTurnCount = 0;
                this.AddToBot(new DoFuncAction(()=> {
                    this.SetAnimation("Debuff");
                    this.AddAnimation("Idle_2");
                },0.3));
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new DexterityPower(),this.DebuffAmount));
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new StrengthPower(),this.DebuffAmount));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 3:{
                this.DebuffTurnCount++;
                this.AddToBot(new DoFuncAction(()=> {
                    this.SetAnimation("Attack");
                    this.AddAnimation("Idle_2");
                },0.3));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 5:{
                this.IdleCount++;
                if(this.IdleCount >= 3){
                    this.AddToBot(new DoFuncAction(this.Open));
                    this.AddToBot(new SetMoveAction(this,3,Intent.ATTACK,{damage:this.DamageInfo[0]}));
                }else{
                    this.AddToBot(new TalkAction(this.X - 170,this.Y-50,LocalizationProperty.Read(this.Info.Name + "对话" + this.IdleCount),true,0.5,2));
                    this.AddToBot(new SetMoveAction(this,5,Intent.SLEEP));
                }
                break;
            }
            case 4:{
                this.AddToBot(new TextAboveCreatureAction(this,TextType.STUNNED));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 6:{
                this.AddToBot(new DoFuncAction(this.Open));
                this.AddToBot(new SetMoveAction(this,3,Intent.ATTACK,{damage:this.DamageInfo[0]}));
                break;
            }
        }
    }
    
    Open(){
        this.IsOut = true;
        this.SetHitBox({X:0,Y:-25,Width:320,Height:370});
        this.AddToBot(new TalkAction(this.X - 170,this.Y-50,LocalizationProperty.Read(this.Info.Name + "对话4"),true,0.5,2));
        this.AddToBot(new ReducePowerAction(this,this,MetallicizePower.Id,8));
        MusicMaster.Play("ELITE");
        this.SetAnimation("Coming_out");
        this.AddAnimation("Idle_2");
    }
    
    Damage(info: DamageInfo) {
        if(this.Health != this.MaxHealth){
            this.SetMove(4,Intent.STUN);
            this.AddToBot(new DoFuncAction(this.Open))
        }else if(this.IsOut && info.Origin != null && info.DamageType != DamageType.THORNS && info.TotalDamage > 0){
            this.SetAnimation("Hit",false);
            this.AddAnimation("Idle_2",true);
        }
    }
    
    Die() {
        super.Die();
        MusicMaster.FadeOut();
    }
}