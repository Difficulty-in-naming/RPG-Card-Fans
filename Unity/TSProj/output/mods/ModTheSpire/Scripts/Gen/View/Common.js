"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.View_RightButton = exports.View_LeftButton = exports.View_ConfirmButton = exports.View_NoButton = exports.View_YesButton = exports.View_Input = exports.View_CancelButton = exports.View_Animation = void 0;
const UIKit_1 = require("../../../../../Core/Module/UI/UIKit");
const UIBase_1 = require("../../../../../Core/Module/UI/UIBase");
const ViewInfo_1 = require("../../../../../Core/Module/UI/ViewInfo");
class View_Animation extends UIBase_1.UIBase {
    Container;
    Fall;
    Rise;
    ScaleToZero;
    ScaleToNormal;
    FadeIn;
    FadeOut;
    static Url = new ViewInfo_1.ViewInfo("Common", "Animation");
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
        let url = View_Animation.Url.toString() + "." + this.name;
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
class View_CancelButton extends UIBase_1.UIBase {
    t0;
    t1;
    t2;
    Enter;
    static Url = new ViewInfo_1.ViewInfo("Common", "CancelButton");
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
        let url = View_CancelButton.Url.toString() + "." + this.name;
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
exports.View_CancelButton = View_CancelButton;
class View_Input extends UIBase_1.UIBase {
    Input;
    static Url = new ViewInfo_1.ViewInfo("Common", "Input");
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
        let url = View_Input.Url.toString() + "." + this.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Input = this.View.GetChild("Input");
    }
}
exports.View_Input = View_Input;
class View_YesButton extends UIBase_1.UIBase {
    t0;
    t1;
    static Url = new ViewInfo_1.ViewInfo("Common", "YesButton");
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
        let url = View_YesButton.Url.toString() + "." + this.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
    }
}
exports.View_YesButton = View_YesButton;
class View_NoButton extends UIBase_1.UIBase {
    t0;
    t1;
    static Url = new ViewInfo_1.ViewInfo("Common", "NoButton");
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
        let url = View_NoButton.Url.toString() + "." + this.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
    }
}
exports.View_NoButton = View_NoButton;
class View_ConfirmButton extends UIBase_1.UIBase {
    t0;
    t1;
    t2;
    Enter;
    static Url = new ViewInfo_1.ViewInfo("Common", "ConfirmButton");
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
        let url = View_ConfirmButton.Url.toString() + "." + this.name;
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
class View_LeftButton extends UIBase_1.UIBase {
    t0;
    t1;
    static Url = new ViewInfo_1.ViewInfo("Common", "LeftButton");
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
        let url = View_LeftButton.Url.toString() + "." + this.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
    }
}
exports.View_LeftButton = View_LeftButton;
class View_RightButton extends UIBase_1.UIBase {
    t0;
    t1;
    static Url = new ViewInfo_1.ViewInfo("Common", "RightButton");
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
        let url = View_RightButton.Url.toString() + "." + this.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
    }
}
exports.View_RightButton = View_RightButton;
//# sourceMappingURL=Common.js.map