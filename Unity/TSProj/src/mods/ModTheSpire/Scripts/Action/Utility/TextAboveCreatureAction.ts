import Color from "../../DataDefine/Color";
import EffectKit from "../../Effect/EffectKit";
import { TextAboveCreatureEffect } from "../../Effect/TextAboveCreatureEffect";
import AbstractCreature from "../../Unit/AbstractCreature";
import AbstractGameAction, { ActionType } from "../AbstractGameAction";

export class TextAboveCreatureAction extends AbstractGameAction{
    private Msg:string;
    
    public constructor(public Source:AbstractCreature,public text : (TextType|string)) {
        super();
        this.Msg = text.toString();
        this.Type = ActionType.TEXT;
    }
    
    public async Update(): Promise<boolean> {
        EffectKit.Inst().Play(new TextAboveCreatureEffect(this.Source.X,this.Source.Y,this.Msg,Color.White.Clone()))
        return true;
    }
}

export enum TextType {
    STUNNED = "打断！",
    INTERRUPTED = "击晕！"
}