import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class Looter_Model extends MonsterInfo{
    public static Id = "Looter"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(46,50);
        else
            return Mathf.RandomRange(44,48);
    }

    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/looter/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/looter/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/looter/skeleton.png"));
    }

    get Name(): string {
        return "抢劫的";
    }
}