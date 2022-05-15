/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_PlayerTurnEffect : GComponent
    {
        public GTextField Banner;
        public GTextField TurnMessage;
        public Transition t0;
        public const string URL = "ui://pvapz9l6a9nx4a";

        public static View_PlayerTurnEffect CreateInstance()
        {
            return (View_PlayerTurnEffect)UIPackage.CreateObject("ModTheSpire_Effect", "PlayerTurnEffect");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Banner = (GTextField)GetChild("Banner");
            TurnMessage = (GTextField)GetChild("TurnMessage");
            t0 = GetTransition("t0");
        }
    }
}