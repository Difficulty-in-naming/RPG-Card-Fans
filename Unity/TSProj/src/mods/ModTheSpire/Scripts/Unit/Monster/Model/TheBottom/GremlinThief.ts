import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class GremlinThief extends MonsterInfo{
    public static Id = "GremlinThief"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(11, 15);
        else
            return Mathf.RandomRange(10, 14);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/thiefGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/thiefGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/thiefGremlin/skeleton.png"));
    }

    get Name(): string {
        return GremlinThief.Id;
    }
}