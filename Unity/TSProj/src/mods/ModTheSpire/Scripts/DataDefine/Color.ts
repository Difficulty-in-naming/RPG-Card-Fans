import { UnityEngine } from "csharp";
import {Mathf} from "../../../../Core/Module/Math/Mathf";

export default class Color{
    public static Red : Color = new Color(255, 0, 0,255);
    public static Chartreuse : Color = new Color(128, 255, 0,255);
    public static White : Color = new Color(255, 255, 255,255)
    public R : number;
    public G : number;
    public B : number;
    public A : number;
    constructor(R:number,G:number,B:number,A:number=255) 
    {
        this.R = R;
        this.G = G;
        this.B = B;
        this.A = A;
    }
    
    public Random(min:number,max:number) : Color
    {
        this.R = Mathf.Clamp(this.R + Mathf.Floor(Mathf.RandomRange(min,max)),0,255);
        this.G = Mathf.Clamp(this.G + Mathf.Floor(Mathf.RandomRange(min,max)),0,255);
        this.B = Mathf.Clamp(this.B + Mathf.Floor(Mathf.RandomRange(min,max)),0,255);
        return this;
    }
    
    public Clone() : Color
    {
        return new Color(this.R,this.G,this.B,this.A);
    }
    
    public UnityColor() : UnityEngine.Color{
        return new UnityEngine.Color(this.R / 255,this.G / 255,this.B / 255,this.A / 255);
    }
}