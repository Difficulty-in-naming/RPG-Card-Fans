import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class SpikeSlime_L_Model extends MonsterInfo{
    public static Id = "SpikeSlime_L"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(67, 73);
        else
            return Mathf.RandomRange(64, 70);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/slimeAltL/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/slimeAltL/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/slimeAltL/skeleton.png"));
    }

    get Name(): string {
        return "尖刺史莱姆（大）";
    }
}