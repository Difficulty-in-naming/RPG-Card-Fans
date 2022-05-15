/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_MainMenuPanel
{
    public partial class View_Button1 : GButton
    {
        public Controller Style;
        public GTextField description;
        public Transition t0;
        public Transition t1;
        public Transition Enter;
        public const string URL = "ui://r0i72pqokefb6";

        public static View_Button1 CreateInstance()
        {
            return (View_Button1)UIPackage.CreateObject("ModTheSpire_MainMenuPanel", "Button1");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Style = GetController("Style");
            description = (GTextField)GetChild("description");
            t0 = GetTransition("t0");
            t1 = GetTransition("t1");
            Enter = GetTransition("Enter");
        }
    }
}