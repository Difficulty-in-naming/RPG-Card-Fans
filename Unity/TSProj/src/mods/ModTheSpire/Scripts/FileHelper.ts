import {ConfigAssetManager} from "../../../Core/Module/Config/ConfigAssetManager";
import PathHelper from "../../../Core/Utils/PathHelper";
import {UnityEngine} from 'csharp';

// @ts-ignore
export let basePath = "mods/ModTheSpire/";
export default class FileHelper{
    
    constructor() 
    {
        
    }
    
    public static LoadConfig() : void{
        ConfigAssetManager.Load("ModTheSpire",UnityEngine.Application.persistentDataPath + "/" + basePath + "DB/Localization.json");
    }
}