/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace Common
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
            return (View_Animation)UIPackage.CreateObject("Common", "Animation");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Container = (GLoader)GetChildAt(0);
            Fall = GetTransitionAt(0);
            Rise = GetTransitionAt(1);
            ScaleToZero = GetTransitionAt(2);
            ScaleToNormal = GetTransitionAt(3);
            FadeIn = GetTransitionAt(4);
            FadeOut = GetTransitionAt(5);
        }
    }
}