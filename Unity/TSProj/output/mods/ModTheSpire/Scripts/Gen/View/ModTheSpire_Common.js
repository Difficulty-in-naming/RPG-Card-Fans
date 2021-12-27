"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.View_RightButton = exports.View_LeftButton = exports.View_ConfirmButton = exports.View_NoButton = exports.View_YesButton = exports.View_Input = exports.View_CancelButton = exports.View_MainMenuButton = exports.View_Animation = exports.View_Card = exports.View_Tooltips = void 0;
var UIKit_1 = require("../../../../../Core/Module/UI/UIKit");
var UIBase_1 = require("../../../../../Core/Module/UI/UIBase");
var ViewInfo_1 = require("../../../../../Core/Module/UI/ViewInfo");
class View_Tooltips extends UIBase_1.UIBase {
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
        let url = View_Tooltips.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Tooltips.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Name = this.View.GetChild("Name");
        this.Desc = this.View.GetChild("Desc");
    }
}
exports.View_Tooltips = View_Tooltips;
View_Tooltips.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Common", "Tooltips");
class View_Card extends UIBase_1.UIBase {
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
        let url = View_Card.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Card.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.c1 = this.View.GetController("c1");
        this.Bg = this.View.GetChild("Bg");
        this.icon = this.View.GetChild("icon");
        this.Frame = this.View.GetChild("Frame");
        this.Banner = this.View.GetChild("Banner");
        this.Orb = this.View.GetChild("Orb");
        this.Type = this.View.GetChild("Type");
        this.Desc = this.View.GetChild("Desc");
        this.Energy = this.View.GetChild("Energy");
        this.Name = this.View.GetChild("Name");
    }
}
exports.View_Card = View_Card;
View_Card.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Common", "Card");
class View_Animation extends UIBase_1.UIBase {
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
        let url = View_Animation.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Animation.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Container = this.View.GetChild("Container");
        this.Fall = this.View.GetTransition("Fall");
        this.Rise = this.View.GetTransition("Rise");
        this.ScaleToZero = this.View.GetTransition("ScaleToZero");
        this.ScaleToNormal = this.View.GetTransition("ScaleToNormal");
        this.FadeIn = this.View.GetTransition("FadeIn");
        this.FadeOut = this.View.GetTransition("FadeOut");
    }
}
exports.View_Animation = View_Animation;
View_Animation.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Common", "Animation");
class View_MainMenuButton extends UIBase_1.UIBase {
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
        let url = View_MainMenuButton.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_MainMenuButton.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Hover = this.View.GetTransition("Hover");
    }
}
exports.View_MainMenuButton = View_MainMenuButton;
View_MainMenuButton.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Common", "MainMenuButton");
class View_CancelButton extends UIBase_1.UIBase {
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
        let url = View_CancelButton.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_CancelButton.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.Hover = this.View.GetTransition("Hover");
        this.Up = this.View.GetTransition("Up");
        this.Enter = this.View.GetTransition("Enter");
    }
}
exports.View_CancelButton = View_CancelButton;
View_CancelButton.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Common", "CancelButton");
class View_Input extends UIBase_1.UIBase {
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
        let url = View_Input.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Input.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Input = this.View.GetChild("Input");
    }
}
exports.View_Input = View_Input;
View_Input.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Common", "Input");
class View_YesButton extends UIBase_1.UIBase {
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
        let url = View_YesButton.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_YesButton.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
    }
}
exports.View_YesButton = View_YesButton;
View_YesButton.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Common", "YesButton");
class View_NoButton extends UIBase_1.UIBase {
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
        let url = View_NoButton.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_NoButton.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
    }
}
exports.View_NoButton = View_NoButton;
View_NoButton.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Common", "NoButton");
class View_ConfirmButton extends UIBase_1.UIBase {
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
        let url = View_ConfirmButton.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_ConfirmButton.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
        this.t2 = this.View.GetTransition("t2");
        this.Enter = this.View.GetTransition("Enter");
    }
}
exports.View_ConfirmButton = View_ConfirmButton;
View_ConfirmButton.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Common", "ConfirmButton");
class View_LeftButton extends UIBase_1.UIBase {
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
        let url = View_LeftButton.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_LeftButton.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
    }
}
exports.View_LeftButton = View_LeftButton;
View_LeftButton.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Common", "LeftButton");
class View_RightButton extends UIBase_1.UIBase {
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
        let url = View_RightButton.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_RightButton.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
    }
}
exports.View_RightButton = View_RightButton;
View_RightButton.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Common", "RightButton");
//# sourceMappingURL=ModTheSpire_Common.js.map