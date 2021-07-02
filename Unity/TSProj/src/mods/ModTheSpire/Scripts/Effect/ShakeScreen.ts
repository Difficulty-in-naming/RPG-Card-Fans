import * as core from 'csharp';
import * as puerts from 'puerts'
import {Log} from "../../../../Core/Module/Log/Log";
import {AEffect} from "./AEffect";
export class ShakeScreen extends AEffect
{
    private Intensity : ShakeIntensity;
    private ShakeDur : ShakeDur;
    private Dir : {Vertical : boolean,Horizontal : boolean};
    static Camera : Array<core.UnityEngine.Transform> = new Array<core.UnityEngine.Transform>();
    
    static Initialize(){
        let temp = core.UnityEngine.Object.FindObjectsOfType(puerts.$typeof(core.UnityEngine.Camera));
        for (let i = 0; i < temp.Length; i++) {
            this.Camera[i] = (<core.UnityEngine.Camera>temp.get_Item(i)).transform;
        }
    }
    
    public constructor(intensity:ShakeIntensity, dur:ShakeDur, dir = {Vertical:false,Horizontal:true}) {
        super();
        this.Intensity = intensity;
        this.ShakeDur = dur;
        this.Dir = dir;
    }
    
    async Update() : Promise<boolean>
    {
        if(this.Duration > this.ShakeDur){
            return true;
        }
        let x = this.Dir.Horizontal ? Math.cos(Math.random() * 5) / 50 : 0;
        let y = this.Dir.Vertical ? Math.cos(Math.random() * 5) / 50 : 0;
        let vec = new core.UnityEngine.Vector3(x,y,-10);
        for (let i = 0; i < ShakeScreen.Camera.length; i++) {
            ShakeScreen.Camera[i].position = vec;
        }
        return false;
    }
}

ShakeScreen.Initialize();

export enum ShakeDur {
    DEFAULT = 1,
    SHORT = 0.3,
    MED = 0.5,
    LONG = 1,
    XLONG = 3
}

export enum ShakeIntensity 
{
    LOW = 50,
    MED = 10,
    HIGH= 5
}