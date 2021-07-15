import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class LouseDefensive extends MonsterInfo{
    public static Id = "LouseDefensive"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(42,46);
        else
            return Mathf.RandomRange(40,44);
    }

    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/louseGreen/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/louseGreen/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/louseGreen/skeleton.png"));
    }

    get Name(): string {
        return LouseDefensive.Id;
    }
}