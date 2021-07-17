import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import {AtEndOfTurnMessage} from "mods/ModTheSpire/Scripts/Events/AtEndOfTurnMessage";
import {ApplyPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/ApplyPowerAction";
import {StrengthPower} from "mods/ModTheSpire/Scripts/Power/StrengthPower";

export class RitualPower extends AbstractPower{
    Icon: string = FileHelper.FormatPath("Powers/ritual.png");
    Id: string = "Ritual";
    Name: string = LocalizationProperty.Read("能力-仪式");

    get Type(): PowerType {
        return PowerType.Buff;
    }

    public constructor(private skipFirst:boolean) {
        super();
    }
    
    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-仪式描述")).format(this.Amount);
    }

    protected AtEndOfTurn(msg: AtEndOfTurnMessage) {
        super.AtEndOfTurn(msg);
        if(this.skipFirst){
            this.skipFirst = false;
            return;
        }
        this.Flash();
        this.AddToBot(new ApplyPowerAction(this.Owner,this.Owner,new StrengthPower(),this.Amount));
    }
}