/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_RewardConfirmButton : GButton
    {
        public Transition normal;
        public Transition over;
        public Transition down;
        public const string URL = "ui://rduitwm2kmbw2v";

        public static View_RewardConfirmButton CreateInstance()
        {
            return (View_RewardConfirmButton)UIPackage.CreateObject("ModTheSpire_Common", "RewardConfirmButton");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            normal = GetTransition("normal");
            over = GetTransition("over");
            down = GetTransition("down");
        }
    }
}