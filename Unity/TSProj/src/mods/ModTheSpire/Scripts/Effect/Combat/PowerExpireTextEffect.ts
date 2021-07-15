import { FairyGUI } from "csharp";
import {View_PowerExpireTextEffect} from "mods/ModTheSpire/Scripts/Gen/View/ModTheSpire_Effect";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";
import {LocalSettings} from "mods/ModTheSpire/Scripts/Saves/LocalSettings";
import {FlyingSpikeEffect} from "mods/ModTheSpire/Scripts/Effect/Combat/FlyingSpikeEffect";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";

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