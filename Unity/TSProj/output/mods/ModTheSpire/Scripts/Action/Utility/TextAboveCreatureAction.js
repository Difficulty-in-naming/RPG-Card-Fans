"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextType = exports.TextAboveCreatureAction = void 0;
const Color_1 = require("../../DataDefine/Color");
const EffectKit_1 = require("../../Effect/EffectKit");
const TextAboveCreatureEffect_1 = require("../../Effect/TextAboveCreatureEffect");
const AbstractGameAction_1 = require("../AbstractGameAction");
class TextAboveCreatureAction extends AbstractGameAction_1.default {
    Source;
    text;
    Msg;
    constructor(Source, text) {
        super();
        this.Source = Source;
        this.text = text;
        this.Msg = text.toString();
        this.Type = AbstractGameAction_1.ActionType.TEXT;
    }
    async Update() {
        EffectKit_1.default.Inst().Play(new TextAboveCreatureEffect_1.TextAboveCreatureEffect(this.Source.X, this.Source.Y, this.Msg, Color_1.default.White.Clone()));
        return true;
    }
}
exports.TextAboveCreatureAction = TextAboveCreatureAction;
var TextType;
(function (TextType) {
    TextType["STUNNED"] = "\u6253\u65AD\uFF01";
    TextType["INTERRUPTED"] = "\u51FB\u6655\uFF01";
})(TextType = exports.TextType || (exports.TextType = {}));
//# sourceMappingURL=TextAboveCreatureAction.js.map