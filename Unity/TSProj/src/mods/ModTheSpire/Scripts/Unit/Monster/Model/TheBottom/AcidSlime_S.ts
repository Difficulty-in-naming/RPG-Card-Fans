import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class AcidSlime_S extends MonsterInfo{
    public static Id = "AcidSlime_S"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(9, 13);
        else
            return Mathf.RandomRange(8,12);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/slimeS/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/slimeS/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/slimeS/skeleton.png"));
    }

    get Name(): string {
        return AcidSlime_S.Id;
    }
}