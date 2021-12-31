"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainEntry = void 0;
const UIKit_1 = require("./Core/Module/UI/UIKit");
const TimeKit_1 = require("./Core/Utils/TimeKit");
const csharp_1 = require("csharp");
const Log_1 = require("./Core/Module/Log/Log");
const tween_js_1 = require("@tweenjs/tween.js");
class MainEntry {
    static inst;
    static Inst() {
        if (!MainEntry.inst) {
            MainEntry.inst = new MainEntry();
        }
        return MainEntry.inst;
    }
    constructor() {
        csharp_1.MediaManager.Init();
        csharp_1.GameEntry.Inst.RegisterUpdate(() => this.onUpdate());
    }
    BridgeList = new Set();
    RegisterEntry(bridge) {
        this.BridgeList.add(bridge);
    }
    RemoveEntry(bridge) {
        this.BridgeList.delete(bridge);
    }
    onUpdate() {
        TimeKit_1.TimeKit.Update();
        tween_js_1.default.update();
        this.BridgeList.forEach(value => {
            value.OnUpdate();
        });
        UIKit_1.UIKit.Inst().OnUpdate();
        Log_1.Log.Error("12312321223");
    }
}
exports.MainEntry = MainEntry;
MainEntry.Inst();
//# sourceMappingURL=MainEntry.js.map