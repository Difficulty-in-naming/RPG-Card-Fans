/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_CardPoofParticle : GLabel
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6hemu4b";

        public static View_CardPoofParticle CreateInstance()
        {
            return (View_CardPoofParticle)UIPackage.CreateObject("ModTheSpire_Effect", "CardPoofParticle");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}