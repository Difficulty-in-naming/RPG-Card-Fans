using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///当生成怪物时
    public class OnSpawnMonsterMessage : IEventHandle
    {
        public AbstractCreature Monster;

        public OnSpawnMonsterMessage(AbstractCreature monster)
        {
            Monster = monster;
        }
    }
}