using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class SpikeSlime_M_Model : MonsterInfo
    {
        public static string Id = "SpikeSlime_M";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(29, 34) : Random.Range(28, 32);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/slimeAltM/skeleton.atlas",
                    "Monsters/theBottom/slimeAltM/skeleton.json", "Monsters/theBottom/slimeAltM/skeleton.png");
            }
        }

        public override string Name => "尖刺史莱姆（中）";

        public SpikeSlime_M_Model(Vector2 pos) : base(pos)
        {
        }
    }
}