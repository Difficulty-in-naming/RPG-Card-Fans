"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LouseDefensive_ViewModel = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
const ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
const DamageAction_1 = require("../../../../Action/Common/DamageAction");
const DoFuncAction_1 = require("../../../../Action/Common/DoFuncAction");
const RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
const SFXAction_1 = require("../../../../Action/Utility/SFXAction");
const AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DamageType_1 = require("../../../../DataDefine/DamageType");
const DungeonManager_1 = require("../../../../DungeonManager");
const Localization_1 = require("../../../../Gen/DB/Localization");
const CurlUpPower_1 = require("../../../../Power/CurlUpPower");
const StrengthPower_1 = require("../../../../Power/StrengthPower");
const AbstractMonster_1 = require("../../AbstractMonster");
const Intent_1 = require("../../Intent");
class LouseDefensive_ViewModel extends AbstractMonster_1.AbstractMonster {
    IsOpen = true;
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2)
            this.DamageInfo.push(new DamageInfo_1.default(this, Mathf_1.Mathf.RandomRange(6, 8, DungeonManager_1.default.Inst.CurrentDungeon.HPRng)));
        else
            this.DamageInfo.push(new DamageInfo_1.default(this, Mathf_1.Mathf.RandomRange(5, 7, DungeonManager_1.default.Inst.CurrentDungeon.HPRng)));
        let trackEntry = this.SetAnimation("idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    PreBattleAction(msg) {
        super.PreBattleAction(msg);
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 17) {
            this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new CurlUpPower_1.CurlUpPower(), Mathf_1.Mathf.RandomRange(9, 12, DungeonManager_1.default.Inst.CurrentDungeon.HPRng)));
        }
        else if (DungeonManager_1.default.Inst.AdvanceLevel >= 7) {
            this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new CurlUpPower_1.CurlUpPower(), Mathf_1.Mathf.RandomRange(4, 8, DungeonManager_1.default.Inst.CurrentDungeon.HPRng)));
        }
        else {
            this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new CurlUpPower_1.CurlUpPower(), Mathf_1.Mathf.RandomRange(3, 7, DungeonManager_1.default.Inst.CurrentDungeon.HPRng)));
        }
    }
    GetMove(num) {
        if (num < 25) {
            if (this.LastMove(4)) {
                this.SetMove(3, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
            }
            else {
                this.SetMove(4, Intent_1.Intent.BUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
            }
        }
        else if (this.LastTwoMoves(3)) {
            this.SetMove(4, Intent_1.Intent.BUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
        }
        else {
            this.SetMove(3, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
        }
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 3: {
                if (!this.IsOpen) {
                    this.AddToBot(new DoFuncAction_1.DoFuncAction(this.Open, 0.5));
                }
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_LIGHT));
                break;
            }
            case 4: {
                if (!this.IsOpen) {
                    this.AddToBot(new DoFuncAction_1.DoFuncAction(this.Rear, 1.2));
                    this.AddToBot(new SFXAction_1.SFXAction("ATTACK_MAGIC_FAST_3", Mathf_1.Mathf.RandomRange(0.88, 0.92), true));
                }
                else {
                    this.AddToBot(new DoFuncAction_1.DoFuncAction(this.RearIdle, 0.9));
                    this.AddToBot(new SFXAction_1.SFXAction("ATTACK_MAGIC_FAST_3", Mathf_1.Mathf.RandomRange(0.88, 0.92), true));
                }
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new StrengthPower_1.StrengthPower(), DungeonManager_1.default.Inst.AdvanceLevel >= 17 ? 4 : 3));
                break;
            }
        }
        this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
    }
    Damage(msg) {
        if (this.GetPower(CurlUpPower_1.CurlUpPower.Id) && msg.TotalDamage < this.Health && msg.TotalDamage > 0 && msg.DamageType == DamageType_1.DamageType.NORMAL) {
            this.Close();
        }
    }
    Close() {
        this.SetAnimation("transitiontoclosed");
        this.AddAnimation("idle closed", true);
        this.IsOpen = false;
    }
    Open() {
        this.SetAnimation("transitiontoopened");
        this.AddAnimation("idle", true);
        this.IsOpen = true;
    }
    RearIdle() {
        this.SetAnimation("rear");
        this.AddAnimation("idle", true);
        this.IsOpen = true;
    }
    Rear() {
        this.SetAnimation("transitiontoopened");
        this.SetAnimation("rear");
        this.AddAnimation("idle", true);
        this.IsOpen = true;
    }
}
exports.LouseDefensive_ViewModel = LouseDefensive_ViewModel;
//# sourceMappingURL=LouseNormal_ViewModel.js.map