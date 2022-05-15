/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Combat
{
    public partial class View_XuanZhongKuang : GComponent
    {
        public GImage LeftTopShadow;
        public GImage LeftBottomShadow;
        public GImage RightTopShadow;
        public GImage RightBottomShadow;
        public GImage LeftTop;
        public GImage LeftBottom;
        public GImage RightTop;
        public GImage RightBottom;
        public Transition t0;
        public const string URL = "ui://qmow4f55o9r62h";

        public static View_XuanZhongKuang CreateInstance()
        {
            return (View_XuanZhongKuang)UIPackage.CreateObject("ModTheSpire_Combat", "选中框");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            LeftTopShadow = (GImage)GetChild("LeftTopShadow");
            LeftBottomShadow = (GImage)GetChild("LeftBottomShadow");
            RightTopShadow = (GImage)GetChild("RightTopShadow");
            RightBottomShadow = (GImage)GetChild("RightBottomShadow");
            LeftTop = (GImage)GetChild("LeftTop");
            LeftBottom = (GImage)GetChild("LeftBottom");
            RightTop = (GImage)GetChild("RightTop");
            RightBottom = (GImage)GetChild("RightBottom");
            t0 = GetTransition("t0");
        }
    }
}