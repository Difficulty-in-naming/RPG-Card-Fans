import { ApplyPowerAction } from "../Action/Common/ApplyPowerAction";
import { CardType } from "../Cards/AbstractCard";
import DungeonManager from "../DungeonManager";
import { OnUseCardMessage } from "../Events/OnUseCardMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";
import { StrengthPower } from "./StrengthPower";


export class AngerPower extends AbstractPower{
    Icon: string = FileHelper.FormatPath("Powers/anger.png");
    Id: string = "Anger";
    Name: string = LocalizationProperty.Read("能力-激怒");
    get Type(): PowerType {
        return PowerType.Buff;
    }

    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-激怒描述")).format(this.Amount);
    }
    
    OnInit() {
        super.OnInit();
        DungeonManager.MessageManager.Add(OnUseCardMessage.Id,this.OnUseCard)
    }
    
    OnRemove() {
        super.OnRemove();
        DungeonManager.MessageManager.Remove(OnUseCardMessage.Id,this.OnUseCard)
    }
    
    public OnUseCard(msg:OnUseCardMessage){
        if(msg.Card.Type == CardType.SKILL){
            this.AddToTop(new ApplyPowerAction(this.Owner,this.Owner,new StrengthPower(),this.Amount));
            this.Flash();
        }
    }
}