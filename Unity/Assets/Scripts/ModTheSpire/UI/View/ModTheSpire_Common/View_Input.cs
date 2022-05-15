/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_Input : GComponent
    {
        public GTextInput Input;
        public const string URL = "ui://rduitwm2pz5g12";

        public static View_Input CreateInstance()
        {
            return (View_Input)UIPackage.CreateObject("ModTheSpire_Common", "Input");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Input = (GTextInput)GetChild("Input");
        }
    }
}