using ModTheSpire.DataDefine;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///造成伤害前
    public class OnDamageAfterMessage : IEventHandle
    {
        public DamageInfo DamageInfo;
        public AbstractCreature Source;
        public AbstractCreature Target;

        public OnDamageAfterMessage(DamageInfo damageInfo, AbstractCreature source, AbstractCreature target)
        {
            DamageInfo = damageInfo;
            Source = source;
            Target = target;
        }
    }
}