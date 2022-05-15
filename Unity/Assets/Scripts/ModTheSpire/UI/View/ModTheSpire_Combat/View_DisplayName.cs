/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Combat
{
    public partial class View_DisplayName : GComponent
    {
        public Transition Enter;
        public const string URL = "ui://qmow4f55yao829";

        public static View_DisplayName CreateInstance()
        {
            return (View_DisplayName)UIPackage.CreateObject("ModTheSpire_Combat", "DisplayName");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Enter = GetTransition("Enter");
        }
    }
}