"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinWizard_ViewMode = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const TalkAction_1 = require("../../../../Action/Animations/TalkAction");
const DamageAction_1 = require("../../../../Action/Common/DamageAction");
const EscapeAction_1 = require("../../../../Action/Common/EscapeAction");
const SetMoveAction_1 = require("../../../../Action/Common/SetMoveAction");
const SFXAction_1 = require("../../../../Action/Utility/SFXAction");
const TextAboveCreatureAction_1 = require("../../../../Action/Utility/TextAboveCreatureAction");
const AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DungeonManager_1 = require("../../../../DungeonManager");
const SpeechBubble_1 = require("../../../../Effect/Combat/SpeechBubble");
const Localization_1 = require("../../../../Gen/DB/Localization");
const AbstractMonster_1 = require("../../AbstractMonster");
const Intent_1 = require("../../Intent");
class GremlinWizard_ViewMode extends AbstractMonster_1.AbstractMonster {
    _currentCharge = 0;
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 30));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 25));
        }
        let trackEntry = this.SetAnimation("animation", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    GetMove(num) {
        this.SetMove(2, Intent_1.Intent.UNKNOWN, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 2: {
                this._currentCharge++;
                this.AddToBot(new TextAboveCreatureAction_1.TextAboveCreatureAction(this, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话1")));
                if (this._currentCharge == 3) {
                    this.PlaySfx();
                    this.AddToBot(new TalkAction_1.TalkAction(this.X - 150, this.Y - 100, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话2"), true, 1.5, 3));
                    this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动2") }));
                }
                this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 2, Intent_1.Intent.UNKNOWN, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") }));
                break;
            }
            case 1: {
                this._currentCharge = 0;
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.FIRE));
                if (DungeonManager_1.default.Inst.AdvanceLevel >= 17) {
                    this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动2") }));
                }
                else {
                    this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 2, Intent_1.Intent.UNKNOWN, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") }));
                }
                break;
            }
            case 99: {
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
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINDOPEY_1A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINDOPEY_1B"));
        }
    }
    PlayDeathSfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 3));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINDOPEY_2A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINDOPEY_2B"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_GREMLINDOPEY_2C"));
        }
    }
    Die() {
        super.Die();
        this.PlayDeathSfx();
    }
}
exports.GremlinWizard_ViewMode = GremlinWizard_ViewMode;
//# sourceMappingURL=GremlinWizard_ViewMode.js.map