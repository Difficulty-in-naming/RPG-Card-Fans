/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_CardTrailEffect : GComponent
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6joqm49";

        public static View_CardTrailEffect CreateInstance()
        {
            return (View_CardTrailEffect)UIPackage.CreateObject("ModTheSpire_Effect", "CardTrailEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}