import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";


export class GremlinWizard_Model extends MonsterInfo{
    public static Id = "GremlinWizard"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(22, 26);
        else
            return Mathf.RandomRange(21, 25);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/wizardGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/wizardGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/wizardGremlin/skeleton.png"));
    }

    get Name(): string {
        return "地精法师";
    }
}