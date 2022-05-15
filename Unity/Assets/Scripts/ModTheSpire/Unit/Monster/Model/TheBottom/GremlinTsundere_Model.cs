using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class GremlinTsundere_Model : MonsterInfo
    {
        public static string Id = "GremlinTsundere";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(13, 17) : Random.Range(12,15);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/femaleGremlin/skeleton.atlas",
                    "Monsters/theBottom/femaleGremlin/skeleton.json", "Monsters/theBottom/femaleGremlin/skeleton.png");
            }
        }

        public override string Name => "持盾地精";

        public GremlinTsundere_Model(Vector2 pos) : base(pos)
        {
        }
    }
}