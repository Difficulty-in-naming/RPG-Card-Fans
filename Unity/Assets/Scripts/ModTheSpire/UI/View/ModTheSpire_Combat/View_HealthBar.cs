/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Combat
{
    public partial class View_HealthBar : GProgressBar
    {
        public Controller Block;
        public GImage Outside;
        public GImage Background;
        public GImage Middle;
        public GTextField DisplayText;
        public View_Block Block_2;
        public const string URL = "ui://qmow4f55myaq1z";

        public static View_HealthBar CreateInstance()
        {
            return (View_HealthBar)UIPackage.CreateObject("ModTheSpire_Combat", "HealthBar");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Block = GetController("Block");
            Outside = (GImage)GetChild("Outside");
            Background = (GImage)GetChild("Background");
            Middle = (GImage)GetChild("Middle");
            DisplayText = (GTextField)GetChild("DisplayText");
            Block_2 = (View_Block)GetChild("Block");
        }
    }
}