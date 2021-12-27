import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import VFXAction from "../../../../Action/Animations/VFXAction";
import { ApplyPowerAction } from "../../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { DoFuncAction } from "../../../../Action/Common/DoFuncAction";
import { MakeTempCardInDiscardAction } from "../../../../Action/Common/MakeTempCardInDiscardAction";
import { RollMoveAction } from "../../../../Action/Common/RollMoveAction";
import { SFXAction } from "../../../../Action/Utility/SFXAction";
import { Dazed } from "../../../../Cards/Status/Dazed";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import Color from "../../../../DataDefine/Color";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import { DamageType } from "../../../../DataDefine/DamageType";
import DungeonManager from "../../../../DungeonManager";
import { BorderFlashEffect } from "../../../../Effect/Combat/BorderFlashEffect";
import { ShockWaveEffect, ShockWaveType } from "../../../../Effect/Combat/ShockWaveEffect";
import { SmallLaserEffect } from "../../../../Effect/Combat/SmallLaserEffect";
import { OnPreBattleMessage } from "../../../../Events/OnPreBattleMessage";
import { ArtifactPower } from "../../../../Power/ArtifactPower";
import { AbstractMonster } from "../../AbstractMonster";
import { Intent } from "../../Intent";

export class GremlinWizard_ViewMode extends AbstractMonster{
    private _dazedAmt = 0;
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 18){
            this._dazedAmt = 3;
        }
        if(DungeonManager.Inst.AdvanceLevel >= 3) {
            this.DamageInfo.push(new DamageInfo(this,10));
        }else{
            this._dazedAmt = 2;
            this.DamageInfo.push(new DamageInfo(this,9));
        }
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random();
        trackEntry.TimeScale = 2;
        let animation = <Spine.Unity.SkeletonAnimation>this.DisplayObject.Self;
        let data = animation.SkeletonDataAsset.GetAnimationStateData();
        data.SetMix("idle","attack",0.1);
        data.SetMix("idle","spaz1",0.1);
        data.SetMix("idle","hit",0.1);
    }

    PreBattleAction(msg: OnPreBattleMessage) {
        super.PreBattleAction(msg);
        this.AddToBot(new ApplyPowerAction(this,this,new ArtifactPower(),1));
    }

    GetMove(num: number) {
        let room = DungeonManager.Inst.CurrentRoom;
        if(room.Round == 1){
            if(room.Monsters.IndexOf(this) % 2){
                this.SetMove(3,Intent.DEBUFF);
            }
            else{
                this.SetMove(4,Intent.ATTACK,{damage:this.DamageInfo[0]});
            }
        }
        if(this.LastMove(4)){
            this.SetMove(3,Intent.DEBUFF);
        }else{
            this.SetMove(4,Intent.ATTACK,{damage:this.DamageInfo[0]});
        }
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 3:{
                this.AddToBot(new SFXAction("THUNDERCLAP"));
                let myHitBox = this.GetHitBox();
                this.AddToBot(new VFXAction(new ShockWaveEffect(myHitBox.CX,myHitBox.CY,Color.Royal,ShockWaveType.ADDITIVE),0.5));
                this.AddToBot(new DoFuncAction(()=>this.PlayFastShake(0.6),0.2));
                this.AddToBot(new MakeTempCardInDiscardAction(new Dazed(),this._dazedAmt));
                break;
            }
            case 4:{
                this.AddToBot(new DoFuncAction(this.Attack));
                this.AddToBot(new SFXAction("ATTACK_MAGIC_BEAM_SHORT",0.5));
                this.AddToBot(new VFXAction(new BorderFlashEffect(Color.Sky)))
                let playerHitBox = DungeonManager.Inst.Player.GetHitBox();
                let myHitBox = this.GetHitBox();
                this.AddToBot(new VFXAction(new SmallLaserEffect(playerHitBox.CX,playerHitBox.CY,myHitBox.CX,myHitBox.CY),0.3));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.NONE));
                break;
            }
        }
        this.AddToBot(new RollMoveAction(this));
    }

    private Attack(){
        this.SetAnimation("attack");
        this.AddAnimation("idle",true);
    }
    
    Damage(info: DamageInfo) {
        super.Damage(info);
        if(info.TotalDamage > 0 && info.DamageType != DamageType.THORNS){
            this.SetAnimation("hit");
            this.AddAnimation("idle",true);
        }
    }
}