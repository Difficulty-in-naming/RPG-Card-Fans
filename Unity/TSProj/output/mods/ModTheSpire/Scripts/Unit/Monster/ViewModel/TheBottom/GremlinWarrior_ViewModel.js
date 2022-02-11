"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinWarrior_ViewModel = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
const ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
const DamageAction_1 = require("../../../../Action/Common/DamageAction");
const EscapeAction_1 = require("../../../../Action/Common/EscapeAction");
const SetMoveAction_1 = require("../../../../Action/Common/SetMoveAction");
const SFXAction_1 = require("../../../../Action/Utility/SFXAction");
const AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DungeonManager_1 = require("../../../../DungeonManager");
const SpeechBubble_1 = require("../../../../Effect/Combat/SpeechBubble");
const Localization_1 = require("../../../../Gen/DB/Localization");
const AngerPower_1 = require("../../../../Power/AngerPower");
const AbstractMonster_1 = require("../../AbstractMonster");
const Intent_1 = require("../../Intent");
class GremlinWarrior_ViewModel extends AbstractMonster_1.AbstractMonster {
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 5));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 4));
        }
        let trackEntry = this.SetAnimation("animation", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    PreBattleAction(msg) {
        super.PreBattleAction(msg);
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 17)
            this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new AngerPower_1.AngerPower(), 2));
        else
            this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new AngerPower_1.AngerPower(), 1));
    }
    GetMove(num) {
        this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 3: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[1], AttackEffect_1.AttackEffect.SLASH_DIAGONAL));
                this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] }));
                break;
            }
            case 99: {
                this.PlaySfx();
                DungeonManager_1.default.EffectManager.Play(new SpeechBubble_1.SpeechBubble(this.X - 100, this.Y + 50, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话1"), 2.5, true));
                this.AddToBot(new EscapeAction_1.EscapeAction(this));
                this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 99, Intent_1.Intent.ESCAPE));
                break;
            }
        }
    }
    PlaySfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 3));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINANGRY_1A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINANGRY_1B"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINANGRY_1C"));
        }
    }
    PlayDeathSfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 2));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINANGRY_2A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINANGRY_2B"));
        }
    }
    Die() {
        super.Die();
        this.PlayDeathSfx();
    }
}
exports.GremlinWarrior_ViewModel = GremlinWarrior_ViewModel;
//# sourceMappingURL=GremlinWarrior_ViewModel.js.map