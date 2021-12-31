"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcidSlime_M_ViewModel = void 0;
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
const WeakPower_1 = require("../../../../Power/WeakPower");
const AbstractMonster_1 = require("../../AbstractMonster");
const SlimeAnimListener_1 = require("../../Helpers/SlimeAnimListener");
const Intent_1 = require("../../Intent");
class AcidSlime_M_ViewModel extends AbstractMonster_1.AbstractMonster {
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 8));
            this.DamageInfo.push(new DamageInfo_1.default(this, 12));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 7));
            this.DamageInfo.push(new DamageInfo_1.default(this, 10));
        }
        let trackEntry = this.SetAnimation("idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
        trackEntry.add_Event(SlimeAnimListener_1.SlimeAnimListener);
    }
    GetMove(num) {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 17) {
            if (num < 40) {
                if (this.LastTwoMoves(1)) {
                    if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.5) {
                        this.SetMove(2, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1] });
                    }
                    else {
                        this.SetMove(4, Intent_1.Intent.DEBUFF, { moveName: "舔舔" });
                    }
                }
                else {
                    this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { moveName: "腐蚀喷吐", damage: this.DamageInfo[1] });
                }
            }
            else if (num < 80) {
                if (this.LastTwoMoves(2)) {
                    if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.5) {
                        this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[0] });
                    }
                    else {
                        this.SetMove(4, Intent_1.Intent.DEBUFF, { moveName: "舔舔" });
                    }
                }
                else {
                    this.SetMove(2, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1] });
                }
            }
            else if (this.LastMove(4)) {
                if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.4) {
                    this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { moveName: "腐蚀喷吐", damage: this.DamageInfo[1] });
                }
                else {
                    this.SetMove(2, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1] });
                }
            }
            else {
                this.SetMove(4, Intent_1.Intent.DEBUFF, { moveName: "舔舔" });
            }
        }
        else if (num < 30) {
            if (this.LastTwoMoves(1)) {
                if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.5) {
                    this.SetMove(2, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1] });
                }
                else {
                    this.SetMove(4, Intent_1.Intent.DEBUFF, { moveName: "舔舔" });
                }
                this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { moveName: "腐蚀喷吐", damage: this.DamageInfo[1] });
            }
            else {
                this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { moveName: "腐蚀喷吐", damage: this.DamageInfo[1] });
            }
        }
        else if (num < 70) {
            if (this.LastTwoMoves(2)) {
                if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.5) {
                    this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[0] });
                }
                else {
                    this.SetMove(4, Intent_1.Intent.DEBUFF, { moveName: "舔舔" });
                }
                this.SetMove(2, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1] });
            }
            else {
                this.SetMove(2, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1] });
            }
        }
        else if (this.LastMove(4)) {
            if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.4) {
                this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { moveName: "腐蚀喷吐", damage: this.DamageInfo[1] });
            }
            else {
                this.SetMove(2, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1] });
            }
        }
        else {
            this.SetMove(4, Intent_1.Intent.DEBUFF, { moveName: "舔舔" });
        }
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 1: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new MakeTempCardInDiscardAction_1.MakeTempCardInDiscardAction(new Slimed_1.Slimed(), 2));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
            case 2: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
            case 4: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new WeakPower_1.WeakPower(), 2));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
        }
    }
}
exports.AcidSlime_M_ViewModel = AcidSlime_M_ViewModel;
//# sourceMappingURL=AcidSlime_M_ViewModel.js.map