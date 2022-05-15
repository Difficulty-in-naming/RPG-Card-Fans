using ModTheSpire.DataDefine;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///受到伤害前
    public class OnHurtAfterMessage : IEventHandle
    {
        public DamageInfo DamageInfo;
        public AbstractCreature Target;

        public OnHurtAfterMessage(DamageInfo damageInfo, AbstractCreature target)
        {
            DamageInfo = damageInfo;
            Target = target;
        }
    }
}