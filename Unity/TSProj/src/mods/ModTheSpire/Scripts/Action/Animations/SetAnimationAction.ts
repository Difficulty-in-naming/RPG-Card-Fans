import AbstractCreature from "../../Unit/AbstractCreature";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

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