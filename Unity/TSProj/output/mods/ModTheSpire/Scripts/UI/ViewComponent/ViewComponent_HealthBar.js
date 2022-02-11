"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewComponent_HealthBar = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
class ViewComponent_HealthBar {
    progress;
    _CacheWidth = 0;
    _Background;
    _Middle;
    _Bar;
    _Value;
    _FirstSet = false;
    get Max() {
        return this.progress.max;
    }
    set Max(value) {
        this.progress.max = value;
        if (!this._FirstSet) {
            this._Value = value;
            this._FirstSet = true;
        }
    }
    get Value() {
        return this._Value;
    }
    set Value(value) {
        this.progress.GetChild("DisplayText").text = value + "/" + this.Max;
        //如果正在Tween,我们重新获取一下宽度
        if (csharp_1.FairyGUI.GTween.IsTweening(this._Middle)) {
            this.ResetCachePosition();
        }
        if (this._Value < value) {
            this._Middle.width = this._Background.width * value / this.Max;
            this.progress.TweenValue(value, 0.5).SetDelay(1).SetEase(csharp_1.FairyGUI.EaseType.SineInOut).OnComplete(() => {
                this.ResetCachePosition();
            });
        }
        else if (this._Value > value) {
            this.progress.value = value;
            this._Middle.width = this._CacheWidth;
            this._Middle.TweenResize(new csharp_1.UnityEngine.Vector2(this._Background.width * value / this.Max, this._Middle.height), 0.5).SetEase(csharp_1.FairyGUI.EaseType.SineInOut).SetDelay(1).OnComplete(() => {
                this.ResetCachePosition();
            });
        }
        this._Value = value;
    }
    Visible(visible) {
        this.progress.visible = visible;
    }
    constructor(progress) {
        this.progress = progress;
        this._Middle = this.progress.GetChild("Middle");
        this._Bar = this.progress.GetChild("bar");
        this._Middle.width = this._Bar.width;
        this._Background = this.progress.GetChild("Background");
        this._Value = this.Max;
        this.ResetCachePosition();
    }
    ResetCachePosition() {
        this._CacheWidth = Mathf_1.Mathf.Clamp(this._Middle.width, 0, this._Background.width);
    }
}
exports.ViewComponent_HealthBar = ViewComponent_HealthBar;
//# sourceMappingURL=ViewComponent_HealthBar.js.map