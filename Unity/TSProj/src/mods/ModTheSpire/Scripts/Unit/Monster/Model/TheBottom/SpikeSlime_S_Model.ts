import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class SpikeSlime_S_Model extends MonsterInfo{
    public static Id = "SpikeSlime_S"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(11, 15);
        else
            return Mathf.RandomRange(10,14);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/slimeAltS/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/slimeAltS/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/slimeAltS/skeleton.png"));
    }

    get Name(): string {
        return "尖刺史莱姆（小）";
    }
}