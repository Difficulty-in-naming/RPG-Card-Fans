import { UnityEngine } from "csharp";
import {Mathf} from "../../../../Core/Module/Math/Mathf";

export default class Color{
    public static Red = new Color(255, 0, 0,255);
    public static Chartreuse = new Color(128, 255, 0,255);
    public static White = new Color(255, 255, 255,255);
    public static Dark = new Color(0, 0, 0,255);
    public static Gray = new Color(127, 127, 127,255);
    public static FireBrick = new Color(0,0,0,153);
    public static TwoThirdsTransparentBlackColor = new Color(0,0,0,166);
    public static Cream = new Color(255,246,226,255);
    public static DiscardColor = new Color(138,118,155,255)
    public static RedText = new Color(255,101,99,255);
    public static GreenText = new Color(127,255,0,255);
    public static BlueText = new Color(135,206,235,255);
    public static GoldText = new Color(239,200,81,255);
    public static PurpleText = new Color(238,130,238,255);
    public R : number;
    public G : number;
    public B : number;
    public A : number;
    constructor(R:number = 255,G:number = 255,B:number = 255,A:number=255) 
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

    public UnityColor32() : UnityEngine.Color32{
        return new UnityEngine.Color(this.R,this.G,this.B,this.A);
    }
    
    public ToHex():string{
        return "#" + this.R.toString(16) + this.G.toString(16) + this.B.toString(16) + this.A.toString(16);
    }
    
    public Lerp(target:Color,t:number):Color{
        this.R += t * (target.R - this.R);
        this.G += t * (target.G - this.G);
        this.B += t * (target.B - this.B);
        this.A += t * (target.A - this.A);
        return this.Clamp();
    }
    
    public Clamp():Color{
        this.R = Mathf.Clamp(this.R,0,255);
        this.G = Mathf.Clamp(this.G,0,255);
        this.B = Mathf.Clamp(this.B,0,255);
        this.A = Mathf.Clamp(this.A,0,255);
        return this;
    }
}