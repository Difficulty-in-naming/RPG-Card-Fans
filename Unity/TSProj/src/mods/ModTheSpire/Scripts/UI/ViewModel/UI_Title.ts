import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../../Core/Utils/TimeKit";
import EffectKit from "../../Effect/EffectKit";
import { TitleDustEffect } from "../../Effect/TitleDustEffect";
import FileHelper from "../../FileHelper";
import { View_Title } from "../../Gen/View/ModTheSpire_Title";
import UIHelper from "../UIHelper";
import { UI_SelectGameMode } from "./UI_SelectGameMode";

export class UI_Title extends View_Title
{
    private DustTimer = 0.05;
    private TopCloud : Array<TitleCloud> = new Array<TitleCloud>();
    private MidCloud : Array<TitleCloud> = new Array<TitleCloud>();
    OnInit(...args) {
        this.View.MakeFullScreen();
        this.View.Center();
        this.MainMenuEnter.Play();
        this.Start.onClick.Add(() => {
            UI_SelectGameMode.CreatePanel();
            this.MainMenuEnter.PlayReverse(null);
        });
        for (let i = 1; i <= 7; i++) {
            this.TopCloud.push(new TitleCloud(`ui://ModTheSpire_Title/topCloud${i}`,Mathf.RandomRange(10,50),Mathf.RandomRange(-1920,1920),this.TopCloudHolder));
        }
        for (let i = 1; i <= 13; i++) {
            this.MidCloud.push(new TitleCloud(`ui://ModTheSpire_Title/midCloud${i}`,Mathf.RandomRange(-50,-10),Mathf.RandomRange(-1920,1920),this.MidCloudHolder));
        }
    }

    OnUpdate() {
        this.DustTimer -= TimeKit.DeltaTime;
        if(this.DustTimer < 0){
            this.DustTimer = 0.05;
            let dust = new TitleDustEffect()
            this.DustHolder.AddChild(dust.Loader);
            EffectKit.Inst().Play(dust);
        }
        for (let i = 0; i < 7; i++) {
            this.TopCloud[i].Update();
        }
        for (let i = 0; i < 13; i++) {
            this.MidCloud[i].Update();
        }
    }
}

class TitleCloud{
    private Loader : FairyGUI.GLoader
    private Vy : number;
    private Y : number;
    public constructor(path:string,private Vx:number,private X:number,parent:FairyGUI.GComponent) {
        this.Loader = UIHelper.CreateGLoader();
        parent.AddChild(this.Loader);
        this.Y = -900 + Mathf.RandomRange(-250,250);
        this.Loader.SetPosition(this.X,this.Y,0);
        this.Loader.url = path;
        this.Vy = Mathf.RandomRange(-Vx / 10, Vx / 10);
    }
    
    public Update(){
        this.X += this.Vx * TimeKit.DeltaTime;
        this.Y += this.Vy * TimeKit.DeltaTime;
        if(this.Vx > 0 && this.Loader.x > 1920){
            this.X = -1920;
            this.Y = -900 + Mathf.RandomRange(-250,520);
            this.Vx = Mathf.RandomRange(10,50);
            this.Vy = Mathf.RandomRange(-this.Vx / 5, this.Vy /5);
        }
        else if(this.Loader.x < -1920){
            this.X = 1920;
            this.Y = -1100 + Mathf.RandomRange(-50,50);
            this.Vx = Mathf.RandomRange(10,50);
            this.Vy = Mathf.RandomRange(-this.Vx / 5, this.Vy /5);
        }
        this.Loader.SetPosition(this.X,this.Y,0);
    }
    public Dispose(){
        this.Loader.Dispose();
    }
} 


