/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Combat
{
    public partial class View_Block : GLabel
    {
        public Controller Block;
        public Transition t0;
        public const string URL = "ui://qmow4f55yao82d";

        public static View_Block CreateInstance()
        {
            return (View_Block)UIPackage.CreateObject("ModTheSpire_Combat", "Block");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Block = GetController("Block");
            t0 = GetTransition("t0");
        }
    }
}