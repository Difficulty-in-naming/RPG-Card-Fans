import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { AbstractPower, PowerType } from "./AbstractPower";

export class MinionPower extends AbstractPower{
    Icon: string = FileHelper.FormatPath("Powers/minion.png");
    Id: string = "Minion";
    Name: string = LocalizationProperty.Read("能力-爪牙");
    get Type(): PowerType {
        return PowerType.Buff;
    }

    GetDescription(...args: any[]): string {
        return LocalizationProperty.Read("能力-爪牙描述");
    }
}