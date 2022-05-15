using Cysharp.Threading.Tasks;

namespace ModTheSpire.Event
{
    public interface IGameAction
    {
        float Duration { get; set; }
        ActionType Type { get; }
        void Init();
        UniTask<bool> Update();
    }
}