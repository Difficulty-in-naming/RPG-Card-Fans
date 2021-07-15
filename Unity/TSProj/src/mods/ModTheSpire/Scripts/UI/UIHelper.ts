import {FairyGUI} from "csharp";
import {UI_Tooltips} from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_Tooltips";
import AbstractCard, {CardColor, CardType} from "mods/ModTheSpire/Scripts/Cards/AbstractCard";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import {LocalizationProperty} from "mods/ModTheSpire/Scripts/Gen/DB/Localization";

export default class {
    public static CreateGLoader() : FairyGUI.GLoader
    {
        let loader = <FairyGUI.GLoader>FairyGUI.UIObjectFactory.NewObject(FairyGUI.ObjectType.Loader);
        FairyGUI.GRoot.inst.AddChild(loader);
        return loader;
    }
    public static CreateGComponent() : FairyGUI.GComponent
    {
        let component = <FairyGUI.GComponent>FairyGUI.UIObjectFactory.NewObject(FairyGUI.ObjectType.Component);
        FairyGUI.GRoot.inst.AddChild(component);
        return component;
    }
    public static CreateGGraph() : FairyGUI.GGraph
    {
        let graph = <FairyGUI.GGraph>FairyGUI.UIObjectFactory.NewObject(FairyGUI.ObjectType.Graph)
        FairyGUI.GRoot.inst.AddChild(graph);
        return graph;
    }
    public static CreateTextField():FairyGUI.GTextField
    {
        let text = <FairyGUI.GTextField>FairyGUI.UIObjectFactory.NewObject(FairyGUI.ObjectType.Text)
        FairyGUI.GRoot.inst.AddChild(text);
        return text;
    }
    public static ShowToolTips() : UI_Tooltips{
        let tooltips = <UI_Tooltips>UI_Tooltips.CreatePanel();
        tooltips.View.visible = true;
        tooltips.View.touchable = false;
        return tooltips;
    }
    public static HideToolTips(){
        UI_Tooltips.GetInstance().View.visible = false;
    }
    public static InitCardObject(com : FairyGUI.GComponent,card : AbstractCard)
    {
        if(card.Color == CardColor.RED)
        {
            com.GetChild("Bg").asLoader.url = FileHelper.FormatPath(`Cards/ui/bg_${card.Type}_${card.Color}.png`);
            for (let i = 1; i <= 5; i++) {
                com.GetChild("Orb").asLoader.url = FileHelper.FormatPath(`Orbs/${card.Color}/layer${i}.png`);
            }
            if(card.Type == CardType.ATTACK)
                com.GetChild("Type").text = LocalizationProperty.Read("攻击");
            else if(card.Type == CardType.SKILL)
                com.GetChild("Type").text = LocalizationProperty.Read("技能");
            else if(card.Type == CardType.CURSE)
                com.GetChild("Type").text = LocalizationProperty.Read("诅咒");
            else if(card.Type == CardType.POWER)
                com.GetChild("Type").text = LocalizationProperty.Read("能力");
            else if(card.Type == CardType.STATUS)
                com.GetChild("Type").text = LocalizationProperty.Read("状态");
            com.GetChild("Desc").text = card.GetDesc();
            com.GetChild("Energy").text = card.Energy.toString();
            com.GetChild("Name").text = card.Name;
        }
        com.GetChild("icon").asLoader.url = card.Icon;
        com.GetController("c1").selectedPage = card.Type;
    }
}