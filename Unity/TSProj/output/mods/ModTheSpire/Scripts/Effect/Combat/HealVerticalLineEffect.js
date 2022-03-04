"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealVerticalLineEffect = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
const AbstractEffect_1 = require("../AbstractEffect");
const UIHelper_1 = require("../../UI/UIHelper");
const ImageMaster_1 = require("../../Helpers/ImageMaster");
const Color_1 = require("../../DataDefine/Color");
const TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
class HealVerticalLineEffect extends AbstractEffect_1.AbstractEffect {
    X;
    Y;
    Effect;
    Vy;
    Length;
    constructor(X, Y) {
        super();
        this.X = X;
        this.Y = Y;
        this.Length = Mathf_1.Mathf.RandomRange(0, 0.5);
        let tmp = Mathf_1.Mathf.RandomRange(5, 20);
        this.Vy = tmp * tmp;
        for (let index = 0; index < 3; index++) {
            let effect = this.Effect[index] = UIHelper_1.default.CreateGLoader();
            effect.rotation = 90;
            if (index == 0)
                effect.color = (Mathf_1.Mathf.Random() < 0.5 ? Color_1.default.Chartreuse : new Color_1.default(255, 255, 128, 255)).UnityColor;
            else
                effect.color = new Color_1.default(255, 255, 178, 255).UnityColor;
            effect.alpha = 0;
            effect.x = X;
            effect.y = Y;
            effect.blendMode = csharp_1.FairyGUI.BlendMode.Add;
        }
        this.Effect[0].url = ImageMaster_1.ImageMaster.STRIKE_LINE;
        this.Effect[1].url = ImageMaster_1.ImageMaster.STRIKE_LINE2;
        this.Effect[2].url = ImageMaster_1.ImageMaster.STRIKE_LINE2;
    }
    Update() {
        if (this.Duration >= this.Length) {
            this.IsDone = true;
            for (let index = 0; index < this.Effect.length; index++) {
                const element = this.Effect[index];
                element.alpha = 0;
            }
            return;
        }
        this.Y += this.Vy * TimeKit_1.TimeKit.DeltaTime;
        const scale = (this.Length - this.Duration) / this.Length;
        if (this.Duration <= this.Length / 2) {
            for (let index = 0; index < this.Effect.length; index++) {
                const element = this.Effect[index];
                element.SetScale(scale, scale);
                element.alpha = 1 - (this.Duration / (this.Length / 2)) + Mathf_1.Mathf.RandomRange(0, 0.2);
            }
        }
        else {
            for (let index = 0; index < this.Effect.length; index++) {
                const element = this.Effect[index];
                element.SetScale(scale, scale);
                element.alpha = this.Duration / (this.Length / 2) + Mathf_1.Mathf.RandomRange(0, 0.2);
            }
        }
    }
}
exports.HealVerticalLineEffect = HealVerticalLineEffect;
//# sourceMappingURL=HealVerticalLineEffect.js.map