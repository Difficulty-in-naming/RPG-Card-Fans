using ModTheSpire.Power;

namespace ModTheSpire.Event.Ids
{
    ///修改能量层数
    public class PowerModifiedAmountMessage
    {
        public AbstractPower Power;
        public int Before;
        public int After;

        public PowerModifiedAmountMessage(AbstractPower power, int before, int after)
        {
            Power = power;
            Before = before;
            After = after;
        }
    }
}