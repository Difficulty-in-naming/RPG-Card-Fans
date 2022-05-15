using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class GremlinWizard_Model : MonsterInfo
    {
        public static string Id = "GremlinWizard";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(22, 26) : Random.Range(21, 25);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/wizardGremlin/skeleton.atlas",
                    "Monsters/theBottom/wizardGremlin/skeleton.json", "Monsters/theBottom/wizardGremlin/skeleton.png");
            }
        }

        public override string Name => "地精法师";

        public GremlinWizard_Model(Vector2 pos) : base(pos)
        {
        }
    }
}