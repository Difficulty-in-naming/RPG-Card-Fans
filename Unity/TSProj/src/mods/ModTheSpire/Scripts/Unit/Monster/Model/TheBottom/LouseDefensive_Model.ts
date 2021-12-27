import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class LouseDefensive_Model extends MonsterInfo{
    public static Id = "LouseDefensive"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(12,18);
        else
            return Mathf.RandomRange(11,17);
    }

    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/louseGreen/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/louseGreen/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/louseGreen/skeleton.png"));
    }

    get Name(): string {
        return "防御型虱虫";
    }
}