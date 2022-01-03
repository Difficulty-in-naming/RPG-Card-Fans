"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmamentsAction = void 0;
var DungeonManager_1 = require("../../DungeonManager");
var AbstractGameAction_1 = require("../AbstractGameAction");
class ArmamentsAction extends AbstractGameAction_1.default {
    constructor(upgraded) {
        super();
        this.upgraded = upgraded;
        this.cannotUpgrade = new Array();
        this.Type = AbstractGameAction_1.ActionType.CARD_MANIPULATION;
        this.p = DungeonManager_1.default.Inst.Player;
    }
    async Update() {
        if (this.upgraded) {
            this.p.Hand.Group.forEach((item) => {
                if (item.CanUpgrade()) {
                    item.Upgrade();
                    item.SuperFlash();
                }
            });
            return true;
        }
        this.p.Hand.Group.forEach((item) => {
            if (!item.CanUpgrade()) {
                this.cannotUpgrade.push(item);
            }
        });
        if (this.p.Hand.Group.length - this.cannotUpgrade.length == 1) {
            this.p.Hand.Group.forEach((item) => {
                if (item.CanUpgrade()) {
                    item.Upgrade();
                    item.SuperFlash();
                }
            });
            return true;
        }
    }
}
exports.ArmamentsAction = ArmamentsAction;
//# sourceMappingURL=ArmamentsAction.js.map