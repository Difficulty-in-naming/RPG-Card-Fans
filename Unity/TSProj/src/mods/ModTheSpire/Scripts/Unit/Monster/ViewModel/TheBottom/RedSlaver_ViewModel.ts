import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import { AnimateSlowAttackAction } from "../../../../Action/Animations/AnimateSlowAttackAction";
import VFXAction from "../../../../Action/Animations/VFXAction";
import { ApplyPowerAction } from "../../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { DoFuncAction } from "../../../../Action/Common/DoFuncAction";
import { RollMoveAction } from "../../../../Action/Common/RollMoveAction";
import { SFXAction } from "../../../../Action/Utility/SFXAction";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { EntangleEffect } from "../../../../Effect/Combat/EntangleEffect";
import { LocalizationProperty } from "../../../../Gen/DB/Localization";
import { EntanglePower } from "../../../../Power/EntangleEffect";
import { VulnerablePower } from "../../../../Power/VulnerablePower";
import { AbstractMonster } from "../../AbstractMonster";
import { Intent } from "../../Intent";


export class BlueSlaver_ViewModel extends AbstractMonster{
    private UsedEntangle:boolean;
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel) {
            this.DamageInfo.push(new DamageInfo(this,14));//Stab
            this.DamageInfo.push(new DamageInfo(this,9));//Rake
        } else {
            this.DamageInfo.push(new DamageInfo(this,13));//Stab
            this.DamageInfo.push(new DamageInfo(this,8));//Rake
        }
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }

    GetMove(num: number) {
        if(DungeonManager.Inst.CurrentRoom.Round == 1){
            this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]})
        }
        if(num >= 75 && !this.UsedEntangle){
            this.SetMove(2,Intent.STRONG_DEBUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动2")});
            return;
        }
        if(num >= 55 && this.UsedEntangle && !this.LastTwoMoves(1)){
            this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]})
            return;
        }
        if(DungeonManager.Inst.AdvanceLevel >= 17){
            if(this.LastMove(3)){
                this.SetMove(3,Intent.ATTACK_DEBUFF,{damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1")});
                return;
            }else{
                this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]})
                return;
            }
        }
        if(!this.LastMove(3)){
            this.SetMove(3,Intent.ATTACK_DEBUFF,{damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1")});
            return;
        }
        this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]})
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 2:{
                this.PlaySfx();
                this.AddToBot(new DoFuncAction(this.UseNet))
                let myHitBox = this.GetHitBox();
                let playerHitBox = DungeonManager.Inst.Player.GetHitBox();
                this.AddToBot(new VFXAction(new EntangleEffect(myHitBox.X - 70,myHitBox.Height - 10,playerHitBox.Width,playerHitBox.Height),0.5))
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new EntanglePower()));
                this.UsedEntangle = true;
                break;
            }
            case 1:{
                this.PlaySfx();
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.SLASH_HORIZONTAL));
                break;
            }
            case 3:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[1],AttackEffect.SLASH_DIAGONAL));
                if(DungeonManager.Inst.AdvanceLevel >= 17) {
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new VulnerablePower(),2));
                }
                else{
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new VulnerablePower(),1));
                }
                break;
            }
        }
        this.AddToBot(new RollMoveAction(this));
    }

    private PlaySfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,2));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_SLAVERRED_1A"));
        } else {
            this.AddToBot(new SFXAction("VO_SLAVERRED_1B"));
        }
    }

    private PlayDeathSfx(){
        let roll = Mathf.Floor(Mathf.RandomRange(0,2));
        if(roll == 0){
            this.AddToBot(new SFXAction("VO_SLAVERRED_2A"));
        } else {
            this.AddToBot(new SFXAction("VO_SLAVERRED_2B"));
        }
    }
    
    private UseNet(){
        let obj = <Spine.Unity.SkeletonAnimation>this.DisplayObject.Self;
        let tmp = obj.state.GetCurrent(0).TrackTime;
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idleNoNet",true);
        trackEntry.TrackTime = tmp;
    }

    Die(){
        super.Die();
        this.PlayDeathSfx();
    }
}