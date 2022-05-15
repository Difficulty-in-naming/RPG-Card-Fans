using ModTheSpire.DataDefine;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///受到伤害后
    public class OnHurtBeforeMessage : IEventHandle
    {
        public DamageInfo DamageInfo;
        public AbstractCreature Target;

        public OnHurtBeforeMessage(DamageInfo damageInfo, AbstractCreature target)
        {
            DamageInfo = damageInfo;
            Target = target;
        }
    }
}