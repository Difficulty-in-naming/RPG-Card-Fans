using System.Collections.Generic;
using ModTheSpire.Power;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit.Monster
{
    public abstract class MonsterInfo
    {
        public abstract ILoader Loader { get; }
        public  abstract int MaxHealth { get; }
        public abstract string Name { get; }
    
        public readonly List<AbstractPower> InitPower = new List<AbstractPower>();
        public Vector2 Pos;
        public MonsterInfo(Vector2 pos)
        {
            Pos = pos;
        }

        public override string ToString()
        {
            return this.Name;
        }
    }
}