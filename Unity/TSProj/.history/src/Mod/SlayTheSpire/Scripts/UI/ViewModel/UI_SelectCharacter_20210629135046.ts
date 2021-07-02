import {View_SelectCharacter} from "../../Gen/View/ModTheSpire_SelectCharacter";
import {UI_SelectGameMode} from "./UI_SelectGameMode";
import Ironclad from "../../Character/Ironclad";
import AbstractPlayer, {AllPlayer} from "../../Character/AbstractPlayer";
import {FairyGUI} from 'csharp'
import {LocalizationProperty} from "../../Gen/DB/Localization";
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
        this.Cancel.onClick.Add(()=> {
            UI_SelectGameMode.CreatePanel();
            this.CloseMySelf();
        });
        this.Confirm.onClick.Add(()=>{
            this.CloseMySelf();
        })
    }
    
    InitPlayerList(){
        AllPlayer.forEach(value => {
            let item = this.CharList.AddItemFromPool().asButton;
            item.icon = value.CharSelectButton;
            item.data = value;
            item.onClick.Add(()=>{
                this.CharBg.visible = true;
                this.CharBg.icon = value.Portrait;
                this.CharDesc.text = LocalizationProperty.Read(value.Description);
                this.CharName.text = LocalizationProperty.Read(value.Name);
                this.AdvanceSettings.visible = true;
                this.CharGroup.visible = true;
                this.SelectCharTitle.visible = false;
                this.Health.SetVar("Health",value.Health.toString()).FlushVars();
                this.Gold.SetVar("Gold",value.Gold.toString()).FlushVars();
                if(value.InitRelic.length > 0) {
                    let relic = value.InitRelic[0];
                    this.Relic.icon = relic.Icon;
                    this.RelicName.text = LocalizationProperty.Read(relic.Name);
                    this.RelicDesc.text = LocalizationProperty.Read(relic.Desc);
                }
                this.Confirm.visible = true;
            })
        })
    }
    
}