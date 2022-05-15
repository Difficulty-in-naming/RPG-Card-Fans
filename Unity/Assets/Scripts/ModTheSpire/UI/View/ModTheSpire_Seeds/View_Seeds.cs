/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Seeds
{
    public partial class View_Seeds : GComponent
    {
        public GComponent Input;
        public GButton Yes;
        public GButton No;
        public const string URL = "ui://wccuczgepz5g0";

        public static View_Seeds CreateInstance()
        {
            return (View_Seeds)UIPackage.CreateObject("ModTheSpire_Seeds", "Seeds");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Input = (GComponent)GetChild("Input");
            Yes = (GButton)GetChild("Yes");
            No = (GButton)GetChild("No");
        }
    }
}