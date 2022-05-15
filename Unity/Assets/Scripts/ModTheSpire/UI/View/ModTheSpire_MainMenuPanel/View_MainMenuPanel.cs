/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_MainMenuPanel
{
    public partial class View_MainMenuPanel : GComponent
    {
        public GList List;
        public GButton Cancel;
        public GButton Confirm;
        public Transition Close;
        public const string URL = "ui://r0i72pqokefb0";

        public static View_MainMenuPanel CreateInstance()
        {
            return (View_MainMenuPanel)UIPackage.CreateObject("ModTheSpire_MainMenuPanel", "MainMenuPanel");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            List = (GList)GetChild("List");
            Cancel = (GButton)GetChild("Cancel");
            Confirm = (GButton)GetChild("Confirm");
            Close = GetTransition("Close");
        }
    }
}