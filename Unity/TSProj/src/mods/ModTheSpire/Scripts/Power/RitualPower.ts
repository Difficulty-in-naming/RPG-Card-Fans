import { ApplyPowerAction } from "../Action/Common/ApplyPowerAction";
import { AtEndOfTurnMessage } from "../Events/AtEndOfTurnMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";
import { StrengthPower } from "./StrengthPower";

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