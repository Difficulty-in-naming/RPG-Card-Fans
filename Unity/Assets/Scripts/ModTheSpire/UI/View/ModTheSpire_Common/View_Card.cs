/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_Card : GComponent
    {
        public Controller c1;
        public GLoader Bg;
        public GLoader icon;
        public GLoader Frame;
        public GLoader Banner;
        public GLoader Orb;
        public GTextField Type;
        public GTextField Desc;
        public GTextField Energy;
        public GTextField Name;
        public const string URL = "ui://rduitwm2gh7d1l";

        public static View_Card CreateInstance()
        {
            return (View_Card)UIPackage.CreateObject("ModTheSpire_Common", "Card");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            c1 = GetController("c1");
            Bg = (GLoader)GetChild("Bg");
            icon = (GLoader)GetChild("icon");
            Frame = (GLoader)GetChild("Frame");
            Banner = (GLoader)GetChild("Banner");
            Orb = (GLoader)GetChild("Orb");
            Type = (GTextField)GetChild("Type");
            Desc = (GTextField)GetChild("Desc");
            Energy = (GTextField)GetChild("Energy");
            Name = (GTextField)GetChild("Name");
        }
    }
}