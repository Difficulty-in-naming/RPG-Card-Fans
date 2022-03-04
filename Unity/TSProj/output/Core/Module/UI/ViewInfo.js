"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewInfo = void 0;
class ViewInfo {
    pkg;
    name;
    constructor(pkg, name) {
        this.pkg = pkg;
        this.name = name;
    }
    toString() {
        return this.pkg + "." + this.name;
    }
}
exports.ViewInfo = ViewInfo;
//# sourceMappingURL=ViewInfo.js.map