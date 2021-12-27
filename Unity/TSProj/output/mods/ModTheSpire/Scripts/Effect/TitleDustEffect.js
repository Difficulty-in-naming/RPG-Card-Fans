"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleDustEffect = void 0;
var Mathf_1 = require("../../../../Core/Module/Math/Mathf");
var TimeKit_1 = require("../../../../Core/Utils/TimeKit");
var Color_1 = require("../DataDefine/Color");
var FileHelper_1 = require("../FileHelper");
var UIHelper_1 = require("../UI/UIHelper");
var AbstractEffect_1 = require("./AbstractEffect");
var tween_js_1 = require("@tweenjs/tween.js");
class TitleDustEffect extends AbstractEffect_1.AbstractEffect {
    constructor() {
        super();
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.url = FileHelper_1.default.FormatPath(`Vfx/env/smoke${Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(1, 4))}.png`);
        this.Loader.SetPivot(0.5, 0.5, true);
        this.Loader.touchable = false;
        this.Scale = Mathf_1.Mathf.RandomRange(6, 8);
        this.Loader.SetScale(this.Scale, this.Scale);
        let x = -600;
        let y = Mathf_1.Mathf.RandomRange(-200, 0);
        this.Loader.SetPosition(x, y, 0);
        this.Vx = Mathf_1.Mathf.RandomRange(400, 1200);
        this.Vy = Mathf_1.Mathf.RandomRange(-50, 50);
        this.Va = Mathf_1.Mathf.RandomRange(-50, 50);
        let tmp = Mathf_1.Mathf.RandomRange(51, 77);
        let r, g, b, a;
        g = tmp + Mathf_1.Mathf.RandomRange(0, 26);
        r = g + Mathf_1.Mathf.RandomRange(0, 26);
        b = tmp;
        a = 255;
        this.Vc = new Color_1.default(r, g, b, a);
        this.Loader.color = this.Vc.UnityColor();
        this.Loader.alpha = 0.2;
        this.Dur = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(2000, 3000));
    }
    Update() {
        let x, y;
        x = this.Vx * TimeKit_1.TimeKit.DeltaTime;
        y = this.Vy * TimeKit_1.TimeKit.DeltaTime;
        this.Scale += TimeKit_1.TimeKit.DeltaTime / 3;
        this.Loader.x += x;
        this.Loader.y += y;
        this.Loader.rotation = this.Va * TimeKit_1.TimeKit.DeltaTime;
        this.Loader.SetScale(this.Scale, this.Scale);
        if (this.Duration < 1) {
            return;
        }
        else if (this.Tween == null) {
            this.Tween = new tween_js_1.default.Tween({ a: 0.2 }).to({ a: 0 }, this.Dur).easing(tween_js_1.default.Easing.Sinusoidal.InOut)
                .onUpdate(object => {
                this.Loader.alpha = object.a;
            }).start();
        }
        if (this.Tween.isPlaying())
            return;
        this.Loader.Dispose();
        this.IsDone = true;
    }
}
exports.TitleDustEffect = TitleDustEffect;
//# sourceMappingURL=TitleDustEffect.js.map