"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SaveHelper_1 = require("./Utils/SaveHelper");
class Settings {
    constructor() {
        this.Language = "Chinese";
        this.Resolution = "1280x800";
        this.Frame = 60;
        this.FullScreen = false;
        this.BorderlessFullScreen = false;
        this.ScreenShake = true;
        this.Vsync = true;
        this.MainVolume = 50;
        this.SoundVolume = 100;
        this.MusicVolume = 100;
        this.MuteWhenBackgroundIsRunning = true;
        let temp = SaveHelper_1.default.Load("Settings.json");
        if (temp)
            Settings.inst = temp;
    }
    static Inst() {
        if (!Settings.inst) {
            Settings.inst = new Settings();
        }
        return Settings.inst;
    }
}
exports.default = Settings;
//# sourceMappingURL=Settings.js.map