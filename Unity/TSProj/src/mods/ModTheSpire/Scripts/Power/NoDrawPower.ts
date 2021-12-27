import { RemoveSpecificPowerAction } from "../Action/Common/RemoveSpecificPowerAction";
import { AtEndOfTurnMessage } from "../Events/AtEndOfTurnMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import AbstractCreature from "../Unit/AbstractCreature";
import { AbstractPower, PowerType } from "./AbstractPower";

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