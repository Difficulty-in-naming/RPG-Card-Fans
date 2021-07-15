import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class Hexaghost extends MonsterInfo{
    public static Id = "Hexaghost"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 9)
            return 264;
        else
            return 250;
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.png"));
    }

    get Name(): string {
        return Hexaghost.Id;
    }
}