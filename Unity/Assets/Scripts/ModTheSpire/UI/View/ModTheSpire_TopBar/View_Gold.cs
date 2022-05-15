/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_TopBar
{
    public partial class View_Gold : GButton
    {
        public GTextField Gold;
        public const string URL = "ui://wg6ewwqqpz5g4";

        public static View_Gold CreateInstance()
        {
            return (View_Gold)UIPackage.CreateObject("ModTheSpire_TopBar", "Gold");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Gold = (GTextField)GetChild("Gold");
        }
    }
}