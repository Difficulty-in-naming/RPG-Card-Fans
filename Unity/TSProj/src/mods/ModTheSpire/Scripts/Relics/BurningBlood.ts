import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import AbstractRelic from "./AbstractRelic";

export default class BurningBlood extends AbstractRelic
{
    Name = LocalizationProperty.Read("燃烧之血");
    Desc = LocalizationProperty.Read("燃烧之血描述");
    Icon = FileHelper.FormatPath("Relics/burningBlood.png")
    Flavor: string;
    Id: string;

    OnLose() {
    }

    OnObtain() {
    }
}