"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverMessageKit = void 0;
class ObserverMessageKit {
    map = new Map();
    Add(key, func) {
        let list = this.map[key];
        if (!list) {
            list = new Array();
            this.map.set(key, list);
        }
        list.push(func);
    }
    Remove(key, func) {
        let list = this.map[key];
        if (list) {
            this.map[key] = list.filter(item => item == func);
        }
    }
    Send(key, message, ...args) {
        let list = this.map[key];
        if (list) {
            this.map[key].forEach(item => {
                item(message, args);
            });
        }
    }
}
exports.ObserverMessageKit = ObserverMessageKit;
//# sourceMappingURL=ObserverMessageKit.js.map