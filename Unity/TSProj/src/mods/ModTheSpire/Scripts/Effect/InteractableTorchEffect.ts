import { FairyGUI, MediaManager } from "csharp";
import { TimeKit } from "../../../../Core/Utils/TimeKit";
import FileHelper from "../FileHelper";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";
import EffectKit from "./EffectKit";
import { LightFlareEffect } from "./LightFlareEffect";
import { TorchParticleEffect } from "./TorchParticleEffect";

export class InteractableTorchEffect extends AbstractEffect{
    private Loader : FairyGUI.GLoader;
    private Component:FairyGUI.GComponent;
    private Activated : boolean = true;
    private ParticleTimer:number = 0;
    constructor(public X:number,public Y:number,public Size:TorchSize = TorchSize.M) {
        super();
        this.Component = UIHelper.CreateGComponent();
        this.Loader = UIHelper.CreateGLoader();
        this.Component.AddChild(this.Loader);
        this.Loader.url = FileHelper.FormatPath("Vfx/env/torch.png");
        this.Component.EnsureBoundsCorrect()
        this.Component.SetPosition(X,Y,0);
        this.Loader.alpha = 0.4;
        this.Loader.SetScale(Size,Size);
        this.Loader.gameObjectName = Size.toString();
        this.Loader.onClick.Set(()=>{
            this.Activated = !this.Activated;
            if(this.Activated)
                MediaManager.PlayVoice("Audio/sound/attack_fire.ogg")
            else
                MediaManager.PlayVoice("Audio/sound/scene_torch_extinguish.ogg")
        })
    }
    Update(){
        if(this.Activated){
            this.ParticleTimer -= TimeKit.DeltaTime;
            if(this.ParticleTimer <= 0){
                this.ParticleTimer = 0.1;
                switch(this.Size){
                    case TorchSize.S:
                        EffectKit.Inst().Play(new TorchParticleEffect(11,0,this.Component));
                        EffectKit.Inst().Play(new LightFlareEffect(-220,-250,this.Component));
                        break;
                    case TorchSize.M:
                        EffectKit.Inst().Play(new TorchParticleEffect(13,10,this.Component));
                        EffectKit.Inst().Play(new LightFlareEffect(-220,-250,this.Component));
                        break;
                    case TorchSize.L:
                        EffectKit.Inst().Play(new TorchParticleEffect(15,5,this.Component));
                        EffectKit.Inst().Play(new LightFlareEffect(-220,-250,this.Component));
                        break;
                }
            }
        }
    }
    public Dispose(){
        this.Component.Dispose();
    }
}

export enum TorchSize {
    S = 1.6,
    M = 2,
    L = 2.4
}