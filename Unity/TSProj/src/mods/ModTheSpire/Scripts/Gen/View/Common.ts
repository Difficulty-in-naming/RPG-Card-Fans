/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UI} from "../../../../../Core/Module/UI/UIKit";
import ViewInfo = UI.ViewInfo;
import UIKit = UI.UIKit;
import UIBase = UI.UIBase;
import {FairyGUI} from "csharp";
export class View_Animation extends UIBase
{
    public Container : FairyGUI.GLoader;
    public Fall : FairyGUI.Transition;
    public Rise : FairyGUI.Transition;
    public ScaleToZero : FairyGUI.Transition;
    public ScaleToNormal : FairyGUI.Transition;
    public FadeIn : FairyGUI.Transition;
    public FadeOut : FairyGUI.Transition;
    public static Url = new ViewInfo("Common","Animation")
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
        let url : string = View_Animation.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Animation.Url.toString() + "." + (<any>this).name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Container = this.View.GetChild("Container") as FairyGUI.GLoader;
        this.Fall = this.View.GetTransition("Fall") as FairyGUI.Transition;
        this.Rise = this.View.GetTransition("Rise") as FairyGUI.Transition;
        this.ScaleToZero = this.View.GetTransition("ScaleToZero") as FairyGUI.Transition;
        this.ScaleToNormal = this.View.GetTransition("ScaleToNormal") as FairyGUI.Transition;
        this.FadeIn = this.View.GetTransition("FadeIn") as FairyGUI.Transition;
        this.FadeOut = this.View.GetTransition("FadeOut") as FairyGUI.Transition;
    }
}
export class View_CancelButton extends UIBase
{
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public t2 : FairyGUI.Transition;
    public Enter : FairyGUI.Transition;
    public static Url = new ViewInfo("Common","CancelButton")
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
        let url : string = View_CancelButton.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_CancelButton.Url.toString() + "." + (<any>this).name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
        this.t2 = this.View.GetTransition("t2") as FairyGUI.Transition;
        this.Enter = this.View.GetTransition("Enter") as FairyGUI.Transition;
    }
}
export class View_Input extends UIBase
{
    public Input : FairyGUI.GTextInput;
    public static Url = new ViewInfo("Common","Input")
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
        let url : string = View_Input.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Input.Url.toString() + "." + (<any>this).name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Input = this.View.GetChild("Input") as FairyGUI.GTextInput;
    }
}
export class View_YesButton extends UIBase
{
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public static Url = new ViewInfo("Common","YesButton")
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
        let url : string = View_YesButton.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_YesButton.Url.toString() + "." + (<any>this).name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
    }
}
export class View_NoButton extends UIBase
{
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public static Url = new ViewInfo("Common","NoButton")
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
        let url : string = View_NoButton.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_NoButton.Url.toString() + "." + (<any>this).name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
    }
}
export class View_ConfirmButton extends UIBase
{
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public t2 : FairyGUI.Transition;
    public Enter : FairyGUI.Transition;
    public static Url = new ViewInfo("Common","ConfirmButton")
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
        let url : string = View_ConfirmButton.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_ConfirmButton.Url.toString() + "." + (<any>this).name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
        this.t2 = this.View.GetTransition("t2") as FairyGUI.Transition;
        this.Enter = this.View.GetTransition("Enter") as FairyGUI.Transition;
    }
}
export class View_LeftButton extends UIBase
{
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public static Url = new ViewInfo("Common","LeftButton")
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
        let url : string = View_LeftButton.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_LeftButton.Url.toString() + "." + (<any>this).name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
    }
}
export class View_RightButton extends UIBase
{
    public t0 : FairyGUI.Transition;
    public t1 : FairyGUI.Transition;
    public static Url = new ViewInfo("Common","RightButton")
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
        let url : string = View_RightButton.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_RightButton.Url.toString() + "." + (<any>this).name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
    }
}