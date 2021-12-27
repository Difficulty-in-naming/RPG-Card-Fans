import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import AbstractRelic from "./AbstractRelic";

export class PaperCrane extends AbstractRelic{
    public static readonly Id = "PaperCrane";
    Desc: string = LocalizationProperty.Read("纸鹤-效果描述");
    Flavor: string = LocalizationProperty.Read("纸鹤-特殊描述");
    Icon: string = FileHelper.FormatPath("Relics/paperCrane.png");
    Id: string = "PaperCrane";
    Name: string = LocalizationProperty.Read("纸鹤");
    
    OnLose() {
    }

    OnObtain() {
    }
    
}