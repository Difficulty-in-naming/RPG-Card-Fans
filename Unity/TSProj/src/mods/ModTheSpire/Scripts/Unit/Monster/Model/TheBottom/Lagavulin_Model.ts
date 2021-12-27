import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class Lagavulin_Model extends MonsterInfo{
    public static Id = "Lagavulin"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(112, 115);
        else
            return Mathf.RandomRange(109, 111);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/lagavulin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/lagavulin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/lagavulin/skeleton.png"));
    }

    get Name(): string {
        return "乐加维林";
    }
}