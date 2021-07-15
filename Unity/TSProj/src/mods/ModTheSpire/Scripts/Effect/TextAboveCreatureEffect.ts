import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import { FairyGUI } from "csharp";
import {View_TextAboveEffect} from "mods/ModTheSpire/Scripts/Gen/View/ModTheSpire_Effect";

export class TextAboveCreatureEffect extends AbstractEffect{
    private Interval = 2.2;
    private TargetOffestY = 80;
    public TextComponent:FairyGUI.GComponent;
    public constructor(private x:number,private y:number,private msg:string,private targetColor:Color) {
        super();
        this.TextComponent = <FairyGUI.GComponent>View_TextAboveEffect.CreateInstance();
        this.TextComponent.SetPosition(x,y,0);
        this.TextComponent.text = msg;
        let transition = this.TextComponent.GetTransition("t0");
        transition.SetValue("FromColor",targetColor.UnityColor());
        transition.Play(1,0,()=>{
            this.IsDone = true;
        });
    }
}