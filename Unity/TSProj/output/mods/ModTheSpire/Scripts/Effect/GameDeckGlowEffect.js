"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameDeckGlowEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../Core/Utils/TimeKit");
const Color_1 = require("../DataDefine/Color");
const FileHelper_1 = require("../FileHelper");
const UIHelper_1 = require("../UI/UIHelper");
const AbstractEffect_1 = require("./AbstractEffect");
class GameDeckGlowEffect extends AbstractEffect_1.AbstractEffect {
    Interval = Mathf_1.Mathf.RandomRange(2, 5);
    Vx = Mathf_1.Mathf.RandomRange(10, 20);
    Vy = Mathf_1.Mathf.RandomRange(10, 20);
    FlipX = Mathf_1.Mathf.Random() < 0.5 ? -1 : 1;
    FlipY = Mathf_1.Mathf.Random() < 0.5 ? -1 : 1;
    Vr = Mathf_1.Mathf.RandomRange(-120, 120);
    Loader;
    constructor() {
        super();
        this.Loader = UIHelper_1.default.CreateGLoader();
        let color = Color_1.default.Cream.Clone();
        let darkness = Mathf_1.Mathf.RandomRange(0.1, 0.4);
        color.R -= darkness;
        color.G -= darkness;
        color.B -= darkness;
        this.Loader.color = color.UnityColor();
        this.Loader.url = FileHelper_1.default.FormatPath("Vfx/ui/p" + Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(1, 7)) + ".png");
        this.Loader.SetPosition(Mathf_1.Mathf.RandomRange(35, 85), Mathf_1.Mathf.RandomRange(35, 85), 0);
        this.Loader.SetScale(0.75, 0.75);
        this.Loader.TweenFade(0, this.Interval).SetEase(csharp_1.FairyGUI.EaseType.Linear);
    }
    Update() {
        this.Loader.rotation = this.Vr * TimeKit_1.TimeKit.DeltaTime;
        let x = this.Loader.x, y = this.Loader.y;
        if (this.Vy != 0) {
            y += this.FlipY * this.Vy * TimeKit_1.TimeKit.DeltaTime;
            this.Vy = Mathf_1.Mathf.Lerp(this.Vy, 0, TimeKit_1.TimeKit.DeltaTime / 4);
            if (this.Vy < 0.5)
                this.Vy = 0;
        }
        if (this.Vx != 0) {
            x += this.FlipX * this.Vx * TimeKit_1.TimeKit.DeltaTime;
            this.Vx = Mathf_1.Mathf.Lerp(this.Vx, 0, TimeKit_1.TimeKit.DeltaTime / 4);
            if (this.Vx < 0.5)
                this.Vx = 0;
        }
        this.Loader.SetPosition(x, y, 0);
        if (this.Duration > this.Interval) {
            this.IsDone = true;
            this.Loader.Dispose();
        }
    }
}
exports.GameDeckGlowEffect = GameDeckGlowEffect;
//# sourceMappingURL=GameDeckGlowEffect.js.map