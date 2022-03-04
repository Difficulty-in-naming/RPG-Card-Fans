"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GremlinTsundere_ViewModel = void 0;
const Mathf_1 = require("../../../../../../../Core/Module/Math/Mathf");
const AnimateSlowAttackAction_1 = require("../../../../Action/Animations/AnimateSlowAttackAction");
const DamageAction_1 = require("../../../../Action/Common/DamageAction");
const EscapeAction_1 = require("../../../../Action/Common/EscapeAction");
const GainBlockRandomMonsterAction_1 = require("../../../../Action/Common/GainBlockRandomMonsterAction");
const SetMoveAction_1 = require("../../../../Action/Common/SetMoveAction");
const AttackEffect_1 = require("../../../../DataDefine/AttackEffect");
const DamageInfo_1 = require("../../../../DataDefine/DamageInfo");
const DungeonManager_1 = require("../../../../DungeonManager");
const SpeechBubble_1 = require("../../../../Effect/Combat/SpeechBubble");
const Localization_1 = require("../../../../Gen/DB/Localization");
const AbstractMonster_1 = require("../../AbstractMonster");
const Intent_1 = require("../../Intent");
class GremlinTsundere_ViewModel extends AbstractMonster_1.AbstractMonster {
    _blockAmt;
    Initialize() {
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 17) {
            this._blockAmt = 11;
        }
        if (DungeonManager_1.default.Inst.AdvanceLevel >= 7) {
            this.DamageInfo.push(new DamageInfo_1.default(this, 8));
            this._blockAmt = 8;
        }
        else {
            this.DamageInfo.push(new DamageInfo_1.default(this, 6));
            this._blockAmt = 7;
        }
        let trackEntry = this.SetAnimation("idle", true);
        trackEntry.TrackTime = trackEntry.TrackEnd * Mathf_1.Mathf.Random();
    }
    GetMove(num) {
        this.SetMove(2, Intent_1.Intent.ATTACK_DEBUFF, { moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "行动1") });
    }
    TakeTurn() {
        switch (this.MoveIndex) {
            case 1: {
                this.AddToBot(new GainBlockRandomMonsterAction_1.GainBlockRandomMonsterAction(this, this._blockAmt));
                let aliveCount = DungeonManager_1.default.Inst.CurrentRoom.Monsters.GetAliveMonstersCount();
                if (aliveCount > 1) {
                    this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 1, Intent_1.Intent.DEFEND));
                }
                else {
                    this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 2, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "对话1") }));
                }
                break;
            }
            case 2: {
                this.AddToBot(new AnimateSlowAttackAction_1.AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction_1.default(DungeonManager_1.default.Inst.Player, this.DamageInfo[0], AttackEffect_1.AttackEffect.BLUNT_LIGHT));
                this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 2, Intent_1.Intent.ATTACK, { damage: this.DamageInfo[0], moveName: Localization_1.LocalizationProperty.Read(this.Info.Name + "对话1") }));
            }
            case 99: {
                DungeonManager_1.default.EffectManager.Play(new SpeechBubble_1.SpeechBubble(this.X - 100, this.Y + 50, Localization_1.LocalizationProperty.Read(this.Info.Name + "对话1"), 2.5, true));
                this.AddToBot(new EscapeAction_1.EscapeAction(this));
                this.AddToBot(new SetMoveAction_1.SetMoveAction(this, 99, Intent_1.Intent.ESCAPE));
                break;
            }
        }
    }
}
exports.GremlinTsundere_ViewModel = GremlinTsundere_ViewModel;
//# sourceMappingURL=GremlinTsundere_ViewModel.js.map