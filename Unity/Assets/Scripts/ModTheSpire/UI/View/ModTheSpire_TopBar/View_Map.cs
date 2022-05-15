/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_TopBar
{
    public partial class View_Map : GButton
    {
        public Transition t0;
        public Transition t1;
        public const string URL = "ui://wg6ewwqqpz5ga";

        public static View_Map CreateInstance()
        {
            return (View_Map)UIPackage.CreateObject("ModTheSpire_TopBar", "Map");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
            t1 = GetTransition("t1");
        }
    }
}