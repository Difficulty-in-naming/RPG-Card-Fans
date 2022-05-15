/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_TopBar
{
    public partial class View_TopBar : GComponent
    {
        public View_KeySlots Slots;
        public GTextField PlayerName;
        public GTextField ClassName;
        public View_Health Health;
        public View_Gold Gold;
        public GList PotionList;
        public View_Map Map;
        public View_Deck Deck;
        public View_Settings Settings;
        public GList RelicList;
        public GTextField AdvanceLevel;
        public GGroup Advance;
        public const string URL = "ui://wg6ewwqqpz5g0";

        public static View_TopBar CreateInstance()
        {
            return (View_TopBar)UIPackage.CreateObject("ModTheSpire_TopBar", "TopBar");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Slots = (View_KeySlots)GetChild("Slots");
            PlayerName = (GTextField)GetChild("PlayerName");
            ClassName = (GTextField)GetChild("ClassName");
            Health = (View_Health)GetChild("Health");
            Gold = (View_Gold)GetChild("Gold");
            PotionList = (GList)GetChild("PotionList");
            Map = (View_Map)GetChild("Map");
            Deck = (View_Deck)GetChild("Deck");
            Settings = (View_Settings)GetChild("Settings");
            RelicList = (GList)GetChild("RelicList");
            AdvanceLevel = (GTextField)GetChild("AdvanceLevel");
            Advance = (GGroup)GetChild("Advance");
        }
    }
}