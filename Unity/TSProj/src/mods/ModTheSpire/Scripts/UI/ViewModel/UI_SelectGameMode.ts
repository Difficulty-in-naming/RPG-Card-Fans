import { FairyGUI } from "csharp";
import { LocalizationProperty } from "../../Gen/DB/Localization";
import { View_MainMenuPanel } from "../../Gen/View/ModTheSpire_MainMenuPanel";
import { UI_SelectCharacter } from "./UI_SelectCharacter";
import { UI_Title } from "./UI_Title";


export class UI_SelectGameMode extends View_MainMenuPanel
{
    OnInit(...args) {
        super.OnInit(...args);
        this.InitList();
        
        this.Cancel.onClick.Add(()=>this.Close.Play(1,0,()=>{
            this.CloseMySelf();
            (<UI_Title>UI_Title.GetInstance()).MainMenuEnter.Play();
        }));
    }
    
    InitList()
    {
        let item = <FairyGUI.GComponent>this.List.AddItemFromPool();
        item.icon = "ui://ModTheSpire_MainMenuPanel/standard";
        item.text = LocalizationProperty.Read("标准模式");
        item.GetChild("description").asTextField.text = LocalizationProperty.Read("标准模式描述"); 
        item.onClick.Add(()=>{
            UI_SelectCharacter.CreatePanel();
        });
        item.GetController("Style").selectedPage = "0";
        //item.GetTransition("Enter").Play(1,Random)
        
        item = <FairyGUI.GComponent>this.List.AddItemFromPool();
        item.icon = "ui://ModTheSpire_MainMenuPanel/daily";
        item.text = LocalizationProperty.Read("每日挑战");
        item.GetChild("description").asTextField.text = LocalizationProperty.Read("每日挑战描述");
        item.GetController("Style").selectedPage = "1";
        
        item = <FairyGUI.GComponent>this.List.AddItemFromPool();
        item.icon = "ui://ModTheSpire_MainMenuPanel/loop";
        item.text = LocalizationProperty.Read("自定模式");
        item.GetChild("description").asTextField.text = LocalizationProperty.Read("自定模式描述");
        item.GetController("Style").selectedPage = "2";
    }
}
