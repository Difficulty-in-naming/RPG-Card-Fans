/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_EntangleEffect : GComponent
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6eelv30";

        public static View_EntangleEffect CreateInstance()
        {
            return (View_EntangleEffect)UIPackage.CreateObject("ModTheSpire_Effect", "EntangleEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}