"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_SelectGameMode = void 0;
var Localization_1 = require("../../Gen/DB/Localization");
var ModTheSpire_MainMenuPanel_1 = require("../../Gen/View/ModTheSpire_MainMenuPanel");
var UI_SelectCharacter_1 = require("./UI_SelectCharacter");
var UI_Title_1 = require("./UI_Title");
class UI_SelectGameMode extends ModTheSpire_MainMenuPanel_1.View_MainMenuPanel {
    OnInit(...args) {
        super.OnInit(...args);
        this.InitList();
        this.Cancel.onClick.Add(() => this.Close.Play(1, 0, () => {
            this.CloseMySelf();
            UI_Title_1.UI_Title.GetInstance().MainMenuEnter.Play();
        }));
    }
    InitList() {
        let item = this.List.AddItemFromPool();
        item.icon = "ui://ModTheSpire_MainMenuPanel/standard";
        item.text = Localization_1.LocalizationProperty.Read("标准模式");
        item.GetChild("description").asTextField.text = Localization_1.LocalizationProperty.Read("标准模式描述");
        item.onClick.Add(() => {
            UI_SelectCharacter_1.UI_SelectCharacter.CreatePanel();
        });
        item.GetController("Style").selectedPage = "0";
        //item.GetTransition("Enter").Play(1,Random)
        item = this.List.AddItemFromPool();
        item.icon = "ui://ModTheSpire_MainMenuPanel/daily";
        item.text = Localization_1.LocalizationProperty.Read("每日挑战");
        item.GetChild("description").asTextField.text = Localization_1.LocalizationProperty.Read("每日挑战描述");
        item.GetController("Style").selectedPage = "1";
        item = this.List.AddItemFromPool();
        item.icon = "ui://ModTheSpire_MainMenuPanel/loop";
        item.text = Localization_1.LocalizationProperty.Read("自定模式");
        item.GetChild("description").asTextField.text = Localization_1.LocalizationProperty.Read("自定模式描述");
        item.GetController("Style").selectedPage = "2";
    }
}
exports.UI_SelectGameMode = UI_SelectGameMode;
//# sourceMappingURL=UI_SelectGameMode.js.map