using ModTheSpire.DataDefine;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///计算最终受到伤害
    public class CalcFinalHurtValueMessage: IEventHandle
    {
        public DamageInfo DamageInfo;
        public AbstractCreature Source;
        public AbstractCreature Target;

        public CalcFinalHurtValueMessage(DamageInfo damageInfo, AbstractCreature source, AbstractCreature target)
        {
            DamageInfo = damageInfo;
            Source = source;
            Target = target;
        }
    }
}