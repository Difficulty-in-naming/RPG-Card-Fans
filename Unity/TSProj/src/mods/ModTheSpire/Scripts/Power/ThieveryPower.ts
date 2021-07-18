import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import {OnDeathMessage} from "mods/ModTheSpire/Scripts/Events/OnDeathMessage";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class ThieveryPower extends AbstractPower{
    public static Id = "Thievery"; 
    Icon: string = FileHelper.FormatPath("Powers/thievery.png");
    Id: string = "Thievery";
    Name: string = LocalizationProperty.Read("能力-偷窃");
    get Type(): PowerType {
        return PowerType.Buff;
    }

    GetDescription(...args: any[]): string {
        return LocalizationProperty.Read("能力-偷窃描述");
    }

    protected OnDeath(msg: OnDeathMessage) {
        super.OnDeath(msg);
        DungeonManager.Inst.CurrentRoom.AddReward(Mathf.Clamp(this.Amount,0,Number.MAX_SAFE_INTEGER));
    }
}