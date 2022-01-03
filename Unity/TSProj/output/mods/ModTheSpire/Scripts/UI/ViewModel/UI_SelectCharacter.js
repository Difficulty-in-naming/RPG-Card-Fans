"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_SelectCharacter = void 0;
var Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
var DungeonManager_1 = require("../../DungeonManager");
var EffectKit_1 = require("../../Effect/EffectKit");
var FadeScreenEffect_1 = require("../../Effect/FadeScreenEffect");
var ShakeScreen_1 = require("../../Effect/ShakeScreen");
var ModTheSpire_SelectCharacter_1 = require("../../Gen/View/ModTheSpire_SelectCharacter");
var PlayerInfo_1 = require("../../Unit/Character/PlayerInfo");
var UI_BottomScene_1 = require("./UI_BottomScene");
var UI_SelectGameMode_1 = require("./UI_SelectGameMode");
var UI_Title_1 = require("./UI_Title");
var UI_TopBar_1 = require("./UI_TopBar");
class UI_SelectCharacter extends ModTheSpire_SelectCharacter_1.View_SelectCharacter {
    OnEnable(...args) {
        let selectGameMode = UI_SelectGameMode_1.UI_SelectGameMode.GetInstance();
        if (selectGameMode) {
            selectGameMode.CloseMySelf();
        }
        this.InitUI();
        this.InitPlayerList();
    }
    InitUI() {
        this.Cancel.onClick.Add(() => {
            UI_SelectGameMode_1.UI_SelectGameMode.CreatePanel();
            this.CloseMySelf();
        });
    }
    InitPlayerList() {
        PlayerInfo_1.AllPlayer.forEach(value => {
            let item = this.CharList.AddItemFromPool().asButton;
            item.icon = value.CharSelectButton;
            item.data = value;
            item.onClick.Add(() => {
                this.SelectCharTitle.visible = false;
                this.CharBg.visible = true;
                this.AdvanceSettings.visible = true;
                this.CharBg.icon = value.Portrait;
                this.CharDesc.text = value.Description;
                this.CharName.text = value.Name;
                this.CharGroup.visible = true;
                this.Health.SetVar("Health", value.Health.toString()).FlushVars();
                this.Gold.SetVar("Gold", value.Gold.toString()).FlushVars();
                if (value.InitRelic.length > 0) {
                    let relic = value.InitRelic[0];
                    this.Relic.url = relic.Icon;
                    this.RelicName.text = relic.Name;
                    this.RelicDesc.text = relic.Desc;
                }
                this.Confirm.visible = true;
                this.Confirm.GetTransition("Enter").Play();
                this.Confirm.onClick.Set(() => {
                    this.View.touchable = false;
                    this.Confirm.GetTransition("Enter").PlayReverse();
                    new FadeScreenEffect_1.FadeScreenEffect(true, () => {
                        this.CloseMySelf();
                        //UI_SelectGameMode.GetInstance()?.CloseMySelf();
                        UI_Title_1.UI_Title.GetInstance()?.CloseMySelf();
                        DungeonManager_1.default.NewGame(value, Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(-50000000, 50000001)).toString());
                        UI_TopBar_1.default.CreatePanel();
                        UI_BottomScene_1.UI_BottomScene.CreatePanel();
                    });
                });
                let rotation = Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 2));
                EffectKit_1.default.Inst().Play(new ShakeScreen_1.ShakeScreen(ShakeScreen_1.ShakeIntensity.MED, ShakeScreen_1.ShakeDur.SHORT, { Vertical: rotation == 0, Horizontal: rotation == 1 }));
            });
        });
    }
    Close_OnClick() {
    }
}
exports.UI_SelectCharacter = UI_SelectCharacter;
//# sourceMappingURL=UI_SelectCharacter.js.map