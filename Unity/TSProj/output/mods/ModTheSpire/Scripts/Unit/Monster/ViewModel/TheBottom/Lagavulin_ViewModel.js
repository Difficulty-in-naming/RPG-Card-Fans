"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lagavulin_ViewModel = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var TalkAction_1 = require("../../../../Action/Animations/TalkAction");
var ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
var DamageAction_1 = require("../../../../Action/Common/DamageAction");
var DoFuncAction_1 = require("../../../../Action/Common/DoFuncAction");
var GainBlockAction_1 = require("../../../../Action/Common/GainBlockAction");
var ReducePowerAction_1 = require("../../../../Action/Common/ReducePowerAction");
var RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
var SetMoveAction_1 = require("../../../../Action/Common/SetMoveAction");
var TextAboveCreatureAction_1 = require("../../../../Action/Utility/TextAboveCreatureAction");
var MusicMaster_1 = require("../../../../Audio/MusicMaster");
var AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
var DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
var DamageType_1 = require("../../../../DataDefine/DamageType");
var DungeonManager_1 = require("../../../../DungeonManager");
var Localization_1 = require("../../../../Gen/DB/Localization");
var DexterityPower_1 = require("../../../../Power/DexterityPower");
var MetallicizePower_1 = require("../../../../Power/MetallicizePower");
var StrengthPower_1 = require("../../../../Power/StrengthPower");
var AbstractMonster_1 = require("../../AbstractMonster");
var Intent_1 = require("../../Intent");
class Lagavulin_ViewModel extends AbstractMonster_1.AbstractMonster {
    constructor(info, Asleep) {
        super(info);
        this.Asleep = Asleep;
        this.IsOut = false;
        this.DebuffTurnCount = 0;
        this.IdleCount = 0;
    }
    Initialize() {
        this.DebuffAmount = DungeonManager_1.default.Inst.AdvanceLevel >= 18 ? -2 : -1;
        this.DamageInfo.push(new DamageInfo_1.default(this, DungeonManager_1.default.Inst.AdvanceLevel >= 3 ? 20 : 18));
        let trackEntry;
        if (!this.Asleep) {
            this.IsOut = true;
            trackEntry = this.SetAnimation("Idle_2", true);
            this.SetHitBox(0, -25, 320, 370);
        }
        else {
            trackEntry = this.SetAnimation("Idle_1", true);
        }
        let animation = this.DisplayObject.Self;
        let data = animation.SkeletonDataAsset.GetAnimationStateData();
        data.SetMix("Attack", "Idle_2", 0.25);
        data.SetMix("Hit", "Idle_2", 0.25);
        data.SetMix("Idle_1", "Idle_2", 0.5);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    PreBattleAction(msg) {
        super.PreBattleAction(msg);
        if (this.Asleep) {
            this.AddToBot(new GainBlockAction_1.default(this, 8));
            this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new MetallicizePower_1.MetallicizePower(), 8));
        }
        else {
            MusicMaster_1.MusicMaster.Play("ELITE");
            this.SetMove(1, Intent_1.Intent.STRONG_DEBUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
        }
    }
    GetMove(num) {
        if (this.IsOut) {
            if (this.DebuffTurnCount < 2) {
                if (this.LastTwoMoves(3)) {
                    this.SetMove(1, Intent_1.Intent.STRONG_DEBUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
                }
                else {
                    this.SetMove(3, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
                }
            }
            else {
                this.SetMove(1, Intent_1.Intent.STRONG_DEBUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
            }
        }
        else {
            this.SetMove(5, Intent_1.Intent.SLEEP);
        }
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 1: {
                this.DebuffTurnCount = 0;
                this.AddToBot(new DoFuncAction_1.DoFuncAction(() => {
                    this.SetAnimation("Debuff");
                    this.AddAnimation("Idle_2");
                }, 0.3));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new DexterityPower_1.DexterityPower(), this.DebuffAmount));
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(DungeonManager_1.default.Inst.Player, this, new StrengthPower_1.StrengthPower(), this.DebuffAmount));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
            case 3: {
                this.DebuffTurnCount++;
                this.AddToBot(new DoFuncAction_1.DoFuncAction(() => {
                    this.SetAnimation("Attack");
                    this.AddAnimation("Idle_2");
                }, 0.3));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
            case 5: {
                this.IdleCount++;
                if (this.IdleCount >= 3) {
                    this.AddToBot(new DoFuncAction_1.DoFuncAction(this.Open));
                    this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 3, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] }));
                }
                else {
                    this.AddToBot(new TalkAction_1.TalkAction(this.X - 170, this.Y - 50, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话" + this.IdleCount), true, 0.5, 2));
                    this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 5, Intent_1.Intent.SLEEP));
                }
                break;
            }
            case 4: {
                this.AddToBot(new TextAboveCreatureAction_1.TextAboveCreatureAction(this, TextAboveCreatureAction_1.TextType.STUNNED));
                this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
                break;
            }
            case 6: {
                this.AddToBot(new DoFuncAction_1.DoFuncAction(this.Open));
                this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 3, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] }));
                break;
            }
        }
    }
    Open() {
        this.IsOut = true;
        this.SetHitBox(0, 25, 320, 370);
        this.AddToBot(new TalkAction_1.TalkAction(this.X - 170, this.Y - 50, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话4"), true, 0.5, 2));
        this.AddToBot(new ReducePowerAction_1.ReducePowerAction(this, this, MetallicizePower_1.MetallicizePower.Id, 8));
        MusicMaster_1.MusicMaster.Play("ELITE");
        this.SetAnimation("Coming_out");
        this.AddAnimation("Idle_2");
    }
    Damage(info) {
        if (this.Health != this.MaxHealth) {
            this.SetMove(4, Intent_1.Intent.STUN);
            this.AddToBot(new DoFuncAction_1.DoFuncAction(this.Open));
        }
        else if (this.IsOut && info.Origin != null && info.DamageType != DamageType_1.DamageType.THORNS && info.TotalDamage > 0) {
            this.SetAnimation("Hit", false);
            this.AddAnimation("Idle_2", true);
        }
    }
    Die() {
        super.Die();
        MusicMaster_1.MusicMaster.FadeOut();
    }
}
exports.Lagavulin_ViewModel = Lagavulin_ViewModel;
//# sourceMappingURL=Lagavulin_ViewModel.js.map