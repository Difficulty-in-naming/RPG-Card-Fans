using System.Collections.Generic;
using ModTheSpire.Unit;
using UnityEngine;

namespace ModTheSpire.DataDefine
{
    public class WrapDamage{
        public AbstractCreature Source { get; }
        public float Damage { get; }
        public DamageType? Type { get; }

        public WrapDamage(AbstractCreature source, float damage, DamageType? type = null)
        {
            Source = source;
            Damage = damage;
            Type = type;
        }
    }
    public class DamageModification{
        public WrapDamage Damage;

        public DamageModification(WrapDamage damage) {
            Damage = damage;
        }
    }
    public class DamageInfo
    {
        ///伤害来源单位
        public AbstractCreature Unit { get; }

        ///原始伤害 
        public WrapDamage Origin { get; private set; }
        //伤害修改列表
        public List<DamageModification> Modify = new();
        //伤害类型
        public DamageType Type
        {
            get
            {
                for (int i = this.Modify.Count - 1; i >= 0; i--)
                {
                    var t = this.Modify[i].Damage.Type;
                    if (t.HasValue)
                    {
                        return t.Value;
                    }  
                }
                return DamageType.NORMAL;
            }
        }

        //最终伤害
        public int Total{
            get
            {
                float num = 0;
                foreach (var node in Modify)
                {
                    num += node.Damage.Damage;
                }
                return Mathf.FloorToInt(num);
            }

        }
        public DamageInfo(AbstractCreature unit, float damage, DamageType type = DamageType.NORMAL)
        {
            this.Unit = unit;
            this.Origin = new WrapDamage(unit,damage,type);
            this.Modify.Add(new DamageModification(this.Origin));
        }
    
        public void AddModify(WrapDamage damage)
        {
            this.Modify.Add(new DamageModification(damage));
        }
    }
}