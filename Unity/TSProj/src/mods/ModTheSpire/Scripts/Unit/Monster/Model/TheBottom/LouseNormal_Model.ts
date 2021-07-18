import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

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