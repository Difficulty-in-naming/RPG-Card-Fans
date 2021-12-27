import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import Color from "../../DataDefine/Color";
import DungeonManager from "../../DungeonManager";
import { AbstractEffect } from "../AbstractEffect";
import { ShakeScreen, ShakeIntensity, ShakeDur } from "../ShakeScreen";
import { BlurWaveChaoticEffect } from "./BlurWaveChaoticEffect";
import { BlurWaveEffect } from "./BlurWaveEffect";


export class ShockWaveEffect extends AbstractEffect{
    public constructor(private _X:number,private _Y:number,private _Color:Color,private _ShockWaveType:ShockWaveType) {
        super();
    }

    Update() {
        super.Update();
        let speed = Mathf.RandomRange(1000,1200);
        switch(this._ShockWaveType){
            case ShockWaveType.ADDITIVE: {
                for(let i = 0;i<40;i++){
                    DungeonManager.EffectManager.Play(new BlurWaveEffect(this._X,this._Y,this._Color,speed,FairyGUI.BlendMode.Add));
                }
                break;
            }
            case ShockWaveType.NORMAL:{
                for(let i = 0;i<40;i++){
                    DungeonManager.EffectManager.Play(new BlurWaveEffect(this._X,this._Y,this._Color,speed,FairyGUI.BlendMode.Normal));
                }
                break;
            }
            case ShockWaveType.CHAOTIC:{
                DungeonManager.EffectManager.Play(new ShakeScreen(ShakeIntensity.HIGH,ShakeDur.SHORT,{Vertical: false,Horizontal: true}))
                for(let i = 0;i<40;i++){
                    DungeonManager.EffectManager.Play(new BlurWaveChaoticEffect(this._X,this._Y,this._Color,speed));
                }
            }
        }
    }
}

export enum ShockWaveType {
    ADDITIVE,
    NORMAL,
    CHAOTIC
}