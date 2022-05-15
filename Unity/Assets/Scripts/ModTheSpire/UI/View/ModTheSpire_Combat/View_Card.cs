/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Combat
{
    public partial class View_Card : GButton
    {
        public Controller c1;
        public GGraph TrailHolder;
        public GComponent Main;
        public Transition SuperFlash;
        public Transition Flash;
        public Transition Glow;
        public const string URL = "ui://qmow4f55o9r62i";

        public static View_Card CreateInstance()
        {
            return (View_Card)UIPackage.CreateObject("ModTheSpire_Combat", "Card");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            c1 = GetController("c1");
            TrailHolder = (GGraph)GetChild("TrailHolder");
            Main = (GComponent)GetChild("Main");
            SuperFlash = GetTransition("SuperFlash");
            Flash = GetTransition("Flash");
            Glow = GetTransition("Glow");
        }
    }
}