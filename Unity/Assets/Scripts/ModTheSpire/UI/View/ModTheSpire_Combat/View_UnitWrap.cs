/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Combat
{
    public partial class View_UnitWrap : GComponent
    {
        public Controller HPVisible;
        public GGraph Bounds;
        public GGraph ModelLoader;
        public GLoader ImageLoader;
        public View_HealthBar HealthBar;
        public GLoader PowerList;
        public View_DisplayName DisplayName;
        public Transition SlowAttack;
        public Transition FastAttack;
        public Transition Jump;
        public Transition Hop;
        public Transition FastShake;
        public Transition SlowShake;
        public Transition Stagger;
        public Transition DisplayName_2;
        public const string URL = "ui://qmow4f55myaq1l";

        public static View_UnitWrap CreateInstance()
        {
            return (View_UnitWrap)UIPackage.CreateObject("ModTheSpire_Combat", "UnitWrap");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            HPVisible = GetController("HPVisible");
            Bounds = (GGraph)GetChild("Bounds");
            ModelLoader = (GGraph)GetChild("ModelLoader");
            ImageLoader = (GLoader)GetChild("ImageLoader");
            HealthBar = (View_HealthBar)GetChild("HealthBar");
            PowerList = (GLoader)GetChild("PowerList");
            DisplayName = (View_DisplayName)GetChild("DisplayName");
            SlowAttack = GetTransition("SlowAttack");
            FastAttack = GetTransition("FastAttack");
            Jump = GetTransition("Jump");
            Hop = GetTransition("Hop");
            FastShake = GetTransition("FastShake");
            SlowShake = GetTransition("SlowShake");
            Stagger = GetTransition("Stagger");
            DisplayName_2 = GetTransition("DisplayName");
        }
    }
}