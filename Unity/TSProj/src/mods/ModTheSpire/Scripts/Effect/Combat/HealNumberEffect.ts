import { FairyGUI, UnityEngine } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import { AbstractEffect } from "../AbstractEffect";
import UIHelper from "../../UI/UIHelper";
import { TimeKit } from "../../../../../Core/Utils/TimeKit";
import Color from "../../DataDefine/Color";

export class HealNumberEffect extends AbstractEffect{
    public Effect:FairyGUI.GTextField
    private Vx : number;
    private Vy : number;
    private static Gravity_Y : number = -2000 ;
    public constructor(private X : number,private Y:number,private Amount:number) {
        super();
        this.Vx = Mathf.RandomRange(100,150);
        if(Mathf.Random() >= 0.5)
            this.Vx = -this.Vx;
        this.Vy = Mathf.RandomRange(400,500);
        this.Effect = UIHelper.CreateTextField();
        this.Effect.textFormat.size = 46;
        this.Effect.textFormat.shadowColor = Color.DarkGray.UnityColor;
        this.Effect.shadowOffset = new UnityEngine.Vector2(3,3);
    }

    public Update(): void {
        this.X += TimeKit.DeltaTime * this.Vx;
        this.Y += TimeKit.DeltaTime * this.Vy;
        this.Vy += TimeKit.DeltaTime * HealNumberEffect.Gravity_Y;
        let scale = (1.2 - this.Duration) / 1.2 * 3;
        if(scale <= 0)
            scale = 0.01;
        this.Effect.SetScale(scale,scale);
        this.Effect.SetPosition(this.X,this.Y,0);
    }
}