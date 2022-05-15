/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_CleaveEffect : GComponent
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6lqlw39";

        public static View_CleaveEffect CreateInstance()
        {
            return (View_CleaveEffect)UIPackage.CreateObject("ModTheSpire_Effect", "CleaveEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}