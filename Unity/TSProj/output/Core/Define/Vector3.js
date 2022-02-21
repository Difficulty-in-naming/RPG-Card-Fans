"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3 = void 0;
const csharp_1 = require("csharp");
class Vector3 {
    X;
    Y;
    Z;
    constructor(X, Y, Z) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    }
    get UnityVec() {
        return new csharp_1.UnityEngine.Vector3(this.X, this.Y, this.Z);
    }
    Multiply(x) {
        return new Vector3(this.X * x, this.Y * x, this.Z * x);
    }
    Add(x) {
        return new Vector3(this.X + x.X, this.Y + x.Y, this.Z + x.Z);
    }
}
exports.Vector3 = Vector3;
//# sourceMappingURL=Vector3.js.map