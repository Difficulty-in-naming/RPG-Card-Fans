/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_BiteEffect : GComponent
    {
        public GImage Top;
        public GImage Bot;
        public Transition t0;
        public const string URL = "ui://pvapz9l6eelv2v";

        public static View_BiteEffect CreateInstance()
        {
            return (View_BiteEffect)UIPackage.CreateObject("ModTheSpire_Effect", "BiteEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Top = (GImage)GetChild("Top");
            Bot = (GImage)GetChild("Bot");
            t0 = GetTransition("t0");
        }
    }
}