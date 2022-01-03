"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_Title = void 0;
var Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
var TimeKit_1 = require("../../../../../Core/Utils/TimeKit");
var EffectKit_1 = require("../../Effect/EffectKit");
var TitleDustEffect_1 = require("../../Effect/TitleDustEffect");
var FileHelper_1 = require("../../FileHelper");
var ModTheSpire_Title_1 = require("../../Gen/View/ModTheSpire_Title");
var UIHelper_1 = require("../UIHelper");
var UI_SelectGameMode_1 = require("./UI_SelectGameMode");
class UI_Title extends ModTheSpire_Title_1.View_Title {
    constructor() {
        super(...arguments);
        this.DustTimer = 0.05;
        this.TopCloud = new Array();
        this.MidCloud = new Array();
    }
    OnInit(...args) {
        this.View.MakeFullScreen();
        this.View.Center();
        this.MainMenuEnter.Play();
        this.Start.onClick.Add(() => {
            UI_SelectGameMode_1.UI_SelectGameMode.CreatePanel();
            this.MainMenuEnter.PlayReverse(null);
        });
        for (let i = 1; i <= 7; i++) {
            this.TopCloud.push(new TitleCloud(`Title/topCloud${i}.png`, Mathf_1.Mathf.RandomRange(10, 50), Mathf_1.Mathf.RandomRange(-1920, 1920), this.TopCloudHolder));
        }
        for (let i = 1; i <= 13; i++) {
            this.MidCloud.push(new TitleCloud(`Title/midCloud${i}.png`, Mathf_1.Mathf.RandomRange(-50, -10), Mathf_1.Mathf.RandomRange(-1920, 1920), this.MidCloudHolder));
        }
    }
    OnUpdate() {
        this.DustTimer -= TimeKit_1.TimeKit.DeltaTime;
        if (this.DustTimer < 0) {
            this.DustTimer = 0.05;
            let dust = new TitleDustEffect_1.TitleDustEffect();
            this.DustHolder.AddChild(dust.Loader);
            EffectKit_1.default.Inst().Play(dust);
        }
        for (let i = 0; i < 7; i++) {
            this.TopCloud[i].Update();
        }
        for (let i = 0; i < 13; i++) {
            this.MidCloud[i].Update();
        }
    }
}
exports.UI_Title = UI_Title;
class TitleCloud {
    constructor(path, Vx, X, parent) {
        this.Vx = Vx;
        this.X = X;
        this.Loader = UIHelper_1.default.CreateGLoader();
        parent.AddChild(this.Loader);
        this.Y = -900 + Mathf_1.Mathf.RandomRange(-250, 250);
        this.Loader.SetPosition(this.X, this.Y, 0);
        this.Loader.url = FileHelper_1.default.FormatPath(path);
        this.Vy = Mathf_1.Mathf.RandomRange(-Vx / 10, Vx / 10);
    }
    Update() {
        this.X += this.Vx * TimeKit_1.TimeKit.DeltaTime;
        this.Y += this.Vy * TimeKit_1.TimeKit.DeltaTime;
        if (this.Vx > 0 && this.Loader.x > 1920) {
            this.X = -1920;
            this.Y = -900 + Mathf_1.Mathf.RandomRange(-250, 520);
            this.Vx = Mathf_1.Mathf.RandomRange(10, 50);
            this.Vy = Mathf_1.Mathf.RandomRange(-this.Vx / 5, this.Vy / 5);
        }
        else if (this.Loader.x < -1920) {
            this.X = 1920;
            this.Y = -1100 + Mathf_1.Mathf.RandomRange(-50, 50);
            this.Vx = Mathf_1.Mathf.RandomRange(10, 50);
            this.Vy = Mathf_1.Mathf.RandomRange(-this.Vx / 5, this.Vy / 5);
        }
        this.Loader.SetPosition(this.X, this.Y, 0);
    }
    Dispose() {
        this.Loader.Dispose();
    }
}
//# sourceMappingURL=UI_Title.js.map