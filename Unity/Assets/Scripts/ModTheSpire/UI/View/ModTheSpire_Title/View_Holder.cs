/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Title
{
    public partial class View_Holder : GComponent
    {
        public GGraph TopCloudHolder;
        public const string URL = "ui://r56y0bvsfyc6v";

        public static View_Holder CreateInstance()
        {
            return (View_Holder)UIPackage.CreateObject("ModTheSpire_Title", "Holder");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            TopCloudHolder = (GGraph)GetChild("TopCloudHolder");
        }
    }
}