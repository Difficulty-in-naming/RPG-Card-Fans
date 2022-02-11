"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hexaghost_ViewModel = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DungeonManager_1 = require("../../../../DungeonManager");
const AbstractMonster_1 = require("../../AbstractMonster");
const HexaghostOrb_1 = require("./HexaghostOrb");
class Hexaghost_ViewModel extends AbstractMonster_1.AbstractMonster {
    _StrAmount;
    _SearBurnCount;
    _FireTackleDmg;
    _InfernoDmg;
    _SearDmg;
    _Orbs = new Array();
    GetMove(num) {
    }
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 19) {
            this._StrAmount = 3;
            this._SearBurnCount = 2;
            this._FireTackleDmg = 6;
            this._InfernoDmg = 3;
        }
        else if (DungeonManager_1.default.Inst.AdvanceLevel >= 4) {
            this._StrAmount = 2;
            this._SearBurnCount = 1;
            this._FireTackleDmg = 6;
            this._InfernoDmg = 3;
        }
        else {
            this._StrAmount = 2;
            this._SearBurnCount = 1;
            this._FireTackleDmg = 6;
            this._InfernoDmg = 3;
        }
        this._SearDmg = 6;
        this.DamageInfo.push(new DamageInfo_1.default(this, this._FireTackleDmg));
        this.DamageInfo.push(new DamageInfo_1.default(this, this._SearDmg));
        this.DamageInfo.push(new DamageInfo_1.default(this, -1));
        this.DamageInfo.push(new DamageInfo_1.default(this, this._InfernoDmg));
        let trackEntry = this.SetAnimation("idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    PreBattleAction(msg) {
    }
    CreateOrbs() {
        this._Orbs.push(new HexaghostOrb_1.HexaghostOrb(-90, 380, this._Orbs.length));
    }
    TakeTurn() {
    }
}
exports.Hexaghost_ViewModel = Hexaghost_ViewModel;
//# sourceMappingURL=Hexaghost_ViewModel.js.map