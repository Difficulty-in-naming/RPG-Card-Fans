using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class BlueSlaver_Model : MonsterInfo
    {
        public static string Id = "BlueSlaver";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(48, 52) : Random.Range(46, 50);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/blueSlaver/skeleton.atlas",
                    "Monsters/theBottom/blueSlaver/skeleton.json", "Monsters/theBottom/blueSlaver/skeleton.png");
            }
        }

        public override string Name => "蓝色奴隶贩子";

        public BlueSlaver_Model(Vector2 pos) : base(pos)
        {
        }
    }
}