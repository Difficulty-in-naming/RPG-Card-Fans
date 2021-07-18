import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Mathf} from "Core/Module/Math/Mathf";
import {Spine} from "csharp";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {RollMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/RollMoveAction";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import {SetAnimationAction} from "mods/ModTheSpire/Scripts/Action/Animations/SetAnimationAction";
import VFXAction from "mods/ModTheSpire/Scripts/Action/Animations/VFXAction";
import {BiteEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/BiteEffect";
import {ShakeDur, ShakeIntensity} from "mods/ModTheSpire/Scripts/Effect/ShakeScreen";
import {ShakeScreenAction} from "mods/ModTheSpire/Scripts/Action/Animations/ShakeScreenAction";
import {WaitAction} from "mods/ModTheSpire/Scripts/Action/Utility/WaitAction";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {StrengthPower} from "mods/ModTheSpire/Scripts/Power/StrengthPower";
import GainBlockAction from "mods/ModTheSpire/Scripts/Action/Common/GainBlockAction";
import {DoFuncAction} from "mods/ModTheSpire/Scripts/Action/Common/DoFuncAction";

export class GremlinFat_ViewModel extends AbstractMonster{
    private StrAmount:number;
    private BlockAmount:number;
    private BlockAmount2:number;
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 17) {
            this.StrAmount = 5;
            this.BlockAmount = 9;
            this.BlockAmount2 = 5;
        } else if(DungeonManager.Inst.AdvanceLevel >= 2) {
            this.StrAmount = 4;
            this.BlockAmount = 6;
            this.BlockAmount2 = 5;
            this.DamageInfo.push(new DamageInfo(this,12));
            this.DamageInfo.push(new DamageInfo(this,7));
            this.DamageInfo.push(new DamageInfo(this,5));
        }else{
            this.StrAmount = 3;
            this.BlockAmount = 6;
            this.BlockAmount2 = 5;
            this.DamageInfo.push(new DamageInfo(this,11));
            this.DamageInfo.push(new DamageInfo(this,7));
            this.DamageInfo.push(new DamageInfo(this,5));
        }
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }

    GetMove(num: number) {
        if(DungeonManager.Inst.CurrentRoom.Round == 1){
            this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]})
            return;
        }
        if(num < 25){
            if(this.LastMove(1)){
                if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.5625)
                    this.SetMove(2,Intent.DEFEND_BUFF);
                else
                    this.SetMove(3,Intent.ATTACK_DEFEND,{damage:this.DamageInfo[1]});                 
            } else {
                this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]})
            }
        } else if(num<55){
            if(this.LastTwoMoves(3)){
                if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.357)
                    this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]})
                else
                    this.SetMove(2,Intent.DEFEND_BUFF);
            } else {
                this.SetMove(3,Intent.ATTACK_DEFEND,{damage:this.DamageInfo[1]});
            }
        } else if(this.LastMove(2)){
            if(this.LastTwoMoves(3)){
                if(Mathf.Random(DungeonManager.Inst.CurrentDungeon.AIRng) < 0.357)
                    this.SetMove(1,Intent.ATTACK,{damage:this.DamageInfo[0]})
                else
                    this.SetMove(3,Intent.ATTACK_DEFEND,{damage:this.DamageInfo[1]});
            }
        }else {
            this.SetMove(2,Intent.DEFEND_BUFF);
        }
        
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 1:{
                this.AddToBot(new SetAnimationAction(this,"chomp"));
                this.AddToBot(new VFXAction(new BiteEffect(DungeonManager.Inst.Player.X,DungeonManager.Inst.Player.Y),0.3));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.NONE));
                break;
            }
            case 2:{
                this.AddToBot(new SetAnimationAction(this,"tailslam"));
                this.AddToBot(new SFXAction("MONSTER_JAW_WORM_BELLOW"));
                this.AddToBot(new ShakeScreenAction(0.2,ShakeIntensity.MED, ShakeDur.SHORT));
                this.AddToBot(new WaitAction(0.5));
                this.AddToBot(new ApplyPowerAction(this,this,new StrengthPower(),2));
                this.AddToBot(new GainBlockAction(this,this.BlockAmount));
                break;
            }
            case 3:{
                this.AddToBot(new DoFuncAction(()=>this.PlayHop(),0.25));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_LIGHT));
                this.AddToBot(new GainBlockAction(this,this.BlockAmount2));
                break;
            }
        }
        this.AddToBot(new RollMoveAction(this));
    }

    Die() {
        super.Die();
        this.AddToBot(new SFXAction("JAW_WORM_DEATH"));
    }
}