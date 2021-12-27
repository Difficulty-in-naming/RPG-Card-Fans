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
import { LocalizationProperty } from "../../../../Gen/DB/Localization";
import { WeakPower } from "../../../../Power/WeakPower";
import { AbstractMonster } from "../../AbstractMonster";
import { Intent } from "../../Intent";

export class GremlinThief_ViewModel extends AbstractMonster{
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo(this,10));
        }else{
            this.DamageInfo.push(new DamageInfo(this,9));
        }
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("animation",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }

    GetMove(num: number) {
        this.SetMove(2,Intent.ATTACK_DEBUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")})
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 2:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_LIGHT));
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new WeakPower(),1));
                this.AddToBot(new SetMoveAction(this,99,Intent.ESCAPE));
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
        let roll = Mathf.Floor(Mathf.RandomRange(0,2));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_GREMLINSPAZZY_1A"));
        } else if(roll == 1) {
            this.AddToBot(new SFXAction("VO_GREMLINSPAZZY_1B"));
        }
    }

    private PlayDeathSfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,3));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_GREMLINSPAZZY_2A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_GREMLINSPAZZY_2B"));
        } else {
            this.AddToBot(new SFXAction("VO_GREMLINSPAZZY_2C"));
        }
    }

    Die() {
        super.Die();
        this.PlayDeathSfx();
    }
}