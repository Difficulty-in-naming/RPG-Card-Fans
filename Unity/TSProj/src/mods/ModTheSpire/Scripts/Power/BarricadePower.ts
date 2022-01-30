import DungeonManager from "../DungeonManager";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";
import { AtEndOfTurnRemoveBlockMessage } from "../Events/AtEndOfTurnRemoveBlockMessage";


export class BarricadePower extends AbstractPower{
    public static PowerID = "Barricade";
    public Id: string = BarricadePower.PowerID;
    Name: string = LocalizationProperty.Read("能力-壁垒");
    Icon = FileHelper.FormatPath("Powers/barricade.png");
    get Type() : PowerType {return PowerType.Buff;}

    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-壁垒描述"));
    }
    
    OnInit() {
        super.OnInit();
        DungeonManager.MessageManager.Add(AtEndOfTurnRemoveBlockMessage.Id,this.AtEndOfTurnRemoveBlockMessage);   
    }
    
    OnRemove() {
        super.OnRemove();
        DungeonManager.MessageManager.Remove(AtEndOfTurnRemoveBlockMessage.Id,this.AtEndOfTurnRemoveBlockMessage);
    }

    AtEndOfTurnRemoveBlockMessage(msg:AtEndOfTurnRemoveBlockMessage){
        msg.Block = 0;
    }
}