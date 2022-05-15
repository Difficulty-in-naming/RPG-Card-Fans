/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_MasterDeckView
{
    public partial class View_MasterDeckView : GComponent
    {
        public Controller c1;
        public GList Menu;
        public GList List;
        public GTextField desc;
        public Transition Enter;
        public const string URL = "ui://0yihslg9fq7p0";

        public static View_MasterDeckView CreateInstance()
        {
            return (View_MasterDeckView)UIPackage.CreateObject("ModTheSpire_MasterDeckView", "MasterDeckView");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            c1 = GetController("c1");
            Menu = (GList)GetChild("Menu");
            List = (GList)GetChild("List");
            desc = (GTextField)GetChild("desc");
            Enter = GetTransition("Enter");
        }
    }
}