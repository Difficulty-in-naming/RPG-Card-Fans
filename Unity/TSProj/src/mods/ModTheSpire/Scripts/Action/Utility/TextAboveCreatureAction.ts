import AbstractGameAction, {ActionType} from "mods/ModTheSpire/Scripts/Action/AbstractGameAction";
import AbstractCreature from "mods/ModTheSpire/Scripts/Unit/AbstractCreature";
import EffectKit from "mods/ModTheSpire/Scripts/Effect/EffectKit";
import {TextAboveCreatureEffect} from "mods/ModTheSpire/Scripts/Effect/TextAboveCreatureEffect";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";

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