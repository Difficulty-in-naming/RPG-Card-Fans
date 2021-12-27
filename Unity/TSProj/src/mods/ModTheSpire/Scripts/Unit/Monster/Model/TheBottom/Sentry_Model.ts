import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { MonsterInfo } from "../../MonsterInfo";

export class Sentry_Model extends MonsterInfo{
    public static Id = "Sentry"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(39, 45);
        else
            return Mathf.RandomRange(38, 42);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/sentry/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/sentry/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/sentry/skeleton.png"));
    }

    get Name(): string {
        return "哨卫";
    }
}