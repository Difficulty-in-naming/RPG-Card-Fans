"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCode = void 0;
const csharp_1 = require("csharp");
const CodeWriter_1 = require("./CodeWriter");
function genCode(handler) {
    let xx = handler.project.GetSettings("Publish");
    console.log(xx);
    let settings = handler.project.GetSettings("Publish").codeGeneration;
    let codePkgName = handler.ToFilename(handler.pkg.name); //convert chinese to pinyin, remove special chars etc.
    let exportCodePath = handler.exportCodePath + '/' + codePkgName;
    let namespaceName = codePkgName;
    console.log(handler.project.name);
    let isMonoGame = handler.project.type == csharp_1.FairyEditor.ProjectType.MonoGame;
    console.log('Export To Path' + exportCodePath);
    if (settings.packageName)
        namespaceName = settings.packageName + '.' + namespaceName;
    //CollectClasses(stripeMemeber, stripeClass, fguiNamespace)
    let classes = handler.CollectClasses(settings.ignoreNoname, settings.ignoreNoname, null);
    handler.SetupCodeFolder(handler.exportCodePath, ""); //check if target folder exists, and delete old files
    let getMemberByName = settings.getMemberByName;
    let classCnt = classes.Count;
    let writer = new CodeWriter_1.default();
    writer.writeln('import {UI} from "../../../../../Core/Module/UI/UIKit";');
    writer.writeln('import ViewInfo = UI.ViewInfo;');
    writer.writeln('import UIKit = UI.UIKit;');
    writer.writeln('import UIBase = UI.UIBase;');
    writer.writeln('import {FairyGUI} from "csharp";');
    for (let i = 0; i < classCnt; i++) {
        let classInfo = classes.get_Item(i);
        let members = classInfo.members;
        writer.writeln('export class %s extends UIBase', classInfo.className);
        writer.startBlock();
        let memberCnt = members.Count;
        for (let j = 0; j < memberCnt; j++) {
            let memberInfo = members.get_Item(j);
            writer.writeln('public %s : FairyGUI.%s;', memberInfo.varName, memberInfo.type);
        }
        writer.writeln('public static Url = new ViewInfo("%s","%s")', codePkgName, classInfo.resName);
        writer.writeln('public static CreatePanel(...args) : UIBase');
        writer.startBlock();
        writer.writeln('let url : string = this.Url.toString() + "." + this.name;');
        writer.writeln('let panel : UIBase = UIKit.Inst().Get(url);');
        writer.writeln('if(!panel)');
        writer.startBlock();
        writer.writeln('panel = new this;');
        writer.writeln('UIKit.Inst().CreatePanel(this.Url,panel,args);');
        writer.endBlock();
        writer.writeln("return panel;");
        writer.endBlock();
        writer.writeln("public static CreateInstance() : FairyGUI.GObject");
        writer.startBlock();
        writer.writeln("return UIKit.Inst().CreateInstance(this.Url);");
        writer.endBlock();
        writer.writeln("public static GetInstance() : UIBase");
        writer.startBlock();
        writer.writeln('let url : string = %s.Url.toString() + "." + (this).name;', classInfo.className);
        writer.writeln("return UIKit.Inst().Get(url);");
        writer.endBlock();
        writer.writeln("public CloseMySelf()");
        writer.startBlock();
        writer.writeln('let url : string = %s.Url.toString() + "." + (<any>this).name;', classInfo.className);
        writer.writeln("UIKit.Inst().Destroy(url);");
        writer.endBlock();
        writer.writeln("//不要主动调用这个方法或者修改这个方法");
        writer.writeln("public Construct()");
        writer.startBlock();
        for (let j = 0; j < memberCnt; j++) {
            let memberInfo = members.get_Item(j);
            if (memberInfo.group == 0) {
                if (getMemberByName)
                    writer.writeln('this.%s = this.View.GetChild("%s") as FairyGUI.%s;', memberInfo.varName, memberInfo.name, memberInfo.type);
                else
                    writer.writeln('this.%s = this.View.GetChildAt(%s) as FairyGUI.%s;', memberInfo.varName, memberInfo.index, memberInfo.type);
            }
            else if (memberInfo.group == 1) {
                if (getMemberByName)
                    writer.writeln('this.%s = this.View.GetController("%s") as FairyGUI.Controller;', memberInfo.varName, memberInfo.name);
                else
                    writer.writeln('this.%s = this.View.GetControllerAt(%s) as FairyGUI.Controller;', memberInfo.varName, memberInfo.index);
            }
            else {
                if (getMemberByName)
                    writer.writeln('this.%s = this.View.GetTransition("%s") as FairyGUI.Transition;', memberInfo.varName, memberInfo.name);
                else
                    writer.writeln('this.%s = this.View.GetTransitionAt(%s) as FairyGUI.Transition;', memberInfo.varName, memberInfo.index);
            }
        }
        writer.endBlock();
        writer.endBlock();
    }
    writer.save(exportCodePath + '.ts');
    writer.reset();
}
exports.genCode = genCode;
