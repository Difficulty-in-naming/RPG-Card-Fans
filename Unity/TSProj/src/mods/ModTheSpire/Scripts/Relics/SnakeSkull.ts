import DungeonManager from "../DungeonManager";
import { PreApplyPowerMessage } from "../Events/PreApplyPowerMessage";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import AbstractRelic from "./AbstractRelic";

export class SnakeSkull extends AbstractRelic{
    public static Effect = 1;
    Id = "SnakeSkull"
    Name = LocalizationProperty.Read("异蛇头骨");
    Desc: string = StringHelper.FormatColorString(LocalizationProperty.Read("异蛇头骨-效果描述")).format(SnakeSkull.Effect);
    Icon: string;
    Flavor: string = LocalizationProperty.Read("异蛇头骨-特殊描述");

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