import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import { AnimateSlowAttackAction } from "../../../../Action/Animations/AnimateSlowAttackAction";
import { TalkAction } from "../../../../Action/Animations/TalkAction";
import { ApplyPowerAction } from "../../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { SFXAction } from "../../../../Action/Utility/SFXAction";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { LocalizationProperty } from "../../../../Gen/DB/Localization";
import { AngerPower } from "../../../../Power/AngerPower";
import { VulnerablePower } from "../../../../Power/VulnerablePower";
import { AbstractMonster } from "../../AbstractMonster";
import { Intent } from "../../Intent";

export class GremlinNob_ViewModel extends AbstractMonster{
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo(this,8));
            this.DamageInfo.push(new DamageInfo(this,16));
        }else{
            this.DamageInfo.push(new DamageInfo(this,6));
            this.DamageInfo.push(new DamageInfo(this,14));
        }
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("animation",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }

    GetMove(num: number) {
        if(DungeonManager.Inst.CurrentRoom.Round == 1){
            this.SetMove(3,Intent.BUFF)
        }
        if(DungeonManager.Inst.AdvanceLevel >= 18){
            if (!this.LastTwoMoves(2)) {
                this.SetMove(2, Intent.ATTACK_DEBUFF,{damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1")});
            }
            else if(!this.LastTwoMoves(1)){
                this.SetMove(2, Intent.ATTACK_DEBUFF,{damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1")});
            } else {
                this.SetMove(1, Intent.ATTACK,{damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "行动1")});
            }
        } else {
            if(num < 33 || this.LastTwoMoves(1)){
                this.SetMove(2, Intent.ATTACK_DEBUFF,{damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1")});
            } else {
                this.SetMove(1, Intent.ATTACK,{damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "行动1")});
            }
        }
        this.SetMove(2,Intent.ATTACK_DEBUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")})
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 3:{
                this.PlaySfx();
                this.AddToBot(new TalkAction(this.X - 150,this.Y - 50,LocalizationProperty.Read(this.Info.Name + "对话1"),true,1,3));
                if(DungeonManager.Inst.AdvanceLevel >= 18){
                    this.AddToBot(new ApplyPowerAction(this,this,new AngerPower(),3));
                    break;
                }
                this.AddToBot(new ApplyPowerAction(this,this,new AngerPower(),2));
                break;
            }
            case 2:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[1],AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new VulnerablePower(),2));
                break;
            }
            case 1:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY));
            }
        }
    }

    private PlaySfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,3));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_GREMLINNOB_1A"));
        } else if(roll == 1){
            this.AddToBot(new SFXAction("VO_GREMLINNOB_1B"));
        } else {
            this.AddToBot(new SFXAction("VO_GREMLINNOB_1C"));
        }
    }
}