import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import { AnimateSlowAttackAction } from "../../../../Action/Animations/AnimateSlowAttackAction";
import { ApplyPowerAction } from "../../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { EscapeAction } from "../../../../Action/Common/EscapeAction";
import { SetMoveAction } from "../../../../Action/Common/SetMoveAction";
import { SFXAction } from "../../../../Action/Utility/SFXAction";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { SpeechBubble } from "../../../../Effect/Combat/SpeechBubble";
import { OnPreBattleMessage } from "../../../../Events/OnPreBattleMessage";
import { LocalizationProperty } from "../../../../Gen/DB/Localization";
import { AngerPower } from "../../../../Power/AngerPower";
import { AbstractMonster } from "../../AbstractMonster";
import { Intent } from "../../Intent";

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

    PreBattleAction(msg: OnPreBattleMessage) {
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