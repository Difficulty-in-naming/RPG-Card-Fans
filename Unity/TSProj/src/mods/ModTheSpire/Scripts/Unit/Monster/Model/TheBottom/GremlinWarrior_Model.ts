import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class GremlinWarrior_Model extends MonsterInfo{
    public static Id = "GremlinWarrior"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(21, 25);
        else
            return Mathf.RandomRange(20, 24);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/angryGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/angryGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/angryGremlin/skeleton.png"));
    }

    get Name(): string {
        return "火大地精";
    }
}