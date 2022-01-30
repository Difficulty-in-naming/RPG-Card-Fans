import Async from "../../../../../Core/Async";
import AbstractGameAction from "../AbstractGameAction";
import AbstractCreature from '../../Unit/AbstractCreature';

export class DrawCardAction extends AbstractGameAction{
    constructor(amount : number,source : AbstractCreature=null,endTurnDraw:boolean = false,clearDrawHistory=false)
    {
        super();
    }
}