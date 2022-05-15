/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Map
{
    public partial class View_BossRoom : GButton
    {
        public GLoader outline;
        public Transition Default;
        public Transition Hover;
        public Transition Down;
        public const string URL = "ui://x4jxa6ndcq11x";

        public static View_BossRoom CreateInstance()
        {
            return (View_BossRoom)UIPackage.CreateObject("ModTheSpire_Map", "BossRoom");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            outline = (GLoader)GetChild("outline");
            Default = GetTransition("Default");
            Hover = GetTransition("Hover");
            Down = GetTransition("Down");
        }
    }
}