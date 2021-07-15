/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UI} from "../../../../../Core/Module/UI/UIKit";
import ViewInfo = UI.ViewInfo;
import UIKit = UI.UIKit;
import UIBase = UI.UIBase;
import {FairyGUI} from "csharp";
export class View_Combat extends UIBase
{
    public Deck : FairyGUI.GButton;
    public Discard : FairyGUI.GButton;
    public Exhaust : FairyGUI.GButton;
    public EndTurnButton1 : FairyGUI.GComponent;
    public EndTurnButton2 : FairyGUI.GComponent;
    public static Url = new ViewInfo("ModTheSpire_Combat","Combat")
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
        let url : string = View_Combat.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Combat.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Deck = this.View.GetChild("Deck") as FairyGUI.GButton;
        this.Discard = this.View.GetChild("Discard") as FairyGUI.GButton;
        this.Exhaust = this.View.GetChild("Exhaust") as FairyGUI.GButton;
        this.EndTurnButton1 = this.View.GetChild("EndTurnButton1") as FairyGUI.GComponent;
        this.EndTurnButton2 = this.View.GetChild("EndTurnButton2") as FairyGUI.GComponent;
    }
}
export class View_Button extends UIBase
{
    public EndTurn : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Combat","Button")
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
        let url : string = View_Button.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Button.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.EndTurn = this.View.GetTransition("EndTurn") as FairyGUI.Transition;
    }
}
export class View_Button2 extends UIBase
{
    public LightOver : FairyGUI.GImage;
    public EndTurn : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Combat","Button2")
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
        let url : string = View_Button2.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Button2.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.LightOver = this.View.GetChild("LightOver") as FairyGUI.GImage;
        this.EndTurn = this.View.GetTransition("EndTurn") as FairyGUI.Transition;
    }
}