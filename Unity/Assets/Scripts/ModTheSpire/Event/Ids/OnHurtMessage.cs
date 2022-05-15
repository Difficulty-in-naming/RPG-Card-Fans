using ModTheSpire.DataDefine;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///受到伤害时
    public class OnHurtMessage : IEventHandle
    {
        public DamageInfo DamageInfo;
        public AbstractCreature Target;

        public OnHurtMessage(DamageInfo damageInfo, AbstractCreature target)
        {
            DamageInfo = damageInfo;
            Target = target;
        }
    }
}