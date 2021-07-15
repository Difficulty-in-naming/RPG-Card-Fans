import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import Async from "Core/Async";

export class AnimateSlowAttackAction extends AbstractGameAction{
    constructor(public owner : AbstractCreature) {
        super();
        this.Type = ActionType.WAIT;
    }

    async Update(): Promise<boolean> {
        this.owner.PlaySlowAttack();
        await Async.Delay(500);
        return true;
    }
}