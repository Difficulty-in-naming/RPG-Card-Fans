/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_FlyingSpikeEffect : GComponent
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6st1o0";

        public static View_FlyingSpikeEffect CreateInstance()
        {
            return (View_FlyingSpikeEffect)UIPackage.CreateObject("ModTheSpire_Effect", "FlyingSpikeEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}