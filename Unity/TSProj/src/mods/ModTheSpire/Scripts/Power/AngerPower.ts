import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {OnUseCardMessage} from "mods/ModTheSpire/Scripts/Events/OnUseCardMessage";
import {CardType} from "mods/ModTheSpire/Scripts/Cards/AbstractCard";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {StrengthPower} from "mods/ModTheSpire/Scripts/Power/StrengthPower";

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