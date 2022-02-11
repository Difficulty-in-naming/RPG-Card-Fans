"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombatRoom = void 0;
const UI_BottomScene_1 = require("../UI/ViewModel/UI_BottomScene");
const UI_Combat_1 = require("../UI/ViewModel/UI_Combat");
const UI_TopBar_1 = require("../UI/ViewModel/UI_TopBar");
const AbstractRoom_1 = require("./AbstractRoom");
class CombatRoom extends AbstractRoom_1.AbstractRoom {
    //房间类型
    Phase = AbstractRoom_1.RoomPhase.Combat;
    //手牌
    HandPile;
    //抽牌堆
    DrawPile;
    //消耗牌堆
    ExhaustPile;
    //弃牌堆
    DiscardPile;
    //特殊牌堆
    SpecialPile;
    CurrentEnergy = 0;
    MaxEnergy = 0;
    UsingCard; //点击中的卡牌.准备使用
    Round = 1;
    Enter() {
        this.HandPile = new Array();
        this.DrawPile = new Array();
        this.ExhaustPile = new Array();
        this.DiscardPile = new Array();
        this.SpecialPile = new Array();
        let x = UI_BottomScene_1.UI_BottomScene.CreatePanel();
        let top = UI_TopBar_1.default.CreatePanel();
        let combat = UI_Combat_1.UI_Combat.CreatePanel();
    }
    End() {
    }
}
exports.CombatRoom = CombatRoom;
//# sourceMappingURL=CombatRoom.js.map