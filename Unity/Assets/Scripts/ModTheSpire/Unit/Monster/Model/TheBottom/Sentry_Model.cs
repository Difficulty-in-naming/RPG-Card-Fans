using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class Sentry_Model : MonsterInfo
    {
        public static string Id = "Sentry";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(39, 45) : Random.Range(38,42);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/sentry/skeleton.atlas",
                    "Monsters/theBottom/sentry/skeleton.json", "Monsters/theBottom/sentry/skeleton.png");
            }
        }

        public override string Name => "哨卫";

        public Sentry_Model(Vector2 pos) : base(pos)
        {
        }
    }
}