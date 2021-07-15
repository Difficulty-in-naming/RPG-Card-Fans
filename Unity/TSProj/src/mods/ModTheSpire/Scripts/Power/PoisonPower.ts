import {AbstractPower, PowerType} from "mods/ModTheSpire/Scripts/Power/AbstractPower";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {MediaManager} from "csharp";
import {AbstractPlayer} from "mods/ModTheSpire/Scripts/Unit/Character/AbstractPlayer";
import {StringHelper} from "mods/ModTheSpire/Scripts/StringHelper";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import {AttackEffect} from "mods/ModTheSpire/Scripts/DataDefine/AttackEffect";
import {PoisonLoseHpAction} from "mods/ModTheSpire/Scripts/Action/Unique/PoisonLoseHpAction";
import {AtStartOfTurnMessage} from "mods/ModTheSpire/Scripts/Events/AtStartOfTurnMessage";

export class PoisonPower extends AbstractPower{
    public static PowerID = "Poison";
    Name: string = LocalizationProperty.Read("能力-中毒");
    Icon = FileHelper.FormatPath("Powers/poison.png");
    Id = PoisonPower.PowerID;
    get Type() : PowerType {return PowerType.Debuff;}
    
    public constructor(owner : AbstractCreature,source:AbstractCreature,amount:number) {
        super();
        this.Owner = owner;
        this.Source = source;
        this.Amount += amount;
    }
    
    GetDescription(...args: any[]): string {
        if(this.Owner instanceof AbstractPlayer)
            return StringHelper.FormatColorString(LocalizationProperty.Read("能力-中毒描述(玩家)")).format(this.Amount);
        else
            return StringHelper.FormatColorString(LocalizationProperty.Read("能力-中毒描述(敌人)")).format(this.Amount);
    }
    
    PlayApplyPowerSfx() {
        MediaManager.PlayVoice("Audio/sound/STS_SFX_PoisonApply_v1.ogg");
    }

    protected AtStartOfTurn(msg: AtStartOfTurnMessage) {
        super.AtStartOfTurn(msg);
        if(DungeonManager.Inst.CurrentRoom.Monsters?.AreMonstersBasicallyDead()){
            this.Flash(true);
            this.AddToBot(new PoisonLoseHpAction(this.Owner,this.Source,this.Amount,AttackEffect.POISON));
        }
    }
}