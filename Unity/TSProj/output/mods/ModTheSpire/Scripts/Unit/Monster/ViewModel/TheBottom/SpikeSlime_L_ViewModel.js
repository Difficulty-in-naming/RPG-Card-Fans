"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpikeSlime_L_ViewModel = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
const ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
const DamageAction_1 = require("../../../../Action/Common/DamageAction");
const MakeTempCardInDiscardAction_1 = require("../../../../Action/Common/MakeTempCardInDiscardAction");
const RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
const SpawnMonsterAction_1 = require("../../../../Action/Common/SpawnMonsterAction");
const SuicideAction_1 = require("../../../../Action/Common/SuicideAction");
const HideHealthBarAction_1 = require("../../../../Action/Utility/HideHealthBarAction");
const SFXAction_1 = require("../../../../Action/Utility/SFXAction");
const TextAboveCreatureAction_1 = require("../../../../Action/Utility/TextAboveCreatureAction");
const WaitAction_1 = require("../../../../Action/Utility/WaitAction");
const Slimed_1 = require("../../../../Cards/Status/Slimed");
const AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DungeonManager_1 = require("../../../../DungeonManager");
const FrailPower_1 = require("../../../../Power/FrailPower");
const AbstractMonster_1 = require("../../AbstractMonster");
const SlimeAnimListener_1 = require("../../Helpers/SlimeAnimListener");
const Intent_1 = require("../../Intent");
const AcidSlime_M_Model_1 = require("../../Model/TheBottom/AcidSlime_M_Model");
const AcidSlime_M_ViewModel_1 = require("./AcidSlime_M_ViewModel");
class SpikeSlime_L_ViewModel extends AbstractMonster_1.AbstractMonster {
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 18));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 16));
        }
        let trackEntry = this.SetAnimation("Idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
        trackEntry.add_Event(SlimeAnimListener_1.SlimeAnimListener);
    }
    Damage(info) {
        if (!this.IsDying && this.Health <= this.MaxHealth / 2 && this.MoveIndex != 3) {
            this.SetMove(3, Intent_1.Intent.UNKNOWN, { moveName: "分裂" });
            this.AddToBot(new TextAboveCreatureAction_1.TextAboveCreatureAction(this, TextAboveCreatureAction_1.TextType.INTERRUPTED));
        }
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
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new FrailPower_1.FrailPower(), DungeonManager_1.default.Inst.AdvanceLevel >= 17 ? 3 : 2));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
            case 1: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new MakeTempCardInDiscardAction_1.MakeTempCardInDiscardAction(new Slimed_1.Slimed(), 2));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
            case 3: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new HideHealthBarAction_1.HideHealthBarAction());
                this.AddToBot(new SuicideAction_1.SuicideAction(this, false));
                this.AddToBot(new WaitAction_1.WaitAction(1000));
                this.AddToBot(new SFXAction_1.SFXAction("SLIME_SPLIT"));
                this.AddToBot(new SpawnMonsterAction_1.SpawnMonsterAction(new AcidSlime_M_ViewModel_1.AcidSlime_M_ViewModel(new AcidSlime_M_Model_1.AcidSlime_M_Model(this.X - 134, this.Y + Mathf_1.Mathf.RandomRange(-4, 4))), false));
                this.AddToBot(new SpawnMonsterAction_1.SpawnMonsterAction(new AcidSlime_M_ViewModel_1.AcidSlime_M_ViewModel(new AcidSlime_M_Model_1.AcidSlime_M_Model(this.X + 134, this.Y + Mathf_1.Mathf.RandomRange(-4, 4))), false));
                this.SetMove(3, Intent_1.Intent.UNKNOWN, { moveName: "分裂" });
            }
        }
    }
}
exports.SpikeSlime_L_ViewModel = SpikeSlime_L_ViewModel;
//# sourceMappingURL=SpikeSlime_L_ViewModel.js.map