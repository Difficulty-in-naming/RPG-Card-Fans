﻿import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

export class GremlinWizard_Model extends MonsterInfo{
    public static Id = "GremlinWizard"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(22, 26);
        else
            return Mathf.RandomRange(21, 25);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/wizardGremlin/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/wizardGremlin/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/wizardGremlin/skeleton.png"));
    }

    get Name(): string {
        return "地精法师";
    }
}