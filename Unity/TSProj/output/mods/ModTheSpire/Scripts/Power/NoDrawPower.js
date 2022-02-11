"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDrawPower = void 0;
const RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
const FileHelper_1 = require("../FileHelper");
const Localization_1 = require("../Gen/DB/Localization");
const AbstractPower_1 = require("./AbstractPower");
class NoDrawPower extends AbstractPower_1.AbstractPower {
    Owner;
    Name = Localization_1.LocalizationProperty.Read("能力-无法抽牌");
    Icon = FileHelper_1.default.FormatPath("Powers/noDraw.png");
    Id = "No Draw";
    get Type() { return AbstractPower_1.PowerType.Debuff; }
    CanStack = false;
    GetDescription(...args) {
        return Localization_1.LocalizationProperty.Read("能力-无法抽牌描述");
    }
    constructor(Owner) {
        super();
        this.Owner = Owner;
    }
    AtEndOfTurn(msg) {
        super.AtEndOfTurn(msg);
        if (msg.IsPlayer) {
            this.AddToBot(new RemoveSpecificPowerAction_1.RemoveSpecificPowerAction(this.Owner, this.Owner, this));
        }
    }
}
exports.NoDrawPower = NoDrawPower;
//# sourceMappingURL=NoDrawPower.js.map