import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class Hexaghost_Model extends MonsterInfo{
    public static Id = "Hexaghost"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 9)
            return 264;
        else
            return 250;
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/boss/guardian/skeleton.png"));
    }

    get Name(): string {
        return "怪物-六火亡魂";
    }
}