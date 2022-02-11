"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_BottomScene = void 0;
const csharp_1 = require("csharp");
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
const TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
const Color_1 = require("../../DataDefine/Color");
const DungeonManager_1 = require("../../DungeonManager");
const BottomFogEffect_1 = require("../../Effect/BottomFogEffect");
const DustEffect_1 = require("../../Effect/DustEffect");
const InteractableTorchEffect_1 = require("../../Effect/InteractableTorchEffect");
const FileHelper_1 = require("../../FileHelper");
const ModTheSpire_BottomScene_1 = require("../../Gen/View/ModTheSpire_BottomScene");
const LocalSettings_1 = require("../../Saves/LocalSettings");
const UIHelper_1 = require("../UIHelper");
class UI_BottomScene extends ModTheSpire_BottomScene_1.View_BottomScene {
    Dust = new Array();
    Fog = new Array();
    Torches = new Array();
    OnInit(...args) {
        this.Render();
        this.RenderPlayer();
    }
    OnEnable(...args) {
        csharp_1.MediaManager.PlayMusic(FileHelper_1.default.FormatPath("Audio/sound/STS_SFX_BeyondAmb_v1.ogg"));
    }
    UpdateDust() {
        let length = this.Dust.length;
        for (let i = length - 1; i >= 0; i--) {
            this.Dust[i].Duration += TimeKit_1.TimeKit.DeltaTime;
            this.Dust[i].Update();
            if (this.Dust[i].IsDone)
                this.Dust.splice(i, 1);
        }
        if (length < 100 && !LocalSettings_1.LocalSettings.Inst().DisableEffects) {
            let dust = new DustEffect_1.DustEffect(this.View);
            this.Dust.push(dust);
        }
    }
    UpdateFog() {
        let length = this.Fog.length;
        for (let i = length - 1; i >= 0; i--) {
            this.Fog[i].Duration += TimeKit_1.TimeKit.DeltaTime;
            this.Fog[i].Update();
            if (this.Fog[i].IsDone)
                this.Fog.splice(i, 1);
        }
        if (length < 50 && !LocalSettings_1.LocalSettings.Inst().DisableEffects) {
            this.Fog.push(new BottomFogEffect_1.BottomFogEffect(this.View));
        }
    }
    UpdateTorches() {
        this.Torches.forEach(t1 => t1.Update());
    }
    Render() {
        if (Mathf_1.Mathf.Random() > 0.5) {
            this.midWall.visible = false;
            this.mod1.visible = false;
            this.mod2.visible = true;
            if (Mathf_1.Mathf.Random() > 0.5) {
                this.midWall.visible = true;
                if (Mathf_1.Mathf.Random() > 0.5) {
                    this.mod1.visible = true;
                }
            }
        }
        else {
            this.midWall.visible = true;
            this.mod1.visible = false;
            this.mod2.visible = false;
            if (Mathf_1.Mathf.Random() > 0.5) {
                this.mod1.visible = true;
            }
        }
        if (this.mod2.visible && (this.midWall.visible || this.mod1.visible)) {
            this.midWall.color = Color_1.default.Gray.UnityColor;
        }
        this.CeilingMod1.visible = Mathf_1.Mathf.Random() > 0.5;
        this.CeilingMod2.visible = Mathf_1.Mathf.Random() > 0.5;
        this.CeilingMod3.visible = Mathf_1.Mathf.Random() > 0.5;
        this.CeilingMod4.visible = Mathf_1.Mathf.Random() > 0.5;
        this.CeilingMod5.visible = Mathf_1.Mathf.Random() > 0.5;
        this.CeilingMod6.visible = Mathf_1.Mathf.Random() > 0.5;
        this.RandomizeTorch();
        let graph = UIHelper_1.default.CreateGGraph();
        graph.color = new Color_1.default(Mathf_1.Mathf.RandomRange(0, 14), Mathf_1.Mathf.RandomRange(0, 52), Mathf_1.Mathf.RandomRange(0, 52)).UnityColor;
        this.View.AddChild(graph);
        graph.SetPosition(0, 0, 0);
        graph.blendMode = csharp_1.FairyGUI.BlendMode.Add;
        graph.MakeFullScreen();
    }
    RandomizeTorch() {
        this.Torches = new Array();
        if (Mathf_1.Mathf.Random() < 0.1) {
            this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(1790, 850, InteractableTorchEffect_1.TorchSize.S));
        }
        if (this.mod2.visible && !this.midWall.visible) {
            let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 2));
            if (roll == 0) {
                this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(800, 312));
                this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(1206, 312));
            }
            else if (roll == 1) {
                this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(328, 215, InteractableTorchEffect_1.TorchSize.S));
            }
        }
        else if (!this.mod1.visible && !this.mod2.visible) {
            if (Mathf_1.Mathf.Random() < 0.75) {
                this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(613, 220));
                this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(613, 408));
                if (Mathf_1.Mathf.Random() < 0.3) {
                    this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(1482, 220));
                    this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(1482, 408));
                }
            }
        }
        else if (this.midWall.visible && this.mod2.visible) {
            if (!this.mod1.visible) {
                let roll = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 3));
                if (roll == 0) {
                    this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(912, 290));
                    this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(912, 554));
                    this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(844, 422, InteractableTorchEffect_1.TorchSize.S));
                    this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(980, 422, InteractableTorchEffect_1.TorchSize.S));
                }
                else if (roll == 1 || roll == 2) {
                    this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(1828, 360));
                }
            }
            else if (Mathf_1.Mathf.Random() < 0.75) {
                this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(970, 206, InteractableTorchEffect_1.TorchSize.L));
            }
        }
        else if (Mathf_1.Mathf.Random() < 0.75 && this.mod1.visible && !this.mod2.visible) {
            this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(970, 207, InteractableTorchEffect_1.TorchSize.L));
            this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(616, 267));
            this.Torches.push(new InteractableTorchEffect_1.InteractableTorchEffect(1266, 372));
        }
    }
    RenderPlayer() {
        var player = DungeonManager_1.default.Inst.Player;
        player.DisplayObject.SetParent(this.View);
        player.X = 493;
        player.Y = 774;
        player.ScaleX = 110;
        player.ScaleY = 110;
        player.DisplayObject.SetAnimation("Idle", true);
    }
    OnUpdate() {
        this.UpdateDust();
        this.UpdateFog();
        this.UpdateTorches();
    }
}
exports.UI_BottomScene = UI_BottomScene;
//# sourceMappingURL=UI_BottomScene.js.map