import { FairyGUI } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import Color from "../DataDefine/Color";
import { View_PlayerTurnEffect } from "../Gen/View/ModTheSpire_Effect";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";
import { EffectOrder } from "./EffectKit";
import { LocalizationProperty } from '../Gen/DB/Localization';
import DungeonManager from '../DungeonManager';

export class PlayerTurnEffect extends AbstractEffect
{
    public constructor(private X : number,private Y:number,private Color : Color){
        super();
        let panel = View_PlayerTurnEffect.CreateInstance().asCom;
        let banner = panel.GetChild("Banner");
        let turnMessage = panel.GetChild("TurnMessage");
        banner.text = LocalizationProperty.Read("玩家回合");
        turnMessage.text = LocalizationProperty.Read("第几回合").format(DungeonManager.Inst.CurrentRoom.Round);
        DungeonManager.Inst.Player.GainEnergy
    }

    public Update(): void {
        
    }
}