/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_SelectCharacter
{
    public partial class View_SelectCharacter : GComponent
    {
        public Controller ShowAdvance;
        public GLoader CharBg;
        public GButton Cancel;
        public GTextField SelectCharTitle;
        public GList CharList;
        public GButton Confirm;
        public GButton IsAdvanced;
        public GTextField AdvanceTip;
        public GButton Left;
        public GButton Right;
        public GTextField Level;
        public GGroup AdvanceLevelGroup;
        public GGroup AdvanceSettings;
        public GButton SetSeeds;
        public GTextField CharName;
        public GTextField Health;
        public GTextField Gold;
        public GTextField CharDesc;
        public GLoader Relic;
        public GTextField RelicName;
        public GRichTextField RelicDesc;
        public GTextField UnlockTip;
        public GGroup CharGroup;
        public const string URL = "ui://7jdrar2vkefbl";

        public static View_SelectCharacter CreateInstance()
        {
            return (View_SelectCharacter)UIPackage.CreateObject("ModTheSpire_SelectCharacter", "SelectCharacter");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            ShowAdvance = GetController("ShowAdvance");
            CharBg = (GLoader)GetChild("CharBg");
            Cancel = (GButton)GetChild("Cancel");
            SelectCharTitle = (GTextField)GetChild("SelectCharTitle");
            CharList = (GList)GetChild("CharList");
            Confirm = (GButton)GetChild("Confirm");
            IsAdvanced = (GButton)GetChild("IsAdvanced");
            AdvanceTip = (GTextField)GetChild("AdvanceTip");
            Left = (GButton)GetChild("Left");
            Right = (GButton)GetChild("Right");
            Level = (GTextField)GetChild("Level");
            AdvanceLevelGroup = (GGroup)GetChild("AdvanceLevelGroup");
            AdvanceSettings = (GGroup)GetChild("AdvanceSettings");
            SetSeeds = (GButton)GetChild("SetSeeds");
            CharName = (GTextField)GetChild("CharName");
            Health = (GTextField)GetChild("Health");
            Gold = (GTextField)GetChild("Gold");
            CharDesc = (GTextField)GetChild("CharDesc");
            Relic = (GLoader)GetChild("Relic");
            RelicName = (GTextField)GetChild("RelicName");
            RelicDesc = (GRichTextField)GetChild("RelicDesc");
            UnlockTip = (GTextField)GetChild("UnlockTip");
            CharGroup = (GGroup)GetChild("CharGroup");
        }
    }
}