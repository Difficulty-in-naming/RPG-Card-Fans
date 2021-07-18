import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Mathf} from "Core/Module/Math/Mathf";
import {Spine} from "csharp";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {OnPreBattleMessage} from "mods/ModTheSpire/Scripts/Events/OnPreBattleMessage";
import {DamageType} from "mods/ModTheSpire/Scripts/DataDefine/DamageType";
import {CurlUpPower} from "mods/ModTheSpire/Scripts/Power/CurlUpPower";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {DoFuncAction} from "mods/ModTheSpire/Scripts/Action/Common/DoFuncAction";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import {StrengthPower} from "mods/ModTheSpire/Scripts/Power/StrengthPower";

export class LouseDefensive_ViewModel extends AbstractMonster{
    private IsOpen = true;
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 2)
            this.DamageInfo.push(new DamageInfo(this,Mathf.RandomRange(6,8,DungeonManager.Inst.CurrentDungeon.HPRng)));
        else
            this.DamageInfo.push(new DamageInfo(this,Mathf.RandomRange(5,7,DungeonManager.Inst.CurrentDungeon.HPRng)));
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }

    PreBattleAction(msg: OnPreBattleMessage) {
        super.PreBattleAction(msg);
        if(DungeonManager.Inst.AdvanceLevel >= 17) {
            this.AddToBot(new ApplyPowerAction(this, this, new CurlUpPower(), Mathf.RandomRange(9, 12, DungeonManager.Inst.CurrentDungeon.HPRng)))
        } else if(DungeonManager.Inst.AdvanceLevel >= 7){
            this.AddToBot(new ApplyPowerAction(this,this,new CurlUpPower(),Mathf.RandomRange(4,8,DungeonManager.Inst.CurrentDungeon.HPRng)))
        } else {
            this.AddToBot(new ApplyPowerAction(this,this,new CurlUpPower(),Mathf.RandomRange(3,7,DungeonManager.Inst.CurrentDungeon.HPRng)))
        }
    }

    GetMove(num: number) {
        if(num< 25){
            if(this.LastMove(4)){
                this.SetMove(3,Intent.ATTACK,{damage:this.DamageInfo[0]});
            } else {
                this.SetMove(4,Intent.BUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")})
            }
        } else if(this.LastTwoMoves(3)){
            this.SetMove(4,Intent.BUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")})
        } else {
            this.SetMove(3,Intent.ATTACK,{damage:this.DamageInfo[0]});
        }
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 3:{
                if(!this.IsOpen){
                    this.AddToBot(new DoFuncAction(this.Open,0.5));
                }
                this.AddToBot(new AnimateSlowAttackAction(this))
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_LIGHT));
                break;
            }
            case 4:{
                if(!this.IsOpen){
                    this.AddToBot(new DoFuncAction(this.Rear,1.2));
                    this.AddToBot(new SFXAction("ATTACK_MAGIC_FAST_3",Mathf.RandomRange(0.88,0.92),true));
                }
                else{
                    this.AddToBot(new DoFuncAction(this.RearIdle,0.9));
                    this.AddToBot(new SFXAction("ATTACK_MAGIC_FAST_3",Mathf.RandomRange(0.88,0.92),true));
                }
                this.AddToBot(new ApplyPowerAction(this,this,new StrengthPower(),DungeonManager.Inst.AdvanceLevel >= 17 ? 4 :3));
                break;
            }
        }
        this.AddToBot(new RollMoveAction(this));
    }

    Damage(msg: DamageInfo) {
        if (this.GetPower(CurlUpPower.Id) && msg.TotalDamage < this.Health && msg.TotalDamage > 0 && msg.DamageType == DamageType.NORMAL) {
            this.Close();
        }
    }

    private Close(){
        this.SetAnimation("transitiontoclosed");
        this.AddAnimation("idle closed",true);
        this.IsOpen = false;
    }

    private Open(){
        this.SetAnimation("transitiontoopened");
        this.AddAnimation("idle",true);
        this.IsOpen = true;
    }

    private RearIdle(){
        this.SetAnimation("rear");
        this.AddAnimation("idle",true);
        this.IsOpen = true;
    }

    private Rear(){
        this.SetAnimation("transitiontoopened");
        this.SetAnimation("rear");
        this.AddAnimation("idle",true);
        this.IsOpen = true;
    }
}