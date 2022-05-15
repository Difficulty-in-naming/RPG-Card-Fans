using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class SlimeBoss_Model : MonsterInfo
    {
        public static string Id = "SlimeBoss";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 9 ? 150 : 140;

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/boss/slime/skeleton.atlas",
                    "Monsters/theBottom/boss/slime/skeleton.json", "Monsters/theBottom/boss/slime/skeleton.png");
            }
        }

        public override string Name => "怪物-史莱姆老大";

        public SlimeBoss_Model(Vector2 pos) : base(pos)
        {
        }
    }
}