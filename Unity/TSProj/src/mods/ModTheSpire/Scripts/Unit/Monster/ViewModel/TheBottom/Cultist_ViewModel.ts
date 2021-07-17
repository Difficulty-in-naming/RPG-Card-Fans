import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Mathf} from "Core/Module/Math/Mathf";
import {Spine} from "csharp";
import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {SpeechBubble} from "mods/ModTheSpire/Scripts/Effect/Combat/SpeechBubble";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {TalkAction} from "mods/ModTheSpire/Scripts/Action/Animations/TalkAction";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {RitualPower} from "mods/ModTheSpire/Scripts/Power/RitualPower";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";

export class Cultist_ViewModel extends AbstractMonster{
    private SaidPower = false;
    public constructor(monster:MonsterInfo,public talk:boolean) {
        super(monster);
    }
    Initialize() {
        this.DamageInfo.push(new DamageInfo(this,6));
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("waving",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }
    
    GetMove(num: number) {
        if(DungeonManager.Inst.CurrentRoom.Round == 1){
            this.SetMove(3,Intent.BUFF,{moveName:LocalizationProperty.Read("念咒")})
        }
        this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]});
    }
    
    TakeTurn() {
        switch(this.MoveIndex){
            case 3:{
                let temp = Mathf.RandomRange(1,10);
                if(this.talk){
                    this.PlaySfx();
                    if(temp < 4){
                        this.AddToBot(new TalkAction(this.X - 170,this.Y + 50,LocalizationProperty.Read("异教徒-对话1"),true,1))
                    } else if(temp < 7) {
                        this.AddToBot(new TalkAction(this.X - 170,this.Y + 50,LocalizationProperty.Read("异教徒-对话2"),true,1))
                    }
                }
                if(DungeonManager.Inst.AdvanceLevel >= 17){
                    this.AddToBot(new ApplyPowerAction(this,this,new RitualPower(true),2));
                } else {
                    this.AddToBot(new ApplyPowerAction(this,this,new RitualPower(true),1));
                }
                break;
            }
            case 1:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.SLASH_HORIZONTAL));
            }
        }
        this.AddToBot(new RollMoveAction(this));
    }
    
    private PlaySfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,3));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_CULTIST_1A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_CULTIST_1B"));
        } else {
            this.AddToBot(new SFXAction("VO_CULTIST_1C"));
        }
    }

    private PlayDeathSfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,3));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_CULTIST_2A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_CULTIST_2B"));
        } else {
            this.AddToBot(new SFXAction("VO_CULTIST_2C"));
        }
    }

    Die() {
        this.PlayDeathSfx();
        this.PlaySlowShake(5);
        if(this.talk && this.SaidPower){
            DungeonManager.EffectManager.Play(new SpeechBubble(this.X - 170,this.Y + 50,LocalizationProperty.Read("异教徒-对话3"),2.5,true));
            this.DeathTime += 1.5;
        }
        super.Die();
    }
}