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
        this.Cancel.onClick.Add(()=>{
            UI_SelectGameMode.CreatePanel();
            this.CloseMySelf();
        });
    }
    
    InitPlayerList(){
        AllPlayer.forEach(value => {
            let item = this.CharList.AddItemFromPool().asButton;
            item.icon = value.CharSelectButton;
            item.data = value;
            item.onClick.Add(()=>{
                this.CharBg.visible = true;
                this.AdvanceSettings.visible = true;
                this.CharBg.icon = value.Portrait;
                this.CharDesc.text = value.Description;
                this.CharName.text = value.Name;
                this.CharGroup.visible = true;
                this.Health.SetVar("Health",value.Health.toString()).FlushVars();
                this.Gold.SetVar("Gold",value.Gold.toString()).FlushVars();
                if(value.InitRelic.length > 0){
                    let relic = value.InitRelic[0];
                    this.Relic.url = relic.Icon
                    this.RelicName.text = relic.Name;
                    this.RelicDesc.text = relic.Desc;
                }
                this.Confirm.visible = true;
            })
        })
    }
    
    
    Close_OnClick(){

    }
}