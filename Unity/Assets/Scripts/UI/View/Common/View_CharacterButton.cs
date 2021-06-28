/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace Common
{
    public partial class View_CharacterButton : GButton
    {
        public Transition t0;
        public Transition t1;
        public Transition t2;
        public const string URL = "ui://rduitwm2kefb9";

        public static View_CharacterButton CreateInstance()
        {
            return (View_CharacterButton)UIPackage.CreateObject("Common", "CharacterButton");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransitionAt(0);
            t1 = GetTransitionAt(1);
            t2 = GetTransitionAt(2);
        }
    }
}