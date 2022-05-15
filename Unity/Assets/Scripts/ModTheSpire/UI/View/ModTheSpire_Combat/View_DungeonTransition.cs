/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ModTheSpire.ModTheSpire_Combat
{
    public partial class View_DungeonTransition : GComponent
    {
        public GTextField Stage;
        public GTextField Scene;
        public Transition t0;
        public const string URL = "ui://qmow4f55etma36";

        public static View_DungeonTransition CreateInstance()
        {
            return (View_DungeonTransition)UIPackage.CreateObject("ModTheSpire_Combat", "DungeonTransition");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            Stage = (GTextField)GetChild("Stage");
            Scene = (GTextField)GetChild("Scene");
            t0 = GetTransition("t0");
        }
    }
}