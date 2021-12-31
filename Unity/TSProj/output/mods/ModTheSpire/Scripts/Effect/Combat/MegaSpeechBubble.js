"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MegaSpeechBubble = void 0;
const csharp_1 = require("csharp");
const Color_1 = require("../../DataDefine/Color");
const ModTheSpire_Effect_1 = require("../../Gen/View/ModTheSpire_Effect");
const UIHelper_1 = require("../../UI/UIHelper");
const AbstractEffect_1 = require("../AbstractEffect");
class MegaSpeechBubble extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Msg;
    Interval;
    FlipX;
    Instance;
    Bg;
    SuperText;
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
        let graph = this.Instance.GetChild("Holder").asGraph;
        this.SuperText = UIHelper_1.default.CreateSuperText();
        let wrap = new csharp_1.FairyGUI.GoWrapper(this.SuperText.gameObject);
        wrap.SetScale(100, 100);
        this.SuperText.color = Color_1.default.Gray.UnityColor();
        this.SuperText.text = `{speechsize}{offset}${Msg}{/offset}{/speechsize}`;
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
exports.MegaSpeechBubble = MegaSpeechBubble;
//# sourceMappingURL=MegaSpeechBubble.js.map