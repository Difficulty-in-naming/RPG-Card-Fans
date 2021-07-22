import { UnityEngine } from "csharp";
import {Mathf} from "../../../../Core/Module/Math/Mathf";

export default class Color{
    public static readonly Red = new Color(255, 0, 0,255);
    public static readonly Chartreuse = new Color(128, 255, 0,255);
    public static readonly White = new Color(255, 255, 255,255);
    public static readonly Black = new Color(0, 0, 0,255);
    public static readonly Gray = new Color(127, 127, 127,255);
    public static readonly FireBrick = new Color(0,0,0,153);
    public static readonly TwoThirdsTransparentBlackColor = new Color(0,0,0,166);
    public static readonly Cream = new Color(255,246,226,255);
    public static readonly DiscardColor = new Color(138,118,155,255)
    public static readonly RedText = new Color(255,101,99,255);
    public static readonly GreenText = new Color(127,255,0,255);
    public static readonly BlueText = new Color(135,206,235,255);
    public static readonly GoldText = new Color(239,200,81,255);
    public static readonly PurpleText = new Color(238,130,238,255);
    public static readonly RedHpBarColor = new Color(204,13,13,255);
    public static readonly GreenHpBarColor = new Color(120,190,60,255);
    public static readonly BlueHpBarColor = new Color(49,86,140,255);
    public static readonly OrangeHbBarColor = new Color(255,128,0,255);
    public static readonly Royal = new Color(65, 105, 225, 255);
    public static readonly Sky = new Color(135, 206, 235, 255);
    public static readonly Cyan = new Color(0,255,255,255);
    public static readonly Orange = new Color(255,165,0,255);
    public static readonly Goldenrod = new Color(218,165,32,255) 
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
        return new UnityEngine.Color32(this.R,this.G,this.B,this.A);
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