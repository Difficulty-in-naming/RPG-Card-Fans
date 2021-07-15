import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class TheGuardian extends MonsterInfo{
    public static Id = "TheGuardian"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 9)
            return 250;
        else
            return 240;
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.png"));
    }

    get Name(): string {
        return TheGuardian.Id;
    }
}