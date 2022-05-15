/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_BottomScene
{
    public partial class View_BottomScene : GComponent
    {
        public GImage midWall;
        public GImage mod1;
        public GImage mod2;
        public GImage CeilingMod6;
        public GImage CeilingMod1;
        public GImage CeilingMod4;
        public GImage CeilingMod5;
        public GImage CeilingMod3;
        public GImage CeilingMod2;
        public GGraph DustHolder;
        public const string URL = "ui://hwgbk08vcc7c0";

        public static View_BottomScene CreateInstance()
        {
            return (View_BottomScene)UIPackage.CreateObject("ModTheSpire_BottomScene", "BottomScene");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            midWall = (GImage)GetChild("midWall");
            mod1 = (GImage)GetChild("mod1");
            mod2 = (GImage)GetChild("mod2");
            CeilingMod6 = (GImage)GetChild("CeilingMod6");
            CeilingMod1 = (GImage)GetChild("CeilingMod1");
            CeilingMod4 = (GImage)GetChild("CeilingMod4");
            CeilingMod5 = (GImage)GetChild("CeilingMod5");
            CeilingMod3 = (GImage)GetChild("CeilingMod3");
            CeilingMod2 = (GImage)GetChild("CeilingMod2");
            DustHolder = (GGraph)GetChild("DustHolder");
        }
    }
}