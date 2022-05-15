using ModTheSpire.DataDefine;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///计算最终伤害
    public class CalcFinalDamageValueMessage : IEventHandle
    {
        public DamageInfo DamageInfo;
        public AbstractCreature Source;
        public AbstractCreature Target;

        public CalcFinalDamageValueMessage(DamageInfo damageInfo, AbstractCreature source, AbstractCreature target)
        {
            DamageInfo = damageInfo;
            Source = source;
            Target = target;
        }
    }
}