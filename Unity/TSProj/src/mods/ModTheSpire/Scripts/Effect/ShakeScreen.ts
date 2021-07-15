import * as core from 'csharp';
import { UnityEngine } from 'csharp';
import * as puerts from 'puerts'
import {Log} from "../../../../Core/Module/Log/Log";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
export class ShakeScreen extends AbstractEffect
{
    private Intensity : ShakeIntensity;
    private ShakeDur : ShakeDur;
    private Dir : {Vertical : boolean,Horizontal : boolean};
    private static InitializePos : Array<UnityEngine.Vector3> = new Array<core.UnityEngine.Vector3>()
    private static Camera : Array<core.UnityEngine.Transform> = new Array<core.UnityEngine.Transform>();
    
    static Initialize(){
        let temp = core.UnityEngine.Object.FindObjectsOfType(puerts.$typeof(core.UnityEngine.Camera));
        for (let i = 0; i < temp.Length; i++) {
            this.Camera[i] = (<core.UnityEngine.Camera>temp.get_Item(i)).transform;
            this.InitializePos[i] = this.Camera[i].position;
        }
    }
    
    public constructor(intensity:ShakeIntensity, dur:ShakeDur, dir = {Vertical:false,Horizontal:true}) {
        super();
        this.Intensity = intensity;
        this.ShakeDur = dur;
        this.Dir = dir;
    }
    
    Update()
    {
        if(this.Duration > this.ShakeDur){
            this.IsDone = true;
            for (let i = 0; i < ShakeScreen.Camera.length; i++) {
                ShakeScreen.Camera[i].position = ShakeScreen.InitializePos[i];
            }
            return;
        }
        let x = this.Dir.Horizontal ? Math.cos(Math.random() * 5) / this.Intensity : 0;
        let y = this.Dir.Vertical ? Math.cos(Math.random() * 5) / this.Intensity : 0;
        for (let i = 0; i < ShakeScreen.Camera.length; i++) {
            let vec = new core.UnityEngine.Vector3(ShakeScreen.InitializePos[i].x + x,ShakeScreen.InitializePos[i].y + y,ShakeScreen.InitializePos[i].z);
            ShakeScreen.Camera[i].position = vec;
        }
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
    HIGH= 3
}