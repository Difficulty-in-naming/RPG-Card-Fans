"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.View_Block = exports.View_DisplayName = exports.View_HealthBar = exports.View_UnitWrap = exports.View_EnergyOrb = exports.View_Button2 = exports.View_Button = exports.View_Combat = void 0;
const UIKit_1 = require("../../../../../Core/Module/UI/UIKit");
const UIBase_1 = require("../../../../../Core/Module/UI/UIBase");
const ViewInfo_1 = require("../../../../../Core/Module/UI/ViewInfo");
class View_Combat extends UIBase_1.UIBase {
    Deck;
    Discard;
    Exhaust;
    EndTurnButton1;
    EndTurnButton2;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_Combat", "Combat");
    static CreatePanel(...args) {
        let url = this.Url.toString() + "." + this.name;
        let panel = UIKit_1.UIKit.Inst().Get(url);
        if (!panel) {
            panel = new this;
            UIKit_1.UIKit.Inst().CreatePanel(this.Url, panel, args);
        }
        return panel;
    }
    static CreateInstance() {
        return UIKit_1.UIKit.Inst().CreateInstance(this.Url);
    }
    static GetInstance() {
        let url = View_Combat.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Combat.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Deck = this.View.GetChild("Deck");
        this.Discard = this.View.GetChild("Discard");
        this.Exhaust = this.View.GetChild("Exhaust");
        this.EndTurnButton1 = this.View.GetChild("EndTurnButton1");
        this.EndTurnButton2 = this.View.GetChild("EndTurnButton2");
    }
}
exports.View_Combat = View_Combat;
class View_Button extends UIBase_1.UIBase {
    EndTurn;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_Combat", "Button");
    static CreatePanel(...args) {
        let url = this.Url.toString() + "." + this.name;
        let panel = UIKit_1.UIKit.Inst().Get(url);
        if (!panel) {
            panel = new this;
            UIKit_1.UIKit.Inst().CreatePanel(this.Url, panel, args);
        }
        return panel;
    }
    static CreateInstance() {
        return UIKit_1.UIKit.Inst().CreateInstance(this.Url);
    }
    static GetInstance() {
        let url = View_Button.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Button.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.EndTurn = this.View.GetTransition("EndTurn");
    }
}
exports.View_Button = View_Button;
class View_Button2 extends UIBase_1.UIBase {
    LightOver;
    EndTurn;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_Combat", "Button2");
    static CreatePanel(...args) {
        let url = this.Url.toString() + "." + this.name;
        let panel = UIKit_1.UIKit.Inst().Get(url);
        if (!panel) {
            panel = new this;
            UIKit_1.UIKit.Inst().CreatePanel(this.Url, panel, args);
        }
        return panel;
    }
    static CreateInstance() {
        return UIKit_1.UIKit.Inst().CreateInstance(this.Url);
    }
    static GetInstance() {
        let url = View_Button2.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Button2.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.LightOver = this.View.GetChild("LightOver");
        this.EndTurn = this.View.GetTransition("EndTurn");
    }
}
exports.View_Button2 = View_Button2;
class View_EnergyOrb extends UIBase_1.UIBase {
    IsEnable;
    Layer1;
    Layer1D;
    Layer2;
    Layer2D;
    Layer3;
    Layer3D;
    Layer4;
    Layer4D;
    Layer5;
    Layer5D;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_Combat", "EnergyOrb");
    static CreatePanel(...args) {
        let url = this.Url.toString() + "." + this.name;
        let panel = UIKit_1.UIKit.Inst().Get(url);
        if (!panel) {
            panel = new this;
            UIKit_1.UIKit.Inst().CreatePanel(this.Url, panel, args);
        }
        return panel;
    }
    static CreateInstance() {
        return UIKit_1.UIKit.Inst().CreateInstance(this.Url);
    }
    static GetInstance() {
        let url = View_EnergyOrb.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_EnergyOrb.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.IsEnable = this.View.GetController("IsEnable");
        this.Layer1 = this.View.GetChild("Layer1");
        this.Layer1D = this.View.GetChild("Layer1D");
        this.Layer2 = this.View.GetChild("Layer2");
        this.Layer2D = this.View.GetChild("Layer2D");
        this.Layer3 = this.View.GetChild("Layer3");
        this.Layer3D = this.View.GetChild("Layer3D");
        this.Layer4 = this.View.GetChild("Layer4");
        this.Layer4D = this.View.GetChild("Layer4D");
        this.Layer5 = this.View.GetChild("Layer5");
        this.Layer5D = this.View.GetChild("Layer5D");
    }
}
exports.View_EnergyOrb = View_EnergyOrb;
class View_UnitWrap extends UIBase_1.UIBase {
    HPVisible;
    Bounds;
    ModelLoader;
    ImageLoader;
    HealthBar;
    PowerList;
    DisplayName;
    SlowAttack;
    FastAttack;
    Jump;
    Hop;
    FastShake;
    SlowShake;
    Stagger;
    DisplayName_2;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_Combat", "UnitWrap");
    static CreatePanel(...args) {
        let url = this.Url.toString() + "." + this.name;
        let panel = UIKit_1.UIKit.Inst().Get(url);
        if (!panel) {
            panel = new this;
            UIKit_1.UIKit.Inst().CreatePanel(this.Url, panel, args);
        }
        return panel;
    }
    static CreateInstance() {
        return UIKit_1.UIKit.Inst().CreateInstance(this.Url);
    }
    static GetInstance() {
        let url = View_UnitWrap.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_UnitWrap.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.HPVisible = this.View.GetController("HPVisible");
        this.Bounds = this.View.GetChild("Bounds");
        this.ModelLoader = this.View.GetChild("ModelLoader");
        this.ImageLoader = this.View.GetChild("ImageLoader");
        this.HealthBar = this.View.GetChild("HealthBar");
        this.PowerList = this.View.GetChild("PowerList");
        this.DisplayName = this.View.GetChild("DisplayName");
        this.SlowAttack = this.View.GetTransition("SlowAttack");
        this.FastAttack = this.View.GetTransition("FastAttack");
        this.Jump = this.View.GetTransition("Jump");
        this.Hop = this.View.GetTransition("Hop");
        this.FastShake = this.View.GetTransition("FastShake");
        this.SlowShake = this.View.GetTransition("SlowShake");
        this.Stagger = this.View.GetTransition("Stagger");
        this.DisplayName_2 = this.View.GetTransition("DisplayName");
    }
}
exports.View_UnitWrap = View_UnitWrap;
class View_HealthBar extends UIBase_1.UIBase {
    Block;
    Outside;
    Background;
    Middle;
    DisplayText;
    Block_2;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_Combat", "HealthBar");
    static CreatePanel(...args) {
        let url = this.Url.toString() + "." + this.name;
        let panel = UIKit_1.UIKit.Inst().Get(url);
        if (!panel) {
            panel = new this;
            UIKit_1.UIKit.Inst().CreatePanel(this.Url, panel, args);
        }
        return panel;
    }
    static CreateInstance() {
        return UIKit_1.UIKit.Inst().CreateInstance(this.Url);
    }
    static GetInstance() {
        let url = View_HealthBar.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_HealthBar.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Block = this.View.GetController("Block");
        this.Outside = this.View.GetChild("Outside");
        this.Background = this.View.GetChild("Background");
        this.Middle = this.View.GetChild("Middle");
        this.DisplayText = this.View.GetChild("DisplayText");
        this.Block_2 = this.View.GetChild("Block");
    }
}
exports.View_HealthBar = View_HealthBar;
class View_DisplayName extends UIBase_1.UIBase {
    Enter;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_Combat", "DisplayName");
    static CreatePanel(...args) {
        let url = this.Url.toString() + "." + this.name;
        let panel = UIKit_1.UIKit.Inst().Get(url);
        if (!panel) {
            panel = new this;
            UIKit_1.UIKit.Inst().CreatePanel(this.Url, panel, args);
        }
        return panel;
    }
    static CreateInstance() {
        return UIKit_1.UIKit.Inst().CreateInstance(this.Url);
    }
    static GetInstance() {
        let url = View_DisplayName.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_DisplayName.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Enter = this.View.GetTransition("Enter");
    }
}
exports.View_DisplayName = View_DisplayName;
class View_Block extends UIBase_1.UIBase {
    Block;
    t0;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_Combat", "Block");
    static CreatePanel(...args) {
        let url = this.Url.toString() + "." + this.name;
        let panel = UIKit_1.UIKit.Inst().Get(url);
        if (!panel) {
            panel = new this;
            UIKit_1.UIKit.Inst().CreatePanel(this.Url, panel, args);
        }
        return panel;
    }
    static CreateInstance() {
        return UIKit_1.UIKit.Inst().CreateInstance(this.Url);
    }
    static GetInstance() {
        let url = View_Block.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Block.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Block = this.View.GetController("Block");
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_Block = View_Block;
//# sourceMappingURL=ModTheSpire_Combat.js.map