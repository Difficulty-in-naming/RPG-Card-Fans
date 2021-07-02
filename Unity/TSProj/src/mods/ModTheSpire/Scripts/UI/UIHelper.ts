import { FairyGUI } from "csharp";

export default class {
    public static CreateGLoader() : FairyGUI.GLoader
    {
        let loader = <FairyGUI.GLoader>FairyGUI.UIObjectFactory.NewObject(FairyGUI.ObjectType.Loader);
        FairyGUI.GRoot.inst.AddChild(loader);
        return loader;
    } 
}