using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class AcidSlime_S_Model : MonsterInfo
    {
        public static string Id = "AcidSlime_S";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(9, 13) : Random.Range(8, 12);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/slimeS/skeleton.atlas",
                    "Monsters/theBottom/slimeS/skeleton.json", "Monsters/theBottom/slimeS/skeleton.png");
            }
        }

        public override string Name => "酸液史莱姆（小）";

        public AcidSlime_S_Model(Vector2 pos) : base(pos)
        {
        }
    }
}