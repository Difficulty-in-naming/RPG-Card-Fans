import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class Cultist_Model extends MonsterInfo{
    public static Id = "Cultist"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(50,56);
        else
            return Mathf.RandomRange(48,54);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/cultist/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/cultist/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/cultist/skeleton.png"));
    }
    
    get Name(): string {
        return "异教徒";
    }
}