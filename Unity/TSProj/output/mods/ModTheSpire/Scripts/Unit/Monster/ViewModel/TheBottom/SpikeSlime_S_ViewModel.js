"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpikeSlime_S_ViewModel = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
var DamageAction_1 = require("../../../../Action/Common/DamageAction");
var RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
var AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
var DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
var DungeonManager_1 = require("../../../../DungeonManager");
var AbstractMonster_1 = require("../../AbstractMonster");
var SlimeAnimListener_1 = require("../../Helpers/SlimeAnimListener");
var Intent_1 = require("../../Intent");
class SpikeSlime_S_ViewModel extends AbstractMonster_1.AbstractMonster {
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 6));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 5));
        }
        let trackEntry = this.SetAnimation("idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
        trackEntry.add_Event(SlimeAnimListener_1.SlimeAnimListener);
    }
    GetMove(num) {
        this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 1: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
        }
    }
}
exports.SpikeSlime_S_ViewModel = SpikeSlime_S_ViewModel;
//# sourceMappingURL=SpikeSlime_S_ViewModel.js.map