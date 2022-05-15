/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_CancelButton : GButton
    {
        public Transition t0;
        public Transition Hover;
        public Transition Up;
        public Transition Enter;
        public const string URL = "ui://rduitwm2kefb7";

        public static View_CancelButton CreateInstance()
        {
            return (View_CancelButton)UIPackage.CreateObject("ModTheSpire_Common", "CancelButton");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
            Hover = GetTransition("Hover");
            Up = GetTransition("Up");
            Enter = GetTransition("Enter");
        }
    }
}