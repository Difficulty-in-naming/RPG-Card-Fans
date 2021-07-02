import * as core from 'csharp';

export default class SaveHelper{
    public static Save(obj:any, path:string){
        let serialize = JSON.stringify(obj);
        core.System.IO.File.WriteAllText(core.UnityEngine.Application.persistentDataPath + "/" + path,serialize);
    }
    
    public static Load(path:string) : any
    {
        if(!core.System.IO.File.Exists(path))
            return undefined;
        return JSON.parse(core.System.IO.File.ReadAllText(path));
    }
}