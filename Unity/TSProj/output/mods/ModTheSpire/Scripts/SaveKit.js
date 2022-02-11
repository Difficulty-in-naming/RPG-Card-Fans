"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SaveKit {
    static inst;
    static Inst() {
        if (!SaveKit.inst) {
            SaveKit.inst = new SaveKit();
        }
        return SaveKit.inst;
    }
    basePath = "ModTheSpire/";
    constructor() {
    }
    Save() {
    }
}
exports.default = SaveKit;
//# sourceMappingURL=SaveKit.js.map