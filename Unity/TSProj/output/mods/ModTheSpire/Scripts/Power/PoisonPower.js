"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoisonPower = void 0;
const csharp_1 = require("csharp");
const ReducePowerAction_1 = require("../Action/Common/ReducePowerAction");
const RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
const PoisonLoseHpAction_1 = require("../Action/Unique/PoisonLoseHpAction");
const AttackEffect_1 = require("../DataDefine/AttackEffect");
const DungeonManager_1 = require("../DungeonManager");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const StringHelper_1 = require("../StringHelper");
const AbstractPlayer_1 = require("../Unit/Character/AbstractPlayer");
const AbstractPower_1 = require("./AbstractPower");
class PoisonPower extends AbstractPower_1.AbstractPower {
    static PowerID = "Poison";
    Name = Localization_1.LocalizationProperty.Read("能力-中毒");
    Icon = FileHelper_1.default.FormatPath("Powers/poison.png");
    Id = PoisonPower.PowerID;
    get Type() { return AbstractPower_1.PowerType.Debuff; }
    constructor(owner, source, amount) {
        super();
        this.Owner = owner;
        this.Source = source;
        this.Amount += amount;
    }
    GetDescription(...args) {
        if (this.Owner instanceof AbstractPlayer_1.AbstractPlayer)
            return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-中毒描述(玩家)")).format(this.Amount);
        else
            return StringHelper_1.StringHelper.FormatColorString(Localization_1.LocalizationProperty.Read("能力-中毒描述(敌人)")).format(this.Amount);
    }
    PlayApplyPowerSfx() {
        csharp_1.MediaManager.PlayVoice("Audio/sound/STS_SFX_PoisonApply_v1.ogg");
    }
    AtStartOfTurn(msg) {
        super.AtStartOfTurn(msg);
        if (DungeonManager_1.default.Inst.CurrentRoom.Monsters?.AreMonstersBasicallyDead()) {
            this.Flash(true);
            this.AddToBot(new PoisonLoseHpAction_1.PoisonLoseHpAction(this.Owner, this.Source, this.Amount, AttackEffect_1.AttackEffect.POISON));
        }
    }
    AtEndOfTurn(msg) {
        super.AtEndOfTurn(msg);
        if (this.Amount == 0) {
            this.AddToBot(new RemoveSpecificPowerAction_1.RemoveSpecificPowerAction(this.Owner, this.Owner, this));
        }
        else {
            this.AddToBot(new ReducePowerAction_1.ReducePowerAction(this.Owner, this.Owner, this, 1));
        }
        return;
    }
}
exports.PoisonPower = PoisonPower;
//# sourceMappingURL=PoisonPower.js.map