"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_MasterDeckView = void 0;
var AbstractCard_1 = require("../../Cards/AbstractCard");
var DungeonManager_1 = require("../../DungeonManager");
var Localization_1 = require("../../Gen/DB/Localization");
var ModTheSpire_MasterDeckView_1 = require("../../Gen/View/ModTheSpire_MasterDeckView");
var UIHelper_1 = require("../UIHelper");
class UI_MasterDeckView extends ModTheSpire_MasterDeckView_1.View_MasterDeckView {
    constructor() {
        super(...arguments);
        this.type = new Map();
    }
    OnInit(...args) {
        let number = 0;
        for (let enumMember in AbstractCard_1.CardType) {
            this.type[enumMember] = number++;
        }
        this.desc.text = Localization_1.LocalizationProperty.Read("这些牌将会出现在每一场战斗中");
        //获得顺序
        let GetOrder = this.Menu.GetChild("获得顺序").asButton;
        GetOrder.text = Localization_1.LocalizationProperty.Read("获得顺序");
        let Active = DungeonManager_1.default.Inst.Player;
        GetOrder.onClick.Add(() => {
            let state = false;
            let controller = GetOrder.GetController("SortingType");
            state = controller.selectedIndex == 0;
            if (this.List.selectedIndex == this.List.GetChildIndex(GetOrder)) {
                controller.selectedIndex = state ? 1 : 0;
            }
            let cards = new Array();
            if (state) {
                for (let i = 0; i < Active.Pile.length; i++) {
                    cards.push(Active.Pile[i]);
                }
            }
            else {
                for (let i = Active.Pile.length - 1; i >= 0; i--) {
                    cards.push(Active.Pile[i]);
                }
            }
            this.InitList(cards);
        });
        //类型
        let TypeOrder = this.Menu.GetChild("类型").asButton;
        TypeOrder.text = Localization_1.LocalizationProperty.Read("类型");
        TypeOrder.onClick.Add(() => {
            let state = false;
            let controller = TypeOrder.GetController("SortingType");
            state = controller.selectedIndex == 0;
            if (this.List.selectedIndex == this.List.GetChildIndex(TypeOrder)) {
                controller.selectedIndex = state ? 1 : 0;
            }
            let cards = new Array();
            Active.Pile.forEach(t1 => cards.push(t1));
            if (state) {
                cards.sort((t1, t2) => this.type[t1.Type] - this.type[t2.Type]);
            }
            else {
                cards.sort((t1, t2) => this.type[t2.Type] - this.type[t1.Type]);
            }
            this.InitList(cards);
        });
        //耗能
        let EnergyOrder = this.Menu.GetChild("耗能").asButton;
        EnergyOrder.text = Localization_1.LocalizationProperty.Read("耗能");
        EnergyOrder.onClick.Add(() => {
            let state = false;
            let controller = EnergyOrder.GetController("SortingType");
            state = controller.selectedIndex == 0;
            if (this.List.selectedIndex == this.List.GetChildIndex(EnergyOrder)) {
                controller.selectedIndex = state ? 1 : 0;
            }
            let cards = new Array();
            Active.Pile.forEach(t1 => cards.push(t1));
            if (state) {
                cards.sort((t1, t2) => t1.Energy - t2.Energy);
            }
            else {
                cards.sort((t1, t2) => t2.Energy - t1.Energy);
            }
            this.InitList(cards);
        });
    }
    InitList(card) {
        for (let i = 0; i < card.length; i++) {
            let value = card[i];
            let item = this.List.AddItemFromPool().asCom;
            UIHelper_1.default.InitCardObject(item, value);
        }
    }
    OnUpdate() {
        super.OnUpdate();
    }
}
exports.UI_MasterDeckView = UI_MasterDeckView;
//# sourceMappingURL=UI_MasterDeckView.js.map