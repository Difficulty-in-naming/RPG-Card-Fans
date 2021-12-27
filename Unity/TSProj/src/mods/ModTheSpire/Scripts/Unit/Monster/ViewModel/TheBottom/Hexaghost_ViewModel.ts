import { Spine } from "csharp";
import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DamageInfo from "../../../../DataDefine/DamageInfo";
import DungeonManager from "../../../../DungeonManager";
import { OnPreBattleMessage } from "../../../../Events/OnPreBattleMessage";
import { AbstractMonster } from "../../AbstractMonster";
import { HexaghostOrb } from "./HexaghostOrb";

export class Hexaghost_ViewModel extends AbstractMonster{
    private _StrAmount: number;
    private _SearBurnCount: number;
    private _FireTackleDmg: number;
    private _InfernoDmg: number;
    private _SearDmg: number;
    private _Orbs = new Array<HexaghostOrb>()
    
    GetMove(num: number) {
    }

    Initialize() {
        if(DungeonManager.Inst.AdvanceLevel >= 19) {
            this._StrAmount = 3;
            this._SearBurnCount = 2;
            this._FireTackleDmg = 6;
            this._InfernoDmg = 3;
        } else if(DungeonManager.Inst.AdvanceLevel >= 4) {
            this._StrAmount = 2;
            this._SearBurnCount = 1;
            this._FireTackleDmg = 6;
            this._InfernoDmg = 3;
        }else{
            this._StrAmount = 2;
            this._SearBurnCount = 1;
            this._FireTackleDmg = 6;
            this._InfernoDmg = 3;
        }
        this._SearDmg = 6;
        this.DamageInfo.push(new DamageInfo(this,this._FireTackleDmg));
        this.DamageInfo.push(new DamageInfo(this,this._SearDmg));
        this.DamageInfo.push(new DamageInfo(this,-1));
        this.DamageInfo.push(new DamageInfo(this,this._InfernoDmg));
        let trackEntry = <Spine.TrackEntry>this.SetAnimation("idle",true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf.Random()
    }

    PreBattleAction(msg: OnPreBattleMessage) {
    }
    
    private CreateOrbs(){
        this._Orbs.push(new HexaghostOrb(-90,380,this._Orbs.length));
    }

    TakeTurn() {
    }
    
}