import { Mathf } from "../../../../../../../Core/Module/Math/Mathf";
import DungeonManager from "../../../../DungeonManager";
import FileHelper from "../../../../FileHelper";
import { ILoader } from "../../../../Loader/ILoader";
import { SpineLoader } from "../../../../Loader/SpineLoader";
import { AbstractPower } from "../../../../Power/AbstractPower";
import { SplitPower } from "../../../../Power/SplitPower";
import { MonsterInfo } from "../../MonsterInfo";

export class AcidSlime_L_Model extends MonsterInfo{
    public static Id = "AcidSlime_L"
    private loader : ILoader;
    get InitPower(): Array<AbstractPower> {
        return new Array<AbstractPower>(new SplitPower())
    }
    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(68, 72);
        else
            return Mathf.RandomRange(65, 69);
    }
    get Loader(): ILoader {
        return this.loader ?? (this.loader = new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/slimeL/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/slimeL/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/slimeL/skeleton.png")));
    }
    get Name(): string {
        return "酸液史莱姆（大）";
    }
}