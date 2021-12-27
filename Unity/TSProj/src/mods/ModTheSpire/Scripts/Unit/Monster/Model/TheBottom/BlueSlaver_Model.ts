import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class BlueSlaver_Model extends MonsterInfo{
    public static Id = "BlueSlaver"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(48, 52);
        else
            return Mathf.RandomRange(46, 50);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/blueSlaver/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/blueSlaver/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/blueSlaver/skeleton.png"));
    }

    get Name(): string {
        return "蓝色奴隶贩子";
    }
}