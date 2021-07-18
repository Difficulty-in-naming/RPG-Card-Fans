import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

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