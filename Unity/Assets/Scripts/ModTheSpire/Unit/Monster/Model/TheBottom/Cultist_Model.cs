using System.Collections.Generic;
using ModTheSpire.Dungeon;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.Model.TheBottom
{
    public class Cultist_Model : MonsterInfo
    {
        public static string Id = "Cultist";
        private ILoader loader;

        public override int MaxHealth => DungeonManager.Inst.AdvanceLevel >= 7 ? Random.Range(50,56) : Random.Range(48,54);

        public override ILoader Loader
        {
            get
            {
                return this.loader ??= new SpineLoader("Monsters/theBottom/cultist/skeleton.atlas",
                    "Monsters/theBottom/cultist/skeleton.json", "Monsters/theBottom/cultist/skeleton.png");
            }
        }

        public override string Name => "异教徒";

        public Cultist_Model(Vector2 pos) : base(pos)
        {
        }
    }
}