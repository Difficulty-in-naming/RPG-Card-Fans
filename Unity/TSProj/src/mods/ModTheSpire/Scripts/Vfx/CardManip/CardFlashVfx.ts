import { AbstractEffect } from "../../Effect/AbstractEffect";
import AbstractCard from '../../Cards/AbstractCard';
import Color from "../../DataDefine/Color";

export class CardFlashVfx extends AbstractEffect
{
    public constructor(public card : AbstractCard,public isSuper:boolean,c?: Color){
        super();
        this.Duration = 0.5;
        if(isSuper){
            
        }
    }
}