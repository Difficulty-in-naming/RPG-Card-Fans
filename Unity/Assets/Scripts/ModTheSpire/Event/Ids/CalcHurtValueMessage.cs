using ModTheSpire.DataDefine;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///计算受到伤害
    public class CalcHurtValueMessage: IEventHandle
    {
        public DamageInfo DamageInfo;
        public AbstractCreature Source;
        public AbstractCreature Target;

        public CalcHurtValueMessage(DamageInfo damageInfo, AbstractCreature source, AbstractCreature target)
        {
            DamageInfo = damageInfo;
            Source = source;
            Target = target;
        }
    }
}