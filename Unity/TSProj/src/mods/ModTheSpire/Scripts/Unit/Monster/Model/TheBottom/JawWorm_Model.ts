import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class JawWorm_Model extends MonsterInfo{
    public static Id = "JawWorm"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(42,46);
        else
            return Mathf.RandomRange(40,44);
    }
    
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/jawWorm/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/jawWorm/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/jawWorm/skeleton.png"));
    }

    get Name(): string {
        return "大颚虫";
    }
}