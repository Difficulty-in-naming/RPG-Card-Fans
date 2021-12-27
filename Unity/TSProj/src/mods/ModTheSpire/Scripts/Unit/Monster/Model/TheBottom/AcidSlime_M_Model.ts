import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";


export class AcidSlime_M_Model extends MonsterInfo{
    public static Id = "AcidSlime_M"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(29, 34);
        else
            return Mathf.RandomRange(28, 32);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/slimeM/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/slimeM/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/slimeM/skeleton.png"));
    }

    get Name(): string {
        return "酸液史莱姆（中）";
    }
}