/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_BorderFlashEffect : GComponent
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6eelv32";

        public static View_BorderFlashEffect CreateInstance()
        {
            return (View_BorderFlashEffect)UIPackage.CreateObject("ModTheSpire_Effect", "BorderFlashEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}