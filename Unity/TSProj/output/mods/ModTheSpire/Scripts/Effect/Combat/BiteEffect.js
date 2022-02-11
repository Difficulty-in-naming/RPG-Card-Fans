"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiteEffect = void 0;
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
const Color_1 = require("../../DataDefine/Color");
const ModTheSpire_Effect_1 = require("../../Gen/View/ModTheSpire_Effect");
const AbstractEffect_1 = require("../AbstractEffect");
class BiteEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    color;
    Instance;
    Top;
    Bot;
    constructor(X, Y, color) {
        super();
        this.X = X;
        this.Y = Y;
        this.color = color;
        this.Instance = ModTheSpire_Effect_1.View_BiteEffect.CreateInstance();
        this.Top = this.Instance.GetChild("Top").asImage;
        this.Bot = this.Instance.GetChild("Bot").asImage;
        if (!color) {
            this.color = new Color_1.default(179, 230, 255, 255);
        }
        this.Top.color = color.UnityColor;
        this.Bot.color = color.UnityColor;
    }
    Update() {
        this.Top.SetScale(1 + Mathf_1.Mathf.RandomRange(-0.05, 0.05), 1 + Mathf_1.Mathf.RandomRange(-0.05, 0.05));
        this.Bot.SetScale(1 + Mathf_1.Mathf.RandomRange(-0.05, 0.05), 1 + Mathf_1.Mathf.RandomRange(-0.05, 0.05));
        if (this.Duration >= 1)
            this.IsDone = true;
    }
}
exports.BiteEffect = BiteEffect;
//# sourceMappingURL=BiteEffect.js.map