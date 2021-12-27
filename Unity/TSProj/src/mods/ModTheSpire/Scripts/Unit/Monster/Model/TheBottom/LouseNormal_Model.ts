import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class LouseNormal_Model extends MonsterInfo{
    public static Id = "LouseNormal"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(11,16);
        else
            return Mathf.RandomRange(10,15);
    }

    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/louseRed/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/louseRed/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/louseRed/skeleton.png"));
    }

    get Name(): string {
        return "普通型虱虫";
    }
}