"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalAuraParticleEffect = void 0;
var csharp_1 = require("csharp");
var Mathf_1 = require("../../../../Core/Module/Math/Mathf");
var TimeKit_1 = require("../../../../Core/Utils/TimeKit");
var FileHelper_1 = require("../FileHelper");
var UIHelper_1 = require("../UI/UIHelper");
var AbstractEffect_1 = require("./AbstractEffect");
var tween_js_1 = require("@tweenjs/tween.js");
class VerticalAuraParticleEffect extends AbstractEffect_1.AbstractEffect {
    constructor(c, x, y) {
        super();
        this.Loader = UIHelper_1.default.CreateGLoader();
        let scale = Mathf_1.Mathf.RandomRange(0.6, 1.7);
        console.log(scale);
        let color = c.Clone().Random(-0.1, 0.1);
        this.Loader.url = FileHelper_1.basePath + "Res/Vfx/combat/verticalAura.png";
        this.Loader.touchable = false;
        this.Loader.scale = new csharp_1.UnityEngine.Vector2(scale, scale);
        this.Loader.SetPivot(0.5, 0.5, true);
        this.Loader.SetPosition(x + Mathf_1.Mathf.RandomRange(-200, 200), y + Mathf_1.Mathf.RandomRange(-200, 200), 0);
        this.Vy = Mathf_1.Mathf.RandomRange(-300, 300);
        this.Loader.color = color.UnityColor();
        this.Loader.alpha = 0;
        this.Tween = new tween_js_1.default.Tween({ a: this.Loader.color.a }).to({ a: 1 }, 200).easing(tween_js_1.default.Easing.Sinusoidal.InOut)
            .onUpdate(object => {
            this.Loader.alpha = object.a;
        })
            .start()
            .onComplete(object => {
            this.Tween = new tween_js_1.default.Tween({ a: this.Loader.color.a }).to({ a: 0 }, 800).easing(tween_js_1.default.Easing.Sinusoidal.InOut)
                .onUpdate(object => {
                this.Loader.alpha = object.a;
            }).onComplete(() => {
                this.Loader.Dispose();
            })
                .start();
        });
    }
    Update() {
        let y = this.Vy * TimeKit_1.TimeKit.DeltaTime;
        this.Loader.y += y;
        this.IsDone = !this.Tween.isPlaying();
    }
}
exports.VerticalAuraParticleEffect = VerticalAuraParticleEffect;
//# sourceMappingURL=VerticalAuraParticleEffect.js.map