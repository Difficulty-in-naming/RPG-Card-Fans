/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_SelectCharacter
{
    public partial class View_CharacterButton : GButton
    {
        public Transition t0;
        public Transition t1;
        public Transition t2;
        public const string URL = "ui://7jdrar2vkefb9";

        public static View_CharacterButton CreateInstance()
        {
            return (View_CharacterButton)UIPackage.CreateObject("ModTheSpire_SelectCharacter", "CharacterButton");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
            t1 = GetTransition("t1");
            t2 = GetTransition("t2");
        }
    }
}