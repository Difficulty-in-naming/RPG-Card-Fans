"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleDustEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../Core/Utils/TimeKit");
const Color_1 = require("../DataDefine/Color");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
class TitleDustEffect extends AbstractEffect_1.AbstractEffect {
    Vx;
    Vy;
    Va;
    Scale;
    Loader;
    Vc;
    Interval;
    constructor() {
        super();
        this.Loader = UIHelper_1.default.CreateGLoader();
        this.Loader.url = "ui://ModTheSpire_Effect/smoke" + Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(1, 4));
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
        this.Loader.color = this.Vc.UnityColor;
        this.Loader.alpha = 0.2;
        this.Interval = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(3, 4));
        this.Loader.TweenFade(0, this.Interval).SetEase(csharp_1.FairyGUI.EaseType.SineInOut);
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
        if (this.Duration > this.Interval) {
            this.Loader.Dispose();
            this.IsDone = true;
            return;
        }
    }
}
exports.TitleDustEffect = TitleDustEffect;
//# sourceMappingURL=TitleDustEffect.js.map