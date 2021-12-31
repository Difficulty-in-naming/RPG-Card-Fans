"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeKit_1 = require("../../Utils/TimeKit");
class QueueMessageKit {
    waiting;
    list = new Array();
    currentRunning;
    AddToBottom(func) {
        this.list.splice(0, 0, func);
    }
    AddToTop(func) {
        this.list.push(func);
    }
    Remove(func) {
        this.list = this.list.filter(item => item == func);
    }
    async Update() {
        if (this.waiting && this.currentRunning) {
            this.currentRunning += TimeKit_1.TimeKit.DeltaTime;
            return;
        }
        let action = this.currentRunning == undefined ? this.list.pop() : this.currentRunning;
        if (action) {
            if (this.currentRunning != action) {
                action.Init();
                this.currentRunning = action;
            }
            this.waiting = true;
            let result = await action.Update();
            this.waiting = false;
            if (result) {
                this.currentRunning = null;
            }
        }
    }
}
exports.default = QueueMessageKit;
//# sourceMappingURL=QueueMessageKit.js.map