import {Log} from "../Log/Log";
import {System} from 'csharp';
import {LocalizationProperty} from "../../../Mod/SlayTheSpire/Scripts/DB/Localization";
export interface IConfig {
}

export class ConfigAssetManager {
    protected static KeyValue: Map<string,Map<any, any>> = new Map<string, Map<any, any>>();
    public static Load(modName:string, path: string) {
        let json: string = null;
        try {
            json = System.IO.File.ReadAllText(path,System.Text.Encoding.UTF8);
            if (!json)
            {
                return;
            }
        }
        catch (e) {
            throw ("找不到文件:" + path + "\n" + e);
        }
        let map = new Map<any,any>();
        let deserialize = JSON.parse(json,(key, value) => {
            map.set(key,value);
        })
        this.KeyValue.set(modName,map);
    }

    public static Release() {
        this.KeyValue.clear();
        this.KeyValue = null;
    }

    public static Read(modName:string, id: any, throwException: boolean = true) : any
    {
        if (this.KeyValue.has(modName)) {
            let value = this.KeyValue.get(modName);
            if(value.has(id)) {
                return value.get(id);
            }
        }
        if(throwException)
            Log.Print("Id:" + id + "不存在");
    }

    public static ReadDict(modName : string) : Map<any,any>
    {
        if (this.KeyValue.has(modName)) {
            return this.KeyValue[modName];
        }
        return this.KeyValue;
    }
}
   
