using Cysharp.Threading.Tasks;
using ModTheSpire.Dungeon;
using ModTheSpire.Event;
using ModTheSpire.Event.Ids;
using ModTheSpire.Power.Special;
using ModTheSpire.Room;
using ModTheSpire.Unit.Monster;

namespace ModTheSpire.Effect.Other
{
    public class SpawnMonsterAction : IGameAction
    {
        public float Duration { get; set; }
        public ActionType Type { get; } = ActionType.SPECIAL;
        private AbstractMonster Monster;
        private bool IsMinion;
        public SpawnMonsterAction(AbstractMonster m,bool isMinion)
        {
            Monster = m;
            IsMinion = isMinion;
        }
        
        public void Init()
        {
            throw new System.NotImplementedException();
        }

        public async UniTask<bool> Update()
        {
            DungeonManager.MessageManager.Send(new OnSpawnMonsterMessage(Monster));
            if (DungeonManager.Inst.CurrentRoom is CombatRoom room)
            {
                room.Monsters.AddMonster(Monster);
                if (IsMinion)
                {
                    Monster.AddPower(new MinionPower(), Monster);
                }
            }
            await UniTask.Delay(100);
            return true;
        }
    }
}