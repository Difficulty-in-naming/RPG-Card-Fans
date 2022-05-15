/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_LeftButton : GButton
    {
        public Transition t0;
        public Transition t1;
        public const string URL = "ui://rduitwm2pz5gs";

        public static View_LeftButton CreateInstance()
        {
            return (View_LeftButton)UIPackage.CreateObject("ModTheSpire_Common", "LeftButton");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
            t1 = GetTransition("t1");
        }
    }
}