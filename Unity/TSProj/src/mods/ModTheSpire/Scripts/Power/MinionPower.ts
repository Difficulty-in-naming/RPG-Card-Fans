import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

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