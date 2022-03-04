/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UIKit} from "../../../../../Core/Module/UI/UIKit";
import { UIBase } from "../../../../../Core/Module/UI/UIBase";
import { ViewInfo } from "../../../../../Core/Module/UI/ViewInfo";
import {FairyGUI} from "csharp";
export class View_Title extends UIBase
{
    public DustHolder : FairyGUI.GComponent;
    public MidCloudHolder : FairyGUI.GComponent;
    public TopCloudHolder : FairyGUI.GComponent;
    public Start : FairyGUI.GButton;
    public Compendium : FairyGUI.GButton;
    public Statistics : FairyGUI.GButton;
    public Settings : FairyGUI.GButton;
    public Exit : FairyGUI.GButton;
    public Logo : FairyGUI.Transition;
    public MainMenuEnter : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Title","Title")
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
        let url : string = View_Title.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Title.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.DustHolder = this.View.GetChild("DustHolder") as FairyGUI.GComponent;
        this.MidCloudHolder = this.View.GetChild("MidCloudHolder") as FairyGUI.GComponent;
        this.TopCloudHolder = this.View.GetChild("TopCloudHolder") as FairyGUI.GComponent;
        this.Start = this.View.GetChild("Start") as FairyGUI.GButton;
        this.Compendium = this.View.GetChild("Compendium") as FairyGUI.GButton;
        this.Statistics = this.View.GetChild("Statistics") as FairyGUI.GButton;
        this.Settings = this.View.GetChild("Settings") as FairyGUI.GButton;
        this.Exit = this.View.GetChild("Exit") as FairyGUI.GButton;
        this.Logo = this.View.GetTransition("Logo") as FairyGUI.Transition;
        this.MainMenuEnter = this.View.GetTransition("MainMenuEnter") as FairyGUI.Transition;
    }
}
export class View_Holder extends UIBase
{
    public TopCloudHolder : FairyGUI.GGraph;
    public static Url = new ViewInfo("ModTheSpire_Title","Holder")
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
        let url : string = View_Holder.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Holder.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.TopCloudHolder = this.View.GetChild("TopCloudHolder") as FairyGUI.GGraph;
    }
}