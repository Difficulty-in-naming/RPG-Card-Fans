import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class GremlinTsundere extends MonsterInfo{
    public static Id = "GremlinTsundere"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(29, 34);
        else
            return Mathf.RandomRange(28, 32);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.png"));
    }

    get Name(): string {
        return GremlinTsundere.Id;
    }
}