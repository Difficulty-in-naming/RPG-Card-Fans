import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import { AbstractEffect } from "../AbstractEffect";
import { SoundMaster } from "../../Audio/SoundMaster";
import DungeonManager from "../../DungeonManager";
import { HealNumberEffect } from "./HealNumberEffect";
import UIHelper from "../../UI/UIHelper";
import { ImageMaster } from "../../Helpers/ImageMaster";
import Color from "../../DataDefine/Color";
import { TimeKit } from "../../../../../Core/Utils/TimeKit";

export class HealVerticalLineEffect extends AbstractEffect{
    public Effect:FairyGUI.GLoader[]
    public Vy : number;
    public Length : number;
    public constructor(private X : number,private Y:number) {
        super();
        this.Length = Mathf.RandomRange(0,0.5);
        let tmp = Mathf.RandomRange(5,20);
        this.Vy = tmp * tmp;
        for (let index = 0; index < 3; index++) {
            let effect = this.Effect[index] = UIHelper.CreateGLoader();
            effect.rotation = 90;
            if(index == 0)
                effect.color = (Mathf.Random() < 0.5 ? Color.Chartreuse : new Color(255,255,128,255)).UnityColor;
            else
                effect.color = new Color(255,255,178,255).UnityColor;
            effect.alpha = 0;
            effect.x = X;
            effect.y = Y;
            effect.blendMode = FairyGUI.BlendMode.Add;
        }
        this.Effect[0].url = ImageMaster.STRIKE_LINE;
        this.Effect[1].url = ImageMaster.STRIKE_LINE2;
        this.Effect[2].url = ImageMaster.STRIKE_LINE2;
    }

    public Update(): void {
        if(this.Duration >= this.Length)
        {
            this.IsDone = true;
            for (let index = 0; index < this.Effect.length; index++) {
                const element = this.Effect[index];
                element.alpha = 0;
            }
            return;
        }
        this.Y += this.Vy * TimeKit.DeltaTime;
        const scale = (this.Length - this.Duration) / this.Length;

        if(this.Duration <= this.Length / 2){
            for (let index = 0; index < this.Effect.length; index++) {
                const element = this.Effect[index];
                element.SetScale(scale,scale);
                element.alpha = 1 - (this.Duration / (this.Length / 2)) + Mathf.RandomRange(0,0.2);
            }
        }
        else{
            for (let index = 0; index < this.Effect.length; index++) {
                const element = this.Effect[index];
                element.SetScale(scale,scale);
                element.alpha = this.Duration / (this.Length / 2) + Mathf.RandomRange(0,0.2);
            }
        }
    }
}