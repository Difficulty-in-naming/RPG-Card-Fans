/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_MasterDeckView
{
    public partial class View_Card : GComponent
    {
        public GComponent Inner;
        public const string URL = "ui://0yihslg9fq7pc";

        public static View_Card CreateInstance()
        {
            return (View_Card)UIPackage.CreateObject("ModTheSpire_MasterDeckView", "Card");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Inner = (GComponent)GetChild("Inner");
        }
    }
}