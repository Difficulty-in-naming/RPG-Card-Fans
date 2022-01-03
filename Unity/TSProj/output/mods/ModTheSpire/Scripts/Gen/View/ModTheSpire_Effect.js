"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.View_PowerDebuffEffect = exports.View_PowerExpireTextEffect = exports.View_PowerBuffEffect = exports.View_FlyingSpikeEffect = exports.View_TextAboveEffect = exports.View_CleaveEffect = exports.View_HpBlockBrokenEffect = exports.View_SpeechBubble = exports.View_BorderFlashEffect = exports.View_EntangleEffect = exports.View_WebParticleEffect = exports.View_BiteEffect = void 0;
var UIKit_1 = require("../../../../../Core/Module/UI/UIKit");
var UIBase_1 = require("../../../../../Core/Module/UI/UIBase");
var ViewInfo_1 = require("../../../../../Core/Module/UI/ViewInfo");
class View_BiteEffect extends UIBase_1.UIBase {
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
        let url = View_BiteEffect.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_BiteEffect.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Top = this.View.GetChild("Top");
        this.Bot = this.View.GetChild("Bot");
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_BiteEffect = View_BiteEffect;
View_BiteEffect.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "BiteEffect");
class View_WebParticleEffect extends UIBase_1.UIBase {
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
        let url = View_WebParticleEffect.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_WebParticleEffect.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_WebParticleEffect = View_WebParticleEffect;
View_WebParticleEffect.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "WebParticleEffect");
class View_EntangleEffect extends UIBase_1.UIBase {
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
        let url = View_EntangleEffect.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_EntangleEffect.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_EntangleEffect = View_EntangleEffect;
View_EntangleEffect.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "EntangleEffect");
class View_BorderFlashEffect extends UIBase_1.UIBase {
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
        let url = View_BorderFlashEffect.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_BorderFlashEffect.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_BorderFlashEffect = View_BorderFlashEffect;
View_BorderFlashEffect.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "BorderFlashEffect");
class View_SpeechBubble extends UIBase_1.UIBase {
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
        let url = View_SpeechBubble.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_SpeechBubble.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.Bg = this.View.GetChild("Bg");
        this.Holder = this.View.GetChild("Holder");
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_SpeechBubble = View_SpeechBubble;
View_SpeechBubble.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "SpeechBubble");
class View_HpBlockBrokenEffect extends UIBase_1.UIBase {
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
        let url = View_HpBlockBrokenEffect.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_HpBlockBrokenEffect.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_HpBlockBrokenEffect = View_HpBlockBrokenEffect;
View_HpBlockBrokenEffect.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "HpBlockBrokenEffect");
class View_CleaveEffect extends UIBase_1.UIBase {
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
        let url = View_CleaveEffect.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_CleaveEffect.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_CleaveEffect = View_CleaveEffect;
View_CleaveEffect.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "CleaveEffect");
class View_TextAboveEffect extends UIBase_1.UIBase {
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
        let url = View_TextAboveEffect.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_TextAboveEffect.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_TextAboveEffect = View_TextAboveEffect;
View_TextAboveEffect.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "TextAboveEffect");
class View_FlyingSpikeEffect extends UIBase_1.UIBase {
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
        let url = View_FlyingSpikeEffect.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_FlyingSpikeEffect.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_FlyingSpikeEffect = View_FlyingSpikeEffect;
View_FlyingSpikeEffect.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "FlyingSpikeEffect");
class View_PowerBuffEffect extends UIBase_1.UIBase {
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
        let url = View_PowerBuffEffect.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_PowerBuffEffect.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_PowerBuffEffect = View_PowerBuffEffect;
View_PowerBuffEffect.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "PowerBuffEffect");
class View_PowerExpireTextEffect extends UIBase_1.UIBase {
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
        let url = View_PowerExpireTextEffect.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_PowerExpireTextEffect.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_PowerExpireTextEffect = View_PowerExpireTextEffect;
View_PowerExpireTextEffect.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "PowerExpireTextEffect");
class View_PowerDebuffEffect extends UIBase_1.UIBase {
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
        let url = View_PowerDebuffEffect.Url.toString() + "." + (this).name;
        return UIKit_1.UIKit.Inst().Get(url);
    }
    CloseMySelf() {
        let url = View_PowerDebuffEffect.Url.toString() + "." + this.constructor.name;
        UIKit_1.UIKit.Inst().Destroy(url);
    }
    //不要主动调用这个方法或者修改这个方法
    Construct() {
        this.t0 = this.View.GetTransition("t0");
    }
}
exports.View_PowerDebuffEffect = View_PowerDebuffEffect;
View_PowerDebuffEffect.Url = new ViewInfo_1.ViewInfo("ModTheSpire_Effect", "PowerDebuffEffect");
//# sourceMappingURL=ModTheSpire_Effect.js.map