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
    Multiply(x) {
        return new Vector2(this.X * x, this.Y * x);
    }
    Add(x) {
        return new Vector2(this.X + x.X, this.Y + x.Y);
    }
    toString() {
        return "x:" + this.X + ", y:" + this.Y;
    }
    Equals(vec) {
        return this.X == vec.X && this.Y == vec.Y;
    }
}
exports.Vector2 = Vector2;
//# sourceMappingURL=Vector2.js.map