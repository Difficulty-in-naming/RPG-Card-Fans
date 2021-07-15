﻿import {View_TopBar} from "mods/ModTheSpire/Scripts/Gen/View/ModTheSpire_TopBar";
import {AbstractPlayer} from "mods/ModTheSpire/Scripts/Unit/Character/AbstractPlayer";
import {UI_MasterDeckView} from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_MasterDeckView";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {PlayerInfo} from "mods/ModTheSpire/Scripts/Unit/Character/PlayerInfo";

export default class UI_TopBar extends View_TopBar
{
    private CharacterInfo : PlayerInfo
    private Player : AbstractPlayer
    OnInit(...args) {
        super.OnInit(...args);
        this.Player = DungeonManager.Inst.Player;
        this.CharacterInfo = this.Player.CharacterInfo;
        this.ClassName.text = this.CharacterInfo.Name;
        if(this.Player.AdvanceLevel > 0){
            this.Advance.visible = true;
            this.AdvanceLevel.text = this.Player.AdvanceLevel.toString();
        }
        this.Deck.asButton.onClick.Set(()=>{
            if(UI_MasterDeckView.GetInstance())
                UI_MasterDeckView.GetInstance().CloseMySelf()
            else
                UI_MasterDeckView.CreatePanel();
        })
    }
    OnUpdate() {
        this.Health.GetChild("Health").asTextField.SetVar("Health",this.Player.Health + "/" + this.Player.MaxHealth).FlushVars();
        this.Gold.GetChild("Gold").asTextField.SetVar("Gold",this.CharacterInfo.Gold.toString()).FlushVars();
        this.PotionList.RemoveChildrenToPool(this.Player.PotionSlots,-1);
        for (let i = 0; i < this.Player.PotionSlots; i++) {
            
        }
    }
}