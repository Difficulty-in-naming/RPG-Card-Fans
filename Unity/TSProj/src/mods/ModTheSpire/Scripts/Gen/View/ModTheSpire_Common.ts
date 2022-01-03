/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UIKit} from "../../../../../Core/Module/UI/UIKit";
import { UIBase } from "../../../../../Core/Module/UI/UIBase";
import { ViewInfo } from "../../../../../Core/Module/UI/ViewInfo";
import {FairyGUI} from "csharp";
export class View_Tooltips extends UIBase
{
    public Name : FairyGUI.GTextField;
    public Desc : FairyGUI.GTextField;
    public static Url = new ViewInfo("ModTheSpire_Common","Tooltips")
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
        let url : string = View_Tooltips.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Tooltips.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Name = this.View.GetChild("Name") as FairyGUI.GTextField;
        this.Desc = this.View.GetChild("Desc") as FairyGUI.GTextField;
    }
}
export class View_Card extends UIBase
{
    public c1 : FairyGUI.Controller;
    public Bg : FairyGUI.GLoader;
    public icon : FairyGUI.GLoader;
    public Frame : FairyGUI.GLoader;
    public Banner : FairyGUI.GLoader;
    public Orb : FairyGUI.GLoader;
    public Type : FairyGUI.GTextField;
    public Desc : FairyGUI.GTextField;
    public Energy : FairyGUI.GTextField;
    public Name : FairyGUI.GTextField;
    public static Url = new ViewInfo("ModTheSpire_Common","Card")
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
        let url : string = View_Card.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Card.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.c1 = this.View.GetController("c1") as FairyGUI.Controller;
        this.Bg = this.View.GetChild("Bg") as FairyGUI.GLoader;
        this.icon = this.View.GetChild("icon") as FairyGUI.GLoader;
        this.Frame = this.View.GetChild("Frame") as FairyGUI.GLoader;
        this.Banner = this.View.GetChild("Banner") as FairyGUI.GLoader;
        this.Orb = this.View.GetChild("Orb") as FairyGUI.GLoader;
        this.Type = this.View.GetChild("Type") as FairyGUI.GTextField;
        this.Desc = this.View.GetChild("Desc") as FairyGUI.GTextField;
        this.Energy = this.View.GetChild("Energy") as FairyGUI.GTextField;
        this.Name = this.View.GetChild("Name") as FairyGUI.GTextField;
    }
}
export class View_Animation extends UIBase
{
    public Container : FairyGUI.GLoader;
    public Fall : FairyGUI.Transition;
    public Rise : FairyGUI.Transition;
    public ScaleToZero : FairyGUI.Transition;
    public ScaleToNormal : FairyGUI.Transition;
    public FadeIn : FairyGUI.Transition;
    public FadeOut : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Common","Animation")
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
        let url : string = View_Animation.Url.toString() + "." + (<any>this).constructor.name;
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
export class View_MainMenuButton extends UIBase
{
    public Hover : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Common","MainMenuButton")
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
        let url : string = View_MainMenuButton.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_MainMenuButton.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Hover = this.View.GetTransition("Hover") as FairyGUI.Transition;
    }
}
export class View_CancelButton extends UIBase
{
    public t0 : FairyGUI.Transition;
    public Hover : FairyGUI.Transition;
    public Up : FairyGUI.Transition;
    public Enter : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Common","CancelButton")
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
        let url : string = View_CancelButton.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.Hover = this.View.GetTransition("Hover") as FairyGUI.Transition;
        this.Up = this.View.GetTransition("Up") as FairyGUI.Transition;
        this.Enter = this.View.GetTransition("Enter") as FairyGUI.Transition;
    }
}
export class View_HandCardSelectScreen extends UIBase
{
    public Title : FairyGUI.GTextField;
    public Confirm : FairyGUI.GComponent;
    public Source : FairyGUI.GComponent;
    public Target : FairyGUI.GComponent;
    public Group : FairyGUI.GGroup;
    public t0 : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Common","HandCardSelectScreen")
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
        let url : string = View_HandCardSelectScreen.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_HandCardSelectScreen.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Title = this.View.GetChild("Title") as FairyGUI.GTextField;
        this.Confirm = this.View.GetChild("Confirm") as FairyGUI.GComponent;
        this.Source = this.View.GetChild("Source") as FairyGUI.GComponent;
        this.Target = this.View.GetChild("Target") as FairyGUI.GComponent;
        this.Group = this.View.GetChild("Group") as FairyGUI.GGroup;
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
    }
}
export class View_PeekButton extends UIBase
{
    public over : FairyGUI.Transition;
    public normal : FairyGUI.Transition;
    public selected : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Common","PeekButton")
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
        let url : string = View_PeekButton.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_PeekButton.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.over = this.View.GetTransition("over") as FairyGUI.Transition;
        this.normal = this.View.GetTransition("normal") as FairyGUI.Transition;
        this.selected = this.View.GetTransition("selected") as FairyGUI.Transition;
    }
}
export class View_RewardConfirmButton extends UIBase
{
    public normal : FairyGUI.Transition;
    public over : FairyGUI.Transition;
    public down : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Common","RewardConfirmButton")
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
        let url : string = View_RewardConfirmButton.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_RewardConfirmButton.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.normal = this.View.GetTransition("normal") as FairyGUI.Transition;
        this.over = this.View.GetTransition("over") as FairyGUI.Transition;
        this.down = this.View.GetTransition("down") as FairyGUI.Transition;
    }
}
export class View_Input extends UIBase
{
    public Input : FairyGUI.GTextInput;
    public static Url = new ViewInfo("ModTheSpire_Common","Input")
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
        let url : string = View_Input.Url.toString() + "." + (<any>this).constructor.name;
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
    public static Url = new ViewInfo("ModTheSpire_Common","YesButton")
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
        let url : string = View_YesButton.Url.toString() + "." + (<any>this).constructor.name;
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
    public static Url = new ViewInfo("ModTheSpire_Common","NoButton")
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
        let url : string = View_NoButton.Url.toString() + "." + (<any>this).constructor.name;
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
    public static Url = new ViewInfo("ModTheSpire_Common","ConfirmButton")
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
        let url : string = View_ConfirmButton.Url.toString() + "." + (<any>this).constructor.name;
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
    public static Url = new ViewInfo("ModTheSpire_Common","LeftButton")
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
        let url : string = View_LeftButton.Url.toString() + "." + (<any>this).constructor.name;
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
    public static Url = new ViewInfo("ModTheSpire_Common","RightButton")
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
        let url : string = View_RightButton.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
        this.t1 = this.View.GetTransition("t1") as FairyGUI.Transition;
    }
}