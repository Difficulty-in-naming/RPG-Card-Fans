using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class Looter_Model : MonsterInfo
    {
        public static string Id = "Looter";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(46,50) : Random.Range(44,48);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/looter/skeleton.atlas",
                    "Monsters/theBottom/looter/skeleton.json", "Monsters/theBottom/looter/skeleton.png");
            }
        }

        public override string Name => "抢劫的";

        public Looter_Model(Vector2 pos) : base(pos)
        {
        }
    }
}