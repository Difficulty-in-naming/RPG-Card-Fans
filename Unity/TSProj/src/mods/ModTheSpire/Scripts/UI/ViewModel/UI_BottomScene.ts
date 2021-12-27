import { MediaManager, FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../../Core/Utils/TimeKit";
import Color from "../../DataDefine/Color";
import { IScene } from "../../Dungeon/IScene";
import DungeonManager from "../../DungeonManager";
import { BottomFogEffect } from "../../Effect/BottomFogEffect";
import { DustEffect } from "../../Effect/DustEffect";
import { InteractableTorchEffect, TorchSize } from "../../Effect/InteractableTorchEffect";
import FileHelper from "../../FileHelper";
import { View_BottomScene } from "../../Gen/View/ModTheSpire_BottomScene";
import { LocalSettings } from "../../Saves/LocalSettings";
import UIHelper from "../UIHelper";


export class UI_BottomScene extends View_BottomScene implements IScene
{
    private Dust : Array<DustEffect> = new Array<DustEffect>()
    private Fog : Array<BottomFogEffect> = new Array<BottomFogEffect>()
    private Torches : Array<InteractableTorchEffect> = new Array<InteractableTorchEffect>();
    OnInit(...args) {
        this.Render();
        this.RenderPlayer();
    }
    
    OnEnable(...args) {
        MediaManager.PlayMusic(FileHelper.FormatPath("Audio/sound/STS_SFX_BeyondAmb_v1.ogg"));
    }

    UpdateDust(){
        let length = this.Dust.length;
        for (let i = length - 1; i >= 0; i--) {
            this.Dust[i].Duration += TimeKit.DeltaTime;
            this.Dust[i].Update();
            if(this.Dust[i].IsDone)
                this.Dust.splice(i,1);
        }
        if(length < 100 && !LocalSettings.Inst().DisableEffects){
            let dust = new DustEffect(this.View);
            this.Dust.push(dust);
        }
    }

    UpdateFog(){
        let length = this.Fog.length;
        for (let i = length - 1; i >= 0; i--) {
            this.Fog[i].Duration += TimeKit.DeltaTime;
            this.Fog[i].Update();
            if(this.Fog[i].IsDone)
                this.Fog.splice(i,1);
        }
        if(length < 50 && !LocalSettings.Inst().DisableEffects){
            this.Fog.push(new BottomFogEffect(this.View));
        }
    }
    
    UpdateTorches(){
        this.Torches.forEach(t1=>t1.Update());
    }
    
    Render(){
        if(Mathf.Random()> 0.5){
            this.midWall.visible = false;
            this.mod1.visible = false;
            this.mod2.visible = true;
            if(Mathf.Random()> 0.5){
                this.midWall.visible = true;
                if(Mathf.Random()> 0.5){
                    this.mod1.visible = true;
                }
            }
        }
        else{
            this.midWall.visible = true;
            this.mod1.visible = false;
            this.mod2.visible = false;
            if(Mathf.Random()> 0.5) {
                this.mod1.visible = true;
            }
        }
        if(this.mod2.visible && (this.midWall.visible || this.mod1.visible)){
            this.midWall.color = Color.Gray.UnityColor();
        }
        this.CeilingMod1.visible = Mathf.Random() > 0.5;
        this.CeilingMod2.visible = Mathf.Random() > 0.5;
        this.CeilingMod3.visible = Mathf.Random() > 0.5;
        this.CeilingMod4.visible = Mathf.Random() > 0.5;
        this.CeilingMod5.visible = Mathf.Random() > 0.5;
        this.CeilingMod6.visible = Mathf.Random() > 0.5;
        this.RandomizeTorch();
        let graph = UIHelper.CreateGGraph();
        graph.color = new Color(Mathf.RandomRange(0,14),Mathf.RandomRange(0,52),Mathf.RandomRange(0,52)).UnityColor();
        this.View.AddChild(graph);
        graph.SetPosition(0,0,0);
        graph.blendMode = FairyGUI.BlendMode.Add;
        graph.MakeFullScreen();
    }
    
    RandomizeTorch(){
        this.Torches = new Array<InteractableTorchEffect>();
        if(Mathf.Random() < 0.1){
            this.Torches.push(new InteractableTorchEffect(1790,850,TorchSize.S));
        }
        if(this.mod2.visible && !this.midWall.visible){
            let roll = Mathf.Floor(Mathf.RandomRange(0,2));
            if(roll == 0){
                this.Torches.push(new InteractableTorchEffect(800,312));
                this.Torches.push(new InteractableTorchEffect(1206,312));
            }
            else if(roll == 1){
                this.Torches.push(new InteractableTorchEffect(328,215,TorchSize.S));
            }
        }
        else if(!this.mod1.visible && !this.mod2.visible){
            if(Mathf.Random() < 0.75){
                this.Torches.push(new InteractableTorchEffect(613,220));
                this.Torches.push(new InteractableTorchEffect(613,408));
                if(Mathf.Random() < 0.3){
                    this.Torches.push(new InteractableTorchEffect(1482,220));
                    this.Torches.push(new InteractableTorchEffect(1482,408));
                }
            }
        }
        else if(this.midWall.visible && this.mod2.visible){
            if(!this.mod1.visible){
                let roll = Mathf.Floor(Mathf.RandomRange(0,3));
                if(roll == 0){
                    this.Torches.push(new InteractableTorchEffect(912,290));
                    this.Torches.push(new InteractableTorchEffect(912,554));
                    this.Torches.push(new InteractableTorchEffect(844,422,TorchSize.S));
                    this.Torches.push(new InteractableTorchEffect(980,422,TorchSize.S));
                }
                else if(roll == 1 || roll == 2){
                    this.Torches.push(new InteractableTorchEffect(1828,360));
                }
            }
            else if(Mathf.Random() < 0.75){
                this.Torches.push(new InteractableTorchEffect(970,206,TorchSize.L));
            }
        }
        else if(Mathf.Random() < 0.75 && this.mod1.visible && !this.mod2.visible){
            this.Torches.push(new InteractableTorchEffect(970,207,TorchSize.L));
            this.Torches.push(new InteractableTorchEffect(616,267));
            this.Torches.push(new InteractableTorchEffect(1266,372));
        }
    }
    
    RenderPlayer(){
        var player = DungeonManager.Inst.Player;
        player.DisplayObject.SetParent(this.View);
        player.X = 493;
        player.Y = 774;
        player.ScaleX = 110;
        player.ScaleY = 110;
        player.DisplayObject.SetAnimation("Idle",true);
    }
    
    OnUpdate() {
        this.UpdateDust();
        this.UpdateFog();
        this.UpdateTorches();
    }
}