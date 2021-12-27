import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";


export class GremlinFat_Model extends MonsterInfo{
    public static Id = "GremlinFat"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(14, 18);
        else
            return Mathf.RandomRange(13, 17);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/fatGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/fatGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/fatGremlin/skeleton.png"));
    }

    get Name(): string {
        return "胖地精";
    }
}