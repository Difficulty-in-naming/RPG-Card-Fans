import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Mathf} from "Core/Module/Math/Mathf";
import {Spine} from "csharp";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import {OnPreBattleMessage} from "mods/ModTheSpire/Scripts/Events/OnPreBattleMessage";
import {ArtifactPower} from "mods/ModTheSpire/Scripts/Power/ArtifactPower";
import VFXAction from "mods/ModTheSpire/Scripts/Action/Animations/VFXAction";
import {ShockWaveEffect, ShockWaveType} from "mods/ModTheSpire/Scripts/Effect/Combat/ShockWaveEffect";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import {DoFuncAction} from "mods/ModTheSpire/Scripts/Action/Common/DoFuncAction";
import {MakeTempCardInDiscardAction} from "mods/ModTheSpire/Scripts/Action/Common/MakeTempCardInDiscardAction";
import {Dazed} from "mods/ModTheSpire/Scripts/Cards/Status/Dazed";
import {BorderFlashEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/BorderFlashEffect";
import {SmallLaserEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/SmallLaserEffect";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import {DamageType} from "mods/ModTheSpire/Scripts/DataDefine/DamageType";

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