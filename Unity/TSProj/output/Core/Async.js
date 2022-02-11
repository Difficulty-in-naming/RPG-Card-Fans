"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
class Async {
    static async Delay(ms, ignoreTimeScale = false) {
        let task = csharp_1.Cysharp.Threading.Tasks.UniTask.Delay(ms, ignoreTimeScale);
        await (0, puerts_1.$promise)(task);
    }
    static async NextFrame() {
        let task = csharp_1.Cysharp.Threading.Tasks.UniTask.NextFrame();
        await (0, puerts_1.$promise)(task);
    }
    static async DelayFrame(count) {
        let task = csharp_1.Cysharp.Threading.Tasks.UniTask.DelayFrame(count);
        await (0, puerts_1.$promise)(task);
    }
}
exports.default = Async;
//# sourceMappingURL=Async.js.map