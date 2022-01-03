"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S = void 0;
var UIKit_1 = require("../../../Core/Module/UI/UIKit");
var CardViewPool_1 = require("./Cards/CardViewPool");
var ModTheSpire_Common_1 = require("./Gen/View/ModTheSpire_Common");
var SaveKit_1 = require("./SaveKit");
class S {
}
exports.S = S;
S.UIKit = UIKit_1.UIKit.Inst();
S.SaveKit = SaveKit_1.default.Inst();
S.CommonCardViewPool = new CardViewPool_1.CardViewPool(20, () => ModTheSpire_Common_1.View_Card.CreateInstance());
//# sourceMappingURL=global.js.map