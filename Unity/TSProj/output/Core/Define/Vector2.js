"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
const csharp_1 = require("csharp");
class Vector2 {
    X;
    Y;
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }
    get UnityVec() {
        return new csharp_1.UnityEngine.Vector2(this.X, this.Y);
    }
}
exports.Vector2 = Vector2;
//# sourceMappingURL=Vector2.js.map