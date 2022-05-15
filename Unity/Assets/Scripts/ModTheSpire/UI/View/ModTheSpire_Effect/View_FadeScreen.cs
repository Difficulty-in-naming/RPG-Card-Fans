/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Effect
{
    public partial class View_FadeScreen : GComponent
    {
        public GGraph Graph;
        public const string URL = "ui://pvapz9l6etma4c";

        public static View_FadeScreen CreateInstance()
        {
            return (View_FadeScreen)UIPackage.CreateObject("ModTheSpire_Effect", "FadeScreen");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Graph = (GGraph)GetChild("Graph");
        }
    }
}