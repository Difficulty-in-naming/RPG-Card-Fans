/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_TopBar
{
    public partial class View_KeySlots : GComponent
    {
        public GImage Green;
        public GImage Blue;
        public GImage Red;
        public const string URL = "ui://wg6ewwqqfq7pg";

        public static View_KeySlots CreateInstance()
        {
            return (View_KeySlots)UIPackage.CreateObject("ModTheSpire_TopBar", "KeySlots");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Green = (GImage)GetChild("Green");
            Blue = (GImage)GetChild("Blue");
            Red = (GImage)GetChild("Red");
        }
    }
}