using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class JawWorm_Model : MonsterInfo
    {
        public static string Id = "JawWorm";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(42,46) : Random.Range(40,44);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/jawWorm/skeleton.atlas",
                    "Monsters/theBottom/jawWorm/skeleton.json", "Monsters/theBottom/jawWorm/skeleton.png");
            }
        }

        public override string Name => "大颚虫";

        public JawWorm_Model(Vector2 pos) : base(pos)
        {
        }
    }
}