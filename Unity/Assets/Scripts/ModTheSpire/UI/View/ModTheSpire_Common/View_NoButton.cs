/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_NoButton : GButton
    {
        public Transition t0;
        public Transition t1;
        public const string URL = "ui://rduitwm2pz5g17";

        public static View_NoButton CreateInstance()
        {
            return (View_NoButton)UIPackage.CreateObject("ModTheSpire_Common", "NoButton");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
            t1 = GetTransition("t1");
        }
    }
}