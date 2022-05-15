/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_WebParticleEffect : GComponent
    {
        public Transition t0;
        public const string URL = "ui://pvapz9l6eelv2z";

        public static View_WebParticleEffect CreateInstance()
        {
            return (View_WebParticleEffect)UIPackage.CreateObject("ModTheSpire_Effect", "WebParticleEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            t0 = GetTransition("t0");
        }
    }
}