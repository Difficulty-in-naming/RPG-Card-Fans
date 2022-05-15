using ModTheSpire.Card;
using ModTheSpire.Unit.Monster;

namespace ModTheSpire.Room
{
    public abstract class AbstractRoom
    {
        public MonsterGroup Monsters;
        public CardGroup Souls;
        public int Round;
        public abstract RoomPhase Phase { get; }
        public abstract void Enter();
        public abstract void End();

        public virtual void AddReward(object[] reward)
        {
        }
    }
}