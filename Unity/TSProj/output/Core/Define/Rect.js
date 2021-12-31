"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rect = void 0;
class Rect {
    X;
    Y;
    Width;
    Height;
    get CX() {
        return this.Width / 2 + this.X;
    }
    get CY() {
        return this.Height / 2 + this.Y;
    }
    constructor(X, Y, Width, Height) {
        this.X = X;
        this.Y = Y;
        this.Width = Width;
        this.Height = Height;
    }
}
exports.Rect = Rect;
//# sourceMappingURL=Rect.js.map