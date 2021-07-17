import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

export class GremlinTsundere_Model extends MonsterInfo{
    public static Id = "GremlinTsundere"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(13, 17);
        else
            return Mathf.RandomRange(12, 15);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.png"));
    }

    get Name(): string {
        return LocalizationProperty.Read("持盾地精");
    }
}