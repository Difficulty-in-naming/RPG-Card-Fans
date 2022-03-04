"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mathf = void 0;
const Vector2_1 = require("../../Define/Vector2");
const Vector3_1 = require("../../Define/Vector3");
class Mathf {
    static Rad2Deg = 57.29578;
    static Deg2Rad = 0.01745329;
    static Abs(value) {
        return Math.abs(value);
    }
    static Atan2(value1, value2) {
        return Math.atan2(value1, value2);
    }
    static Cos(value) {
        return Math.cos(value);
    }
    static CosDeg(value) {
        return Mathf.Cos(value * this.Deg2Rad);
    }
    static Tan(value) {
        return Math.tan(value);
    }
    static Sin(value) {
        return Math.sin(value);
    }
    static SinDeg(value) {
        return Mathf.Sin(value * this.Deg2Rad);
    }
    static Angle(x, y) {
        let angle = this.Atan2(y, x) * this.Rad2Deg;
        if (angle < 0)
            angle += 360;
        return angle;
    }
    static Asin(value) {
        return Math.asin(value);
    }
    static Acos(value) {
        return Math.acos(value);
    }
    static Atan(value) {
        return Math.atan(value);
    }
    static Sqrt(value) {
        return Math.sqrt(value);
    }
    static Clamp01(value) {
        if (value < 0.0)
            return 0;
        return value > 1.0 ? 1 : value;
    }
    static Min(...value) {
        return Math.min(...value);
    }
    static Max(...value) {
        return Math.max(...value);
    }
    static Pow(value1, value2) {
        return Math.pow(value1, value2);
    }
    static Exp(value) {
        return Math.exp(value);
    }
    static Log(value1, value2) {
        if (value2) {
            return Math.log(value1) / Math.log(value2);
        }
        return Math.log(value1);
    }
    static Log10(value) {
        return Math.log10(value);
    }
    static Log2(value) {
        return Math.log2(value);
    }
    static Log1p(value) {
        return Math.log1p(value);
    }
    static Sign(value) {
        return Math.sign(value);
    }
    static BigMul(value1, value2) {
        return value1 * value2;
    }
    static Lerp(x, y, t) {
        return x + (y - x) * Mathf.Clamp01(t);
    }
    static Distance(x, y, tx, ty) {
        let xd = tx - x;
        let yd = ty - y;
        return Mathf.Sqrt(xd * xd + yd * yd);
    }
    static Clamp(value, min, max) {
        if (value < min)
            return min;
        else if (value > max)
            return max;
        return value;
    }
    static Floor(value) {
        return Math.floor(value);
    }
    static Ceil(value) {
        return Math.ceil(value);
    }
    static Round(value) {
        return Math.round(value);
    }
    static FRound(value) {
        return Math.fround(value);
    }
    static LerpUnclamped(x, y, t) {
        return x + (y - x) * t;
    }
    static LerpAngle(x, y, t) {
        let num = Mathf.Repeat(y - x, 360);
        if (num > 180)
            num -= 360;
        return x + num * Mathf.Clamp01(t);
    }
    static MoveTowards(current, target, maxDelta) {
        return Mathf.Abs(target - current) <= maxDelta ? target : current + Mathf.Sign(target - current) * maxDelta;
    }
    static MoveTowardsAngle(current, target, maxDelta) {
        let num = Mathf.Repeat(current, target);
        if (-maxDelta < num && num < maxDelta)
            return target;
        target = current + num;
        return Mathf.MoveTowards(current, target, maxDelta);
    }
    static Repeat(t, length) {
        return Mathf.Clamp(t - Mathf.Floor(t / length) * length, 0, length);
    }
    static Random(rng = undefined) {
        if (rng)
            return rng.next();
        else
            return Math.random();
    }
    static RandomRange(min, max, rng = undefined) {
        if (min < 0) {
            if (max < 0) {
                min = this.Abs(min);
                return this.Random(rng) * (min + max) - min;
            }
        }
        else {
            if (max > 0) {
                min = min * -1;
                return this.Random(rng) * (min + max) - min;
            }
        }
        return this.Random(rng) * (max - min) + min;
    }
    static CalculateQuadraticCurve2D(pos0, pos1, pos2, t) {
        let x = ((1 - t) * (1 - t) * pos0.X) + (2 * (1 - t) * t * pos1.X) + t * t * pos2.X;
        let y = ((1 - t) * (1 - t) * pos0.Y) + (2 * (1 - t) * t * pos1.Y) + t * t * pos2.Y;
        return new Vector2_1.Vector2(x, y);
    }
    static CalculateQubicCurve3D(pos0, pos1, pos2, pos3, t) {
        let x = ((1 - t) * (1 - t) * (1 - t) * pos0.X) + (3 * (1 - t) * (1 - t) * t * pos1.X) + (3 * (1 - t) * (1 - t) * t * pos2.X) + (t * t * t * pos3.X);
        let y = ((1 - t) * (1 - t) * (1 - t) * pos0.Y) + (3 * (1 - t) * (1 - t) * t * pos1.Y) + (3 * (1 - t) * (1 - t) * t * pos2.Y) + (t * t * t * pos3.Y);
        let z = ((1 - t) * (1 - t) * (1 - t) * pos0.Z) + (3 * (1 - t) * (1 - t) * t * pos1.Z) + (3 * (1 - t) * (1 - t) * t * pos2.Z) + (t * t * t * pos3.Z);
        return new Vector3_1.Vector3(x, y, z);
    }
    static CalculateQubicCurve2D(pos0, pos1, pos2, pos3, t) {
        let x = ((1 - t) * (1 - t) * (1 - t) * pos0.X) + (3 * (1 - t) * (1 - t) * t * pos1.X) + (3 * (1 - t) * (1 - t) * t * pos2.X) + (t * t * t * pos3.X);
        let y = ((1 - t) * (1 - t) * (1 - t) * pos0.Y) + (3 * (1 - t) * (1 - t) * t * pos1.Y) + (3 * (1 - t) * (1 - t) * t * pos2.Y) + (t * t * t * pos3.Y);
        return new Vector2_1.Vector2(x, y);
    }
}
exports.Mathf = Mathf;
//# sourceMappingURL=Mathf.js.map