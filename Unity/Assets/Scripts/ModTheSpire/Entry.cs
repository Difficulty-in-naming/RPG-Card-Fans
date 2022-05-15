using Config.ConfigCore;
using Cysharp.Threading.Tasks;
using ModTheSpire.UI.ViewModel;
using ModTheSpire.Unit.Character;
using TCG.Config;
using UnityEngine;

///ModEntry标记Mod的入口.标记为入口的Mod会自动执行当前类下面的Initialize的静态无参数函数
[ModEntry]
public class Entry
{
    static async void Initialize()
    {
        await LoadConfig();
        var title = UIKit.Inst.Create<UI_Title>();
        PlayableCharacterManager.Register(new Ironclad());
    }

    static async UniTask LoadConfig()
    {
        await ConfigAssetManager<LocalizationProperty>.Load("Config/Client/Localization.json");
    }
}
