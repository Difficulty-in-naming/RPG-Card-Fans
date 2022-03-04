"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rect = void 0;
const Vector2_1 = require("./Vector2");
class Rect {
    //Left
    X;
    //Top
    Y;
    Width;
    Height;
    get CX() {
        return this.Width / 2 + this.X;
    }
    get CY() {
        return this.Height / 2 + this.Y;
    }
    get LeftTop() {
        return new Vector2_1.Vector2(this.X, this.Y);
    }
    get LeftBottom() {
        return new Vector2_1.Vector2(this.X, this.Y + this.Height);
    }
    get RightTop() {
        return new Vector2_1.Vector2(this.X + this.Width, this.Y);
    }
    get RightBottom() {
        return new Vector2_1.Vector2(this.X + this.Width, this.Y + this.Height);
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