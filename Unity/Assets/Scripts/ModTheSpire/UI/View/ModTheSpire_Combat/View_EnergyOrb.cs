/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Combat
{
    public partial class View_EnergyOrb : GComponent
    {
        public Controller IsEnable;
        public GImage Layer1;
        public GImage Layer1D;
        public GImage Layer2;
        public GImage Layer2D;
        public GImage Layer3;
        public GImage Layer3D;
        public GImage Layer4;
        public GImage Layer4D;
        public GImage Layer5;
        public GImage Layer5D;
        public const string URL = "ui://qmow4f55mdv91j";

        public static View_EnergyOrb CreateInstance()
        {
            return (View_EnergyOrb)UIPackage.CreateObject("ModTheSpire_Combat", "EnergyOrb");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            IsEnable = GetController("IsEnable");
            Layer1 = (GImage)GetChild("Layer1");
            Layer1D = (GImage)GetChild("Layer1D");
            Layer2 = (GImage)GetChild("Layer2");
            Layer2D = (GImage)GetChild("Layer2D");
            Layer3 = (GImage)GetChild("Layer3");
            Layer3D = (GImage)GetChild("Layer3D");
            Layer4 = (GImage)GetChild("Layer4");
            Layer4D = (GImage)GetChild("Layer4D");
            Layer5 = (GImage)GetChild("Layer5");
            Layer5D = (GImage)GetChild("Layer5D");
        }
    }
}