using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class AcidSlime_L_Model : MonsterInfo
    {
        public static string Id = "AcidSlime_L";
        private ILoader loader;
        //List<AbstractPower> InitPower => new List<AbstractPower>(new SplitPower());

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(68, 72) : Random.Range(65, 69);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/slimeL/skeleton.atlas",
                    "Monsters/theBottom/slimeL/skeleton.json", "Monsters/theBottom/slimeL/skeleton.png");
            }
        }

        public override string Name => "酸液史莱姆（大）";

        public AcidSlime_L_Model(Vector2 pos) : base(pos)
        {
        }
    }
}