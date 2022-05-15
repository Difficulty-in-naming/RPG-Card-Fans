using ModTheSpire.Dungeon;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class AcidSlime_M_Model : MonsterInfo
    {
        public static string Id = "AcidSlime_M";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(29, 34) : Random.Range(28, 32);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/slimeM/skeleton.atlas",
                    "Monsters/theBottom/slimeM/skeleton.json", "Monsters/theBottom/slimeM/skeleton.png");
            }
        }

        public override string Name => "酸液史莱姆（中）";

        public AcidSlime_M_Model(Vector2 pos) : base(pos)
        {
        }
    }
}