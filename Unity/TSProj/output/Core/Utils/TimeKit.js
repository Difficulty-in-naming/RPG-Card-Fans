"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeKit = void 0;
var csharp_1 = require("csharp");
class TimeKit {
    static Update() {
        TimeKit.DeltaTime = csharp_1.UnityEngine.Time.deltaTime;
        TimeKit.UnscaledDeltaTime = csharp_1.UnityEngine.Time.unscaledDeltaTime;
    }
}
exports.TimeKit = TimeKit;
//# sourceMappingURL=TimeKit.js.map