using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class Hexaghost_Model : MonsterInfo
    {
        public static string Id = "Hexaghost";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 9 ? 264 : 250;

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/boss/hexaghost/skeleton.atlas",
                    "Monsters/theBottom/boss/hexaghost/skeleton.json", "Monsters/theBottom/boss/hexaghost/skeleton.png");
            }
        }

        public override string Name => "怪物-六火亡魂";

        public Hexaghost_Model(Vector2 pos) : base(pos)
        {
        }
    }
}