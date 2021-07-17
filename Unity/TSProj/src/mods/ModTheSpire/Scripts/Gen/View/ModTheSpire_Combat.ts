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
export class View_EnergyOrb extends UIBase
{
    public IsEnable : FairyGUI.Controller;
    public Layer1 : FairyGUI.GImage;
    public Layer1D : FairyGUI.GImage;
    public Layer2 : FairyGUI.GImage;
    public Layer2D : FairyGUI.GImage;
    public Layer3 : FairyGUI.GImage;
    public Layer3D : FairyGUI.GImage;
    public Layer4 : FairyGUI.GImage;
    public Layer4D : FairyGUI.GImage;
    public Layer5 : FairyGUI.GImage;
    public Layer5D : FairyGUI.GImage;
    public static Url = new ViewInfo("ModTheSpire_Combat","EnergyOrb")
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
        let url : string = View_EnergyOrb.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_EnergyOrb.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.IsEnable = this.View.GetController("IsEnable") as FairyGUI.Controller;
        this.Layer1 = this.View.GetChild("Layer1") as FairyGUI.GImage;
        this.Layer1D = this.View.GetChild("Layer1D") as FairyGUI.GImage;
        this.Layer2 = this.View.GetChild("Layer2") as FairyGUI.GImage;
        this.Layer2D = this.View.GetChild("Layer2D") as FairyGUI.GImage;
        this.Layer3 = this.View.GetChild("Layer3") as FairyGUI.GImage;
        this.Layer3D = this.View.GetChild("Layer3D") as FairyGUI.GImage;
        this.Layer4 = this.View.GetChild("Layer4") as FairyGUI.GImage;
        this.Layer4D = this.View.GetChild("Layer4D") as FairyGUI.GImage;
        this.Layer5 = this.View.GetChild("Layer5") as FairyGUI.GImage;
        this.Layer5D = this.View.GetChild("Layer5D") as FairyGUI.GImage;
    }
}
export class View_UnitWrap extends UIBase
{
    public HPVisible : FairyGUI.Controller;
    public Bounds : FairyGUI.GGraph;
    public ModelLoader : FairyGUI.GGraph;
    public ImageLoader : FairyGUI.GLoader;
    public HealthBar : FairyGUI.GComponent;
    public PowerList : FairyGUI.GLoader;
    public DisplayName : FairyGUI.GComponent;
    public SlowAttack : FairyGUI.Transition;
    public FastAttack : FairyGUI.Transition;
    public Jump : FairyGUI.Transition;
    public Hop : FairyGUI.Transition;
    public FastShake : FairyGUI.Transition;
    public SlowShake : FairyGUI.Transition;
    public Stagger : FairyGUI.Transition;
    public DisplayName_2 : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Combat","UnitWrap")
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
        let url : string = View_UnitWrap.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_UnitWrap.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.HPVisible = this.View.GetController("HPVisible") as FairyGUI.Controller;
        this.Bounds = this.View.GetChild("Bounds") as FairyGUI.GGraph;
        this.ModelLoader = this.View.GetChild("ModelLoader") as FairyGUI.GGraph;
        this.ImageLoader = this.View.GetChild("ImageLoader") as FairyGUI.GLoader;
        this.HealthBar = this.View.GetChild("HealthBar") as FairyGUI.GComponent;
        this.PowerList = this.View.GetChild("PowerList") as FairyGUI.GLoader;
        this.DisplayName = this.View.GetChild("DisplayName") as FairyGUI.GComponent;
        this.SlowAttack = this.View.GetTransition("SlowAttack") as FairyGUI.Transition;
        this.FastAttack = this.View.GetTransition("FastAttack") as FairyGUI.Transition;
        this.Jump = this.View.GetTransition("Jump") as FairyGUI.Transition;
        this.Hop = this.View.GetTransition("Hop") as FairyGUI.Transition;
        this.FastShake = this.View.GetTransition("FastShake") as FairyGUI.Transition;
        this.SlowShake = this.View.GetTransition("SlowShake") as FairyGUI.Transition;
        this.Stagger = this.View.GetTransition("Stagger") as FairyGUI.Transition;
        this.DisplayName_2 = this.View.GetTransition("DisplayName") as FairyGUI.Transition;
    }
}
export class View_HealthBar extends UIBase
{
    public Block : FairyGUI.Controller;
    public Outside : FairyGUI.GImage;
    public Background : FairyGUI.GImage;
    public Middle : FairyGUI.GImage;
    public DisplayText : FairyGUI.GTextField;
    public Block_2 : FairyGUI.GComponent;
    public static Url = new ViewInfo("ModTheSpire_Combat","HealthBar")
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
        let url : string = View_HealthBar.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_HealthBar.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Block = this.View.GetController("Block") as FairyGUI.Controller;
        this.Outside = this.View.GetChild("Outside") as FairyGUI.GImage;
        this.Background = this.View.GetChild("Background") as FairyGUI.GImage;
        this.Middle = this.View.GetChild("Middle") as FairyGUI.GImage;
        this.DisplayText = this.View.GetChild("DisplayText") as FairyGUI.GTextField;
        this.Block_2 = this.View.GetChild("Block") as FairyGUI.GComponent;
    }
}
export class View_DisplayName extends UIBase
{
    public Enter : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Combat","DisplayName")
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
        let url : string = View_DisplayName.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_DisplayName.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Enter = this.View.GetTransition("Enter") as FairyGUI.Transition;
    }
}
export class View_Block extends UIBase
{
    public Block : FairyGUI.Controller;
    public t0 : FairyGUI.Transition;
    public static Url = new ViewInfo("ModTheSpire_Combat","Block")
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
        let url : string = View_Block.Url.toString() + "." + (this).name;
        return UIKit.Inst().Get(url);
    }
    public CloseMySelf()
    {
        let url : string = View_Block.Url.toString() + "." + (<any>this).constructor.name;
        UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    public Construct()
    {
        this.Block = this.View.GetController("Block") as FairyGUI.Controller;
        this.t0 = this.View.GetTransition("t0") as FairyGUI.Transition;
    }
}