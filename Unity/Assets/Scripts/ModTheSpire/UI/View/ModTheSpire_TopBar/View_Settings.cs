/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_TopBar
{
    public partial class View_Settings : GButton
    {
        public Transition t0;
        public Transition t1;
        public const string URL = "ui://wg6ewwqqpz5gc";

        public static View_Settings CreateInstance()
        {
            return (View_Settings)UIPackage.CreateObject("ModTheSpire_TopBar", "Settings");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
            t1 = GetTransition("t1");
        }
    }
}