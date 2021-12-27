"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueSlaver_ViewModel = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
var ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
var DamageAction_1 = require("../../../../Action/Common/DamageAction");
var RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
var SFXAction_1 = require("../../../../Action/Utility/SFXAction");
var AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
var DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
var DungeonManager_1 = require("../../../../DungeonManager");
var Localization_1 = require("../../../../Gen/DB/Localization");
var WeakPower_1 = require("../../../../Power/WeakPower");
var AbstractMonster_1 = require("../../AbstractMonster");
var Intent_1 = require("../../Intent");
class BlueSlaver_ViewModel extends AbstractMonster_1.AbstractMonster {
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 13)); //Stab
            this.DamageInfo.push(new DamageInfo_1.default(this, 8)); //Rake
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 12)); //Stab
            this.DamageInfo.push(new DamageInfo_1.default(this, 7)); //Rake
        }
        let trackEntry = this.SetAnimation("idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    GetMove(num) {
        if (num >= 40 && !this.LastTwoMoves(1)) {
            this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
            return;
        }
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 17) {
            if (this.LastMove(4)) {
                this.SetMove(4, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[1], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
            }
            else {
                this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
            }
        }
        else {
            if (!this.LastMove(4)) {
                this.SetMove(4, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[1], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
            }
            this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
        }
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 1: {
                this.PlaySfx();
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.SLASH_HORIZONTAL));
                break;
            }
            case 4: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[1], AttackEffect_1.AttackEffect.SLASH_DIAGONAL));
                if (DungeonManager_1.default.Inst.AdvanceLevel >= 17) {
                    this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new WeakPower_1.WeakPower(), 2));
                }
                else {
                    this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new WeakPower_1.WeakPower(), 1));
                }
                break;
            }
        }
        this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
    }
    PlaySfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 2));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_SLAVERBLUE_1A"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_SLAVERBLUE_1B"));
        }
    }
    PlayDeathSfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 2));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_SLAVERBLUE_2A"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_SLAVERBLUE_2B"));
        }
    }
    Die() {
        super.Die();
        this.PlayDeathSfx();
    }
}
exports.BlueSlaver_ViewModel = BlueSlaver_ViewModel;
//# sourceMappingURL=BlueSlaver_ViewModel.js.map