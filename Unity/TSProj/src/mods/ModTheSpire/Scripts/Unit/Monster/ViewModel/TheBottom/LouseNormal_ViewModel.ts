import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import { AnimateSlowAttackAction } from "../../../../Action/Animations/AnimateSlowAttackAction";
import { ApplyPowerAction } from "../../../../Action/Common/ApplyPowerAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { DoFuncAction } from "../../../../Action/Common/DoFuncAction";
import { RollMoveAction } from "../../../../Action/Common/RollMoveAction";
import { SFXAction } from "../../../../Action/Utility/SFXAction";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import { DamageType } from "../../../../DataDefine/DamageType";
import DungeonManager from "../../../../DungeonManager";
import { OnPreBattleMessage } from "../../../../Events/OnPreBattleMessage";
import { LocalizationProperty } from "../../../../Gen/DB/Localization";
import { CurlUpPower } from "../../../../Power/CurlUpPower";
import { StrengthPower } from "../../../../Power/StrengthPower";
import { AbstractMonster } from "../../AbstractMonster";
import { Intent } from "../../Intent";

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