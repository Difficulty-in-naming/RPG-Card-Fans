/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_ConfirmButton : GButton
    {
        public Transition t0;
        public Transition t1;
        public Transition t2;
        public Transition Enter;
        public const string URL = "ui://rduitwm2pz5gi";

        public static View_ConfirmButton CreateInstance()
        {
            return (View_ConfirmButton)UIPackage.CreateObject("ModTheSpire_Common", "ConfirmButton");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
            t1 = GetTransition("t1");
            t2 = GetTransition("t2");
            Enter = GetTransition("Enter");
        }
    }
}