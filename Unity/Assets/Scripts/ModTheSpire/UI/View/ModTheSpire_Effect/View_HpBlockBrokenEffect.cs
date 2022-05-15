/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_HpBlockBrokenEffect : GComponent
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6lqlw35";

        public static View_HpBlockBrokenEffect CreateInstance()
        {
            return (View_HpBlockBrokenEffect)UIPackage.CreateObject("ModTheSpire_Effect", "HpBlockBrokenEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}