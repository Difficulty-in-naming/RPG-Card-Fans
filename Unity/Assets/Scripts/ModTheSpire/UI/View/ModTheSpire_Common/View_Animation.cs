/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Common
{
    public partial class View_Animation : GComponent
    {
        public GLoader Container;
        public Transition Fall;
        public Transition Rise;
        public Transition ScaleToZero;
        public Transition ScaleToNormal;
        public Transition FadeIn;
        public Transition FadeOut;
        public const string URL = "ui://rduitwm2k9kc19";

        public static View_Animation CreateInstance()
        {
            return (View_Animation)UIPackage.CreateObject("ModTheSpire_Common", "Animation");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Container = (GLoader)GetChild("Container");
            Fall = GetTransition("Fall");
            Rise = GetTransition("Rise");
            ScaleToZero = GetTransition("ScaleToZero");
            ScaleToNormal = GetTransition("ScaleToNormal");
            FadeIn = GetTransition("FadeIn");
            FadeOut = GetTransition("FadeOut");
        }
    }
}