/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_PowerBuffEffect : GLabel
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6st1o2";

        public static View_PowerBuffEffect CreateInstance()
        {
            return (View_PowerBuffEffect)UIPackage.CreateObject("ModTheSpire_Effect", "PowerBuffEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}