import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import {AtEndOfTurnMessage} from "mods/ModTheSpire/Scripts/Events/AtEndOfTurnMessage";
import {RemoveSpecificPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/RemoveSpecificPowerAction";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {OnPreUseCardMessage} from "mods/ModTheSpire/Scripts/Events/OnPreUseCardMessage";
import {SoundMaster} from "mods/ModTheSpire/Scripts/Audio/SoundMaster";
import {CardType} from "mods/ModTheSpire/Scripts/Cards/AbstractCard";

export class EntanglePower extends AbstractPower{
    public static readonly Id = "Entangle"
    Icon: string = FileHelper.FormatPath("Powers/entangle.png");
    Id: string = "Entangle";
    Name: string = LocalizationProperty.Read("能力-缠身");
    get Type(): PowerType {
        return PowerType.Debuff;
    }

    OnInit() {
        super.OnInit();
        DungeonManager.MessageManager.Add(OnPreUseCardMessage.Id,this.PreUseCard)
    }
    
    OnRemove() {
        super.OnRemove();
        DungeonManager.MessageManager.Remove(OnPreUseCardMessage.Id,this.PreUseCard)
    }

    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-缠身描述"));
    }

    PlayApplyPowerSfx() {
        SoundMaster.PlayVoice("POWER_ENTANGLED",0.05);
    }
    
    PreUseCard(msg: OnPreUseCardMessage) {
        if(msg.Card.Type == CardType.ATTACK)
            msg.CanUse = false;
    }

    protected AtEndOfTurn(msg: AtEndOfTurnMessage) {
        if(msg.unit.GetPower(this.Id)){
            this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
        }
    }
}