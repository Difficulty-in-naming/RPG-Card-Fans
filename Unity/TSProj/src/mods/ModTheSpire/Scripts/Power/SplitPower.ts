import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import { AbstractPower, PowerType } from "./AbstractPower";

export class SplitPower extends AbstractPower{
    public static PowerID = "SplitPower";
    Name: string = LocalizationProperty.Read("能力-分裂");
    Icon: string = FileHelper.FormatPath("Powers/split.png");

    get Type(): PowerType {
        return PowerType.Buff;
    }

    Id = SplitPower.PowerID;
    GetDescription(...args: any[]): string {
        return StringHelper.FormatColorString(LocalizationProperty.Read("能力-分裂描述")).format(this.Owner.Health);
    }

    
}