import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Mathf} from "Core/Module/Math/Mathf";
import {Spine} from "csharp";
import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {OnPreBattleAction} from "mods/ModTheSpire/Scripts/Events/OnPreBattleAction";
import {SporeCloudPower} from "mods/ModTheSpire/Scripts/Power/SporeCloudPower";
import {DoFuncAction} from "mods/ModTheSpire/Scripts/Action/Common/DoFuncAction";
import {StrengthPower} from "mods/ModTheSpire/Scripts/Power/StrengthPower";
import {DamageType} from "mods/ModTheSpire/Scripts/DataDefine/DamageType";

export class Cultist_ViewModel extends AbstractMonster{
    private StrAmt;
    public constructor(monster:MonsterInfo) {
        super(monster);
    }
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2) {
            this.StrAmt = 5;
            this.DamageInfo.push(new DamageInfo(this,6));
        }else{
            this.StrAmt = 3;
            this.DamageInfo.push(new DamageInfo(this,6));
        }
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("Idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
        trackEntry.TimeScale = Mathf.RandomRange(0.7,1);
    }


    PreBattleAction(msg: OnPreBattleAction) {
        super.PreBattleAction(msg);
        this.AddToBot(new ApplyPowerAction(this,this,new SporeCloudPower(2)))
    }

    GetMove(num: number) {
        if(num <60){
            if(this.LastTwoMoves(1)){
                this.SetMove(2,Intent.BUFF,{moveName:})
            }
        }
        if(DungeonManager.Inst.CurrentRoom.Round == 1){
            this.SetMove(3,Intent.BUFF,{moveName:LocalizationProperty.Read("念咒")})
        }
        this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]});
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 1:{
                this.AddToBot(new DoFuncAction(()=>this.ChangeState("ATTACK"),0.5));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_LIGHT));
                break;
            }
            case 2:{
                this.AddToBot(new ApplyPowerAction(this,this,new StrengthPower(),this.StrAmt));
                break;
            }
        }
        this.AddToBot(new RollMoveAction(this));
    }
    
    private ChangeState(key:string){
        switch(key){
            case "ATTACK":{
                let animation = <Spine.Unity.SkeletonAnimation>this.DisplayObject.Self;
                animation.AnimationState.SetAnimation(0,"ATTACK",false);
                animation.AnimationState.AddAnimation(0,"Idle",true,0);
                break;
            }
        }
    }

    Damage(info: DamageInfo) {
        super.Damage(info);
        if(info.DamageType == DamageType.THORNS && info.TotalDamage > 0){
            let animation = <Spine.Unity.SkeletonAnimation>this.DisplayObject.Self;
            animation.AnimationState.SetAnimation(0,"Hit",false);
            animation.AnimationState.AddAnimation(0,"Idle",true,0);
        }
    }
}