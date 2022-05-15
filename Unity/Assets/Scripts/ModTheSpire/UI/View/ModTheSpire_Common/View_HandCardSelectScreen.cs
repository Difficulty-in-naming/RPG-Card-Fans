/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_HandCardSelectScreen : GComponent
    {
        public GTextField Title;
        public View_RewardConfirmButton Confirm;
        public View_Card Source;
        public View_Card Target;
        public GGroup Group;
        public Transition t0;
        public const string URL = "ui://rduitwm2kmbw2q";

        public static View_HandCardSelectScreen CreateInstance()
        {
            return (View_HandCardSelectScreen)UIPackage.CreateObject("ModTheSpire_Common", "HandCardSelectScreen");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Title = (GTextField)GetChild("Title");
            Confirm = (View_RewardConfirmButton)GetChild("Confirm");
            Source = (View_Card)GetChild("Source");
            Target = (View_Card)GetChild("Target");
            Group = (GGroup)GetChild("Group");
            t0 = GetTransition("t0");
        }
    }
}