"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueSlaver_ViewModel = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
var VFXAction_1 = require("../../../../Action/Animations/VFXAction");
var ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
var DamageAction_1 = require("../../../../Action/Common/DamageAction");
var DoFuncAction_1 = require("../../../../Action/Common/DoFuncAction");
var RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
var SFXAction_1 = require("../../../../Action/Utility/SFXAction");
var AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
var DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
var DungeonManager_1 = require("../../../../DungeonManager");
var EntangleEffect_1 = require("../../../../Effect/Combat/EntangleEffect");
var Localization_1 = require("../../../../Gen/DB/Localization");
var EntangleEffect_2 = require("../../../../Power/EntangleEffect");
var VulnerablePower_1 = require("../../../../Power/VulnerablePower");
var AbstractMonster_1 = require("../../AbstractMonster");
var Intent_1 = require("../../Intent");
class BlueSlaver_ViewModel extends AbstractMonster_1.AbstractMonster {
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 14)); //Stab
            this.DamageInfo.push(new DamageInfo_1.default(this, 9)); //Rake
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 13)); //Stab
            this.DamageInfo.push(new DamageInfo_1.default(this, 8)); //Rake
        }
        let trackEntry = this.SetAnimation("idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    GetMove(num) {
        if (DungeonManager_1.default.Inst.CurrentRoom.Round == 1) {
            this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
        }
        if (num >= 75 && !this.UsedEntangle) {
            this.SetMove(2, Intent_1.Intent.STRONG_DEBUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动2") });
            return;
        }
        if (num >= 55 && this.UsedEntangle && !this.LastTwoMoves(1)) {
            this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
            return;
        }
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 17) {
            if (this.LastMove(3)) {
                this.SetMove(3, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[1], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
                return;
            }
            else {
                this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
                return;
            }
        }
        if (!this.LastMove(3)) {
            this.SetMove(3, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[1], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
            return;
        }
        this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 2: {
                this.PlaySfx();
                this.AddToBot(new DoFuncAction_1.DoFuncAction(this.UseNet));
                let myHitBox = this.GetHitBox();
                let playerHitBox = DungeonManager_1.default.Inst.Player.GetHitBox();
                this.AddToBot(new VFXAction_1.default(new EntangleEffect_1.EntangleEffect(myHitBox.X - 70, myHitBox.Height - 10, playerHitBox.Width, playerHitBox.Height), 0.5));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new EntangleEffect_2.EntanglePower()));
                this.UsedEntangle = true;
                break;
            }
            case 1: {
                this.PlaySfx();
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.SLASH_HORIZONTAL));
                break;
            }
            case 3: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[1], AttackEffect_1.AttackEffect.SLASH_DIAGONAL));
                if (DungeonManager_1.default.Inst.AdvanceLevel >= 17) {
                    this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new VulnerablePower_1.VulnerablePower(), 2));
                }
                else {
                    this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new VulnerablePower_1.VulnerablePower(), 1));
                }
                break;
            }
        }
        this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
    }
    PlaySfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 2));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_SLAVERRED_1A"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_SLAVERRED_1B"));
        }
    }
    PlayDeathSfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 2));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_SLAVERRED_2A"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_SLAVERRED_2B"));
        }
    }
    UseNet() {
        let obj = this.DisplayObject.Self;
        let tmp = obj.state.GetCurrent(0).TrackTime;
        let trackEntry = this.SetAnimation("idleNoNet", true);
        trackEntry.TrackTime = tmp;
    }
    Die() {
        super.Die();
        this.PlayDeathSfx();
    }
}
exports.BlueSlaver_ViewModel = BlueSlaver_ViewModel;
//# sourceMappingURL=RedSlaver_ViewModel.js.map