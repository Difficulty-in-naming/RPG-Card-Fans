"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombatRoom = void 0;
var UI_BottomScene_1 = require("../UI/ViewModel/UI_BottomScene");
var UI_Combat_1 = require("../UI/ViewModel/UI_Combat");
var UI_TopBar_1 = require("../UI/ViewModel/UI_TopBar");
var AbstractRoom_1 = require("./AbstractRoom");
class CombatRoom extends AbstractRoom_1.AbstractRoom {
    constructor() {
        super(...arguments);
        //房间类型
        this.Phase = AbstractRoom_1.RoomPhase.Combat;
        this.CurrentEnergy = 0;
        this.MaxEnergy = 0;
        this.Round = 1;
    }
    Enter() {
        let x = UI_BottomScene_1.UI_BottomScene.CreatePanel();
        let top = UI_TopBar_1.default.CreatePanel();
        let combat = UI_Combat_1.UI_Combat.CreatePanel();
    }
    End() {
    }
}
exports.CombatRoom = CombatRoom;
//# sourceMappingURL=CombatRoom.js.map