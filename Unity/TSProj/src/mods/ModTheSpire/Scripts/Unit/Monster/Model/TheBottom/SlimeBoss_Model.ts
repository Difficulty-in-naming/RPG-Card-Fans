import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class SlimeBoss_Model extends MonsterInfo{
    public static Id = "SlimeBoss"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 9)
            return 150;
        else
            return 140;
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/boss/slime/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/boss/slime/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/boss/slime/skeleton.png"));
    }

    get Name(): string {
        return "怪物-史莱姆老大";
    }
}