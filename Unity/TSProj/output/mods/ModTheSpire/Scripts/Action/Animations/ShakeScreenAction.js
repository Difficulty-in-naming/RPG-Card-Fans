"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShakeScreenAction = void 0;
const Async_1 = require("../../../../../Core/Async");
const DungeonManager_1 = require("../../DungeonManager");
const ShakeScreen_1 = require("../../Effect/ShakeScreen");
const AbstractGameAction_1 = require("../AbstractGameAction");
class ShakeScreenAction extends AbstractGameAction_1.default {
    Interval;
    intensity;
    dur;
    dir;
    constructor(Interval, intensity, dur, dir = { Vertical: false, Horizontal: true }) {
        super();
        this.Interval = Interval;
        this.intensity = intensity;
        this.dur = dur;
        this.dir = dir;
    }
    async Update() {
        DungeonManager_1.default.EffectManager.Play(new ShakeScreen_1.ShakeScreen(this.intensity, this.dur, this.dir));
        await Async_1.default.Delay(this.Interval);
        return true;
    }
}
exports.ShakeScreenAction = ShakeScreenAction;
//# sourceMappingURL=ShakeScreenAction.js.map