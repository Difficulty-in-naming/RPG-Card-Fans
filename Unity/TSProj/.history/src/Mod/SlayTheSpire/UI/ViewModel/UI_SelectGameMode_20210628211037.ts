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
    }
}
