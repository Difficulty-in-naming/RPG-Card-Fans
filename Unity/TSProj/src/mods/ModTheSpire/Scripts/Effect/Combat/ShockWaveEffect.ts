import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import {Mathf} from "Core/Module/Math/Mathf";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {BlurWaveEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/BlurWaveEffect";
import {FairyGUI} from "csharp";
import {BlurWaveChaoticEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/BlurWaveChaoticEffect";
import {ShakeDur, ShakeIntensity, ShakeScreen} from "mods/ModTheSpire/Scripts/Effect/ShakeScreen";

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