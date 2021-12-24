import { FairyGUI, SuperText } from "csharp";
import {View_SpeechBubble} from "mods/ModTheSpire/Scripts/Gen/View/ModTheSpire_Effect";
import UIHelper from "mods/ModTheSpire/Scripts/UI/UIHelper";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";

export class MegaSpeechBubble extends AbstractEffect{
    private Instance : FairyGUI.GComponent;
    private Bg : FairyGUI.GImage;
    private SuperText:SuperText;
    public constructor(private X:number,private Y:number,private Msg:string,private Interval?:number,private FlipX? : boolean) {
        super();
        this.Instance = <FairyGUI.GComponent>View_SpeechBubble.CreateInstance();
        this.Bg = this.Instance.GetChild("Bg").asImage;
        if(FlipX)
            this.Bg.flip = FairyGUI.FlipType.Horizontal;
        let graph = this.Instance.GetChild("Holder").asGraph;
        this.SuperText = UIHelper.CreateSuperText();
        let wrap = new FairyGUI.GoWrapper(this.SuperText.gameObject);
        wrap.SetScale(100,100)
        this.SuperText.color = Color.Gray.UnityColor();
        this.SuperText.text = `{speechsize}{offset}${Msg}{/offset}{/speechsize}`;
        this.SuperText.lineSpacing = -50;
        this.SuperText.Width = 2;
        graph.SetNativeObject(wrap);
        this.Instance.GetTransition("t0").Play();
    }
    Update() {
        super.Update();
        this.SuperText.alpha = this.Bg.alpha;
        if(this.Duration >= this.Interval)
            this.IsDone = true;
    }
}



