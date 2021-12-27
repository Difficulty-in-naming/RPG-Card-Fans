import { RemoveSpecificPowerAction } from "../Action/Common/RemoveSpecificPowerAction";
import { SoundMaster } from "../Audio/SoundMaster";
import { CardType } from "../Cards/AbstractCard";
import DungeonManager from "../DungeonManager";
import { AtEndOfTurnMessage } from "../Events/AtEndOfTurnMessage";
import { OnPreUseCardMessage } from "../Events/OnPreUseCardMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";


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