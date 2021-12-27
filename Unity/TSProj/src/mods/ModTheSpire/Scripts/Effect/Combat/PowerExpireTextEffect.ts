import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import Color from "../../DataDefine/Color";
import DungeonManager from "../../DungeonManager";
import { View_PowerExpireTextEffect } from "../../Gen/View/ModTheSpire_Effect";
import { LocalSettings } from "../../Saves/LocalSettings";
import { AbstractEffect } from "../AbstractEffect";
import { FlyingSpikeEffect } from "./FlyingSpikeEffect";


export class PowerExpireTextEffect extends AbstractEffect{
    private Interval = 2;
    private SpikeEffectTriggered = false;
    public TextEffect:FairyGUI.GComponent;
    public constructor(public X:number,public Y:number,public msg:string,public icon:string ) {
        super();
        this.TextEffect = <FairyGUI.GComponent>View_PowerExpireTextEffect.CreateInstance();
        this.TextEffect.GetTransition("t0").Play();
    }
    Update() {
        super.Update();
        if(this.Duration >= this.Interval * 0.2 && !LocalSettings.Inst().DisableEffects && !this.SpikeEffectTriggered){
            this.SpikeEffectTriggered = true;
            for(let i = 0;i<10;i++){
                DungeonManager.EffectManager.Play(new FlyingSpikeEffect(this.TextEffect,Mathf.RandomRange(-20,0) + 64,Mathf.RandomRange(20,108),0,Mathf.RandomRange(-80,-120),undefined,Color.BlueText.Clone()))
            }
            for(let i = 0;i<10;i++){
                DungeonManager.EffectManager.Play(new FlyingSpikeEffect(this.TextEffect,Mathf.RandomRange(20,0) + 64,Mathf.RandomRange(20,108),0,Mathf.RandomRange(80,120),undefined,Color.BlueText.Clone()))
            }
        }
        if(this.Duration >= this.Interval)
        {
            this.IsDone = true;
            return;
        }
    }
}