import {View_SelectCharacter} from "../../Gen/View/ModTheSpire_SelectCharacter";
import {UI_SelectGameMode} from "./UI_SelectGameMode";
import EffectKit from "mods/ModTheSpire/Scripts/Effect/EffectKit";
import {ShakeDur, ShakeIntensity, ShakeScreen} from "mods/ModTheSpire/Scripts/Effect/ShakeScreen";
import { Mathf } from "Core/Module/Math/Mathf";
import {FadeScreenEffect} from "mods/ModTheSpire/Scripts/Effect/FadeScreenEffect";
import {UI_Title} from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_Title";
import {AbstractPlayer} from "mods/ModTheSpire/Scripts/Unit/Character/AbstractPlayer";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import Rand from "Core/Module/RandomGenerator";
import UI_TopBar from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_TopBar";
import {AllPlayer} from "mods/ModTheSpire/Scripts/Unit/Character/PlayerInfo";
import {UI_BottomScene} from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_BottomScene";

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
                this.SelectCharTitle.visible = false;
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
                this.Confirm.GetTransition("Enter").Play();
                this.Confirm.onClick.Set(()=>{
                    this.View.touchable = false;
                    this.Confirm.GetTransition("Enter").PlayReverse();
                    new FadeScreenEffect(true,()=>{
                        this.CloseMySelf();
                        //UI_SelectGameMode.GetInstance()?.CloseMySelf();
                        UI_Title.GetInstance()?.CloseMySelf();
                        DungeonManager.NewGame(
                            value,
                            Mathf.Floor(Mathf.RandomRange(-50000000,50000001)).toString()
                        );
                        UI_TopBar.CreatePanel();
                        UI_BottomScene.CreatePanel();
                    });
                })
                let rotation = Mathf.Floor(Mathf.RandomRange(0,2));
                EffectKit.Inst().Play(new ShakeScreen(ShakeIntensity.MED, ShakeDur.SHORT,{Vertical: rotation == 0,Horizontal: rotation == 1}))
            })
        })
    }
    
    
    Close_OnClick(){

    }
}