import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";


export class GremlinTsundere_Model extends MonsterInfo{
    public static Id = "GremlinTsundere"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(13, 17);
        else
            return Mathf.RandomRange(12, 15);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/femaleGremlin/skeleton.png"));
    }

    get Name(): string {
        return "持盾地精";
    }
}