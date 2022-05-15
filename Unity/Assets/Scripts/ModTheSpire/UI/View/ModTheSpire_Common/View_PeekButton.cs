/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_PeekButton : GButton
    {
        public Transition over;
        public Transition normal;
        public Transition selected;
        public const string URL = "ui://rduitwm2kmbw2s";

        public static View_PeekButton CreateInstance()
        {
            return (View_PeekButton)UIPackage.CreateObject("ModTheSpire_Common", "PeekButton");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            over = GetTransition("over");
            normal = GetTransition("normal");
            selected = GetTransition("selected");
        }
    }
}