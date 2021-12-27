import { MediaManager } from "csharp";
import { ReducePowerAction } from "../Action/Common/ReducePowerAction";
import { RemoveSpecificPowerAction } from "../Action/Common/RemoveSpecificPowerAction";
import { PoisonLoseHpAction } from "../Action/Unique/PoisonLoseHpAction";
import { AttackEffect } from "../DataDefine/AttackEffect";
import DungeonManager from "../DungeonManager";
import { AtEndOfTurnMessage } from "../Events/AtEndOfTurnMessage";
import { AtStartOfTurnMessage } from "../Events/AtStartOfTurnMessage";
import FileHelper from "../FileHelper";
import { LocalizationProperty } from "../Gen/DB/Localization";
import { StringHelper } from "../StringHelper";
import AbstractCreature from "../Unit/AbstractCreature";
import { AbstractPlayer } from "../Unit/Character/AbstractPlayer";
import { AbstractPower, PowerType } from "./AbstractPower";

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

    protected AtEndOfTurn(msg: AtEndOfTurnMessage) {
        super.AtEndOfTurn(msg);
        if(this.Amount == 0){
            this.AddToBot(new RemoveSpecificPowerAction(this.Owner,this.Owner,this));
        }else{
            this.AddToBot(new ReducePowerAction(this.Owner,this.Owner,this,1));
        }
        return;
    }
}