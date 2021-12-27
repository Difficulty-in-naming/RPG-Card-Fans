"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechBubble = void 0;
var csharp_1 = require("csharp");
var Color_1 = require("../../DataDefine/Color");
var ModTheSpire_Effect_1 = require("../../Gen/View/ModTheSpire_Effect");
var UIHelper_1 = require("../../UI/UIHelper");
var AbstractEffect_1 = require("../AbstractEffect");
class SpeechBubble extends AbstractEffect_1.AbstractEffect {
    constructor(X, Y, Msg, Interval, FlipX) {
        super();
        this.X = X;
        this.Y = Y;
        this.Msg = Msg;
        this.Interval = Interval;
        this.FlipX = FlipX;
        this.Instance = ModTheSpire_Effect_1.View_SpeechBubble.CreateInstance();
        this.Bg = this.Instance.GetChild("Bg").asImage;
        if (FlipX)
            this.Bg.flip = csharp_1.FairyGUI.FlipType.Horizontal;
        this.Instance.SetPosition(X, Y, 0);
        let graph = this.Instance.GetChild("Holder").asGraph;
        this.SuperText = UIHelper_1.default.CreateSuperText();
        let wrap = new csharp_1.FairyGUI.GoWrapper(this.SuperText.gameObject);
        wrap.SetScale(100, 100);
        this.SuperText.color = Color_1.default.Gray.UnityColor();
        this.SuperText.text = `<shake>${Msg}</shake>`;
        this.SuperText.lineSpacing = -50;
        this.SuperText.Width = 2;
        graph.SetNativeObject(wrap);
        this.Instance.GetTransition("t0").Play();
    }
    Update() {
        super.Update();
        this.SuperText.alpha = this.Bg.alpha;
        if (this.Duration >= this.Interval)
            this.IsDone = true;
    }
}
exports.SpeechBubble = SpeechBubble;
//# sourceMappingURL=SpeechBubble.js.map