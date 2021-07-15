import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";
import {AbstractPower} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import {SplitPower} from "mods/ModTheSpire/Scripts/Power/SplitPower";
import {PoisonPower} from "mods/ModTheSpire/Scripts/Power/PoisonPower";

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
        return AcidSlime_L_Model.Id;
    }
}