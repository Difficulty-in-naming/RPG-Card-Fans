import { FairyGUI } from "csharp";
import { AbstractEffect } from "../Effect/AbstractEffect";
import { View_HpBlockBrokenEffect } from "../Gen/View/ModTheSpire_Effect";

export class HpBlockBrokenEffect extends AbstractEffect
{
    public Com:FairyGUI.GComponent;
    public constructor(private _X:number,private _Y:number) {
        super();
        this.Com = <FairyGUI.GComponent>View_HpBlockBrokenEffect.CreateInstance();
        this.Com.SetPosition(_X,_Y,0);    
    }
}