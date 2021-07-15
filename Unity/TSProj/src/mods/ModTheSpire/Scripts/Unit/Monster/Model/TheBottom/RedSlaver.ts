﻿import {MonsterInfo} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterInfo";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class RedSlaver extends MonsterInfo{
    public static Id = "RedSlaver"

    get MaxHealth(): number {
        if(DungeonManager.Inst.AdvanceLevel >= 7)
            return Mathf.RandomRange(48, 52);
        else
            return Mathf.RandomRange(46, 50);
    }
    get Loader(): ILoader {
        return new SpineLoader(FileHelper.FormatPath("Monsters/theBottom/redSlaver/skeleton.atlas"),FileHelper.FormatPath("Monsters/theBottom/redSlaver/skeleton.json"),FileHelper.FormatPath("Monsters/theBottom/redSlaver/skeleton.png"));
    }

    get Name(): string {
        return RedSlaver.Id;
    }
}