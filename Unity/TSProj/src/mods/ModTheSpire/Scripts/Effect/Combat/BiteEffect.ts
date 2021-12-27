import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import Color from "../../DataDefine/Color";
import { View_BiteEffect } from "../../Gen/View/ModTheSpire_Effect";
import { AbstractEffect } from "../AbstractEffect";

export class BiteEffect extends AbstractEffect{
    private Instance:FairyGUI.GComponent;
    private Top:FairyGUI.GImage;
    private Bot:FairyGUI.GImage;
    public constructor(public X:number,public Y:number,public color?:Color) {
        super();
        this.Instance = <FairyGUI.GComponent>View_BiteEffect.CreateInstance();
        this.Top = this.Instance.GetChild("Top").asImage;
        this.Bot = this.Instance.GetChild("Bot").asImage;
        if(!color) {
            this.color = new Color(179,230,255,255); 
        }
        this.Top.color = color.UnityColor();
        this.Bot.color = color.UnityColor();
    }
    
    Update() {
        this.Top.SetScale(1 + Mathf.RandomRange(-0.05,0.05),1 + Mathf.RandomRange(-0.05,0.05));
        this.Bot.SetScale(1 + Mathf.RandomRange(-0.05,0.05),1 + Mathf.RandomRange(-0.05,0.05));
        if(this.Duration >= 1)
            this.IsDone = true;
    }
}