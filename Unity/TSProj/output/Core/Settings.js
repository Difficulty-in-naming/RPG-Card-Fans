"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SaveHelper_1 = require("./Utils/SaveHelper");
class Settings {
    Language = "Chinese";
    Resolution = "1280x800";
    Frame = 60;
    FullScreen = false;
    BorderlessFullScreen = false;
    ScreenShake = true;
    Vsync = true;
    MainVolume = 50;
    SoundVolume = 100;
    MusicVolume = 100;
    MuteWhenBackgroundIsRunning = true;
    static inst;
    static Inst() {
        if (!Settings.inst) {
            Settings.inst = new Settings();
        }
        return Settings.inst;
    }
    constructor() {
        let temp = SaveHelper_1.default.Load("Settings.json");
        if (temp)
            Settings.inst = temp;
    }
}
exports.default = Settings;
//# sourceMappingURL=Settings.js.map