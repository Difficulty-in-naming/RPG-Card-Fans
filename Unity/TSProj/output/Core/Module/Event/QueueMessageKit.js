"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractGameAction_1 = require("../../../mods/ModTheSpire/Scripts/Action/AbstractGameAction");
const GainBlockAction_1 = require("../../../mods/ModTheSpire/Scripts/Action/Common/GainBlockAction");
const HealAction_1 = require("../../../mods/ModTheSpire/Scripts/Action/Common/HealAction");
const UseCardAction_1 = require("../../../mods/ModTheSpire/Scripts/Action/Utility/UseCardAction");
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
    ClearPostCombatActions() {
        for (let index = this.list.length - 1; index >= 0; index--) {
            const e = this.list[index];
            if (e instanceof HealAction_1.default || e instanceof GainBlockAction_1.default || e instanceof UseCardAction_1.UseCardAction || e.Type == AbstractGameAction_1.ActionType.DAMAGE)
                continue;
            this.list.splice(index, 1);
        }
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