import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

export class JawWorm_Model extends MonsterInfo{
    public static Id = "JawWorm"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(42,46);
        else
            return Mathf.RandomRange(40,44);
    }
    
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/jawWorm/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/jawWorm/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/jawWorm/skeleton.png"));
    }

    get Name(): string {
        return LocalizationProperty.Read("大颚虫");
    }
}