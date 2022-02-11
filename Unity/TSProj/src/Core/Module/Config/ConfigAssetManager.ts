import {Log} from "../Log/Log";
import {System} from 'csharp';
import { LocalizationProperty } from "../../../mods/ModTheSpire/Scripts/Gen/DB/Localization";
export class ConfigAssetManager {
    protected static KeyValue: Map<string,Map<any, unknown>> = new Map<string, Map<any, unknown>>();
    public static Load(uuid:string, path: string) {
        let json: string = null;
        try {
            json = System.IO.File.ReadAllText(path,System.Text.Encoding.UTF8);
            console.log(json);
            if (!json)
            {
                return;
            }
        }
        catch (e) {
            throw ("找不到文件:" + path + "\n" + e);
        }
        let map = new Map<any,unknown>();
        let deserialize = JSON.parse(json);
        for (let key in deserialize) {
            let x = deserialize[key] as unknown;
            map.set(key, x);
        }
        this.KeyValue.set(uuid,map);
    }

    public static Release() {
        this.KeyValue.clear();
        this.KeyValue = null;
    }

    public static Read(uuid:string, id: any, throwException: boolean = true) : unknown
    {
        if (this.KeyValue.has(uuid)) {
            let map = this.KeyValue.get(uuid);
            if(map.has(id)) {
                return map.get(id);
            }
        }
        //if(throwException)
        //    Log.Print("Id:" + id + "不存在");
    }

    public static ReadDict(modName : string) : Map<any,any>
    {
        if (this.KeyValue.has(modName)) {
            return this.KeyValue[modName];
        }
        return this.KeyValue;
    }
}
   
