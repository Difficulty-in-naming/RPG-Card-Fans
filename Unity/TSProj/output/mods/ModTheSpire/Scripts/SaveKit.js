"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SaveKit {
    constructor() {
        this.basePath = "ModTheSpire/";
    }
    static Inst() {
        if (!SaveKit.inst) {
            SaveKit.inst = new SaveKit();
        }
        return SaveKit.inst;
    }
    Save() {
    }
}
exports.default = SaveKit;
//# sourceMappingURL=SaveKit.js.map