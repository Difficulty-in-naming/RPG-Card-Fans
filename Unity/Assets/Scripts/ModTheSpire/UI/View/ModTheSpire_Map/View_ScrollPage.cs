/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Map
{
    public partial class View_ScrollPage : GComponent
    {
        public View_BossRoom Boss;
        public const string URL = "ui://x4jxa6ndcq110";

        public static View_ScrollPage CreateInstance()
        {
            return (View_ScrollPage)UIPackage.CreateObject("ModTheSpire_Map", "ScrollPage");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Boss = (View_BossRoom)GetChild("Boss");
        }
    }
}