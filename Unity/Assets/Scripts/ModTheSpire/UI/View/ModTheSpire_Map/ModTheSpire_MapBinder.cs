/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ModTheSpire.ModTheSpire_Map
{
    public class ModTheSpire_MapBinder
    {
        [UnityEngine.RuntimeInitializeOnLoadMethod]
        public static void BindAll()
        {
            UIObjectFactory.SetPackageItemExtension(View_ScrollPage.URL, typeof(View_ScrollPage));
            UIObjectFactory.SetPackageItemExtension(View_NormalRoom.URL, typeof(View_NormalRoom));
            UIObjectFactory.SetPackageItemExtension(View_Map.URL, typeof(View_Map));
            UIObjectFactory.SetPackageItemExtension(View_BossRoom.URL, typeof(View_BossRoom));
        }
    }
}