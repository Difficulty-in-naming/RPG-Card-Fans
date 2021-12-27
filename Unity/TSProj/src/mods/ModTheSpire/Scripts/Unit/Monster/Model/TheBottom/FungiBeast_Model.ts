import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class FungiBeast_Model extends MonsterInfo{
    public static Id = "FungiBeast"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(24, 28);
        else
            return Mathf.RandomRange(22, 28);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/fungi/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/fungi/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/fungi/skeleton.png"));
    }

    get Name(): string {
        return "真菌兽";
    }
}