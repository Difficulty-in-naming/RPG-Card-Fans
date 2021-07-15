import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class Lagavulin extends MonsterInfo{
    public static Id = "Lagavulin"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(112, 115);
        else
            return Mathf.RandomRange(109, 111);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/lagavulin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/lagavulin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/lagavulin/skeleton.png"));
    }

    get Name(): string {
        return Lagavulin.Id;
    }
}