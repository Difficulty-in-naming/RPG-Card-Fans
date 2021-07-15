import AbstractRelic from "./AbstractRelic";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

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