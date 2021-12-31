"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIKit = void 0;
const csharp_1 = require("csharp");
const IOHelper_1 = require("../../Utils/IOHelper");
class UIKit {
    static inst;
    static Inst() {
        if (!UIKit.inst) {
            UIKit.inst = new UIKit();
        }
        return UIKit.inst;
    }
    Stack = new Array();
    UIMap = new Map();
    constructor() {
        csharp_1.FairyGUI.GRoot.inst.SetContentScaleFactor(1920, 1080, csharp_1.FairyGUI.UIContentScaler.ScreenMatchMode.MatchWidthOrHeight);
        csharp_1.FairyGUI.UIConfig.defaultFont = "SourceHanSansHWSC-Bold";
        //暂时屏蔽TMP
        let font = new csharp_1.FairyGUI.TMPFont();
        font.name = "MTSFont-Bold"; //这个名字要和编辑器里字体资源的名字一致
        font.fontAsset = csharp_1.UnityEngine.Resources.Load("Fonts/SourceHanSansHWSC-Bold-TMP");
        csharp_1.FairyGUI.FontManager.RegisterFont(font, "MTSFont-Bold");
        let files = IOHelper_1.default.GetFiles(csharp_1.UnityEngine.Application.persistentDataPath, "*_fui.bytes", csharp_1.System.IO.SearchOption.AllDirectories);
        files.forEach(value => {
            //找到了UI文件.开始加载
            csharp_1.Panthea.UI.UIKit.LoadPackage(value);
        });
    }
    CreateInstance(view) {
        let obj = csharp_1.FairyGUI.UIPackage.CreateObject(view.pkg, view.name);
        csharp_1.FairyGUI.GRoot.inst.AddChild(obj);
        return obj;
    }
    CreatePanel(view, uiBase, ...args) {
        let obj = csharp_1.FairyGUI.UIPackage.CreateObject(view.pkg, view.name);
        uiBase.View = obj.asCom;
        csharp_1.FairyGUI.GRoot.inst.AddChild(obj);
        uiBase.Construct();
        uiBase.OnInit(args);
        uiBase.OnEnable(args);
        this.UIMap.set(view.pkg + "." + view.name + "." + uiBase.constructor.name, uiBase);
        return obj;
    }
    Get(key) {
        if (this.UIMap.has(key)) {
            return this.UIMap.get(key);
        }
        return null;
    }
    Destroy(key, pool = false) {
        let ui = this.Get(key);
        if (!pool && ui) {
            this.UIMap.delete(key);
            ui.View.Dispose();
        }
    }
    OnDestroy() {
    }
    OnUpdate() {
        for (let item of this.UIMap.values()) {
            item.OnUpdate();
        }
    }
}
exports.UIKit = UIKit;
//# sourceMappingURL=UIKit.js.map