"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheGuardian_ViewModel = void 0;
const AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
const TalkAction_1 = require("../../../../Action/Animations/TalkAction");
const VFXAction_1 = require("../../../../Action/Animations/VFXAction");
const ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
const DamageAction_1 = require("../../../../Action/Common/DamageAction");
const DoFuncAction_1 = require("../../../../Action/Common/DoFuncAction");
const GainBlockAction_1 = require("../../../../Action/Common/GainBlockAction");
const RemoveSpecificPowerAction_1 = require("../../../../Action/Common/RemoveSpecificPowerAction");
const LoseBlockAction_1 = require("../../../../Action/Utility/LoseBlockAction");
const SFXAction_1 = require("../../../../Action/Utility/SFXAction");
const TextAboveCreatureAction_1 = require("../../../../Action/Utility/TextAboveCreatureAction");
const SoundMaster_1 = require("../../../../Audio/SoundMaster");
const AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DungeonManager_1 = require("../../../../DungeonManager");
const CleaveEffect_1 = require("../../../../Effect/Combat/CleaveEffect");
const IntenseZoomEffect_1 = require("../../../../Effect/Combat/IntenseZoomEffect");
const Localization_1 = require("../../../../Gen/DB/Localization");
const ModeShiftPower_1 = require("../../../../Power/ModeShiftPower");
const SharpHidePower_1 = require("../../../../Power/SharpHidePower");
const VulnerablePower_1 = require("../../../../Power/VulnerablePower");
const WeakPower_1 = require("../../../../Power/WeakPower");
const AbstractMonster_1 = require("../../AbstractMonster");
const Intent_1 = require("../../Intent");
class TheGuardian_ViewModel extends AbstractMonster_1.AbstractMonster {
    _DmgThreshold;
    _DmgThresholdIncrease = 10;
    _DefensiveAmount = 20;
    _AnimationState;
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 19) {
            this._DmgThreshold = 40;
        }
        else if (DungeonManager_1.default.Inst.AdvanceLevel >= 9) {
            this._DmgThreshold = 35;
        }
        else {
            this._DmgThreshold = 30;
        }
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 4) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 36));
            this.DamageInfo.push(new DamageInfo_1.default(this, 10));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 32));
            this.DamageInfo.push(new DamageInfo_1.default(this, 9));
        }
        this.DamageInfo.push(new DamageInfo_1.default(this, 4));
        this.DamageInfo.push(new DamageInfo_1.default(this, 8));
        this.SetAnimation("idle", true);
        let animation = this.DisplayObject.Self;
        this._AnimationState = animation.AnimationState;
        let data = animation.skeletonDataAsset.GetAnimationStateData();
        data.SetMix("idle", "transition", 0.1);
        data.SetMix("defensive", "idle", 0.2);
    }
    PreBattleAction(msg) {
        this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new ModeShiftPower_1.ModeShiftPower(this.ShiftFunc), this._DmgThreshold));
    }
    DefensiveMode() {
        SoundMaster_1.SoundMaster.PlayVoice("GUARDIAN_ROLL_UP");
        this.AddToBot(new GainBlockAction_1.default(this, this._DefensiveAmount));
        this._AnimationState.TimeScale = 2;
        this.SetAnimation("transition");
        this.AddAnimation("defensive", true);
        this._DmgThreshold += this._DmgThresholdIncrease;
        this.SetMove(1, Intent_1.Intent.BUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
        this.SetHitBox(0, 95, 440, 250);
    }
    OffensiveMode() {
        this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new ModeShiftPower_1.ModeShiftPower(this.ShiftFunc), this._DmgThreshold));
        if (this.Block != 0)
            this.AddToBot(new LoseBlockAction_1.default(this, this.Block));
        this._AnimationState.TimeScale = 1;
        this.SetHitBox(0, 95, 440, 350);
    }
    GetMove(num) {
        this.SetMove(3, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1] });
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 1: {
                this.AddToBot(new TextAboveCreatureAction_1.TextAboveCreatureAction(this, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话2")));
                if (DungeonManager_1.default.Inst.AdvanceLevel >= 19) {
                    this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new SharpHidePower_1.SharpHidePower(), 4));
                }
                else {
                    this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new SharpHidePower_1.SharpHidePower(), 3));
                }
                this.SetMove(3, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1] });
                break;
            }
            case 2: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                this.SetMove(7, Intent_1.Intent.STRONG_DEBUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动7") });
                break;
            }
            case 7: {
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new WeakPower_1.WeakPower(), 2));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new VulnerablePower_1.VulnerablePower(), 2));
                this.SetMove(5, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[2], multiplier: 4, moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动5") });
                break;
            }
            case 3: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[1], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                this.SetMove(4, Intent_1.Intent.ATTACK_BUFF, { damage: this.DamageInfo[3], multiplier: 2, moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动4") });
                break;
            }
            case 4: {
                this.AddToBot(new DoFuncAction_1.DoFuncAction(this.OffensiveMode));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[3], AttackEffect_1.AttackEffect.SLASH_HEAVY));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[3], AttackEffect_1.AttackEffect.SLASH_HEAVY));
                this.AddToBot(new RemoveSpecificPowerAction_1.RemoveSpecificPowerAction(this, this, SharpHidePower_1.SharpHidePower.Id));
                this.SetMove(5, Intent_1.Intent.ATTACK, { damage: new DamageInfo_1.default(this, 5), multiplier: 4, moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动5") });
                break;
            }
            case 5: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new SFXAction_1.SFXAction("ATTACK_WHIRLWIND"));
                let hb = DungeonManager_1.default.Inst.Player.GetHitBox();
                for (let i = 0; i < 4; i++) {
                    this.AddToBot(new SFXAction_1.SFXAction("ATTACK_HEAVY"));
                    this.AddToBot(new VFXAction_1.default(new CleaveEffect_1.CleaveEffect(hb.CX, hb.CY)));
                    this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[2], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                }
                break;
            }
            case 6: {
                let hb = DungeonManager_1.default.Inst.Player.GetHitBox();
                this.AddToBot(new GainBlockAction_1.default(this, 9));
                this.AddToBot(new SFXAction_1.SFXAction("MONSTER_GUARDIAN_DESTROY"));
                this.AddToBot(new TalkAction_1.TalkAction(hb.CX, hb.CY + 200, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话3"), false, 1, 2.5));
                this.SetMove(3, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[1] });
                break;
            }
        }
    }
    ShiftFunc() {
        let hb = this.GetHitBox();
        this.AddToBot(new VFXAction_1.default(new IntenseZoomEffect_1.IntenseZoomEffect(hb.CX, hb.CY, false), 0.05));
        this.DefensiveMode();
    }
}
exports.TheGuardian_ViewModel = TheGuardian_ViewModel;
//# sourceMappingURL=TheGuardian_ViewModel.js.map