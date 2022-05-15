using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class LouseDefensive_Model : MonsterInfo
    {
        public static string Id = "LouseDefensive";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(12,18) : Random.Range(11,17);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/louseGreen/skeleton.atlas",
                    "Monsters/theBottom/louseGreen/skeleton.json", "Monsters/theBottom/louseGreen/skeleton.png");
            }
        }

        public override string Name => "防御型虱虫";

        public LouseDefensive_Model(Vector2 pos) : base(pos)
        {
        }
    }
}