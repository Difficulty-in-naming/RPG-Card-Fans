import {AbstractPower} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";

export class SplitPower extends AbstractPower{
    public static PowerID = "ModTheSpire_SplitPower";
    Description: string = StringHelper.FormatColorString(LocalizationProperty.Read("能力-分裂描述"));
    Name: string = LocalizationProperty.Read("能力-分裂");
    Icon: string = FileHelper.FormatPath("Powers/split.png");

    Id = SplitPower.PowerID;
    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-分裂描述")).format(this.Owner.Health);
    }

    
}