import { FairyGUI, UnityEngine } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";


export class ViewComponent_HealthBar{
    private _CacheWidth = 0;
    private _Background:FairyGUI.GObject;
    private _Middle:FairyGUI.GObject;
    private _Bar:FairyGUI.GObject;
    private _Value:number;
    private _FirstSet = false;
    public get Max(){
        return this.progress.max;
    }
    public set Max(value:number){
        this.progress.max = value;
        if(!this._FirstSet) {
            this._Value = value;
            this._FirstSet = true;
        }
    }
    public get Value():number{
        return this._Value;
    }
    public set Value(value:number){
        this.progress.GetChild("DisplayText").text = value + "/" + this.Max;
        //如果正在Tween,我们重新获取一下宽度
        if(FairyGUI.GTween.IsTweening(this._Middle)){
            this.ResetCachePosition();
        }
        if(this._Value < value){
            this._Middle.width = this._Background.width * value / this.Max;
            this.progress.TweenValue(value,0.5).SetDelay(1).SetEase(FairyGUI.EaseType.SineInOut).OnComplete(()=>{
                this.ResetCachePosition();
            });
        }
        else if(this._Value > value){
            this.progress.value = value;
            this._Middle.width = this._CacheWidth;
            this._Middle.TweenResize(new UnityEngine.Vector2(this._Background.width * value / this.Max,this._Middle.height),0.5).SetEase(FairyGUI.EaseType.SineInOut).SetDelay(1).OnComplete(()=>{
                this.ResetCachePosition();
            });
        }
        this._Value = value;
    }
    public Visible(visible:boolean){
        this.progress.visible = visible;
    }
    public constructor(public progress:FairyGUI.GProgressBar) {
        this._Middle = this.progress.GetChild("Middle");
        this._Bar = this.progress.GetChild("bar");
        this._Middle.width = this._Bar.width;
        this._Background = this.progress.GetChild("Background");
        this._Value = this.Max;
        this.ResetCachePosition();
    }
    
    private ResetCachePosition(){
        this._CacheWidth = Mathf.Clamp(this._Middle.width,0,this._Background.width);
    }
}