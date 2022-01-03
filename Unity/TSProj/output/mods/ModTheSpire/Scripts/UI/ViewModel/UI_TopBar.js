"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DungeonManager_1 = require("../../DungeonManager");
var ModTheSpire_TopBar_1 = require("../../Gen/View/ModTheSpire_TopBar");
var UI_MasterDeckView_1 = require("./UI_MasterDeckView");
class UI_TopBar extends ModTheSpire_TopBar_1.View_TopBar {
    OnInit(...args) {
        super.OnInit(...args);
        this.Player = DungeonManager_1.default.Inst.Player;
        this.CharacterInfo = this.Player.CharacterInfo;
        this.ClassName.text = this.CharacterInfo.Name;
        if (this.Player.AdvanceLevel > 0) {
            this.Advance.visible = true;
            this.AdvanceLevel.text = this.Player.AdvanceLevel.toString();
        }
        this.Deck.asButton.onClick.Set(() => {
            if (UI_MasterDeckView_1.UI_MasterDeckView.GetInstance())
                UI_MasterDeckView_1.UI_MasterDeckView.GetInstance().CloseMySelf();
            else
                UI_MasterDeckView_1.UI_MasterDeckView.CreatePanel();
        });
    }
    OnUpdate() {
        this.Health.GetChild("Health").asTextField.SetVar("Health", this.Player.Health + "/" + this.Player.MaxHealth).FlushVars();
        this.Gold.GetChild("Gold").asTextField.SetVar("Gold", this.CharacterInfo.Gold.toString()).FlushVars();
        this.PotionList.RemoveChildrenToPool(this.Player.PotionSlots, -1);
        for (let i = 0; i < this.Player.PotionSlots; i++) {
        }
    }
}
exports.default = UI_TopBar;
//# sourceMappingURL=UI_TopBar.js.map