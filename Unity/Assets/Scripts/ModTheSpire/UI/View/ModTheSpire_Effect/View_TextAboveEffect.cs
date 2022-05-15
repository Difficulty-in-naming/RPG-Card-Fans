/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_TextAboveEffect : GLabel
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6pt7b2q";

        public static View_TextAboveEffect CreateInstance()
        {
            return (View_TextAboveEffect)UIPackage.CreateObject("ModTheSpire_Effect", "TextAboveEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}