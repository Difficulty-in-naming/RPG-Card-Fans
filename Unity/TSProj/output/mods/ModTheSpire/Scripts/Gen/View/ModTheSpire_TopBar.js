"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.View_HeartCom = exports.View_Settings = exports.View_Deck = exports.View_Map = exports.View_Gold = exports.View_Health = exports.View_TopBar = exports.View_KeySlots = void 0;
const UIKit_1 = require("../../../../../Core/Module/UI/UIKit");
const UIBase_1 = require("../../../../../Core/Module/UI/UIBase");
const ViewInfo_1 = require("../../../../../Core/Module/UI/ViewInfo");
class View_KeySlots extends UIBase_1.UIBase {
    Green;
    Blue;
    Red;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_TopBar", "KeySlots");
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
        let url = View_KeySlots.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_KeySlots.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Green = this.View.GetChild("Green");
        this.Blue = this.View.GetChild("Blue");
        this.Red = this.View.GetChild("Red");
    }
}
exports.View_KeySlots = View_KeySlots;
class View_TopBar extends UIBase_1.UIBase {
    Slots;
    PlayerName;
    ClassName;
    Health;
    Gold;
    PotionList;
    Map;
    Deck;
    Settings;
    RelicList;
    AdvanceLevel;
    Advance;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_TopBar", "TopBar");
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
        let url = View_TopBar.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_TopBar.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Slots = this.View.GetChild("Slots");
        this.PlayerName = this.View.GetChild("PlayerName");
        this.ClassName = this.View.GetChild("ClassName");
        this.Health = this.View.GetChild("Health");
        this.Gold = this.View.GetChild("Gold");
        this.PotionList = this.View.GetChild("PotionList");
        this.Map = this.View.GetChild("Map");
        this.Deck = this.View.GetChild("Deck");
        this.Settings = this.View.GetChild("Settings");
        this.RelicList = this.View.GetChild("RelicList");
        this.AdvanceLevel = this.View.GetChild("AdvanceLevel");
        this.Advance = this.View.GetChild("Advance");
    }
}
exports.View_TopBar = View_TopBar;
class View_Health extends UIBase_1.UIBase {
    Health;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_TopBar", "Health");
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
        let url = View_Health.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Health.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Health = this.View.GetChild("Health");
    }
}
exports.View_Health = View_Health;
class View_Gold extends UIBase_1.UIBase {
    Gold;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_TopBar", "Gold");
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
        let url = View_Gold.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Gold.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Gold = this.View.GetChild("Gold");
    }
}
exports.View_Gold = View_Gold;
class View_Map extends UIBase_1.UIBase {
    t0;
    t1;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_TopBar", "Map");
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
        let url = View_Map.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Map.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
    }
}
exports.View_Map = View_Map;
class View_Deck extends UIBase_1.UIBase {
    Number;
    t0;
    t1;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_TopBar", "Deck");
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
        let url = View_Deck.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Deck.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Number = this.View.GetChild("Number");
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
    }
}
exports.View_Deck = View_Deck;
class View_Settings extends UIBase_1.UIBase {
    t0;
    t1;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_TopBar", "Settings");
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
        let url = View_Settings.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_Settings.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
    }
}
exports.View_Settings = View_Settings;
class View_HeartCom extends UIBase_1.UIBase {
    button;
    Heal;
    static Url = new ViewInfo_1.ViewInfo("ModTheSpire_TopBar", "HeartCom");
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
        let url = View_HeartCom.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_HeartCom.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.button = this.View.GetController("button");
        this.Heal = this.View.GetTransition("Heal");
    }
}
exports.View_HeartCom = View_HeartCom;
//# sourceMappingURL=ModTheSpire_TopBar.js.map