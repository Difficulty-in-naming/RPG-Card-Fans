"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../Core/Module/Math/Mathf");
class Color {
    static Red = new Color(255, 0, 0, 255);
    static Chartreuse = new Color(128, 255, 0, 255);
    static White = new Color(255, 255, 255, 255);
    static Black = new Color(0, 0, 0, 255);
    static Gray = new Color(127, 127, 127, 255);
    static FireBrick = new Color(0, 0, 0, 153);
    static TwoThirdsTransparentBlackColor = new Color(0, 0, 0, 166);
    static Cream = new Color(255, 246, 226, 255);
    static DiscardColor = new Color(138, 118, 155, 255);
    static RedText = new Color(255, 101, 99, 255);
    static GreenText = new Color(127, 255, 0, 255);
    static BlueText = new Color(135, 206, 235, 255);
    static Gold = new Color(239, 200, 81, 255);
    static PurpleText = new Color(238, 130, 238, 255);
    static RedHpBarColor = new Color(204, 13, 13, 255);
    static GreenHpBarColor = new Color(120, 190, 60, 255);
    static BlueHpBarColor = new Color(49, 86, 140, 255);
    static OrangeHbBarColor = new Color(255, 128, 0, 255);
    static Royal = new Color(65, 105, 225, 255);
    static Sky = new Color(135, 206, 235, 255);
    static Cyan = new Color(0, 255, 255, 255);
    static Orange = new Color(255, 165, 0, 255);
    static Goldenrod = new Color(218, 165, 32, 255);
    static Scarlet = new Color(255, 52, 28, 255);
    static DarkGray = new Color(63, 63, 63, 255);
    static Coral = new Color(255, 127, 80, 255);
    R;
    G;
    B;
    A;
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
    get UnityColor() {
        return new csharp_1.UnityEngine.Color(this.R / 255, this.G / 255, this.B / 255, this.A / 255);
    }
    get UnityColor32() {
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
//# sourceMappingURL=Color.js.map