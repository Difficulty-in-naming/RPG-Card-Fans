import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class GremlinNob extends MonsterInfo{
    public static Id = "GremlinNob"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(85, 90);
        else
            return Mathf.RandomRange(82, 86);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/nobGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/nobGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/nobGremlin/skeleton.png"));
    }

    get Name(): string {
        return GremlinNob.Id;
    }
}