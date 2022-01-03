"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDrawPower = void 0;
var RemoveSpecificPowerAction_1 = require("../Action/Common/RemoveSpecificPowerAction");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var AbstractPower_1 = require("./AbstractPower");
class NoDrawPower extends AbstractPower_1.AbstractPower {
    constructor(Owner) {
        super();
        this.Owner = Owner;
        this.Name = Localization_1.LocalizationProperty.Read("能力-无法抽牌");
        this.Icon = FileHelper_1.default.FormatPath("Powers/noDraw.png");
        this.Id = "No Draw";
        this.CanStack = false;
    }
    get Type() { return AbstractPower_1.PowerType.Debuff; }
    GetDescription(...args) {
        return Localization_1.LocalizationProperty.Read("能力-无法抽牌描述");
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