import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

export class AcidSlime_S_Model extends MonsterInfo{
    public static Id = "AcidSlime_S"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 2)
            return Mathf.RandomRange(9, 13);
        else
            return Mathf.RandomRange(8,12);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/slimeS/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/slimeS/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/slimeS/skeleton.png"));
    }

    get Name(): string {
        return "酸液史莱姆（小）";
    }
}