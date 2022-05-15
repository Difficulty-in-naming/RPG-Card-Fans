/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_MainMenuButton : GButton
    {
        public Transition Hover;
        public const string URL = "ui://rduitwm2kefb0";

        public static View_MainMenuButton CreateInstance()
        {
            return (View_MainMenuButton)UIPackage.CreateObject("ModTheSpire_Common", "MainMenuButton");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Hover = GetTransition("Hover");
        }
    }
}