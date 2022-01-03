"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRoom = exports.RoomPhase = void 0;
var RoomPhase;
(function (RoomPhase) {
    RoomPhase[RoomPhase["Combat"] = 0] = "Combat";
    RoomPhase[RoomPhase["Event"] = 1] = "Event";
    RoomPhase[RoomPhase["COMPLETE"] = 2] = "COMPLETE";
    RoomPhase[RoomPhase["INCOMPLETE"] = 3] = "INCOMPLETE";
})(RoomPhase = exports.RoomPhase || (exports.RoomPhase = {}));
class AbstractRoom {
    constructor() {
        //如果要制作怪物房间.请继承该变量为1.
        this.Round = 0;
    }
    AddReward(reward) { }
}
exports.AbstractRoom = AbstractRoom;
//# sourceMappingURL=AbstractRoom.js.map