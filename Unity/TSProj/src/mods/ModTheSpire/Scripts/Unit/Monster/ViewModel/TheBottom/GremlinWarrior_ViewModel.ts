import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Mathf} from "Core/Module/Math/Mathf";
import {Spine} from "csharp";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import {AngerPower} from "mods/ModTheSpire/Scripts/Power/AngerPower";
import {VulnerablePower} from "mods/ModTheSpire/Scripts/Power/VulnerablePower";
import {OnPreBattleAction} from "mods/ModTheSpire/Scripts/Events/OnPreBattleAction";
import {SetMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/SetMoveAction";
import {SpeechBubble} from "mods/ModTheSpire/Scripts/Effect/Combat/SpeechBubble";
import {EscapeAction} from "mods/ModTheSpire/Scripts/Action/Common/EscapeAction";

export class GremlinWarrior_ViewModel extends AbstractMonster{
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo(this,5));
        }else{
            this.DamageInfo.push(new DamageInfo(this,4));
        }
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("animation",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }

    PreBattleAction(msg: OnPreBattleAction) {
        super.PreBattleAction(msg);
        if(DungeonManager.Inst.AdvanceLevel >= 17)
            this.AddToBot(new ApplyPowerAction(this,this,new AngerPower(),2))
        else
            this.AddToBot(new ApplyPowerAction(this,this,new AngerPower(),1))
    }
    
    GetMove(num: number) {
        this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]})
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 3:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[1],AttackEffect.SLASH_DIAGONAL));
                this.AddToBot(new SetMoveAction(this,1,Intent.ATTACK,{damage:this.DamageInfo[0]}));
                break;
            }
            case 99:{
                this.PlaySfx()
                DungeonManager.EffectManager.Play(new SpeechBubble(this.X - 100,this.Y + 50,LocalizationProperty.Read(this.Info.Name + "对话1"),2.5,true));
                this.AddToBot(new EscapeAction(this));
                this.AddToBot(new SetMoveAction(this,99,Intent.ESCAPE));
                break;
            }
        }
    }

    private PlaySfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,3));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_GREMLINANGRY_1A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_GREMLINANGRY_1B"));
        } else {
            this.AddToBot(new SFXAction("VO_GREMLINANGRY_1C"));
        }
    }

    private PlayDeathSfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,2));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_GREMLINANGRY_2A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_GREMLINANGRY_2B"));
        }
    }

    Die() {
        super.Die();
        this.PlayDeathSfx();
    }
}