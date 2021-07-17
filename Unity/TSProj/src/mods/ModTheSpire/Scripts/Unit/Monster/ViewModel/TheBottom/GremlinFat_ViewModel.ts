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
import {DamageType} from "mods/ModTheSpire/Scripts/DataDefine/DamageType";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import {WeakPower} from "mods/ModTheSpire/Scripts/Power/WeakPower";
import {FrailPower} from "mods/ModTheSpire/Scripts/Power/FrailPower";
import {SetMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/SetMoveAction";
import {SpeechBubble} from "mods/ModTheSpire/Scripts/Effect/Combat/SpeechBubble";
import {EscapeAction} from "mods/ModTheSpire/Scripts/Action/Common/EscapeAction";

export class GremlinFat_ViewModel extends AbstractMonster{
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo(this,5));
        }else{
            this.DamageInfo.push(new DamageInfo(this,4));
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
                if(DungeonManager.Inst.AdvanceLevel >= 17){
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new FrailPower(),1));
                }
                this.AddToBot(new RollMoveAction(this));
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
            this.AddToBot(new SFXAction("VO_GREMLINFAT_1A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_GREMLINFAT_1B"));
        } else {
            this.AddToBot(new SFXAction("VO_GREMLINFAT_1C"));
        }
    }

    private PlayDeathSfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,3));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_GREMLINFAT_2A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_GREMLINFAT_2B"));
        } else {
            this.AddToBot(new SFXAction("VO_GREMLINFAT_2C"));
        }
    }

    Die() {
        super.Die();
        this.PlayDeathSfx();
    }
}