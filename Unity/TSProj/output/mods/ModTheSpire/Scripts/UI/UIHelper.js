"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csharp_1 = require("csharp");
var puerts = require("puerts");
var AbstractCard_1 = require("../Cards/AbstractCard");
var FileHelper_1 = require("../FileHelper");
var Localization_1 = require("../Gen/DB/Localization");
var UI_Tooltips_1 = require("./ViewModel/UI_Tooltips");
class default_1 {
    static CreateGLoader() {
        let loader = csharp_1.FairyGUI.UIObjectFactory.NewObject(csharp_1.FairyGUI.ObjectType.Loader);
        csharp_1.FairyGUI.GRoot.inst.AddChild(loader);
        return loader;
    }
    static CreateGComponent() {
        let component = csharp_1.FairyGUI.UIObjectFactory.NewObject(csharp_1.FairyGUI.ObjectType.Component);
        csharp_1.FairyGUI.GRoot.inst.AddChild(component);
        return component;
    }
    static CreateGGraph() {
        let graph = csharp_1.FairyGUI.UIObjectFactory.NewObject(csharp_1.FairyGUI.ObjectType.Graph);
        csharp_1.FairyGUI.GRoot.inst.AddChild(graph);
        return graph;
    }
    static CreateTextField() {
        let text = csharp_1.FairyGUI.UIObjectFactory.NewObject(csharp_1.FairyGUI.ObjectType.Text);
        csharp_1.FairyGUI.GRoot.inst.AddChild(text);
        return text;
    }
    static ShowToolTips() {
        let tooltips = UI_Tooltips_1.UI_Tooltips.CreatePanel();
        tooltips.View.visible = true;
        tooltips.View.touchable = false;
        return tooltips;
    }
    static CreateSuperText() {
        let gameObject = csharp_1.ResourcesManager.LoadPrefabFromInternal("TMP");
        let tmp = gameObject.GetComponent(puerts.$typeof(csharp_1.TMPro.TextMeshPro));
        return tmp;
    }
    static HideToolTips() {
        UI_Tooltips_1.UI_Tooltips.GetInstance().View.visible = false;
    }
    static InitCardObject(com, card) {
        if (card.Color == AbstractCard_1.CardColor.RED) {
            com.GetChild("Bg").asLoader.url = FileHelper_1.default.FormatPath(`Cards/ui/bg_${card.Type}_${card.Color}.png`);
            for (let i = 1; i <= 5; i++) {
                com.GetChild("Orb").asLoader.url = FileHelper_1.default.FormatPath(`Orbs/${card.Color}/layer${i}.png`);
            }
            if (card.Type == AbstractCard_1.CardType.ATTACK)
                com.GetChild("Type").text = Localization_1.LocalizationProperty.Read("攻击");
            else if (card.Type == AbstractCard_1.CardType.SKILL)
                com.GetChild("Type").text = Localization_1.LocalizationProperty.Read("技能");
            else if (card.Type == AbstractCard_1.CardType.CURSE)
                com.GetChild("Type").text = Localization_1.LocalizationProperty.Read("诅咒");
            else if (card.Type == AbstractCard_1.CardType.POWER)
                com.GetChild("Type").text = Localization_1.LocalizationProperty.Read("能力");
            else if (card.Type == AbstractCard_1.CardType.STATUS)
                com.GetChild("Type").text = Localization_1.LocalizationProperty.Read("状态");
            com.GetChild("Desc").text = card.GetDesc();
            com.GetChild("Energy").text = card.Energy.toString();
            com.GetChild("Name").text = card.Name;
        }
        com.GetChild("icon").asLoader.url = card.Icon;
        com.GetController("c1").selectedPage = card.Type;
    }
}
exports.default = default_1;
//# sourceMappingURL=UIHelper.js.map