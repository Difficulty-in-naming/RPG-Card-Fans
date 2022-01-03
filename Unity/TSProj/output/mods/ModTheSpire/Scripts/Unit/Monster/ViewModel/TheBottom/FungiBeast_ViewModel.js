"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cultist_ViewModel = void 0;
var Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
var ApplyPowerAction_1 = require("../../../../Action/Common/ApplyPowerAction");
var DamageAction_1 = require("../../../../Action/Common/DamageAction");
var DoFuncAction_1 = require("../../../../Action/Common/DoFuncAction");
var RollMoveAction_1 = require("../../../../Action/Common/RollMoveAction");
var AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
var DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
var DamageType_1 = require("../../../../DataDefine/DamageType");
var DungeonManager_1 = require("../../../../DungeonManager");
var Localization_1 = require("../../../../Gen/DB/Localization");
var SporeCloudPower_1 = require("../../../../Power/SporeCloudPower");
var StrengthPower_1 = require("../../../../Power/StrengthPower");
var AbstractMonster_1 = require("../../AbstractMonster");
var Intent_1 = require("../../Intent");
class Cultist_ViewModel extends AbstractMonster_1.AbstractMonster {
    constructor(monster) {
        super(monster);
    }
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 2) {
            this.StrAmt = 5;
            this.DamageInfo.push(new DamageInfo_1.default(this, 6));
        }
        else {
            this.StrAmt = 3;
            this.DamageInfo.push(new DamageInfo_1.default(this, 6));
        }
        let trackEntry = this.SetAnimation("Idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
        trackEntry.TimeScale = Mathf_1.Mathf.RandomRange(0.7, 1);
    }
    PreBattleAction(msg) {
        super.PreBattleAction(msg);
        this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new SporeCloudPower_1.SporeCloudPower(2)));
    }
    GetMove(num) {
        if (num < 60) {
            if (this.LastTwoMoves(1)) {
                this.SetMove(2, Intent_1.Intent.BUFF, { moveName: Localization_1.LocalizationProperty.Read("咔咔") });
            }
        }
        if (DungeonManager_1.default.Inst.CurrentRoom.Round == 1) {
            this.SetMove(3, Intent_1.Intent.BUFF, { moveName: Localization_1.LocalizationProperty.Read("念咒") });
        }
        this.SetMove(1, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0] });
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 1: {
                this.AddToBot(new DoFuncAction_1.DoFuncAction(() => this.ChangeState("ATTACK"), 0.5));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_LIGHT));
                break;
            }
            case 2: {
                this.AddToBot(new ApplyPowerAction_1.ApplyPowerAction(this, this, new StrengthPower_1.StrengthPower(), this.StrAmt));
                break;
            }
        }
        this.AddToBot(new RollMoveAction_1.RollMoveAction(this));
    }
    ChangeState(key) {
        switch (key) {
            case "ATTACK": {
                let animation = this.DisplayObject.Self;
                animation.AnimationState.SetAnimation(0, "ATTACK", false);
                animation.AnimationState.AddAnimation(0, "Idle", true, 0);
                break;
            }
        }
    }
    Damage(info) {
        super.Damage(info);
        if (info.DamageType == DamageType_1.DamageType.THORNS && info.TotalDamage > 0) {
            let animation = this.DisplayObject.Self;
            animation.AnimationState.SetAnimation(0, "Hit", false);
            animation.AnimationState.AddAnimation(0, "Idle", true, 0);
        }
    }
}
exports.Cultist_ViewModel = Cultist_ViewModel;
//# sourceMappingURL=FungiBeast_ViewModel.js.map