"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinWizard_ViewMode = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const VFXAction_1 = require("../../../../Action/Animations/VFXAction");
const ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
const DamageAction_1 = require("../../../../Action/Common/DamageAction");
const DoFuncAction_1 = require("../../../../Action/Common/DoFuncAction");
const MakeTempCardInDiscardAction_1 = require("../../../../Action/Common/MakeTempCardInDiscardAction");
const RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
const SFXAction_1 = require("../../../../Action/Utility/SFXAction");
const Dazed_1 = require("../../../../Cards/Status/Dazed");
const AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
const Color_1 = require("../../../../DataDefine/Color");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DamageType_1 = require("../../../../DataDefine/DamageType");
const DungeonManager_1 = require("../../../../DungeonManager");
const BorderFlashEffect_1 = require("../../../../Effect/Combat/BorderFlashEffect");
const ShockWaveEffect_1 = require("../../../../Effect/Combat/ShockWaveEffect");
const SmallLaserEffect_1 = require("../../../../Effect/Combat/SmallLaserEffect");
const ArtifactPower_1 = require("../../../../Power/ArtifactPower");
const AbstractMonster_1 = require("../../AbstractMonster");
const Intent_1 = require("../../Intent");
class GremlinWizard_ViewMode extends AbstractMonster_1.AbstractMonster {
    _dazedAmt = 0;
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 18) {
            this._dazedAmt = 3;
        }
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 3) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 10));
        }
        else {
            this._dazedAmt = 2;
            this.DamageInfo.push(new DamageInfo_1.default(this, 9));
        }
        let trackEntry = this.SetAnimation("idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
        trackEntry.TimeScale = 2;
        let animation = this.DisplayObject.Self;
        let data = animation.SkeletonDataAsset.GetAnimationStateData();
        data.SetMix("idle", "attack", 0.1);
        data.SetMix("idle", "spaz1", 0.1);
        data.SetMix("idle", "hit", 0.1);
    }
    PreBattleAction(msg) {
        super.PreBattleAction(msg);
        this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new ArtifactPower_1.ArtifactPower(), 1));
    }
    GetMove(num) {
        let room = DungeonManager_1.default.Inst.CurrentRoom;
        if (room.Round == 1) {
            if (room.Monsters.IndexOf(this) % 2) {
                this.SetMove(3, Intent_1.Intent.DEBUFF);
            }
            else {
                this.SetMove(4, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
            }
        }
        if (this.LastMove(4)) {
            this.SetMove(3, Intent_1.Intent.DEBUFF);
        }
        else {
            this.SetMove(4, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
        }
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 3: {
                this.AddToBot(new SFXAction_1.SFXAction("THUNDERCLAP"));
                let myHitBox = this.GetHitBox();
                this.AddToBot(new VFXAction_1.default(new ShockWaveEffect_1.ShockWaveEffect(myHitBox.CX, myHitBox.CY, Color_1.default.Royal, ShockWaveEffect_1.ShockWaveType.ADDITIVE), 0.5));
                this.AddToBot(new DoFuncAction_1.DoFuncAction(() => this.PlayFastShake(0.6), 0.2));
                this.AddToBot(new MakeTempCardInDiscardAction_1.MakeTempCardInDiscardAction(new Dazed_1.Dazed(), this._dazedAmt));
                break;
            }
            case 4: {
                this.AddToBot(new DoFuncAction_1.DoFuncAction(this.Attack));
                this.AddToBot(new SFXAction_1.SFXAction("ATTACK_MAGIC_BEAM_SHORT", 0.5));
                this.AddToBot(new VFXAction_1.default(new BorderFlashEffect_1.BorderFlashEffect(Color_1.default.Sky)));
                let playerHitBox = DungeonManager_1.default.Inst.Player.GetHitBox();
                let myHitBox = this.GetHitBox();
                this.AddToBot(new VFXAction_1.default(new SmallLaserEffect_1.SmallLaserEffect(playerHitBox.CX, playerHitBox.CY, myHitBox.CX, myHitBox.CY), 0.3));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.NONE));
                break;
            }
        }
        this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
    }
    Attack() {
        this.SetAnimation("attack");
        this.AddAnimation("idle", true);
    }
    Damage(info) {
        super.Damage(info);
        if (info.TotalDamage > 0 && info.DamageType != DamageType_1.DamageType.THORNS) {
            this.SetAnimation("hit");
            this.AddAnimation("idle", true);
        }
    }
}
exports.GremlinWizard_ViewMode = GremlinWizard_ViewMode;
//# sourceMappingURL=Sentry_ViewModel.js.map