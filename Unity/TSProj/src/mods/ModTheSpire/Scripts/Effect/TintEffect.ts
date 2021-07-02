import Color from "../DataDefine/Color";
import * as core from 'csharp'
import {Mathf} from "../../../../Core/Module/Math/Mathf";
import {AEffect} from "./AEffect";
export default class TintEffect extends AEffect
{
    private From : Color;
    private To : Color;
    private Lerp : number;
    public Value : Color;
    public TintEffect(from: Color,to: Color, lerp: number)
    {
        this.From = from;
        this.To = to;
        this.Lerp = lerp;
        this.Value = from;
    }
    
    public async Update()
    {
        this.Value.RGB[0] = Mathf.Lerp(this.From.RGB[0],this.To.RGB[0],this.Lerp);
        this.Value.RGB[1] = Mathf.Lerp(this.From.RGB[1],this.To.RGB[1],this.Lerp);
        this.Value.RGB[2] = Mathf.Lerp(this.From.RGB[2],this.To.RGB[2],this.Lerp);
        return true;
    }
}