/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_TopBar
{
    public partial class View_HeartCom : GComponent
    {
        public Controller button;
        public Transition Heal;
        public const string URL = "ui://wg6ewwqqtaydh";

        public static View_HeartCom CreateInstance()
        {
            return (View_HeartCom)UIPackage.CreateObject("ModTheSpire_TopBar", "HeartCom");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            button = GetController("button");
            Heal = GetTransition("Heal");
        }
    }
}