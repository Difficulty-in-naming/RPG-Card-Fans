using System;
using System.Collections.Generic;
using System.Linq;
using ModTheSpire.Dungeon;
using UnityEngine;

namespace ModTheSpire.Unit.Monster
{
    public class MonsterGroup{
        public List<AbstractMonster> Monsters;
        public MonsterGroup(List<AbstractMonster> monsters) {
            this.Monsters = monsters;
        }

        public bool AreMonstersBasicallyDead() {
            return GetAliveMonstersCount() == 0;
        }
    
        public int GetAliveMonstersCount(){
            var aliveCount = 0;
            for (var i = 0; i < this.Monsters.Count; i++) {
                var m = this.Monsters[i];
                if(m.IsDying || m.IsEscaping) continue;
                aliveCount++;
            }
            return aliveCount;
        }
    
        public AbstractMonster Random()
        {
            var vaildMonster = this.Monsters.Where(t1 => !t1.IsDying && t1.Intent != Intent.ESCAPE && !t1.IsDeadOrEscaped).ToList();
            var random = Mathf.FloorToInt(DungeonManager.Inst.CurrentDungeon.AIRng.Next(0,vaildMonster.Count));
            return vaildMonster[random];
        }
    
        public int IndexOf(AbstractMonster m)
        {
            return Monsters.FindIndex(t1 => t1 == m);
        }

        public void AddMonster(AbstractMonster m)
        {
            this.Monsters.Add(m);
        }
    }
}