using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class GremlinWarrior_Model : MonsterInfo
    {
        public static string Id = "GremlinWarrior";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(21, 25) : Random.Range(20, 24);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/angryGremlin/skeleton.atlas",
                    "Monsters/theBottom/angryGremlin/skeleton.json", "Monsters/theBottom/angryGremlin/skeleton.png");
            }
        }

        public override string Name => "火大地精";

        public GremlinWarrior_Model(Vector2 pos) : base(pos)
        {
        }
    }
}