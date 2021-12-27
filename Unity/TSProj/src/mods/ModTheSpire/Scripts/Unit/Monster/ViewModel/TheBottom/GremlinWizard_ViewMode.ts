import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import { TalkAction } from "../../../../Action/Animations/TalkAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { EscapeAction } from "../../../../Action/Common/EscapeAction";
import { SetMoveAction } from "../../../../Action/Common/SetMoveAction";
import { SFXAction } from "../../../../Action/Utility/SFXAction";
import { TextAboveCreatureAction } from "../../../../Action/Utility/TextAboveCreatureAction";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { SpeechBubble } from "../../../../Effect/Combat/SpeechBubble";
import { LocalizationProperty } from "../../../../Gen/DB/Localization";
import { AbstractMonster } from "../../AbstractMonster";
import { Intent } from "../../Intent";

export class GremlinWizard_ViewMode extends AbstractMonster{
    private _currentCharge:number = 0;
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo(this,30));
        }else{
            this.DamageInfo.push(new DamageInfo(this,25));
        }
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("animation",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }

    GetMove(num: number) {
        this.SetMove(2,Intent.UNKNOWN,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")})
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 2:{
                this._currentCharge++;
                this.AddToBot(new TextAboveCreatureAction(this,LocalizationProperty.Read(this.Info.Name + "对话1")));
                if(this._currentCharge == 3){
                    this.PlaySfx()
                    this.AddToBot(new TalkAction(this.X - 150,this.Y - 100,LocalizationProperty.Read(this.Info.Name + "对话2"),true,1.5,3));
                    this.AddToBot(new SetMoveAction(this,1,Intent.ATTACK,{damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "行动2")}));
                }
                this.AddToBot(new SetMoveAction(this,2,Intent.UNKNOWN,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")}));
                break;
            }
            case 1:{
                this._currentCharge = 0;
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.FIRE));
                if(DungeonManager.Inst.AdvanceLevel >= 17){
                    this.AddToBot(new SetMoveAction(this,1,Intent.ATTACK,{damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "行动2")}));
                }
                else{
                    this.AddToBot(new SetMoveAction(this,2,Intent.UNKNOWN,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")}));
                }
                break;
            }
            case 99:{
                DungeonManager.EffectManager.Play(new SpeechBubble(this.X - 100,this.Y + 50,LocalizationProperty.Read(this.Info.Name + "对话1"),2.5,true));
                this.AddToBot(new EscapeAction(this));
                this.AddToBot(new SetMoveAction(this,99,Intent.ESCAPE));
                break;
            }
        }
    }

    private PlaySfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,2));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_GREMLINDOPEY_1A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_GREMLINDOPEY_1B"));
        } 
    }

    private PlayDeathSfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,3));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_GREMLINDOPEY_2A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_GREMLINDOPEY_2B"));
        } else {
            this.AddToBot(new SFXAction("VO_GREMLINDOPEY_2C"));
        }
    }

    Die() {
        super.Die();
        this.PlayDeathSfx();
    }
}