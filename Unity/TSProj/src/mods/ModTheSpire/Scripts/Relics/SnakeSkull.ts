import AbstractRelic from "mods/ModTheSpire/Scripts/Relics/AbstractRelic";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {PreApplyPowerMessage} from "mods/ModTheSpire/Scripts/Events/PreApplyPowerMessage";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";

export class SnakeSkull extends AbstractRelic{
    Id = "SnakeSkull"
    Name = LocalizationProperty.Read("异蛇头骨");
    Desc: string = StringHelper.FormatColorString(LocalizationProperty.Read("异蛇头骨-效果描述")).format(SnakeSkull.Effect);
    Icon: string;
    Flavor: string = LocalizationProperty.Read("异蛇头骨-特殊描述");
    public static Effect = 1;

    OnObtain() {
        DungeonManager.MessageManager.Add(PreApplyPowerMessage.Id,this.Event_WhenApplyPowerMessage)
    }
    
    Event_WhenApplyPowerMessage(msg:PreApplyPowerMessage){
        msg.StackAmount += SnakeSkull.Effect;
    }
    
    OnLose() {
        DungeonManager.MessageManager.Remove(PreApplyPowerMessage.Id,this.Event_WhenApplyPowerMessage)
    }
}