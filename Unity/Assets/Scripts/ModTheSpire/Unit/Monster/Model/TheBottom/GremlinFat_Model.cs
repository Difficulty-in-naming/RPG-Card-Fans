using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class GremlinFat_Model : MonsterInfo
    {
        public static string Id = "GremlinFat";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(14, 18) : Random.Range(13,17);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/fatGremlin/skeleton.atlas",
                    "Monsters/theBottom/fatGremlin/skeleton.json", "Monsters/theBottom/fatGremlin/skeleton.png");
            }
        }

        public override string Name => "胖地精";

        public GremlinFat_Model(Vector2 pos) : base(pos)
        {
        }
    }
}