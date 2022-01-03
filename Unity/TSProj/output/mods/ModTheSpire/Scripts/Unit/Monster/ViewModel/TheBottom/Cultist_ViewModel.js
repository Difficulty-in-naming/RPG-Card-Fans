"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cultist_ViewModel = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
var TalkAction_1 = require("../../../../Action/Animations/TalkAction");
var ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
var DamageAction_1 = require("../../../../Action/Common/DamageAction");
var RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
var SFXAction_1 = require("../../../../Action/Utility/SFXAction");
var AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
var DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
var DungeonManager_1 = require("../../../../DungeonManager");
var SpeechBubble_1 = require("../../../../Effect/Combat/SpeechBubble");
var Localization_1 = require("../../../../Gen/DB/Localization");
var RitualPower_1 = require("../../../../Power/RitualPower");
var AbstractMonster_1 = require("../../AbstractMonster");
var Intent_1 = require("../../Intent");
class Cultist_ViewModel extends AbstractMonster_1.AbstractMonster {
    constructor(monster, talk) {
        super(monster);
        this.talk = talk;
        this.SaidPower = false;
    }
    Initialize() {
        this.DamageInfo.push(new DamageInfo_1.default(this, 6));
        let trackEntry = this.SetAnimation("waving", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    GetMove(num) {
        if (DungeonManager_1.default.Inst.CurrentRoom.Round == 1) {
            this.SetMove(3, Intent_1.Intent.BUFF, { moveName: Localization_1.LocalizationProperty.Read("念咒") });
        }
        this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 3: {
                let temp = Mathf_1.Mathf.RandomRange(1, 10);
                if (this.talk) {
                    this.PlaySfx();
                    if (temp < 4) {
                        this.AddToBot(new TalkAction_1.TalkAction(this.X - 170, this.Y + 50, Localization_1.LocalizationProperty.Read("异教徒-对话1"), true, 1));
                    }
                    else if (temp < 7) {
                        this.AddToBot(new TalkAction_1.TalkAction(this.X - 170, this.Y + 50, Localization_1.LocalizationProperty.Read("异教徒-对话2"), true, 1));
                    }
                }
                if (DungeonManager_1.default.Inst.AdvanceLevel >= 17) {
                    this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new RitualPower_1.RitualPower(true), 2));
                }
                else {
                    this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new RitualPower_1.RitualPower(true), 1));
                }
                break;
            }
            case 1: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.SLASH_HORIZONTAL));
            }
        }
        this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
    }
    PlaySfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 3));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_CULTIST_1A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_CULTIST_1B"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_CULTIST_1C"));
        }
    }
    PlayDeathSfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 3));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_CULTIST_2A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_CULTIST_2B"));
        }
        else {
            this.AddToBot(new SFXAction_1.SFXAction("VO_CULTIST_2C"));
        }
    }
    Die() {
        this.PlayDeathSfx();
        this.PlaySlowShake(5);
        if (this.talk && this.SaidPower) {
            DungeonManager_1.default.EffectManager.Play(new SpeechBubble_1.SpeechBubble(this.X - 170, this.Y + 50, Localization_1.LocalizationProperty.Read("异教徒-对话3"), 2.5, true));
            this.DeathTime += 1.5;
        }
        super.Die();
    }
}
exports.Cultist_ViewModel = Cultist_ViewModel;
//# sourceMappingURL=Cultist_ViewModel.js.map