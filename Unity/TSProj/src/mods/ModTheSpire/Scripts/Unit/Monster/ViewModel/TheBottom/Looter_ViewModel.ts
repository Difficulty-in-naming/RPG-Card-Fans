import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import { AnimateSlowAttackAction } from "../../../../Action/Animations/AnimateSlowAttackAction";
import { TalkAction } from "../../../../Action/Animations/TalkAction";
import VFXAction from "../../../../Action/Animations/VFXAction";
import { ApplyPowerAction } from "../../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { EscapeAction } from "../../../../Action/Common/EscapeAction";
import GainBlockAction from "../../../../Action/Common/GainBlockAction";
import { SetMoveAction } from "../../../../Action/Common/SetMoveAction";
import { SFXAction } from "../../../../Action/Utility/SFXAction";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { SmokeBombEffect } from "../../../../Effect/Combat/SmokeBombEffect";
import { SpeechBubble } from "../../../../Effect/Combat/SpeechBubble";
import { OnPreBattleMessage } from "../../../../Events/OnPreBattleMessage";
import { LocalizationProperty } from "../../../../Gen/DB/Localization";
import { ThieveryPower } from "../../../../Power/ThieveryPower";
import { AbstractMonster } from "../../AbstractMonster";
import { Intent } from "../../Intent";


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