"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomType = exports.MapRoomNode = void 0;
class MapRoomNode {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
        this.Next = new Array();
        this.Prev = new Array();
        this.RoomType = RoomType.MONSTER;
    }
    Connect(node) {
        node.Prev.push(this);
        this.Next.push(node);
    }
}
exports.MapRoomNode = MapRoomNode;
var RoomType;
(function (RoomType) {
    RoomType["MONSTER"] = "monster";
    RoomType["EVENT"] = "event";
    RoomType["CHEST"] = "chest";
    RoomType["ELITE"] = "elite";
    RoomType["REST"] = "rest";
    RoomType["SHOP"] = "shop";
})(RoomType = exports.RoomType || (exports.RoomType = {}));
//# sourceMappingURL=MapRoomNode.js.map