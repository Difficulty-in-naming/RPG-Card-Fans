using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class TheGuardian_Model : MonsterInfo
    {
        public static string Id = "SpikeSlime_S";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 9 ? 250 : 240;

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/boss/guardian/skeleton.atlas",
                    "Monsters/theBottom/boss/guardian/skeleton.json", "Monsters/theBottom/boss/guardian/skeleton.png");
            }
        }

        public override string Name => "怪物-守护者";

        public TheGuardian_Model(Vector2 pos) : base(pos)
        {
        }
    }
}