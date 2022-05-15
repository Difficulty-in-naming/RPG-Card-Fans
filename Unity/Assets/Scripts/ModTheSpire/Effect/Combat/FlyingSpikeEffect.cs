using ModTheSpire.ModTheSpire_Effect;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class FlyingSpikeEffect : AbstractEffect
    {
        public FairyGUI.GComponent Effect;
        public FlyingSpikeEffect(FairyGUI.GComponent parent,float x,float y,float startingRotation,float endX,float endY,Color color) {
            this.Effect = View_FlyingSpikeEffect.CreateInstance();
            parent.AddChild(this.Effect);
            this.Effect.SetPosition(x,y,0);
            this.Effect.GetChild("n0").asImage.color = color;
            this.Effect.rotation = startingRotation + Random.Range(-5,5);
            var transition = this.Effect.GetTransition("t0");
            transition.SetValue("StartPosition",x,y);
            transition.SetValue("EndPosition",endX,endY);
            this.IsDone = true;
            transition.Play(Finish);
        }

        public override void Dispose()
        {
            base.Dispose();
            Effect.Dispose();
        }
    }
}