import {AbstractMonster} from "mods/ModTheSpire/Scripts/Unit/Monster/AbstractMonster";
import DamageInfo from "mods/ModTheSpire/Scripts/DataDefine/DamageInfo";
import {Mathf} from "Core/Module/Math/Mathf";
import {Spine} from "csharp";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import DamageAction from "mods/ModTheSpire/Scripts/Action/Common/DamageAction";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {Intent} from "mods/ModTheSpire/Scripts/Unit/Monster/Intent";
import {DamageType} from "mods/ModTheSpire/Scripts/DataDefine/DamageType";
import {SFXAction} from "mods/ModTheSpire/Scripts/Action/Utility/SFXAction";
import {AnimateSlowAttackAction} from "mods/ModTheSpire/Scripts/Action/Animations/AnimateSlowAttackAction";
import {WeakPower} from "mods/ModTheSpire/Scripts/Power/WeakPower";
import {SetMoveAction} from "mods/ModTheSpire/Scripts/Action/Common/SetMoveAction";
import {SpeechBubble} from "mods/ModTheSpire/Scripts/Effect/Combat/SpeechBubble";
import {EscapeAction} from "mods/ModTheSpire/Scripts/Action/Common/EscapeAction";
import GainBlockAction from "mods/ModTheSpire/Scripts/Action/Common/GainBlockAction";
import {MonsterGroup} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterGroup";
import {GainBlockRandomMonsterAction} from "mods/ModTheSpire/Scripts/Action/Common/GainBlockRandomMonsterAction";

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