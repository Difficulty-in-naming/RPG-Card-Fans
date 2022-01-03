"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalSettings = void 0;
class LocalSettings {
    constructor() {
        this.DisableEffects = false;
    }
    static Inst() {
        if (!LocalSettings.inst) {
            LocalSettings.inst = new LocalSettings();
        }
        return LocalSettings.inst;
    }
}
exports.LocalSettings = LocalSettings;
//# sourceMappingURL=LocalSettings.js.map