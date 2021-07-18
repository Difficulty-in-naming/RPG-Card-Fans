import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

export class GremlinWarrior_Model extends MonsterInfo{
    public static Id = "GremlinWarrior"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(21, 25);
        else
            return Mathf.RandomRange(20, 24);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/angryGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/angryGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/angryGremlin/skeleton.png"));
    }

    get Name(): string {
        return "火大地精";
    }
}