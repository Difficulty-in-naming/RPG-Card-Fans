/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_PowerDebuffEffect : GLabel
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6st1o4";

        public static View_PowerDebuffEffect CreateInstance()
        {
            return (View_PowerDebuffEffect)UIPackage.CreateObject("ModTheSpire_Effect", "PowerDebuffEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}