import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class RedSlaver_Model extends MonsterInfo{
    public static Id = "RedSlaver"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(48, 52);
        else
            return Mathf.RandomRange(46, 50);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/redSlaver/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/redSlaver/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/redSlaver/skeleton.png"));
    }

    get Name(): string {
        return "奴隶贩子";
    }
}