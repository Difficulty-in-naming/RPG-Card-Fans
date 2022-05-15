/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Map
{
    public partial class View_NormalRoom : GButton
    {
        public GLoader outline;
        public Transition Down;
        public const string URL = "ui://x4jxa6ndcq111f";

        public static View_NormalRoom CreateInstance()
        {
            return (View_NormalRoom)UIPackage.CreateObject("ModTheSpire_Map", "NormalRoom");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            outline = (GLoader)GetChild("outline");
            Down = GetTransition("Down");
        }
    }
}