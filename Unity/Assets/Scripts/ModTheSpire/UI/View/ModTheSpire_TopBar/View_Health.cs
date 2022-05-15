/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_TopBar
{
    public partial class View_Health : GButton
    {
        public GTextField Health;
        public const string URL = "ui://wg6ewwqqpz5g3";

        public static View_Health CreateInstance()
        {
            return (View_Health)UIPackage.CreateObject("ModTheSpire_TopBar", "Health");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Health = (GTextField)GetChild("Health");
        }
    }
}