import {View_SelectCharacter} from "../../Gen/View/ModTheSpire_SelectCharacter";
import {UI_SelectGameMode} from "./UI_SelectGameMode";
import AbstractPlayer, {AllPlayer} from "../../Character/AbstractPlayer";
import {FairyGUI} from 'csharp'
export class UI_SelectCharacter extends View_SelectCharacter
{
    OnEnable(...args) {
        let selectGameMode = UI_SelectGameMode.GetInstance()
        if(selectGameMode){
            selectGameMode.CloseMySelf();
        }

        this.InitUI();
        this.InitPlayerList();
    }
    
    InitUI(){
        this.Cancel.onClick.Add(this.Close_OnClick);
    }
    
    InitPlayerList(){
        AllPlayer.forEach(value => {
            let item = this.CharList.AddItemFromPool().asButton;
            item.icon = value.CharSelectButton;
            item.data = value;
            item.onClick.Add(this.CharacterButton_OnClick)
        })
    }
    
    CharacterButton_OnClick(evt : FairyGUI.EventContext){
        let button = <FairyGUI.GButton>evt.sender;
        let data : AbstractPlayer = button.data; 
        this.AdvanceSettings.visible = true;
        this.CharBg.icon = data.Portrait;
        this.CharDesc.text = data.Description;
        this.CharName.text = data.Name;
    }
    
    Close_OnClick(){
        UI_SelectGameMode.CreatePanel();
        this.CloseMySelf();
    }
}