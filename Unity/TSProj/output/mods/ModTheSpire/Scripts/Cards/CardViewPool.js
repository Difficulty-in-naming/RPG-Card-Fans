"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardViewPool = void 0;
class CardViewPool {
    activeList;
    reserveList;
    numberActive;
    numberReserved;
    func;
    constructor(callback) {
        this.activeList = new Array();
        this.reserveList = new Array();
        this.numberActive = 0;
        this.numberReserved = 0;
        this.func = callback;
    }
    initializeReserve(reserve) {
        for (let i = 0; i < reserve; i++) {
            const ui = this.func();
            this.reserveList.push(ui);
        }
    }
    Pop() {
        if (this.numberReserved == 0) {
            const ui = this.func();
            this.reserveList.push(ui);
            this.numberReserved++;
        }
        const com = this.reserveList.pop();
        this.numberReserved--;
        this.activeList.push(com);
        this.numberActive++;
        return com;
    }
    Push(gameObject) {
        const index = this.activeList.indexOf(gameObject);
        if (index >= 0) {
            this.activeList.splice(index, 1);
            this.numberActive--;
            this.reserveList.push(gameObject);
            this.numberReserved++;
        }
    }
}
exports.CardViewPool = CardViewPool;
//# sourceMappingURL=CardViewPool.js.map