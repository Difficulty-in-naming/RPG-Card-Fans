import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class GremlinFat extends MonsterInfo{
    public static Id = "GremlinFat"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(14, 18);
        else
            return Mathf.RandomRange(13, 17);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/fatGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/fatGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/fatGremlin/skeleton.png"));
    }

    get Name(): string {
        return GremlinFat.Id;
    }
}