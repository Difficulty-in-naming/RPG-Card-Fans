import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Mathf} from "Core/Module/Math/Mathf";
import {Spine} from "csharp";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import {WeakPower} from "mods/ModTheSpire/Scripts/Power/WeakPower";
import {FrailPower} from "mods/ModTheSpire/Scripts/Power/FrailPower";
import {SetMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/SetMoveAction";
import {SpeechBubble} from "mods/ModTheSpire/Scripts/Effect/Combat/SpeechBubble";
import {EscapeAction} from "mods/ModTheSpire/Scripts/Action/Common/EscapeAction";
import {TextAboveCreatureAction} from "mods/ModTheSpire/Scripts/Action/Utility/TextAboveCreatureAction";
import {TalkAction} from "mods/ModTheSpire/Scripts/Action/Animations/TalkAction";

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