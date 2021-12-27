import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";


export class GremlinNob_Model extends MonsterInfo{
    public static Id = "GremlinNob"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(85, 90);
        else
            return Mathf.RandomRange(82, 86);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/nobGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/nobGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/nobGremlin/skeleton.png"));
    }

    get Name(): string {
        return "地精大块头";
    }
}