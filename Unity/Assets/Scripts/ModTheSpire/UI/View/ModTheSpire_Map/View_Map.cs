/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Map
{
    public partial class View_Map : GComponent
    {
        public View_ScrollPage Scroll;
        public GTextField Title;
        public GList List;
        public const string URL = "ui://x4jxa6ndcq111g";

        public static View_Map CreateInstance()
        {
            return (View_Map)UIPackage.CreateObject("ModTheSpire_Map", "Map");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Scroll = (View_ScrollPage)GetChild("Scroll");
            Title = (GTextField)GetChild("Title");
            List = (GList)GetChild("List");
        }
    }
}