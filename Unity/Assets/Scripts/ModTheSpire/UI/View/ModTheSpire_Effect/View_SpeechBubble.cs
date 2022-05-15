/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_SpeechBubble : GLabel
    {
        public GImage Bg;
        public GGraph Holder;
        public Transition t0;
        public const string URL = "ui://pvapz9l6guw12u";

        public static View_SpeechBubble CreateInstance()
        {
            return (View_SpeechBubble)UIPackage.CreateObject("ModTheSpire_Effect", "SpeechBubble");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Bg = (GImage)GetChild("Bg");
            Holder = (GGraph)GetChild("Holder");
            t0 = GetTransition("t0");
        }
    }
}