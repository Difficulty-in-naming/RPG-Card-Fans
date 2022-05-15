/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_PowerExpireTextEffect : GComponent
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6st1o2s";

        public static View_PowerExpireTextEffect CreateInstance()
        {
            return (View_PowerExpireTextEffect)UIPackage.CreateObject("ModTheSpire_Effect", "PowerExpireTextEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}