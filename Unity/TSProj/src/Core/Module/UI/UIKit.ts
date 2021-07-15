import {FairyGUI,UnityEngine,System,Panthea} from 'csharp'
import IOHelper from "../../Utils/IOHelper";

export namespace UI {
    export class ViewInfo {
        pkg : string;
        name : string;
        constructor(pkg:string,name:string) {
            this.pkg = pkg;
            this.name = name;
        }
        public toString(){
            return this.pkg + "." + this.name;
        }
    }
    export class UIBase{
        View :FairyGUI.GComponent;
        OnInit(...args){}
        OnEnable(...args){}
        OnDisable(){}
        OnUpdate(){}
        Construct(){}
        CloseMySelf(){}
    }
    export class UIKit {
        private static inst: UIKit;
        public static Inst(): UIKit {
            if (!UIKit.inst) {
                UIKit.inst = new UIKit();
            }
            return UIKit.inst;
        }
        private Stack : Array<UIBase> = new Array<UIBase>();
        private UIMap : Map<string,UIBase> = new Map<string, UIBase>();

        private constructor() {
            FairyGUI.GRoot.inst.SetContentScaleFactor(1920, 1080, FairyGUI.UIContentScaler.ScreenMatchMode.MatchWidthOrHeight);
            FairyGUI.UIConfig.defaultFont = "SourceHanSansHWSC-Bold";
            //暂时屏蔽TMP
            let font = new FairyGUI.TMPFont();
            font.name = "MTSFont-Bold"; //这个名字要和编辑器里字体资源的名字一致
            font.fontAsset = UnityEngine.Resources.Load("Fonts/SourceHanSansHWSC-Bold-TMP");
            FairyGUI.FontManager.RegisterFont(font, "MTSFont-Bold");
            let files = IOHelper.GetFiles(UnityEngine.Application.persistentDataPath, "*_fui.bytes", System.IO.SearchOption.AllDirectories);
            files.forEach(value => {
                //找到了UI文件.开始加载
                Panthea.UI.UIKit.LoadPackage(value);
            })
        }

        public CreateInstance(view: ViewInfo): FairyGUI.GObject {
            let obj = FairyGUI.UIPackage.CreateObject(view.pkg, view.name);
            FairyGUI.GRoot.inst.AddChild(obj);
            return obj;
        }

        public CreatePanel(view: ViewInfo,uiBase : UIBase,...args) {
            let obj = FairyGUI.UIPackage.CreateObject(view.pkg, view.name);
            uiBase.View = obj.asCom;
            FairyGUI.GRoot.inst.AddChild(obj);
            uiBase.Construct();
            uiBase.OnInit(args);
            uiBase.OnEnable(args);
            this.UIMap.set(view.pkg + "." + view.name + "." + (uiBase as any).constructor.name,uiBase);
            return obj;
        }

        public Get(key: string): UIBase {
            if(this.UIMap.has(key)){
                return this.UIMap.get(key);
            }
            return null;
        }
        
        public Destroy(key: string,pool : boolean = false)
        {
            let ui = this.Get(key);
            if(!pool && ui) {
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
}
