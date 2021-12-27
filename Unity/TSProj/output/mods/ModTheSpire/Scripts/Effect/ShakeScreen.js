"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShakeIntensity = exports.ShakeDur = exports.ShakeScreen = void 0;
var csharp_1 = require("csharp");
var AbstractEffect_1 = require("./AbstractEffect");
var puerts = require("puerts");
class ShakeScreen extends AbstractEffect_1.AbstractEffect {
    constructor(intensity, dur, dir = { Vertical: false, Horizontal: true }) {
        super();
        this.Intensity = intensity;
        this.ShakeDur = dur;
        this.Dir = dir;
    }
    static Initialize() {
        let temp = csharp_1.UnityEngine.Object.FindObjectsOfType(puerts.$typeof(csharp_1.UnityEngine.Camera));
        for (let i = 0; i < temp.Length; i++) {
            this.Camera[i] = temp.get_Item(i).transform;
            this.InitializePos[i] = this.Camera[i].position;
        }
    }
    Update() {
        if (this.Duration > this.ShakeDur) {
            this.IsDone = true;
            for (let i = 0; i < ShakeScreen.Camera.length; i++) {
                ShakeScreen.Camera[i].position = ShakeScreen.InitializePos[i];
            }
            return;
        }
        let x = this.Dir.Horizontal ? Math.cos(Math.random() * 5) / this.Intensity : 0;
        let y = this.Dir.Vertical ? Math.cos(Math.random() * 5) / this.Intensity : 0;
        for (let i = 0; i < ShakeScreen.Camera.length; i++) {
            let vec = new csharp_1.UnityEngine.Vector3(ShakeScreen.InitializePos[i].x + x, ShakeScreen.InitializePos[i].y + y, ShakeScreen.InitializePos[i].z);
            ShakeScreen.Camera[i].position = vec;
        }
    }
}
exports.ShakeScreen = ShakeScreen;
ShakeScreen.InitializePos = new Array();
ShakeScreen.Camera = new Array();
ShakeScreen.Initialize();
var ShakeDur;
(function (ShakeDur) {
    ShakeDur[ShakeDur["DEFAULT"] = 1] = "DEFAULT";
    ShakeDur[ShakeDur["SHORT"] = 0.3] = "SHORT";
    ShakeDur[ShakeDur["MED"] = 0.5] = "MED";
    ShakeDur[ShakeDur["LONG"] = 1] = "LONG";
    ShakeDur[ShakeDur["XLONG"] = 3] = "XLONG";
})(ShakeDur = exports.ShakeDur || (exports.ShakeDur = {}));
var ShakeIntensity;
(function (ShakeIntensity) {
    ShakeIntensity[ShakeIntensity["LOW"] = 50] = "LOW";
    ShakeIntensity[ShakeIntensity["MED"] = 10] = "MED";
    ShakeIntensity[ShakeIntensity["HIGH"] = 3] = "HIGH";
})(ShakeIntensity = exports.ShakeIntensity || (exports.ShakeIntensity = {}));
//# sourceMappingURL=ShakeScreen.js.map