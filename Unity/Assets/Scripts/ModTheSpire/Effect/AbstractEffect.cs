using Cysharp.Threading.Tasks;

namespace ModTheSpire.Effect
{
    public abstract class AbstractEffect
    {
        public float Duration { get; set; } = 0;
        public bool IsDone { get; set; } = false;

        public virtual void Update()
        {
        }

        public virtual void Dispose(){}
        public EffectOrder Order { get; set; } = EffectOrder.MID;

        public void Finish()
        {
            this.IsDone = true;
        }
    }
}