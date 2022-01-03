"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_Map = void 0;
var csharp_1 = require("csharp");
var Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
var Color_1 = require("../../DataDefine/Color");
var DungeonManager_1 = require("../../DungeonManager");
var ModTheSpire_Map_1 = require("../../Gen/View/ModTheSpire_Map");
var UIHelper_1 = require("../UIHelper");
class UI_Map extends ModTheSpire_Map_1.View_Map {
    constructor() {
        super(...arguments);
        this.roomList = new Map();
    }
    OnInit(...args) {
        super.OnInit(...args);
        let mapInfo = DungeonManager_1.default.Inst.CurrentDungeon.MapInfo;
        for (let y = 0; y < mapInfo.length; y++) {
            let value = mapInfo[y];
            for (let x = 0; x < value.length; x++) {
                let info = value[x];
                let loader = ModTheSpire_Map_1.View_NormalRoom.CreateInstance().asCom;
                this.Scroll.AddChild(loader);
                loader.x = 460 + (info.X * 158) + Mathf_1.Mathf.RandomRange(-20, 20);
                loader.y = 2850 - (info.Y * 155) + Mathf_1.Mathf.RandomRange(-20, 20);
                loader.icon = "ui://ModTheSpire_Map/" + info.RoomType;
                loader.GetChild("outline").asLoader.url = loader.icon + "Outline";
                loader.SetScale(0.55, 0.55);
                loader.name = loader.displayObject.gameObject.name = `${info.X},${info.Y}`;
                this.roomList.set(loader, info);
            }
        }
        this.CreatePaths();
    }
    CreatePaths() {
        this.roomList.forEach((value, key) => {
            let currentXY = key.position;
            for (let i = 0; i < value.Next.length; i++) {
                let target = this.Scroll.GetChild(`${value.Next[i].X},${value.Next[i].Y}`);
                let targetInfo = this.roomList.get(target);
                let targetXY = target.position;
                let transformXY = key.TransformPoint(csharp_1.UnityEngine.Vector2.zero, target);
                let diff = new csharp_1.UnityEngine.Vector2(targetXY.x - currentXY.x, target.y - currentXY.y);
                diff.Normalize();
                let rot = Mathf_1.Mathf.Atan2(diff.y, diff.x) * Mathf_1.Mathf.Rad2Deg - 90;
                for (let j = 1;; j++) {
                    let x = key.size.x / 2 + diff.x * 24 * j;
                    let y = key.size.y / 2 + diff.y * 24 * j;
                    if (y < (transformXY.y - target.size.y - 30) * -1)
                        break;
                    let loader = UIHelper_1.default.CreateGLoader();
                    loader.touchable = false;
                    loader.autoSize = true;
                    loader.color = new Color_1.default(87, 87, 87, 255).UnityColor();
                    key.AddChild(loader);
                    loader.url = "ui://ModTheSpire_Map/dot1";
                    loader.SetPosition(x, y, 0);
                    loader.rotation = rot + Mathf_1.Mathf.RandomRange(-30, 30);
                    loader.name = value.X + "," + value.Y;
                    loader.displayObject.gameObject.name = targetInfo.X + "," + targetInfo.Y;
                }
            }
        });
    }
}
exports.UI_Map = UI_Map;
//# sourceMappingURL=UI_Map.js.map