/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Title
{
    public partial class View_Title : GComponent
    {
        public View_Holder DustHolder;
        public View_Holder MidCloudHolder;
        public View_Holder TopCloudHolder;
        public GButton Start;
        public GButton Compendium;
        public GButton Statistics;
        public GButton Settings;
        public GButton Exit;
        public Transition Logo;
        public Transition MainMenuEnter;
        public const string URL = "ui://r56y0bvs8s230";

        public static View_Title CreateInstance()
        {
            return (View_Title)UIPackage.CreateObject("ModTheSpire_Title", "Title");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            DustHolder = (View_Holder)GetChild("DustHolder");
            MidCloudHolder = (View_Holder)GetChild("MidCloudHolder");
            TopCloudHolder = (View_Holder)GetChild("TopCloudHolder");
            Start = (GButton)GetChild("Start");
            Compendium = (GButton)GetChild("Compendium");
            Statistics = (GButton)GetChild("Statistics");
            Settings = (GButton)GetChild("Settings");
            Exit = (GButton)GetChild("Exit");
            Logo = GetTransition("Logo");
            MainMenuEnter = GetTransition("MainMenuEnter");
        }
    }
}