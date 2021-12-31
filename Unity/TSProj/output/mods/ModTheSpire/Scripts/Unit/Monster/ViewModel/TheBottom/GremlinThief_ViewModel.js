"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinThief_ViewModel = void 0;
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
const WeakPower_1 = require("../../../../Power/WeakPower");
const AbstractMonster_1 = require("../../AbstractMonster");
const Intent_1 = require("../../Intent");
class GremlinThief_ViewModel extends AbstractMonster_1.AbstractMonster {
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 10));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 9));
        }
        let trackEntry = this.SetAnimation("animation", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    GetMove(num) {
        this.SetMove(2, Intent_1.Intent.ATTACK_DEBUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 2: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_LIGHT));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new WeakPower_1.WeakPower(), 1));
                this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 99, Intent_1.Intent.ESCAPE));
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
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 2));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINSPAZZY_1A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINSPAZZY_1B"));
        }
    }
    PlayDeathSfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 3));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINSPAZZY_2A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINSPAZZY_2B"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINSPAZZY_2C"));
        }
    }
    Die() {
        super.Die();
        this.PlayDeathSfx();
    }
}
exports.GremlinThief_ViewModel = GremlinThief_ViewModel;
//# sourceMappingURL=GremlinThief_ViewModel.js.map