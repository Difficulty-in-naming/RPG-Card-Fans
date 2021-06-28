import {Log} from "../Log/Log";
import {System} from 'csharp'; 
export interface IConfig {
}

export class ConfigAssetManager {
    protected static KeyValue: Map<unknown, unknown>;
    ///用于随机取值使用的
    protected static Values: any[];

    public static async Load(path: string) {
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
        this.KeyValue = new Map(JSON.parse(json));
    }

    public static Release() {
        if ((this.Values != null)) {
            this.Values = null;
        }
        this.KeyValue.clear();
        this.KeyValue = null;
    }

    public static Read(id: any, throwException: boolean = true) {
        if (this.KeyValue.has(id)) {
            return this.KeyValue.get(id);
        }
        if(throwException)
            Log.Print("Id:", id, "不存在");
    }

    public static ReadDict(){
        return this.KeyValue;
    }

    public static ReadList() {
        if ((this.Values == null))
        {
            if (this.KeyValue != null)
            {
                this.Values = Array.from(this.KeyValue.values());
            }
            else
            {
                this.Values = [];
            }
        }
        return this.Values;
    }
}
   
