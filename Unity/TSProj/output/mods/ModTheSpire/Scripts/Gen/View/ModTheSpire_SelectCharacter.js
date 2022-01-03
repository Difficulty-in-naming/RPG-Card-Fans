"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.View_SelectCharacter = exports.View_CharacterButton = void 0;
var UIKit_1 = require("../../../../../Core/Module/UI/UIKit");
var UIBase_1 = require("../../../../../Core/Module/UI/UIBase");
var ViewInfo_1 = require("../../../../../Core/Module/UI/ViewInfo");
class View_CharacterButton extends UIBase_1.UIBase {
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
        let url = View_CharacterButton.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_CharacterButton.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
        this.t1 = this.View.GetTransition("t1");
        this.t2 = this.View.GetTransition("t2");
    }
}
exports.View_CharacterButton = View_CharacterButton;
View_CharacterButton.Url = new ViewInfo_1.ViewInfo("ModTheSpire_SelectCharacter", "CharacterButton");
class View_SelectCharacter extends UIBase_1.UIBase {
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
        let url = View_SelectCharacter.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_SelectCharacter.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.ShowAdvance = this.View.GetController("ShowAdvance");
        this.CharBg = this.View.GetChild("CharBg");
        this.Cancel = this.View.GetChild("Cancel");
        this.SelectCharTitle = this.View.GetChild("SelectCharTitle");
        this.CharList = this.View.GetChild("CharList");
        this.Confirm = this.View.GetChild("Confirm");
        this.IsAdvanced = this.View.GetChild("IsAdvanced");
        this.AdvanceTip = this.View.GetChild("AdvanceTip");
        this.Left = this.View.GetChild("Left");
        this.Right = this.View.GetChild("Right");
        this.Level = this.View.GetChild("Level");
        this.AdvanceLevelGroup = this.View.GetChild("AdvanceLevelGroup");
        this.AdvanceSettings = this.View.GetChild("AdvanceSettings");
        this.CharName = this.View.GetChild("CharName");
        this.Health = this.View.GetChild("Health");
        this.Gold = this.View.GetChild("Gold");
        this.CharDesc = this.View.GetChild("CharDesc");
        this.Relic = this.View.GetChild("Relic");
        this.RelicName = this.View.GetChild("RelicName");
        this.RelicDesc = this.View.GetChild("RelicDesc");
        this.UnlockTip = this.View.GetChild("UnlockTip");
        this.CharGroup = this.View.GetChild("CharGroup");
    }
}
exports.View_SelectCharacter = View_SelectCharacter;
View_SelectCharacter.Url = new ViewInfo_1.ViewInfo("ModTheSpire_SelectCharacter", "SelectCharacter");
//# sourceMappingURL=ModTheSpire_SelectCharacter.js.map