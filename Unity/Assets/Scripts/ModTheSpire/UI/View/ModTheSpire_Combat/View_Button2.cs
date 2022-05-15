/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Combat
{
    public partial class View_Button2 : GButton
    {
        public GImage LightOver;
        public Transition EndTurn;
        public const string URL = "ui://qmow4f55mdv91g";

        public static View_Button2 CreateInstance()
        {
            return (View_Button2)UIPackage.CreateObject("ModTheSpire_Combat", "Button2");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            LightOver = (GImage)GetChild("LightOver");
            EndTurn = GetTransition("EndTurn");
        }
    }
}