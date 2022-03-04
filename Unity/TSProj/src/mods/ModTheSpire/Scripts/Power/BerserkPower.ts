import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";
import { AtStartOfTurnMessage } from "../Events/AtStartOfTurnMessage";
import GainEnergyAction from "../Action/Common/GainEnergyAction";

export class BerserkPower extends AbstractPower{
    public static PowerID = "Barricade";
    public Id: string = BerserkPower.PowerID;
    Name: string = LocalizationProperty.Read("能力-狂暴");
    Icon = FileHelper.FormatPath("Powers/berserkPower.png");
    get Type() : PowerType {return PowerType.Buff;}
    private Energy : number;
    constructor(energy:number){
        super();
        this.Energy = energy;
    }

    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-狂暴描述"));
    }
    
    protected AtStartOfTurn(msg: AtStartOfTurnMessage): void {
        this.AddToBot(new GainEnergyAction(this.Energy));
    }
}