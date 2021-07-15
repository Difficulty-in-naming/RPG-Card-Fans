import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class GremlinWarrior extends MonsterInfo{
    public static Id = "GremlinWarrior"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(29, 34);
        else
            return Mathf.RandomRange(28, 32);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/angryGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/angryGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/angryGremlin/skeleton.png"));
    }

    get Name(): string {
        return GremlinWarrior.Id;
    }
}