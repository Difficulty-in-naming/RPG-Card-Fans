using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class LouseNormal_Model : MonsterInfo
    {
        public static string Id = "LouseNormal";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(11,16) : Random.Range(10,15);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/louseRed/skeleton.atlas",
                    "Monsters/theBottom/louseRed/skeleton.json", "Monsters/theBottom/louseRed/skeleton.png");
            }
        }

        public override string Name => "普通型虱虫";

        public LouseNormal_Model(Vector2 pos) : base(pos)
        {
        }
    }
}