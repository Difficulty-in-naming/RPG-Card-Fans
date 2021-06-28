import { FairyEditor } from 'csharp';
import CodeWriter from './CodeWriter';

function genCode(handler: FairyEditor.PublishHandler) {
    let settings = (<FairyEditor.GlobalPublishSettings>handler.project.GetSettings("Publish")).codeGeneration;
    let codePkgName = handler.ToFilename(handler.pkg.name); //convert chinese to pinyin, remove special chars etc.
    let exportCodePath = handler.exportCodePath + '/' + codePkgName;
    let namespaceName = codePkgName;
    
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
    writer.writeln('namespace %s', codePkgName);
    writer.startBlock();
    writer.writeln('import ViewInfo = UI.ViewInfo;');
    for (let i: number = 0; i < classCnt; i++) {
        let classInfo = classes.get_Item(i);
        writer.writeln('export let %s = new ViewInfo(\'%s\',\'%s\');', classInfo.className,codePkgName,classInfo.className);
    }
    writer.endBlock(); //namepsace

    writer.save(exportCodePath + '.ts');

    writer.reset();
}

export { genCode };