"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeScreenEffect = void 0;
var Color_1 = require("../DataDefine/Color");
var UIHelper_1 = require("../UI/UIHelper");
var AbstractEffect_1 = require("./AbstractEffect");
var tween_js_1 = require("@tweenjs/tween.js");
class FadeScreenEffect extends AbstractEffect_1.AbstractEffect {
    constructor(toDark, callback) {
        super();
        let graph = UIHelper_1.default.CreateGGraph();
        graph.MakeFullScreen();
        graph.Center();
        let alpha = toDark ? 1 : 0;
        graph.alpha = alpha;
        graph.sortingOrder = 10;
        graph.color = Color_1.default.Black.UnityColor();
        let t = new tween_js_1.default.Tween({ a: alpha }).to({ a: alpha == 0 ? 1 : 0 }, 1500).easing(tween_js_1.default.Easing.Sinusoidal.InOut)
            .onUpdate(object => {
            graph.alpha = object.a;
            this.IsDone = true;
            graph.Dispose();
            callback();
        }).start();
    }
}
exports.FadeScreenEffect = FadeScreenEffect;
//# sourceMappingURL=FadeScreenEffect.js.map