using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class Lagavulin_Model : MonsterInfo
    {
        public static string Id = "Lagavulin";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(112, 115) : Random.Range(109,111);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/lagavulin/skeleton.atlas",
                    "Monsters/theBottom/lagavulin/skeleton.json", "Monsters/theBottom/lagavulin/skeleton.png");
            }
        }

        public override string Name => "乐加维林";

        public Lagavulin_Model(Vector2 pos) : base(pos)
        {
        }
    }
}