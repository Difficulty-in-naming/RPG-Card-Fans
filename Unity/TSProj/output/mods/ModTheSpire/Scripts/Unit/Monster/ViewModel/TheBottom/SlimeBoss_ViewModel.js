"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpikeSlime_L_ViewModel = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
var ShakeScreenAction_1 = require("../../../../Action/Animations/ShakeScreenAction");
var ShoutAction_1 = require("../../../../Action/Animations/ShoutAction");
var VFXAction_1 = require("../../../../Action/Animations/VFXAction");
var DamageAction_1 = require("../../../../Action/Common/DamageAction");
var DoFuncAction_1 = require("../../../../Action/Common/DoFuncAction");
var MakeTempCardInDiscardAction_1 = require("../../../../Action/Common/MakeTempCardInDiscardAction");
var SetMoveAction_1 = require("../../../../Action/Common/SetMoveAction");
var SpawnMonsterAction_1 = require("../../../../Action/Common/SpawnMonsterAction");
var SuicideAction_1 = require("../../../../Action/Common/SuicideAction");
var HideHealthBarAction_1 = require("../../../../Action/Utility/HideHealthBarAction");
var SFXAction_1 = require("../../../../Action/Utility/SFXAction");
var TextAboveCreatureAction_1 = require("../../../../Action/Utility/TextAboveCreatureAction");
var WaitAction_1 = require("../../../../Action/Utility/WaitAction");
var SoundMaster_1 = require("../../../../Audio/SoundMaster");
var Slimed_1 = require("../../../../Cards/Status/Slimed");
var AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
var Color_1 = require("../../../../DataDefine/Color");
var DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
var DungeonManager_1 = require("../../../../DungeonManager");
var WeightyImpactEffect_1 = require("../../../../Effect/Combat/WeightyImpactEffect");
var ShakeScreen_1 = require("../../../../Effect/ShakeScreen");
var Localization_1 = require("../../../../Gen/DB/Localization");
var AbstractMonster_1 = require("../../AbstractMonster");
var Intent_1 = require("../../Intent");
var AcidSlime_L_Model_1 = require("../../Model/TheBottom/AcidSlime_L_Model");
var SpikeSlime_L_Model_1 = require("../../Model/TheBottom/SpikeSlime_L_Model");
var AcidSlime_L_ViewModel_1 = require("./AcidSlime_L_ViewModel");
class SpikeSlime_L_ViewModel extends AbstractMonster_1.AbstractMonster {
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 10));
            this.DamageInfo.push(new DamageInfo_1.default(this, 38));
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 9));
            this.DamageInfo.push(new DamageInfo_1.default(this, 35));
        }
        this.SetAnimation("Idle", true);
    }
    Damage(info) {
        if (!this.IsDying && this.Health <= this.MaxHealth / 2 && this.MoveIndex != 3) {
            this.SetMove(3, Intent_1.Intent.UNKNOWN, { moveName: "分裂" });
            this.AddToBot(new TextAboveCreatureAction_1.TextAboveCreatureAction(this, TextAboveCreatureAction_1.TextType.INTERRUPTED));
        }
    }
    GetMove(num) {
        if (DungeonManager_1.default.Inst.CurrentRoom.Round == 1) {
            this.SetMove(4, Intent_1.Intent.STRONG_DEBUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动4") });
        }
    }
    PlaySfx() {
        let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 2));
        if (roll == 0) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_SLIMEBOSS_1A"));
        }
        else if (roll == 1) {
            this.AddToBot(new SFXAction_1.SFXAction("VO_SLIMEBOSS_1B"));
        }
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 4: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new SFXAction_1.SFXAction("MONSTER_SLIME_ATTACK"));
                if (DungeonManager_1.default.Inst.AdvanceLevel >= 19)
                    this.AddToBot(new MakeTempCardInDiscardAction_1.MakeTempCardInDiscardAction(new Slimed_1.Slimed(), 5));
                else
                    this.AddToBot(new MakeTempCardInDiscardAction_1.MakeTempCardInDiscardAction(new Slimed_1.Slimed(), 3));
                this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 2, Intent_1.Intent.UNKNOWN, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动2") }));
                break;
            }
            case 2: {
                this.PlaySfx();
                this.AddToBot(new ShoutAction_1.ShoutAction(this, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话1"), 1, 2));
                this.AddToBot(new ShakeScreenAction_1.ShakeScreenAction(0.3, ShakeScreen_1.ShakeIntensity.LOW, ShakeScreen_1.ShakeDur.LONG, { Horizontal: true, Vertical: false }));
                this.SetMove(1, Intent_1.Intent.ATTACK, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1"), damage: this.DamageInfo[0] });
                break;
            }
            case 1: {
                this.AddToBot(new DoFuncAction_1.DoFuncAction(this.PlayJump, 0.25));
                let playerHitBox = DungeonManager_1.default.Inst.Player.GetHitBox();
                this.AddToBot(new VFXAction_1.default(new WeightyImpactEffect_1.WeightyImpactEffect(playerHitBox.CX, playerHitBox.CY, new Color_1.default(25, 25, 25, 255)), 0.8));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[1], AttackEffect_1.AttackEffect.POISON));
                this.SetMove(4, Intent_1.Intent.STRONG_DEBUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动4") });
                break;
            }
            case 3: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new HideHealthBarAction_1.HideHealthBarAction());
                this.AddToBot(new SuicideAction_1.SuicideAction(this, false));
                this.AddToBot(new WaitAction_1.WaitAction(1000));
                this.AddToBot(new SFXAction_1.SFXAction("SLIME_SPLIT"));
                this.AddToBot(new SpawnMonsterAction_1.SpawnMonsterAction(new AcidSlime_L_ViewModel_1.AcidSlime_L_ViewModel(new AcidSlime_L_Model_1.AcidSlime_L_Model(this.X - 134, this.Y + Mathf_1.Mathf.RandomRange(-4, 4))), false));
                this.AddToBot(new SpawnMonsterAction_1.SpawnMonsterAction(new SpikeSlime_L_ViewModel(new SpikeSlime_L_Model_1.SpikeSlime_L_Model(this.X + 134, this.Y + Mathf_1.Mathf.RandomRange(-4, 4))), false));
                this.SetMove(3, Intent_1.Intent.UNKNOWN, { moveName: "分裂" });
            }
        }
    }
    Die() {
        super.Die();
        SoundMaster_1.SoundMaster.PlayVoice("VO_SLIMEBOSS_2A");
        if (this.Health <= 0) {
            this.PlayFastShake(5);
        }
    }
}
exports.SpikeSlime_L_ViewModel = SpikeSlime_L_ViewModel;
//# sourceMappingURL=SlimeBoss_ViewModel.js.map