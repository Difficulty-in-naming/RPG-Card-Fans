import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class TheGuardian_Model extends MonsterInfo{
    public static Id = "TheGuardian"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 9)
            return 250;
        else
            return 240;
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.png"));
    }

    get Name(): string {
        return "怪物-守护者";
    }
}