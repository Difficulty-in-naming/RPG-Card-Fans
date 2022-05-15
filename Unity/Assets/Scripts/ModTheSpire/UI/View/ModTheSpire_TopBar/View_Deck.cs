/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_TopBar
{
    public partial class View_Deck : GButton
    {
        public GTextField Number;
        public Transition t0;
        public Transition t1;
        public const string URL = "ui://wg6ewwqqpz5gb";

        public static View_Deck CreateInstance()
        {
            return (View_Deck)UIPackage.CreateObject("ModTheSpire_TopBar", "Deck");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Number = (GTextField)GetChild("Number");
            t0 = GetTransition("t0");
            t1 = GetTransition("t1");
        }
    }
}