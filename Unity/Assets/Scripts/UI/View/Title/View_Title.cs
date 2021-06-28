/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace Title
{
    public partial class View_Title : GComponent
    {
        public GButton Start;
        public GButton Compendium;
        public GButton Statistics;
        public GButton Settings;
        public GButton Exit;
        public Transition Background;
        public Transition Logo;
        public Transition MainMenuEnter;
        public const string URL = "ui://r56y0bvs8s230";

        public static View_Title CreateInstance()
        {
            return (View_Title)UIPackage.CreateObject("Title", "Title");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Start = (GButton)GetChildAt(7);
            Compendium = (GButton)GetChildAt(8);
            Statistics = (GButton)GetChildAt(9);
            Settings = (GButton)GetChildAt(10);
            Exit = (GButton)GetChildAt(11);
            Background = GetTransitionAt(0);
            Logo = GetTransitionAt(1);
            MainMenuEnter = GetTransitionAt(2);
        }
    }
}