"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShakeIntensity = exports.ShakeDur = exports.ShakeScreen = void 0;
const csharp_1 = require("csharp");
const AbstractEffect_1 = require("./AbstractEffect");
const puerts = require("puerts");
class ShakeScreen extends AbstractEffect_1.AbstractEffect {
    Intensity;
    ShakeDur;
    Dir;
    static InitializePos = new Array();
    static Camera = new Array();
    static Initialize() {
        let temp = csharp_1.UnityEngine.Object.FindObjectsOfType(puerts.$typeof(csharp_1.UnityEngine.Camera));
        for (let i = 0; i < temp.Length; i++) {
            this.Camera[i] = temp.get_Item(i).transform;
            this.InitializePos[i] = this.Camera[i].position;
        }
    }
    constructor(intensity, dur, dir = { Vertical: false, Horizontal: true }) {
        super();
        this.Intensity = intensity;
        this.ShakeDur = dur;
        this.Dir = dir;
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