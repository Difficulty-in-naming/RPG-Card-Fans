import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Mathf} from "Core/Module/Math/Mathf";
import {Spine} from "csharp";
import {OnPreBattleMessage} from "mods/ModTheSpire/Scripts/Events/OnPreBattleMessage";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {ThieveryPower} from "mods/ModTheSpire/Scripts/Power/ThieveryPower";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import {SpeechBubble} from "mods/ModTheSpire/Scripts/Effect/Combat/SpeechBubble";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {TalkAction} from "mods/ModTheSpire/Scripts/Action/Animations/TalkAction";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {SetMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/SetMoveAction";
import GainBlockAction from "mods/ModTheSpire/Scripts/Action/Common/GainBlockAction";
import VFXAction from "mods/ModTheSpire/Scripts/Action/Animations/VFXAction";
import {SmokeBombEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/SmokeBombEffect";
import {EscapeAction} from "mods/ModTheSpire/Scripts/Action/Common/EscapeAction";

export class Looter_ViewModel extends AbstractMonster{
    private SlashCount = 0;
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2){
            this.DamageInfo.push(new DamageInfo(this,11));
            this.DamageInfo.push(new DamageInfo(this,14));
        }else{
            this.DamageInfo.push(new DamageInfo(this,10));
            this.DamageInfo.push(new DamageInfo(this,12));
        }
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }
    
    PreBattleAction(msg: OnPreBattleMessage) {
        super.PreBattleAction(msg);
        this.AddToBot(new ApplyPowerAction(this,this,new ThieveryPower(),0))
    }

    GetMove(num: number) {
        this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]});
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 1:{
                if(this.SlashCount == 0 && Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.6){
                    this.AddToBot(new TalkAction(this.X -170 ,this.Y - 50,LocalizationProperty.Read(this.Info.Name + "对话1")))
                }
                this.PlaySfx();
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction(this,this,new ThieveryPower(),6));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.SLASH_DIAGONAL));
                ++this.SlashCount;
                if(this.SlashCount == 2){
                    if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.5){
                        this.SetMove(2,Intent.DEFEND);
                        break;
                    }
                    this.AddToBot(new SetMoveAction(this,4,Intent.ATTACK,{damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1")}));
                    break;
                }
                this.AddToBot(new SetMoveAction(this,4,Intent.ATTACK,{damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动2")}));
                break;
            }
            case 4:{
                this.PlaySfx();
                ++this.SlashCount;
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction(this,this,new ThieveryPower(),6));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[1],AttackEffect.SLASH_DIAGONAL));
                this.SetMove(2,Intent.DEFEND);
                break;
            }
            case 2:{
                this.AddToBot(new TalkAction(this.X - 170,this.Y -50,LocalizationProperty.Read(this.Info.Name + "对话3"),true,0.75,2.5));
                this.AddToBot(new GainBlockAction(this,6));
                this.AddToBot(new SetMoveAction(this,3,Intent.ESCAPE));
            }
            case 3:{
                this.AddToBot(new TalkAction(this.X - 170,this.Y -50,LocalizationProperty.Read(this.Info.Name + "对话4"),true,0.75,2.5));
                this.AddToBot(new VFXAction(new SmokeBombEffect(this.X,this.Y)));
                this.AddToBot(new EscapeAction(this));
                this.AddToBot(new SetMoveAction(this,3,Intent.ESCAPE));
            }
        }
    }

    private PlaySfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,3));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_LOOTER_1A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_LOOTER_1B"));
        } else {
            this.AddToBot(new SFXAction("VO_LOOTER_1C"));
        }
    }

    private PlayDeathSfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,3));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_LOOTER_2A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_LOOTER_2B"));
        } else {
            this.AddToBot(new SFXAction("VO_LOOTER_2C"));
        }
    }

    Die() {
        this.PlayDeathSfx();
        let obj = <Spine.Unity.SkeletonAnimation>this.DisplayObject.Self;
        obj.state.TimeScale = 0.1;
        this.PlaySlowShake(5);
        if(Mathf.Random() < 0.3){
            DungeonManager.EffectManager.Play(new SpeechBubble(this.X - 170,this.Y - 50,LocalizationProperty.Read(this.Info.Name + "对话2")));
        }
        super.Die();
    }
}