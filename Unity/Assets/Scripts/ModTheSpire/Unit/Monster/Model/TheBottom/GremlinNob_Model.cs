using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class GremlinNob_Model : MonsterInfo
    {
        public static string Id = "GremlinNob";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(85, 90) : Random.Range(82,86);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/nobGremlin/skeleton.atlas",
                    "Monsters/theBottom/nobGremlin/skeleton.json", "Monsters/theBottom/nobGremlin/skeleton.png");
            }
        }

        public override string Name => "地精大块头";

        public GremlinNob_Model(Vector2 pos) : base(pos)
        {
        }
    }
}