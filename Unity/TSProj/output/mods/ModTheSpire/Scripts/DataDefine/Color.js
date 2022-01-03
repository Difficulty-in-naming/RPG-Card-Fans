"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csharp_1 = require("csharp");
var Mathf_1 = require("../../../../Core/Module/Math/Mathf");
class Color {
    constructor(R = 255, G = 255, B = 255, A = 255) {
        this.R = R;
        this.G = G;
        this.B = B;
        this.A = A;
    }
    Random(min, max) {
        this.R = Mathf_1.Mathf.Clamp(this.R + Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(min, max)), 0, 255);
        this.G = Mathf_1.Mathf.Clamp(this.G + Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(min, max)), 0, 255);
        this.B = Mathf_1.Mathf.Clamp(this.B + Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(min, max)), 0, 255);
        return this;
    }
    Clone() {
        return new Color(this.R, this.G, this.B, this.A);
    }
    UnityColor() {
        return new csharp_1.UnityEngine.Color(this.R / 255, this.G / 255, this.B / 255, this.A / 255);
    }
    UnityColor32() {
        return new csharp_1.UnityEngine.Color32(this.R, this.G, this.B, this.A);
    }
    ToHex() {
        return "#" + this.R.toString(16) + this.G.toString(16) + this.B.toString(16) + this.A.toString(16);
    }
    Lerp(target, t) {
        this.R += t * (target.R - this.R);
        this.G += t * (target.G - this.G);
        this.B += t * (target.B - this.B);
        this.A += t * (target.A - this.A);
        return this.Clamp();
    }
    Clamp() {
        this.R = Mathf_1.Mathf.Clamp(this.R, 0, 255);
        this.G = Mathf_1.Mathf.Clamp(this.G, 0, 255);
        this.B = Mathf_1.Mathf.Clamp(this.B, 0, 255);
        this.A = Mathf_1.Mathf.Clamp(this.A, 0, 255);
        return this;
    }
}
exports.default = Color;
Color.Red = new Color(255, 0, 0, 255);
Color.Chartreuse = new Color(128, 255, 0, 255);
Color.White = new Color(255, 255, 255, 255);
Color.Black = new Color(0, 0, 0, 255);
Color.Gray = new Color(127, 127, 127, 255);
Color.FireBrick = new Color(0, 0, 0, 153);
Color.TwoThirdsTransparentBlackColor = new Color(0, 0, 0, 166);
Color.Cream = new Color(255, 246, 226, 255);
Color.DiscardColor = new Color(138, 118, 155, 255);
Color.RedText = new Color(255, 101, 99, 255);
Color.GreenText = new Color(127, 255, 0, 255);
Color.BlueText = new Color(135, 206, 235, 255);
Color.Gold = new Color(239, 200, 81, 255);
Color.PurpleText = new Color(238, 130, 238, 255);
Color.RedHpBarColor = new Color(204, 13, 13, 255);
Color.GreenHpBarColor = new Color(120, 190, 60, 255);
Color.BlueHpBarColor = new Color(49, 86, 140, 255);
Color.OrangeHbBarColor = new Color(255, 128, 0, 255);
Color.Royal = new Color(65, 105, 225, 255);
Color.Sky = new Color(135, 206, 235, 255);
Color.Cyan = new Color(0, 255, 255, 255);
Color.Orange = new Color(255, 165, 0, 255);
Color.Goldenrod = new Color(218, 165, 32, 255);
Color.Scarlet = new Color(255, 52, 28, 255);
//# sourceMappingURL=Color.js.map