"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpikeSlime_M_ViewModel = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
const ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
const DamageAction_1 = require("../../../../Action/Common/DamageAction");
const MakeTempCardInDiscardAction_1 = require("../../../../Action/Common/MakeTempCardInDiscardAction");
const RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
const Slimed_1 = require("../../../../Cards/Status/Slimed");
const AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DungeonManager_1 = require("../../../../DungeonManager");
const FrailPower_1 = require("../../../../Power/FrailPower");
const AbstractMonster_1 = require("../../AbstractMonster");
const SlimeAnimListener_1 = require("../../Helpers/SlimeAnimListener");
const Intent_1 = require("../../Intent");
class SpikeSlime_M_ViewModel extends AbstractMonster_1.AbstractMonster {
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 10));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 8));
        }
        let trackEntry = this.SetAnimation("idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
        trackEntry.add_Event(SlimeAnimListener_1.SlimeAnimListener);
    }
    GetMove(num) {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 17) {
            if (num < 30) {
                if (this.LastTwoMoves(1)) {
                    this.SetMove(4, Intent_1.Intent.DEBUFF, { moveName: "舔舔" });
                }
                else {
                    this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[0] });
                }
            }
            else if (this.LastMove(4)) {
                this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[0] });
            }
            else {
                this.SetMove(4, Intent_1.Intent.DEBUFF, { moveName: "舔舔" });
            }
        }
        else if (num < 30) {
            if (this.LastTwoMoves(1)) {
                this.SetMove(4, Intent_1.Intent.DEBUFF, { moveName: "舔舔" });
            }
            else {
                this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[0] });
            }
        }
        if (this.LastTwoMoves(4)) {
            this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[0] });
        }
        else {
            this.SetMove(4, Intent_1.Intent.DEBUFF, { moveName: "舔舔" });
        }
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 4: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new FrailPower_1.FrailPower(), 1));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
            case 1: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new MakeTempCardInDiscardAction_1.MakeTempCardInDiscardAction(new Slimed_1.Slimed(), 1));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
        }
    }
}
exports.SpikeSlime_M_ViewModel = SpikeSlime_M_ViewModel;
//# sourceMappingURL=SpikeSlime_M_ViewModel.js.map