"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcidSlime_L_ViewModel = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
var ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
var DamageAction_1 = require("../../../../Action/Common/DamageAction");
var MakeTempCardInDiscardAction_1 = require("../../../../Action/Common/MakeTempCardInDiscardAction");
var RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
var SpawnMonsterAction_1 = require("../../../../Action/Common/SpawnMonsterAction");
var SuicideAction_1 = require("../../../../Action/Common/SuicideAction");
var HideHealthBarAction_1 = require("../../../../Action/Utility/HideHealthBarAction");
var SFXAction_1 = require("../../../../Action/Utility/SFXAction");
var TextAboveCreatureAction_1 = require("../../../../Action/Utility/TextAboveCreatureAction");
var WaitAction_1 = require("../../../../Action/Utility/WaitAction");
var Slimed_1 = require("../../../../Cards/Status/Slimed");
var AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
var DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
var DungeonManager_1 = require("../../../../DungeonManager");
var WeakPower_1 = require("../../../../Power/WeakPower");
var AbstractMonster_1 = require("../../AbstractMonster");
var SlimeAnimListener_1 = require("../../Helpers/SlimeAnimListener");
var Intent_1 = require("../../Intent");
var AcidSlime_M_Model_1 = require("../../Model/TheBottom/AcidSlime_M_Model");
var AcidSlime_M_ViewModel_1 = require("./AcidSlime_M_ViewModel");
class AcidSlime_L_ViewModel extends AbstractMonster_1.AbstractMonster {
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 12));
            this.DamageInfo.push(new DamageInfo_1.default(this, 18));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 11));
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
            if (num < 40) {
                if (this.LastTwoMoves(1)) {
                    if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.6) {
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
            else if (num < 70) {
                if (this.LastTwoMoves(2)) {
                    if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.6) {
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
            }
            else {
                this.SetMove(1, Intent_1.Intent.ATTACK_DEBUFF, { moveName: "腐蚀喷吐", damage: this.DamageInfo[1] });
            }
        }
        else if (num < 70) {
            if (this.LastTwoMoves(2)) {
                if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.4) {
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
    TakeTurn() {
        switch (this.MoveIndex) {
            case 1: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new WeakPower_1.WeakPower(), 2));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
            case 2: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new SFXAction_1.SFXAction("MONSTER_SLIME_ATTACK"));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new WeakPower_1.WeakPower(), 2));
                this.AddToBot(new MakeTempCardInDiscardAction_1.MakeTempCardInDiscardAction(new Slimed_1.Slimed(), 2));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
            case 3: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
            case 4: {
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
exports.AcidSlime_L_ViewModel = AcidSlime_L_ViewModel;
//# sourceMappingURL=AcidSlime_L_ViewModel.js.map