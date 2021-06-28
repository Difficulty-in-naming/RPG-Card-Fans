/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace Common
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
            return (View_ConfirmButton)UIPackage.CreateObject("Common", "ConfirmButton");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransitionAt(0);
            t1 = GetTransitionAt(1);
            t2 = GetTransitionAt(2);
            Enter = GetTransitionAt(3);
        }
    }
}