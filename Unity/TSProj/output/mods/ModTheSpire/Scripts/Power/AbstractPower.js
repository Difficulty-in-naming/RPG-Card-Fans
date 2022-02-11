"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerType = exports.AbstractPower = void 0;
const RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
const DungeonManager_1 = require("../DungeonManager");
const EffectKit_1 = require("../Effect/EffectKit");
const FlashPowerEffect_1 = require("../Effect/FlashPowerEffect");
const GainPowerEffect_1 = require("../Effect/GainPowerEffect");
const AtEndOfTurnMessage_1 = require("../Events/AtEndOfTurnMessage");
const AtEndOfTurnPreEndTurnCardsMessage_1 = require("../Events/AtEndOfTurnPreEndTurnCardsMessage");
const AtStartOfTurnMessage_1 = require("../Events/AtStartOfTurnMessage");
const CalcDamageValueMessage_1 = require("../Events/CalcDamageValueMessage");
const CalcFinalDamageValueMessage_1 = require("../Events/CalcFinalDamageValueMessage");
const CalcFinalHurtValueMessage_1 = require("../Events/CalcFinalHurtValueMessage");
const CalcHurtValueMessage_1 = require("../Events/CalcHurtValueMessage");
const OnDamageAfterMessage_1 = require("../Events/OnDamageAfterMessage");
const OnDamageBeforeMessage_1 = require("../Events/OnDamageBeforeMessage");
const OnDeathMessage_1 = require("../Events/OnDeathMessage");
const OnHurtMessage_1 = require("../Events/OnHurtMessage");
const OnHurtAfterMessage_1 = require("../Events/OnHurtAfterMessage");
const OnHurtBeforeMessage_1 = require("../Events/OnHurtBeforeMessage");
const PowerModifiedAmountMessage_1 = require("../Events/PowerModifiedAmountMessage");
const PreModifyBlockMessage_1 = require("../Events/PreModifyBlockMessage");
class AbstractPower {
    //层数
    _Amount;
    //可否叠加
    CanStack;
    //可否驱散
    CanRemove;
    //结算优先级
    Priority;
    //该Buff的拥有者
    Owner;
    //该Buff的施法来源
    Source;
    get Amount() {
        return this._Amount;
    }
    set Amount(value) {
        let preAmount = this._Amount;
        this._Amount = value;
        this.OnModified(preAmount, value);
        DungeonManager_1.default.MessageManager.Send(PowerModifiedAmountMessage_1.PowerModifiedAmountMessage.Id, new PowerModifiedAmountMessage_1.PowerModifiedAmountMessage(this, preAmount, value));
    }
    //重载该方法需要调用super.OnInit();
    OnInit() {
        DungeonManager_1.default.MessageManager.Add(OnHurtBeforeMessage_1.OnHurtBeforeMessage.Id, this.OnHurtBefore);
        DungeonManager_1.default.MessageManager.Add(OnHurtMessage_1.OnHurtMessage.Id, this.OnHurt);
        DungeonManager_1.default.MessageManager.Add(OnHurtAfterMessage_1.OnHurtAfterMessage.Id, this.OnHurtAfter);
        DungeonManager_1.default.MessageManager.Add(AtEndOfTurnMessage_1.AtEndOfTurnMessage.Id, this.AtEndOfTurn);
        DungeonManager_1.default.MessageManager.Add(AtStartOfTurnMessage_1.AtStartOfTurnMessage.Id, this.AtStartOfTurn);
        DungeonManager_1.default.MessageManager.Add(CalcDamageValueMessage_1.CalcDamageValueMessage.Id, this.CalcDamageValue);
        DungeonManager_1.default.MessageManager.Add(OnDamageBeforeMessage_1.OnDamageBeforeMessage.Id, this.OnDamageBefore);
        DungeonManager_1.default.MessageManager.Add(OnDamageAfterMessage_1.OnDamageAfterMessage.Id, this.OnDamageAfter);
        DungeonManager_1.default.MessageManager.Add(CalcFinalDamageValueMessage_1.CalcFinalDamageValueMessage.Id, this.CalcFinalDamageValue);
        DungeonManager_1.default.MessageManager.Add(CalcHurtValueMessage_1.CalcHurtValueMessage.Id, this.CalcHurtValue);
        DungeonManager_1.default.MessageManager.Add(CalcFinalHurtValueMessage_1.CalcFinalHurtValueMessage.Id, this.CalcFinalHurtValue);
        DungeonManager_1.default.MessageManager.Add(OnDeathMessage_1.OnDeathMessage.Id, this.OnDeath);
        DungeonManager_1.default.MessageManager.Add(AtEndOfTurnPreEndTurnCardsMessage_1.AtEndOfTurnPreEndTurnCardsMessage.Id, this.AtEndOfTurnPreEndTurnCards);
        DungeonManager_1.default.MessageManager.Add(PreModifyBlockMessage_1.PreModifyBlockMessage.Id, this.PreModifyBlock);
    }
    //重载该方法需要调用super.OnRemove();
    OnRemove() {
        DungeonManager_1.default.MessageManager.Remove(OnHurtBeforeMessage_1.OnHurtBeforeMessage.Id, this.OnHurtBefore);
        DungeonManager_1.default.MessageManager.Remove(OnHurtMessage_1.OnHurtMessage.Id, this.OnHurt);
        DungeonManager_1.default.MessageManager.Remove(OnHurtAfterMessage_1.OnHurtAfterMessage.Id, this.OnHurtAfter);
        DungeonManager_1.default.MessageManager.Remove(AtEndOfTurnMessage_1.AtEndOfTurnMessage.Id, this.AtEndOfTurn);
        DungeonManager_1.default.MessageManager.Remove(AtStartOfTurnMessage_1.AtStartOfTurnMessage.Id, this.AtStartOfTurn);
        DungeonManager_1.default.MessageManager.Remove(CalcDamageValueMessage_1.CalcDamageValueMessage.Id, this.CalcDamageValue);
        DungeonManager_1.default.MessageManager.Remove(OnDamageBeforeMessage_1.OnDamageBeforeMessage.Id, this.OnDamageBefore);
        DungeonManager_1.default.MessageManager.Remove(OnDamageAfterMessage_1.OnDamageAfterMessage.Id, this.OnDamageAfter);
        DungeonManager_1.default.MessageManager.Remove(CalcFinalDamageValueMessage_1.CalcFinalDamageValueMessage.Id, this.CalcFinalDamageValue);
        DungeonManager_1.default.MessageManager.Remove(OnDamageAfterMessage_1.OnDamageAfterMessage.Id, this.OnDamageAfter);
        DungeonManager_1.default.MessageManager.Remove(CalcFinalDamageValueMessage_1.CalcFinalDamageValueMessage.Id, this.CalcFinalDamageValue);
        DungeonManager_1.default.MessageManager.Remove(CalcHurtValueMessage_1.CalcHurtValueMessage.Id, this.CalcHurtValue);
        DungeonManager_1.default.MessageManager.Remove(CalcFinalHurtValueMessage_1.CalcFinalHurtValueMessage.Id, this.CalcFinalHurtValue);
        DungeonManager_1.default.MessageManager.Remove(OnDeathMessage_1.OnDeathMessage.Id, this.OnDeath);
        DungeonManager_1.default.MessageManager.Remove(AtEndOfTurnPreEndTurnCardsMessage_1.AtEndOfTurnPreEndTurnCardsMessage.Id, this.AtEndOfTurnPreEndTurnCards);
        DungeonManager_1.default.MessageManager.Remove(PreModifyBlockMessage_1.PreModifyBlockMessage.Id, this.PreModifyBlock);
    }
    PlayApplyPowerSfx() { }
    AddToBot(action) { DungeonManager_1.default.ActionManager.AddToBottom(action); }
    AddToTop(action) { DungeonManager_1.default.ActionManager.AddToTop(action); }
    Flash(silent = true) {
        EffectKit_1.default.Inst().Play(new GainPowerEffect_1.GainPowerEffect(this, silent));
        EffectKit_1.default.Inst().Play(new FlashPowerEffect_1.FlashPowerEffect(this));
    }
    //该方法仅用于计算伤害.最终伤害由OnHurt结算.
    CalcHurtValue(msg) { }
    //该方法仅用于计算伤害.最终伤害由OnHurt结算.
    CalcFinalHurtValue(msg) { }
    //当玩家受到伤害之前
    OnHurtBefore(msg) { }
    //当玩家受到伤害时
    OnHurt(msg) { }
    //当玩家受到伤害后
    OnHurtAfter(msg) { }
    //该方法仅用于计算伤害.最终伤害由OnDamage结算.
    CalcDamageValue(msg) { }
    //该方法仅用于计算伤害.最终伤害由OnDamage结算.
    CalcFinalDamageValue(msg) { }
    //造成伤害前
    OnDamageBefore(msg) { }
    //造成伤害后
    OnDamageAfter(msg) { }
    //回合结束时
    AtEndOfTurn(msg) { }
    //回合开始时
    AtStartOfTurn(msg) { }
    //死亡时
    OnDeath(msg) { }
    //回合结束和弃牌结束之间,怪物也会触发该函数
    AtEndOfTurnPreEndTurnCards(msg) { }
    PreModifyBlock(msg) { }
    //
    PreUseCard(msg) { }
    OnModified(before, after) {
        if (after == 0) {
            this.AddToBot(new RemoveSpecificPowerAction_1.RemoveSpecificPowerAction(this.Owner, this.Owner, this));
        }
    }
}
exports.AbstractPower = AbstractPower;
var PowerType;
(function (PowerType) {
    PowerType[PowerType["Buff"] = 0] = "Buff";
    PowerType[PowerType["Debuff"] = 1] = "Debuff";
    PowerType[PowerType["Special"] = 2] = "Special";
})(PowerType = exports.PowerType || (exports.PowerType = {}));
//# sourceMappingURL=AbstractPower.js.map