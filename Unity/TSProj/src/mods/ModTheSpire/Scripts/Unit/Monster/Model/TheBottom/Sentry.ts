import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class Sentry extends MonsterInfo{
    public static Id = "Sentry"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(39, 45);
        else
            return Mathf.RandomRange(38, 42);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/sentry/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/sentry/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/sentry/skeleton.png"));
    }

    get Name(): string {
        return Sentry.Id;
    }
}