/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Combat
{
    public partial class View_Button : GButton
    {
        public Transition EndTurn;
        public const string URL = "ui://qmow4f55mdv91f";

        public static View_Button CreateInstance()
        {
            return (View_Button)UIPackage.CreateObject("ModTheSpire_Combat", "Button");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            EndTurn = GetTransition("EndTurn");
        }
    }
}