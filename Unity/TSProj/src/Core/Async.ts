import { Cysharp } from "csharp";
import { $promise } from "puerts";

export default class Async{
    public static async Delay(ms: number,ignoreTimeScale:boolean = false) {
        let task = Cysharp.Threading.Tasks.UniTask.Delay(ms,ignoreTimeScale);
        await $promise(task);
    }
    
    public static async NextFrame(){
        let task = Cysharp.Threading.Tasks.UniTask.NextFrame();
        await $promise(task);
    }

    public static async DelayFrame(count:number){
        let task = Cysharp.Threading.Tasks.UniTask.DelayFrame(count);
        await $promise(task);
    }
}