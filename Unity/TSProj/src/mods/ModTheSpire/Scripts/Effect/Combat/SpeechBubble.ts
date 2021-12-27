import { FairyGUI, SuperText } from "csharp";
import Color from "../../DataDefine/Color";
import { View_SpeechBubble } from "../../Gen/View/ModTheSpire_Effect";
import UIHelper from "../../UI/UIHelper";
import { AbstractEffect } from "../AbstractEffect";


export class SpeechBubble extends AbstractEffect{
    private Instance : FairyGUI.GComponent;
    private Bg : FairyGUI.GImage;
    private SuperText:SuperText;
    public constructor(private X:number,private Y:number,private Msg:string,private Interval?:number,private FlipX? : boolean) {
        super();
        this.Instance = <FairyGUI.GComponent>View_SpeechBubble.CreateInstance();
        this.Bg = this.Instance.GetChild("Bg").asImage;
        if(FlipX)
            this.Bg.flip = FairyGUI.FlipType.Horizontal;
        this.Instance.SetPosition(X,Y,0);
        let graph = this.Instance.GetChild("Holder").asGraph;
        this.SuperText = UIHelper.CreateSuperText();
        let wrap = new FairyGUI.GoWrapper(this.SuperText.gameObject);
        wrap.SetScale(100,100)
        this.SuperText.color = Color.Gray.UnityColor();
        this.SuperText.text = `<shake>${Msg}</shake>`;
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