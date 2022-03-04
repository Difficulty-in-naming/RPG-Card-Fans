"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S = void 0;
const UIKit_1 = require("../../../Core/Module/UI/UIKit");
const CardViewPool_1 = require("./Cards/CardViewPool");
const ModTheSpire_Common_1 = require("./Gen/View/ModTheSpire_Common");
const SaveKit_1 = require("./SaveKit");
class S {
    static UIKit = UIKit_1.UIKit.Inst();
    static SaveKit = SaveKit_1.default.Inst();
    static CommonCardViewPool = new CardViewPool_1.CardViewPool(() => ModTheSpire_Common_1.View_Card.CreateInstance());
}
exports.S = S;
//# sourceMappingURL=global.js.map