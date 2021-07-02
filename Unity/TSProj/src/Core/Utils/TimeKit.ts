import { UnityEngine } from "csharp";

export class TimeKit {
    public static DeltaTime;
    public static UnscaledDeltaTime;
    public static TimeScale;
    public static Update(){
        TimeKit.DeltaTime = UnityEngine.Time.deltaTime;
        TimeKit.UnscaledDeltaTime = UnityEngine.Time.unscaledDeltaTime;
    }
}