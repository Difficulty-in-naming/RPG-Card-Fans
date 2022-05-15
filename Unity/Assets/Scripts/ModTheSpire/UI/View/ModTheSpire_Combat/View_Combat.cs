/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Combat
{
    public partial class View_Combat : GComponent
    {
        public GButton Deck;
        public GButton Discard;
        public GButton Exhaust;
        public View_Button EndTurnButton1;
        public View_Button2 EndTurnButton2;
        public View_XuanZhongKuang ReticleCorner;
        public const string URL = "ui://qmow4f55mdv90";

        public static View_Combat CreateInstance()
        {
            return (View_Combat)UIPackage.CreateObject("ModTheSpire_Combat", "Combat");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Deck = (GButton)GetChild("Deck");
            Discard = (GButton)GetChild("Discard");
            Exhaust = (GButton)GetChild("Exhaust");
            EndTurnButton1 = (View_Button)GetChild("EndTurnButton1");
            EndTurnButton2 = (View_Button2)GetChild("EndTurnButton2");
            ReticleCorner = (View_XuanZhongKuang)GetChild("ReticleCorner");
        }
    }
}