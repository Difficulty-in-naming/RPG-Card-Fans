import {View_MainMenuPanel} from "../../Scripts/Gen/View/ModTheSpire_MainMenuPanel";
import {FairyGUI} from 'csharp'
import {LocalizationProperty} from "../../Scripts/Gen/DB/Localization";

export class UI_SelectGameMode extends View_MainMenuPanel
{
    OnInit(...args) {
        super.OnInit(...args);
    }
    
    InitList()
    {
        let item = <FairyGUI.GComponent>this.List.AddItemFromPool();
        item.icon = "ui://ModTheSpire_MainMenuPanel/standard";
        item.text = LocalizationProperty.Read("标准模式");
        item.GetChild("desc").asTextField.text = LocalizationProperty.Read("标准模式描述"); 

        item = <FairyGUI.GComponent>this.List.AddItemFromPool();
        item.icon = "ui://ModTheSpire_MainMenuPanel/standard";
        item.text = LocalizationProperty.Read("每日挑战");
        item.GetChild("desc").asTextField.text = LocalizationProperty.Read("每日挑战描述"); 

        item = <FairyGUI.GComponent>this.List.AddItemFromPool();
        item.icon = "ui://ModTheSpire_MainMenuPanel/standard";
        item.text = LocalizationProperty.Read("自定模式");
        item.GetChild("desc").asTextField.text = LocalizationProperty.Read("自定模式描述"); 
    }
}
