import { FairyGUI } from "csharp";
import { Mathf } from "../../../../Core/Module/Math/Mathf";
import Color from "../DataDefine/Color";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";
import { EffectOrder } from "./EffectKit";

export class LightFlareParticleEffect extends AbstractEffect
{
    private Speed : number;
    private SpeedStart : number;
    private SpeedTarget : number;
    private Rotation : number;
    private WaveIntensity : number;
    private WaveSpeed : number;
    private Scale : number;
    private Loader : FairyGUI.GLoader;
    public constructor(private X : number,private Y:number,private Color : Color){
        super();
        this.Duration = 2;
        this.Speed = this.SpeedStart = Mathf.RandomRange(200,300);
        Color.A = 0;
        this.order = EffectOrder.TOP;
        this.Rotation = Mathf.Random() * 360;
        this.SpeedTarget = Mathf.RandomRange(0.1,0.5);
        this.WaveIntensity = Mathf.RandomRange(5,10);
        this.WaveSpeed = Mathf.RandomRange(-20,20);
        this.Scale = Mathf.RandomRange(0.2,1);
        this.Loader = UIHelper.CreateGLoader();
        this.Loader.url = 
    }

    public Update(): void {
        
    }
}