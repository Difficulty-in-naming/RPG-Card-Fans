import { TimeKit } from "../../../../../Core/Utils/TimeKit";
import DungeonManager from "../../DungeonManager";
import AbstractCreature from "../../Unit/AbstractCreature";
import { AbstractEffect } from "../AbstractEffect";
import { WebLineEffect } from "./WebLineEffect";
import { WebParticleEffect } from "./WebParticleEffect";


export class WebEffect extends AbstractEffect{
    private _Timer = 0.1;
    private _Count = 0;
    public constructor(private _Target:AbstractCreature,private _X:number,private _Y:number) {
        super();
    }
    
    public Update() {
        this._Timer -= TimeKit.DeltaTime;
        if(this._Timer < 0){
            this._Timer += 0.1;
            switch(this._Count){
                case 0:{
                    DungeonManager.EffectManager.Play(new WebLineEffect(this._X,this._Y,true));
                    DungeonManager.EffectManager.Play(new WebLineEffect(this._X,this._Y,true));
                    DungeonManager.EffectManager.Play(new WebParticleEffect(this._X - 90,this._Y - 10));
                    break;
                }
                case 1:{
                    DungeonManager.EffectManager.Play(new WebLineEffect(this._X,this._Y,true));
                    DungeonManager.EffectManager.Play(new WebLineEffect(this._X,this._Y,true));
                    break;
                }
                case 2:{
                    DungeonManager.EffectManager.Play(new WebLineEffect(this._X,this._Y,true));
                    DungeonManager.EffectManager.Play(new WebLineEffect(this._X,this._Y,true));
                    DungeonManager.EffectManager.Play(new WebParticleEffect(this._X + 70,this._Y + 80));
                    break;
                }
                case 4:{
                    DungeonManager.EffectManager.Play(new WebParticleEffect(this._X + 30,this._Y - 100));
                    break;
                }
            }
            this._Count++;
        }
        if(this.Duration >= 1) {
            this.IsDone = true;
            return;
        }
    }
}