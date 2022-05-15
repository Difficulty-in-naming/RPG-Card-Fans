/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_Tooltips : GLabel
    {
        public GTextField Name;
        public GTextField Desc;
        public const string URL = "ui://rduitwm2fq7p26";

        public static View_Tooltips CreateInstance()
        {
            return (View_Tooltips)UIPackage.CreateObject("ModTheSpire_Common", "Tooltips");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Name = (GTextField)GetChild("Name");
            Desc = (GTextField)GetChild("Desc");
        }
    }
}