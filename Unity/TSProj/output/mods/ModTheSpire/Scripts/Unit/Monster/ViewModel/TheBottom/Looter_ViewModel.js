"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Looter_ViewModel = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
const TalkAction_1 = require("../../../../Action/Animations/TalkAction");
const VFXAction_1 = require("../../../../Action/Animations/VFXAction");
const ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
const DamageAction_1 = require("../../../../Action/Common/DamageAction");
const EscapeAction_1 = require("../../../../Action/Common/EscapeAction");
const GainBlockAction_1 = require("../../../../Action/Common/GainBlockAction");
const SetMoveAction_1 = require("../../../../Action/Common/SetMoveAction");
const SFXAction_1 = require("../../../../Action/Utility/SFXAction");
const AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DungeonManager_1 = require("../../../../DungeonManager");
const SmokeBombEffect_1 = require("../../../../Effect/Combat/SmokeBombEffect");
const SpeechBubble_1 = require("../../../../Effect/Combat/SpeechBubble");
const Localization_1 = require("../../../../Gen/DB/Localization");
const ThieveryPower_1 = require("../../../../Power/ThieveryPower");
const AbstractMonster_1 = require("../../AbstractMonster");
const Intent_1 = require("../../Intent");
class Looter_ViewModel extends AbstractMonster_1.AbstractMonster {
    SlashCount = 0;
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 11));
            this.DamageInfo.push(new DamageInfo_1.default(this, 14));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 10));
            this.DamageInfo.push(new DamageInfo_1.default(this, 12));
        }
        let trackEntry = this.SetAnimation("idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    PreBattleAction(msg) {
        super.PreBattleAction(msg);
        this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new ThieveryPower_1.ThieveryPower(), 0));
    }
    GetMove(num) {
        this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 1: {
                if (this.SlashCount == 0 && Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.6) {
                    this.AddToBot(new TalkAction_1.TalkAction(this.X - 170, this.Y - 50, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话1")));
                }
                this.PlaySfx();
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new ThieveryPower_1.ThieveryPower(), 6));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.SLASH_DIAGONAL));
                ++this.SlashCount;
                if (this.SlashCount == 2) {
                    if (Mathf_1.Mathf.Random(DungeonManager_1.default.Inst.CurrentDungeon.AIRng) < 0.5) {
                        this.SetMove(2, Intent_1.Intent.DEFEND);
                        break;
                    }
                    this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 4, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") }));
                    break;
                }
                this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 4, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动2") }));
                break;
            }
            case 4: {
                this.PlaySfx();
                ++this.SlashCount;
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new ThieveryPower_1.ThieveryPower(), 6));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[1], AttackEffect_1.AttackEffect.SLASH_DIAGONAL));
                this.SetMove(2, Intent_1.Intent.DEFEND);
                break;
            }
            case 2: {
                this.AddToBot(new TalkAction_1.TalkAction(this.X - 170, this.Y - 50, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话3"), true, 0.75, 2.5));
                this.AddToBot(new GainBlockAction_1.default(this, 6));
                this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 3, Intent_1.Intent.ESCAPE));
            }
            case 3: {
                this.AddToBot(new TalkAction_1.TalkAction(this.X - 170, this.Y - 50, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话4"), true, 0.75, 2.5));
                this.AddToBot(new VFXAction_1.default(new SmokeBombEffect_1.SmokeBombEffect(this.X, this.Y)));
                this.AddToBot(new EscapeAction_1.EscapeAction(this));
                this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 3, Intent_1.Intent.ESCAPE));
            }
        }
    }
    PlaySfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 3));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_LOOTER_1A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_LOOTER_1B"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_LOOTER_1C"));
        }
    }
    PlayDeathSfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 3));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_LOOTER_2A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_LOOTER_2B"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_LOOTER_2C"));
        }
    }
    Die() {
        this.PlayDeathSfx();
        let obj = this.DisplayObject.Self;
        obj.state.TimeScale = 0.1;
        this.PlaySlowShake(5);
        if (Mathf_1.Mathf.Random() < 0.3) {
            DungeonManager_1.default.EffectManager.Play(new SpeechBubble_1.SpeechBubble(this.X - 170, this.Y - 50, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话2")));
        }
        super.Die();
    }
}
exports.Looter_ViewModel = Looter_ViewModel;
//# sourceMappingURL=Looter_ViewModel.js.map