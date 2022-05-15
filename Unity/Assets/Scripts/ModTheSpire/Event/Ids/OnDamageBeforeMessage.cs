using ModTheSpire.DataDefine;
using ModTheSpire.Unit;

namespace ModTheSpire.Event.Ids
{
    ///造成伤害后
    public class OnDamageBeforeMessage : IEventHandle
    {
        public DamageInfo DamageInfo;
        public AbstractCreature Source;
        public AbstractCreature Target;

        public OnDamageBeforeMessage(DamageInfo damageInfo, AbstractCreature source, AbstractCreature target)
        {
            DamageInfo = damageInfo;
            Source = source;
            Target = target;
        }
    }
}