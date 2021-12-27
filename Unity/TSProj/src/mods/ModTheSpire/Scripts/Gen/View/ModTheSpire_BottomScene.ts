/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UIKit} from "../../../../../Core/Module/UI/UIKit";
import {FairyGUI} from "csharp";
import { UIBase } from "../../../../../Core/Module/UI/UIBase";
import { ViewInfo } from "../../../../../Core/Module/UI/ViewInfo";
export class View_BottomScene extends UIBase
{
    public midWall : FairyGUI.GImage;
    public mod1 : FairyGUI.GImage;
    public mod2 : FairyGUI.GImage;
    public CeilingMod6 : FairyGUI.GImage;
    public CeilingMod1 : FairyGUI.GImage;
    public CeilingMod4 : FairyGUI.GImage;
    public CeilingMod5 : FairyGUI.GImage;
    public CeilingMod3 : FairyGUI.GImage;
    public CeilingMod2 : FairyGUI.GImage;
    public DustHolder : FairyGUI.GGraph;
    public static Url = new ViewInfo("ModTheSpire_BottomScene","BottomScene")
    public static CreatePanel(...args) : UIBase
    {
        let url : string = this.Url.toString() + "." + this.name;
        let panel : UIBase = UIKit.Inst().Get(url);
        if(!panel)
        {
            panel = new this;
            UIKit.Inst().CreatePanel(this.Url,panel,args);
        }
        return panel;
    }
    public static CreateInstance() : FairyGUI.GObject
    {
        return UIKit.Inst().CreateInstance(this.Url);
    }
    public static GetInstance() : UIBase
    {
        let url : string = View_BottomScene.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_BottomScene.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.midWall = this.View.GetChild("midWall") as FairyGUI.GImage;
        this.mod1 = this.View.GetChild("mod1") as FairyGUI.GImage;
        this.mod2 = this.View.GetChild("mod2") as FairyGUI.GImage;
        this.CeilingMod6 = this.View.GetChild("CeilingMod6") as FairyGUI.GImage;
        this.CeilingMod1 = this.View.GetChild("CeilingMod1") as FairyGUI.GImage;
        this.CeilingMod4 = this.View.GetChild("CeilingMod4") as FairyGUI.GImage;
        this.CeilingMod5 = this.View.GetChild("CeilingMod5") as FairyGUI.GImage;
        this.CeilingMod3 = this.View.GetChild("CeilingMod3") as FairyGUI.GImage;
        this.CeilingMod2 = this.View.GetChild("CeilingMod2") as FairyGUI.GImage;
        this.DustHolder = this.View.GetChild("DustHolder") as FairyGUI.GGraph;
    }
}