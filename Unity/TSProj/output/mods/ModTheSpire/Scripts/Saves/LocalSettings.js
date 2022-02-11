"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalSettings = void 0;
class LocalSettings {
    static inst;
    static Inst() {
        if (!LocalSettings.inst) {
            LocalSettings.inst = new LocalSettings();
        }
        return LocalSettings.inst;
    }
    DisableEffects = false;
}
exports.LocalSettings = LocalSettings;
//# sourceMappingURL=LocalSettings.js.map