"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinNob_ViewModel = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
const TalkAction_1 = require("../../../../Action/Animations/TalkAction");
const ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
const DamageAction_1 = require("../../../../Action/Common/DamageAction");
const SFXAction_1 = require("../../../../Action/Utility/SFXAction");
const AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DungeonManager_1 = require("../../../../DungeonManager");
const Localization_1 = require("../../../../Gen/DB/Localization");
const AngerPower_1 = require("../../../../Power/AngerPower");
const VulnerablePower_1 = require("../../../../Power/VulnerablePower");
const AbstractMonster_1 = require("../../AbstractMonster");
const Intent_1 = require("../../Intent");
class GremlinNob_ViewModel extends AbstractMonster_1.AbstractMonster {
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 8));
            this.DamageInfo.push(new DamageInfo_1.default(this, 16));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 6));
            this.DamageInfo.push(new DamageInfo_1.default(this, 14));
        }
        let trackEntry = this.SetAnimation("animation", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    GetMove(num) {
        if (DungeonManager_1.default.Inst.CurrentRoom.Round == 1) {
            this.SetMove(3, Intent_1.Intent.BUFF);
        }
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 18) {
            if (!this.LastTwoMoves(2)) {
                this.SetMove(2, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[1], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
            }
            else if (!this.LastTwoMoves(1)) {
                this.SetMove(2, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[1], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
            }
            else {
                this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
            }
        }
        else {
            if (num < 33 || this.LastTwoMoves(1)) {
                this.SetMove(2, Intent_1.Intent.ATTACK_DEBUFF, { damage: this.DamageInfo[1], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
            }
            else {
                this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
            }
        }
        this.SetMove(2, Intent_1.Intent.ATTACK_DEBUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 3: {
                this.PlaySfx();
                this.AddToBot(new TalkAction_1.TalkAction(this.X - 150, this.Y - 50, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话1"), true, 1, 3));
                if (DungeonManager_1.default.Inst.AdvanceLevel >= 18) {
                    this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new AngerPower_1.AngerPower(), 3));
                    break;
                }
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new AngerPower_1.AngerPower(), 2));
                break;
            }
            case 2: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[1], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new VulnerablePower_1.VulnerablePower(), 2));
                break;
            }
            case 1: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
            }
        }
    }
    PlaySfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 3));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINNOB_1A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINNOB_1B"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINNOB_1C"));
        }
    }
}
exports.GremlinNob_ViewModel = GremlinNob_ViewModel;
//# sourceMappingURL=GremlinNob_ViewModel.js.map