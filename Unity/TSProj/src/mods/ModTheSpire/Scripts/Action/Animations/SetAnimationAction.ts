import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";

export class SetAnimationAction extends AbstractGameAction{
    Type = ActionType.WAIT;
    public constructor(public Owner :AbstractCreature,public AnimationName:string) {
        super();
    }

    async Update(): Promise<boolean> {
        this.Owner.SetAnimation(this.AnimationName,false);
        this.Owner.AddAnimation("idle",true);
        return super.Update();
    }
}