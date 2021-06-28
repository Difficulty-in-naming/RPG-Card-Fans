import { FairyEditor } from 'csharp';
import CodeWriter from './CodeWriter';

function genCode(handler: FairyEditor.PublishHandler) {
    let settings = (<FairyEditor.GlobalPublishSettings>handler.project.GetSettings("Publish")).codeGeneration;
    let codePkgName = handler.ToFilename(handler.pkg.name); //convert chinese to pinyin, remove special chars etc.
    let exportCodePath = handler.exportCodePath + '/' + codePkgName;
    let namespaceName = codePkgName;
    console.log(handler.project.name);
    let isMonoGame = handler.project.type == FairyEditor.ProjectType.MonoGame;
    console.log('Export To Path' + exportCodePath);

    if (settings.packageName)
        namespaceName = settings.packageName + '.' + namespaceName;

    //CollectClasses(stripeMemeber, stripeClass, fguiNamespace)
    let classes = handler.CollectClasses(settings.ignoreNoname, settings.ignoreNoname, null);
    handler.SetupCodeFolder(handler.exportCodePath, ""); //check if target folder exists, and delete old files

    let getMemberByName = settings.getMemberByName;

    let classCnt = classes.Count;
    let writer = new CodeWriter();
    writer.writeln('import {UI} from "../../../../Core/Module/UI/UIKit";');
    writer.writeln('import ViewInfo = UI.ViewInfo;');
    writer.writeln('import UIKit = UI.UIKit;')
    writer.writeln('import UIBase = UI.UIBase;')
    writer.writeln('import {FairyGUI} from "csharp"')
    for (let i: number = 0; i < classCnt; i++) {
        let classInfo = classes.get_Item(i);
        writer.writeln('export class %s extends UIBase', classInfo.className);
        writer.startBlock();
        writer.writeln('public static Url = new ViewInfo("%s","%s")',codePkgName,classInfo.resName);
        writer.writeln('public static CreatePanel(...args) : UIBase')
        writer.startBlock();
        writer.writeln('let url : string = this.Url + "_" + this.name;');
        writer.writeln('let panel : UIBase = UIKit.Inst().Get(url);');
        writer.writeln('if(!panel)');
        writer.startBlock();
        writer.writeln('panel = new this;');
        writer.writeln('UIKit.Inst().CreatePanel(this.Url,panel);')
        writer.endBlock();
        writer.writeln("return panel;")
        writer.endBlock();
        writer.writeln("public static CreateInstance() : FairyGUI.GObject");
        writer.startBlock();
        writer.writeln("return UIKit.Inst().CreateInstance(this.Url);")
        writer.endBlock();
        writer.endBlock();
    }

    writer.save(exportCodePath + '.ts');

    writer.reset();
}

export { genCode };