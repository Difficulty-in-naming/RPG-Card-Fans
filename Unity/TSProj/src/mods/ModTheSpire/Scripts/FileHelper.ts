import {ConfigAssetManager} from "../../../Core/Module/Config/ConfigAssetManager";
import {UnityEngine} from 'csharp';

// @ts-ignore
export let basePath = "mods/ModTheSpire/";
export default class FileHelper{
    
    constructor() 
    {
        
    }
    
    public static LoadConfig() : void{
        ConfigAssetManager.Load("ModTheSpire_Localization", UnityEngine.Application.persistentDataPath + "/" + basePath + "DB/Localization.json");
    }
    
    public static FormatPath(file:string) : string
    {
        return basePath + "Res/" + file;
    }
    
    public static FormatPath2(file:string):string{
        return UnityEngine.Application.persistentDataPath + "/" + basePath + "/Res/" + file;
    }
}