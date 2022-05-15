using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class RedSlaver_Model : MonsterInfo
    {
        public static string Id = "RedSlaver";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(48, 52) : Random.Range(46,50);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/redSlaver/skeleton.atlas",
                    "Monsters/theBottom/redSlaver/skeleton.json", "Monsters/theBottom/redSlaver/skeleton.png");
            }
        }

        public override string Name => "奴隶贩子";

        public RedSlaver_Model(Vector2 pos) : base(pos)
        {
        }
    }
}