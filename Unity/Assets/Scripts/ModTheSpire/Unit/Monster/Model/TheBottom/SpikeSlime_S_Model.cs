using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class SpikeSlime_S_Model : MonsterInfo
    {
        public static string Id = "SpikeSlime_S";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(11, 15) : Random.Range(10, 14);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/slimeAltM/skeleton.atlas",
                    "Monsters/theBottom/slimeAltM/skeleton.json", "Monsters/theBottom/slimeAltM/skeleton.png");
            }
        }

        public override string Name => "尖刺史莱姆（小）";

        public SpikeSlime_S_Model(Vector2 pos) : base(pos)
        {
        }
    }
}