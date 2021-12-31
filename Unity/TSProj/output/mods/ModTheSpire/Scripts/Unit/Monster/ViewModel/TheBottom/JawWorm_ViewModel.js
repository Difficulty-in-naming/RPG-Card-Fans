"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinFat_ViewModel = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const SetAnimationAction_1 = require("../../../../Action/Animations/SetAnimationAction");
const ShakeScreenAction_1 = require("../../../../Action/Animations/ShakeScreenAction");
const VFXAction_1 = require("../../../../Action/Animations/VFXAction");
const ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
const DamageAction_1 = require("../../../../Action/Common/DamageAction");
const DoFuncAction_1 = require("../../../../Action/Common/DoFuncAction");
const GainBlockAction_1 = require("../../../../Action/Common/GainBlockAction");
const RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
const SFXAction_1 = require("../../../../Action/Utility/SFXAction");
const WaitAction_1 = require("../../../../Action/Utility/WaitAction");
const AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DungeonManager_1 = require("../../../../DungeonManager");
const BiteEffect_1 = require("../../../../Effect/Combat/BiteEffect");
const ShakeScreen_1 = require("../../../../Effect/ShakeScreen");
const StrengthPower_1 = require("../../../../Power/StrengthPower");
const AbstractMonster_1 = require("../../AbstractMonster");
const Intent_1 = require("../../Intent");
class GremlinFat_ViewModel extends AbstractMonster_1.AbstractMonster {
    StrAmount;
    BlockAmount;
    BlockAmount2;
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 17) {
            this.StrAmount = 5;
            this.BlockAmount = 9;
            this.BlockAmount2 = 5;
        }
        else if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.StrAmount = 4;
            this.BlockAmount = 6;
            this.BlockAmount2 = 5;
            this.DamageInfo.push(new DamageInfo_1.default(this, 12));
            this.DamageInfo.push(new DamageInfo_1.default(this, 7));
            this.DamageInfo.push(new DamageInfo_1.default(this, 5));
        }
        else {
            this.StrAmount = 3;
            this.BlockAmount = 6;
            this.BlockAmount2 = 5;
            this.DamageInfo.push(new DamageInfo_1.default(this, 11));
            this.DamageInfo.push(new DamageInfo_1.default(this, 7));
            this.DamageInfo.push(new DamageInfo_1.default(this, 5));
        }
        let trackEntry = this.SetAnimation("idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    GetMove(num) {
        if (DungeonManager_1.default.Inst.CurrentRoom.Round == 1) {
            this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
            return;
        }
        if (num < 25) {
            if (this.LastMove(1)) {
                if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.5625)
                    this.SetMove(2, Intent_1.Intent.DEFEND_BUFF);
                else
                    this.SetMove(3, Intent_1.Intent.ATTACK_DEFEND, { damage: this.DamageInfo[1] });
            }
            else {
                this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
            }
        }
        else if (num < 55) {
            if (this.LastTwoMoves(3)) {
                if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.357)
                    this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
                else
                    this.SetMove(2, Intent_1.Intent.DEFEND_BUFF);
            }
            else {
                this.SetMove(3, Intent_1.Intent.ATTACK_DEFEND, { damage: this.DamageInfo[1] });
            }
        }
        else if (this.LastMove(2)) {
            if (this.LastTwoMoves(3)) {
                if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.357)
                    this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
                else
                    this.SetMove(3, Intent_1.Intent.ATTACK_DEFEND, { damage: this.DamageInfo[1] });
            }
        }
        else {
            this.SetMove(2, Intent_1.Intent.DEFEND_BUFF);
        }
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 1: {
                this.AddToBot(new SetAnimationAction_1.SetAnimationAction(this, "chomp"));
                this.AddToBot(new VFXAction_1.default(new BiteEffect_1.BiteEffect(DungeonManager_1.default.Inst.Player.X, DungeonManager_1.default.Inst.Player.Y), 0.3));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.NONE));
                break;
            }
            case 2: {
                this.AddToBot(new SetAnimationAction_1.SetAnimationAction(this, "tailslam"));
                this.AddToBot(new SFXAction_1.SFXAction("MONSTER_JAW_WORM_BELLOW"));
                this.AddToBot(new ShakeScreenAction_1.ShakeScreenAction(0.2, ShakeScreen_1.ShakeIntensity.MED, ShakeScreen_1.ShakeDur.SHORT));
                this.AddToBot(new WaitAction_1.WaitAction(0.5));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new StrengthPower_1.StrengthPower(), 2));
                this.AddToBot(new GainBlockAction_1.default(this, this.BlockAmount));
                break;
            }
            case 3: {
                this.AddToBot(new DoFuncAction_1.DoFuncAction(() => this.PlayHop(), 0.25));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_LIGHT));
                this.AddToBot(new GainBlockAction_1.default(this, this.BlockAmount2));
                break;
            }
        }
        this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
    }
    Die() {
        super.Die();
        this.AddToBot(new SFXAction_1.SFXAction("JAW_WORM_DEATH"));
    }
}
exports.GremlinFat_ViewModel = GremlinFat_ViewModel;
//# sourceMappingURL=JawWorm_ViewModel.js.map