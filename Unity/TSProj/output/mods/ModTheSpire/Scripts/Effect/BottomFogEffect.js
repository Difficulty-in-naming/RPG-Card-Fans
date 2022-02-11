"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomFogEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../Core/Utils/TimeKit");
const Color_1 = require("../DataDefine/Color");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
class BottomFogEffect extends AbstractEffect_1.AbstractEffect {
    Interval;
    Loader;
    Scale;
    FlipX;
    FlipY;
    Vx;
    Vr;
    constructor(parent = null) {
        super();
        this.Interval = Mathf_1.Mathf.RandomRange(10, 12);
        this.Loader = UIHelper_1.default.CreateGLoader();
        if (parent)
            parent.AddChild(this.Loader);
        this.Loader.url = "ui://ModTheSpire_Effect/smoke" + Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(1, 4));
        this.Loader.touchable = false;
        this.Loader.SetPivot(0.5, 0.5, true);
        this.Loader.x = Mathf_1.Mathf.RandomRange(-200, 2120);
        this.Loader.y = csharp_1.FairyGUI.GRoot.inst.height + Mathf_1.Mathf.RandomRange(60, 410);
        this.Vx = Mathf_1.Mathf.RandomRange(-200, 200);
        this.Vr = Mathf_1.Mathf.RandomRange(-10, 10);
        let tmp = Mathf_1.Mathf.RandomRange(0.1, 0.15) * 255;
        let color = new Color_1.default(0, 0, 0, 255);
        color.R = tmp + Mathf_1.Mathf.RandomRange(0, 0.1) * 255;
        color.G = tmp;
        color.B = color.R + Mathf_1.Mathf.RandomRange(0, 0.05) * 255;
        this.Scale = Mathf_1.Mathf.RandomRange(4, 6);
        this.FlipX = Mathf_1.Mathf.Random() >= 0.5 ? 1 : -1;
        this.FlipY = Mathf_1.Mathf.Random() >= 0.5 ? 1 : -1;
        this.Loader.color = color.UnityColor;
        this.Loader.alpha = 0;
        this.Loader.SetScale(this.Scale * this.FlipX, this.Scale * this.FlipY);
        this.Loader.TweenFade(0.3, this.Interval / 2).SetEase(csharp_1.FairyGUI.EaseType.SineInOut).OnComplete(() => {
            this.Loader.TweenFade(0, this.Interval / 2).SetEase(csharp_1.FairyGUI.EaseType.SineInOut);
        });
    }
    Update() {
        super.Update();
        let x = this.Loader.x + this.Vx * TimeKit_1.TimeKit.DeltaTime;
        let rotation = this.Loader.rotation + this.Vr * TimeKit_1.TimeKit.DeltaTime;
        this.Scale += TimeKit_1.TimeKit.DeltaTime / 3;
        this.Loader.x = x;
        this.Loader.rotation = rotation;
        this.Loader.SetScale(this.Scale * this.FlipX, this.Scale * this.FlipY);
        if (this.Duration >= this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}
exports.BottomFogEffect = BottomFogEffect;
//# sourceMappingURL=BottomFogEffect.js.map