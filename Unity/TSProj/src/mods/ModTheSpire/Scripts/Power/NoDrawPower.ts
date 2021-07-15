import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {AtEndOfTurnMessage} from "mods/ModTheSpire/Scripts/Events/AtEndOfTurnMessage";
import {RemoveSpecificPowerAction} from "mods/ModTheSpire/Scripts/Action/Common/RemoveSpecificPowerAction";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

export class NoDrawPower extends AbstractPower{
    Name: string = LocalizationProperty.Read("能力-无法抽牌");
    Icon: string = FileHelper.FormatPath("Powers/noDraw.png");
    Id: string = "No Draw";
    get Type() : PowerType {return PowerType.Debuff;}
    CanStack = false;
    GetDescription(...args: any[]): string {
        return LocalizationProperty.Read("能力-无法抽牌描述");
    }
    
    public constructor(public Owner:AbstractCreature) {
        super();
    }

    protected AtEndOfTurn(msg: AtEndOfTurnMessage) {
        super.AtEndOfTurn(msg);
        if(msg.IsPlayer){
            this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this))
        }
    }
}