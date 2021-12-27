import { Mathf } from "../../../../Core/Module/Math/Mathf";
import DungeonManager from "../DungeonManager";
import { OnDeathMessage } from "../Events/OnDeathMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { AbstractPower, PowerType } from "./AbstractPower";

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