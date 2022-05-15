using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class FungiBeast_Model : MonsterInfo
    {
        public static string Id = "FungiBeast";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(24, 28) : Random.Range(22,28);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/fungi/skeleton.atlas",
                    "Monsters/theBottom/fungi/skeleton.json", "Monsters/theBottom/fungi/skeleton.png");
            }
        }

        public override string Name => "真菌兽";

        public FungiBeast_Model(Vector2 pos) : base(pos)
        {
        }
    }
}