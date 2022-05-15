using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class SpikeSlime_L_Model : MonsterInfo
    {
        public static string Id = "SpikeSlime_L";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(67, 73) : Random.Range(64, 70);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/slimeAltL/skeleton.atlas",
                    "Monsters/theBottom/slimeAltL/skeleton.json", "Monsters/theBottom/slimeAltL/skeleton.png");
            }
        }

        public override string Name => "尖刺史莱姆（大）";

        public SpikeSlime_L_Model(Vector2 pos) : base(pos)
        {
        }
    }
}