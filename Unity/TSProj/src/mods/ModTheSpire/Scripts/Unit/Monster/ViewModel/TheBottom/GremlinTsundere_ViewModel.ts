import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import { AnimateSlowAttackAction } from "../../../../Action/Animations/AnimateSlowAttackAction";
import DamageAction from "../../../../Action/Common/DamageAction";
import { EscapeAction } from "../../../../Action/Common/EscapeAction";
import { GainBlockRandomMonsterAction } from "../../../../Action/Common/GainBlockRandomMonsterAction";
import { SetMoveAction } from "../../../../Action/Common/SetMoveAction";
import { AttackEffect } from "../../../../DataDefine/AttackEffect";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { SpeechBubble } from "../../../../Effect/Combat/SpeechBubble";
import { LocalizationProperty } from "../../../../Gen/DB/Localization";
import { AbstractMonster } from "../../AbstractMonster";
import { Intent } from "../../Intent";

export class GremlinTsundere_ViewModel extends AbstractMonster{
    private _blockAmt:number;
    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 17){
            this._blockAmt = 11;
        }
        if(DungeonManager.Inst.AdvanceLevel >= 7) {
            this.DamageInfo.push(new DamageInfo(this,8));
            this._blockAmt = 8;
        }else{
            this.DamageInfo.push(new DamageInfo(this,6));
            this._blockAmt = 7;
        }
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }

    GetMove(num: number) {
        this.SetMove(2,Intent.ATTACK_DEBUFF,{moveName:LocalizationProperty.Read(this.Info.Name + "行动1")})
    }

    TakeTurn() {
        switch(this.MoveIndex){
            case 1:{
                this.AddToBot(new GainBlockRandomMonsterAction(this,this._blockAmt));
                let aliveCount = DungeonManager.Inst.CurrentRoom.Monsters.GetAliveMonstersCount();
                if(aliveCount > 1){
                    this.AddToBot(new SetMoveAction(this,1,Intent.DEFEND));
                }else{
                    this.AddToBot(new SetMoveAction(this,2,Intent.ATTACK,{damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "对话1")}));
                }
                break;
            }
            case 2:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_LIGHT));
                this.AddToBot(new SetMoveAction(this,2,Intent.ATTACK,{damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "对话1")}));
            }
            case 99:{
                DungeonManager.EffectManager.Play(new SpeechBubble(this.X - 100,this.Y + 50,LocalizationProperty.Read(this.Info.Name + "对话1"),2.5,true));
                this.AddToBot(new EscapeAction(this));
                this.AddToBot(new SetMoveAction(this,99,Intent.ESCAPE));
                break;
            }
        }
    }
}