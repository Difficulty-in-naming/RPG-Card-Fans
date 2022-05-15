/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_MasterDeckView
{
    public partial class View_TitleButton : GButton
    {
        public Controller SortingType;
        public Transition Hover;
        public const string URL = "ui://0yihslg9fq7p3";

        public static View_TitleButton CreateInstance()
        {
            return (View_TitleButton)UIPackage.CreateObject("ModTheSpire_MasterDeckView", "TitleButton");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            SortingType = GetController("SortingType");
            Hover = GetTransition("Hover");
        }
    }
}