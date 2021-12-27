import { TimeKit } from "../../../../Core/Utils/TimeKit";
import Color from "../DataDefine/Color";
import { AbstractEffect } from "./AbstractEffect";

export default class TintEffect extends AbstractEffect
{
    public From : Color = Color.White.Clone();
    private To : Color;
    private Lerp : number;
    public ChangeColor(to: Color, lerp: number = 3)
    {
        this.To = to;
        this.Lerp = lerp;
    }
    
    public FadeOut(){
        this.To.A = 0;
        this.Lerp = 3;
    }
    
    public Update()
    {
        this.From = this.From.Lerp(this.To,TimeKit.DeltaTime * this.Lerp);
        return true;
    }
}