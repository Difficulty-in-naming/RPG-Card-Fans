using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class GremlinThief_Model : MonsterInfo
    {
        public static string Id = "GremlinThief";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(11, 15) : Random.Range(10,14);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/thiefGremlin/skeleton.atlas",
                    "Monsters/theBottom/thiefGremlin/skeleton.json", "Monsters/theBottom/thiefGremlin/skeleton.png");
            }
        }

        public override string Name => "卑鄙地精";

        public GremlinThief_Model(Vector2 pos) : base(pos)
        {
        }
    }
}